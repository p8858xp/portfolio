import java.io.*;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

public class Main {

	public static void main(String[] args) {
		File fileName;
		if (args.length < 1){
			System.err.println("Missing arguments");
		}
		fileName = new File(args[0]);
		
		if (!fileName.canRead()) {
			System.err.printf("Error: cannot read from file %s\n.",
					fileName.getAbsolutePath());
			System.exit(0);
		}
		
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
		int num_tasks;
		int num_resource_types;
		ArrayList<ArrayList<String>> instructions = new ArrayList<ArrayList<String>>();
		ArrayList<ArrayList<String>> copy = new ArrayList<ArrayList<String>>();
		
		int counter = 0;
		num_tasks = Integer.parseInt(inputList.get(counter));
		counter++;
		num_resource_types = Integer.parseInt(inputList.get(counter));
		int[] resource_units = new int[num_resource_types];
		counter++;
		for(int i = 0; i < num_resource_types; i++){
			resource_units[i] = Integer.parseInt(inputList.get(counter));
			counter++;
		}
		for(int i = 0; i < num_tasks; i++){
			instructions.add(new ArrayList<String>());
			copy.add(new ArrayList<String>());
		}
		ArrayList<String> insts = null;
		while(counter < inputList.size()){
			String instruction = "";
			String activity_type = inputList.get(counter) + " ";
			counter++;
			int first = Integer.parseInt(inputList.get(counter));
			counter++;
			int second = Integer.parseInt(inputList.get(counter));
			counter++;
			int third = Integer.parseInt(inputList.get(counter));
			counter++;
			instruction += activity_type + first + " " + second + " " + third;
			instructions.get(first-1).add(instruction);
			copy.get(first-1).add(instruction);
		}
		
		FIFO fifo = new FIFO(instructions, num_tasks, num_resource_types, resource_units);
		Banker banker = new Banker(copy,num_tasks,num_resource_types,resource_units);
		
		// OUTPUTS
		System.out.println("\t\tFIFO");
		float total_time_taken = 0;
		float total_waiting_time = 0;
		float waiting;
		for(int i = 0; i <num_tasks; i++){
			waiting = fifo.getWaiting(i);
			// if the task never reached termination point then it must have been aborted in the process
			if(fifo.getCycle(i) == 0){
				System.out.println("\tTask " + (i+1) + "      aborted        ");
			}
			// otherwise the task was never aborted so it did indeed terminate at some point
			else{
				total_time_taken += fifo.getCycle(i);
				total_waiting_time += waiting;
				float waiting_percentage = 100*(waiting / fifo.getCycle(i));
				System.out.println("\tTask " + (i+1) + "      " + fifo.getCycle(i) + "   " + fifo.getWaiting(i) + "   " + String.format("%.0f", waiting_percentage) + "%");
			}
		}
		float total_waiting_percentage = 100*(total_waiting_time/total_time_taken);
		System.out.println("\ttotal       " + String.format("%.0f",total_time_taken) + "   " + String.format("%.0f",total_waiting_time) + "   " + String.format("%.0f", total_waiting_percentage) + "%");
		System.out.println("\n            BANKER'S");
		float total_time_taken_banker = 0;
		float total_waiting_time_banker = 0;
		for(int i = 0; i<num_tasks; i++){
			if(banker.getCycle(i) != 0){
				total_time_taken_banker += banker.getCycle(i);
				total_waiting_time_banker += banker.getWaiting(i);
			}
			waiting = banker.getWaiting(i);
			if(banker.getCycle(i) == 0){
				String aborted = "aborted   ";
				System.out.println("\tTask " + (i+1) + "      " + aborted + "        ");
			}
			else{
				float waiting_percentage_banker = 100*(waiting / banker.getCycle(i));
				System.out.println("\tTask " + (i+1) + "      " + banker.getCycle(i) + "   " + banker.getWaiting(i) + "   " + String.format("%.0f", waiting_percentage_banker) + "%");
			}
		}
		float total_waiting_percentage_banker = 100*(total_waiting_time_banker/total_time_taken_banker);
		System.out.println("\ttotal       " + String.format("%.0f",total_time_taken_banker) + "   " + String.format("%.0f",total_waiting_time_banker) + "   " + String.format("%.0f", total_waiting_percentage_banker) + "%");
	}
}
