import java.io.*;
import java.util.ArrayList;
import java.util.Scanner;
public class Scheduler {
	public static ArrayList<Process> arr = new ArrayList<Process>();
	public static int numOfProcesses;
	public static ArrayList<Integer> randList = new ArrayList<Integer>();
	public static Scanner random;
	
	public static void main(String[] args) throws FileNotFoundException {		
		if (args.length == 1){
			File fileName = new File(args[0]);
			random = new Scanner(new FileReader("random.txt"));
			Scanner dataInput = null;
			try {
				dataInput = new Scanner(fileName);
			}
			catch (FileNotFoundException e) {
				System.err.printf("Error: cannot open file %s for reading\n.",
						fileName.getAbsolutePath());
				System.exit(0);
			}
			
			ArrayList<String> inputList = new ArrayList<String>();
			while(dataInput.hasNext()){
				inputList.add(dataInput.next());
			}
			numOfProcesses = Integer.parseInt(inputList.get(0));
			for(int i = 1; i < inputList.size(); i+=4){
				Process pro = new Process(Integer.parseInt(inputList.get(i)),Integer.parseInt(inputList.get(i+1)),Integer.parseInt(inputList.get(i+2)), Integer.parseInt(inputList.get(i+3)));
				arr.add(pro);
			}
			Scheduler scheduler = new Scheduler();
			FCFS fcfs = new FCFS(numOfProcesses, arr, 1, random);
			System.out.println(fcfs);
			random = new Scanner(new FileReader("random.txt"));
			scheduler.reset(arr);
			RR rr = new RR(numOfProcesses, arr, 1, random);
			System.out.println(rr);
			random = new Scanner(new FileReader("random.txt"));
			scheduler.reset(arr);
			SJF sjf = new SJF(numOfProcesses,arr, 1, random);
			System.out.println(sjf);
			random = new Scanner(new FileReader("random.txt"));
			scheduler.reset(arr);
			HPRN hprn = new HPRN(numOfProcesses,arr, 1, random);
			System.out.println(hprn);
		}
		if (args.length == 2){
			File fileName = new File(args[1]);
			random = new Scanner(new FileReader("random.txt"));
			Scanner dataInput = null;
			try {
				dataInput = new Scanner(fileName);
			}
			catch (FileNotFoundException e) {
				System.err.printf("Error: cannot open file %s for reading\n.",
						fileName.getAbsolutePath());
				System.exit(0);
			}
			
			ArrayList<String> inputList = new ArrayList<String>();
			while(dataInput.hasNext()){
				inputList.add(dataInput.next());
			}
			int numOfProcesses = Integer.parseInt(inputList.get(0));
			ArrayList<Process> arr = new ArrayList<Process>();
			for(int i = 1; i < inputList.size(); i+=4){
				Process pro = new Process(Integer.parseInt(inputList.get(i)),Integer.parseInt(inputList.get(i+1)),Integer.parseInt(inputList.get(i+2)), Integer.parseInt(inputList.get(i+3)));
				arr.add(pro);
			}
			if (args[0].equals("--verbose")){
				Scheduler scheduler = new Scheduler();
				FCFS fcfs_detailed = new FCFS(numOfProcesses, arr, 2, random);
				System.out.println(fcfs_detailed);
				random = new Scanner(new FileReader("random.txt"));
				scheduler.reset(arr);
				RR rr_detailed = new RR(numOfProcesses, arr, 2, random);
				System.out.println(rr_detailed);
				random = new Scanner(new FileReader("random.txt"));
				scheduler.reset(arr);
				SJF sjf_detailed = new SJF(numOfProcesses,arr, 2, random);
				System.out.println(sjf_detailed);
				random = new Scanner(new FileReader("random.txt"));
				scheduler.reset(arr);
				HPRN hprn_detailed = new HPRN(numOfProcesses,arr ,2, random);
				System.out.println(hprn_detailed);
				
			}
		}
	}
	// methods
	
	public static void reset(ArrayList<Process> processes){
		for (Process process: processes){
			process.reset();
		}
	}
	
}
