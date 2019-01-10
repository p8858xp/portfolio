import java.io.FileNotFoundException;
import java.io.FileReader;
import java.util.*;

public class Manager {
	static ArrayList<Process> process_list = new ArrayList<Process>();
	static ArrayList<Page> frame_list = new ArrayList<Page>();
	static int machine_size;
	static int page_size;
	static int process_size;
	static int job_mix;
	static int num_refs;
	static String algo;
	static Scanner random;
	static int quantum = 3;
	static int total_evictions = 0;
	static int total_faults = 0;
	static double total_residency = 0;
	public static void main(String[] args) throws FileNotFoundException {
		if (args.length != 6){
			System.err.println("Please enter correct amount of arguments.");
		}
		machine_size = Integer.parseInt(args[0]);
		page_size = Integer.parseInt(args[1]);
		process_size = Integer.parseInt(args[2]);
		job_mix = Integer.parseInt(args[3]);
		num_refs = Integer.parseInt(args[4]);
		algo = args[5];
		random = new Scanner(new FileReader("random.txt"));
		
		int list_length = machine_size / page_size;
		switch(job_mix){
		case 1:
			Process p = new Process(1,1, 0, 0);
			p.setWord((111*p.id) % process_size);
			p.setRef(num_refs);
			p.setSize(process_size);
			for (int i = 0; i < process_size/page_size; i++){
				p.pages.add(new Page(i, 1));
			}
			process_list.add(p);
			break;
		case 2:
			for (int i = 1; i <= 4; i++){
				p = new Process(i, 1, 0, 0);
				p.setWord((111*p.id) % process_size);
				p.setRef(num_refs);
				p.setSize(process_size);
				for (int j = 0; j < process_size/page_size; j++){
					p.pages.add(new Page(j, i));
				}
				process_list.add(p);
			}
			break;
		case 3: 
			for (int i = 1; i <= 4; i++){
				p = new Process(i, 0, 0, 0);
				p.setWord((111*p.id) % process_size);
				p.setRef(num_refs);
				p.setSize(process_size);
				for (int j = 0; j < process_size/page_size; j++){
					p.pages.add(new Page(j, i));
				}
				process_list.add(p);
			}
			break;
		case 4:
			p = new Process(1, 0.75, 0.25, 0);
			p.setWord((111*p.id) % process_size);
			p.setRef(num_refs);
			p.setSize(process_size);
			for (int i = 0; i < process_size/page_size; i++){
				p.pages.add(new Page(i, 1));
			}
			process_list.add(p);
			p = new Process(2, 0.75, 0, 0.25);
			p.setWord((111*p.id) % process_size);
			p.setRef(num_refs);
			p.setSize(process_size);
			for (int i = 0; i < process_size/page_size; i++){
				p.pages.add(new Page(i, 2));
			}
			process_list.add(p);
			p = new Process(3, 0.75, 0.125, 0.125);
			p.setWord((111*p.id) % process_size);
			p.setRef(num_refs);
			p.setSize(process_size);
			for (int i = 0; i < process_size/page_size; i++){
				p.pages.add(new Page(i, 3));
			}
			process_list.add(p);
			p = new Process(4, 0.50, 0.125, 0.125);
			p.setWord((111*p.id) % process_size);
			p.setRef(num_refs);
			p.setSize(process_size);
			for (int i = 0; i < process_size/page_size; i++){
				p.pages.add(new Page(i, 4));
			}
			process_list.add(p);
		}
		for (int i = 0; i < list_length; i++){
			frame_list.add(new Page(-1,-1));
		}
		
		int time=0;
		while (!isFinished()){
			for (int i = 0; i < process_list.size(); i++){
				for (int ref = 0; ref < quantum; ref++){
					time++;
					int page_index = process_list.get(i).word / page_size;
					Page page_to_load = process_list.get(i).pages.get(page_index);
					page_to_load.set_last_accessed(time);
					if (frame_list.contains(page_to_load)){
						process_list.get(i).setWord(getNextWord(process_list.get(i), random.nextInt()));
						process_list.get(i).setRef(process_list.get(i).getRef() - 1);
						if (process_list.get(i).getRef() == 0) {
							process_list.get(i).finished = true;
							break;
						}
					}
					else {
						if (is_filled(frame_list)){
							process_list.get(i).num_fault++;
							// do replacement algorithm
							if (algo.equals("lru")){ // least recently used algorithm
								// find which page in the frame table is lru
								Page lru = get_lru(frame_list);
								process_list.get(lru.process_ID - 1).residency_time += time - lru.loaded;
								int index_removed = frame_list.indexOf(lru);
								process_list.get(lru.process_ID - 1).num_evict++;
								// remove the lru from the table and replace it with the page_to_load
								frame_list.set(index_removed, page_to_load);
								// get next reference
								process_list.get(i).setWord(getNextWord(process_list.get(i), random.nextInt()));
								process_list.get(i).setRef(process_list.get(i).getRef() - 1);
								if (process_list.get(i).getRef() == 0) {
									page_to_load.set_loaded(time);
									process_list.get(i).finished = true;
									break;
								}
								else {
									page_to_load.set_loaded(time);
								}
							}
							else if (algo.equals("lifo")){
								// find which page in the frame table is lifo
								Page lifo = get_lifo(frame_list);
								process_list.get(lifo.process_ID - 1).residency_time += time - lifo.loaded;
								int index_removed = frame_list.indexOf(lifo);
								process_list.get(lifo.process_ID - 1).num_evict++;
								// remove the lifo from the table and replace it with the page_to_load 
								// and don't forget to update the page properties like page_ID, process_ID, etc.
								frame_list.set(index_removed, page_to_load);
								// get next reference
								process_list.get(i).setWord(getNextWord(process_list.get(i), random.nextInt()));
								process_list.get(i).setRef(process_list.get(i).getRef() - 1);
								if (process_list.get(i).getRef() == 0) {
									page_to_load.set_loaded(time);
									process_list.get(i).finished = true;
									break;
								}
								else {
									page_to_load.set_loaded(time);
								}
							}
							else if (algo.equals("random")){
								// find which page in the frame table is random
								int index_removed = random.nextInt() % frame_list.size();
								Page rand = frame_list.get(index_removed);
								process_list.get(rand.process_ID - 1).residency_time += time - rand.loaded;
								process_list.get(rand.process_ID - 1).num_evict++;
								frame_list.set(index_removed, page_to_load);
								process_list.get(i).setWord(getNextWord(process_list.get(i), random.nextInt()));
								process_list.get(i).setRef(process_list.get(i).getRef() - 1);
								if (process_list.get(i).getRef() == 0) {
									page_to_load.set_loaded(time);
									process_list.get(i).finished = true;
									break;
								}
								else {
									page_to_load.set_loaded(time);
								}
							}
						}
						else {
							page_to_load.set_loaded(time);
							process_list.get(i).num_fault++;
							int index_to_insert = get_highestframe(frame_list);
							frame_list.set(index_to_insert, page_to_load);
							process_list.get(i).setWord(getNextWord(process_list.get(i), random.nextInt()));
							process_list.get(i).setRef(process_list.get(i).getRef() - 1);
							if (process_list.get(i).getRef() == 0) {
								process_list.get(i).finished = true;
								break;
							}
						}
					}
				}
			}
		}
		System.out.println("The machine size is " + machine_size + ".");
		System.out.println("The page size is " + page_size + ".");
		System.out.println("The process size is " + process_size + ".");
		System.out.println("The job mix number is " + job_mix + ".");
		System.out.println("The number of references per process is " + num_refs + ".");
		System.out.println("The replacement algorithm is " + algo + "."+"\n");
		for (int i = 1; i <= process_list.size(); i++){
			total_faults += process_list.get(i-1).num_fault;
			System.out.print("Process " + i + " had " + process_list.get(i-1).num_fault + " faults");
			if (process_list.get(i-1).num_evict == 0){
				System.out.println(".\n\tWith no evictions, the average residence is undefined.");
			}
			else {
				System.out.println(" and " + process_list.get(i-1).residency_time / process_list.get(i-1).num_evict + " average residency.");
				total_evictions += process_list.get(i-1).num_evict;
				total_residency += process_list.get(i-1).residency_time;
			}
		}
		System.out.print("\nThe total number of faults is " + total_faults);
		if (total_evictions == 0){
			System.out.println(".\n\tWith no evictions, the overall average residence is undefined.");
		}
		else{
			System.out.println(" and the overall average residency is " + total_residency / total_evictions + ".");
		}
	}
	// get next word reference function
	public static int getNextWord(Process p, int r){
		double y = r / (Integer.MAX_VALUE + 1d);
		// case 1
		if(y < p.getA()){
			return (p.word + 1) % process_size;
		}
		// case 2
		else if(y < p.getA() + p.getB()){
			return (p.word - 5 + process_size) % process_size;
		}
		//case 3
		else if(y < p.getA() + p.getB() + p.getC()){
			return (p.word + 4) % process_size;
		}
		// case 4
		else {
			return (random.nextInt()) % process_size;
		}
	}
	// checks if all processes are finished running
	public static boolean isFinished(){
		for(int i = 0; i < process_list.size(); i++){
			if(!process_list.get(i).finished){
				return false;
			}
		}
		return true;
	}
	// function for getting index of highest numbered free frame
	public static int get_highestframe(ArrayList<Page> arr){
		int highest = arr.size()-1;
		for (int i = arr.size()-1; i >= 0; i--){
			if (arr.get(i).page_ID == -1 && arr.get(i).process_ID == -1){
				break;
			}
			else { 
				if (highest != 0) {
					highest--;
				}
			}
		}
		return highest;
	}
	// function for checking if all frames are filled
	public static boolean is_filled(ArrayList<Page> arr){
		boolean filled = false;
		int counter = 0;
		for (int i = arr.size()-1; i >= 0; i--){
			if (arr.get(i).page_ID != -1 && arr.get(i).process_ID != -1){
				counter++;
			}
		}
		if (counter == arr.size()){
			filled = true;
		}
		return filled;
	}
	// function for finding which page has lowest hit time (LRU)
	public static Page get_lru(ArrayList<Page> arr){
		Page lowest = arr.get(arr.size()-1);
		for (int i = arr.size()-1; i >= 0; i--){
			if (arr.get(i).last_accessed < lowest.last_accessed){
				lowest = arr.get(i);
			}
		}
		return lowest;
	}
	public static Page get_lifo(ArrayList<Page> arr){
		Page last = arr.get(arr.size() - 1);
		for (int i = arr.size()-1; i >= 0; i--){
			if (arr.get(i).loaded > last.loaded){
				last = arr.get(i);
			}
		}
		return last;
	}
	
}
