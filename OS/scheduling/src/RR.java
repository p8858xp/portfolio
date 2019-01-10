import java.util.ArrayList;
import java.util.Collections;
import java.util.Scanner;

public class RR{
	int numOfProcesses;
	ArrayList<Process> processes;
	int output_option;
	static ArrayList<Process> sorted_processes = new ArrayList<Process>();
	Scanner rand;
	static int cycle_counter;
	static float cycle_blocked;
	static int QUANTUM = 2;
	
	public RR(int numOfProcesses, ArrayList<Process> processes, int output_option, Scanner rand){
		this.numOfProcesses = numOfProcesses;
		this.processes = processes;
		this.output_option = output_option;
		this.rand = rand;
	}
	
	public static String Verbosity(int numprocesses, int cycle){
		String output = "";
		output += "Before cycle ";
		output += String.format("%4d:", cycle);
		for(int i = 0; i < numprocesses; i++){
			output += String.format("%13s", sorted_processes.get(i).getState());
			output += String.format("%4d", sorted_processes.get(i).getRemaining());
			output += ".";
		}
		output += "\n";
		return output;
	}
	
	public String toString(){
		String output = "";
		output += "The original input was: " + this.numOfProcesses;
		for (int i = 0; i < this.processes.size(); i++){
			output += 	" (" + processes.get(i).get_arrivalTime() + " " + processes.get(i).get_burstTime() + " " + processes.get(i).get_cpuTime() + " " + processes.get(i).get_io_mulitplier() + ")";
		}
		output += "\nThe (sorted) input is:  " + this.numOfProcesses;
		
		Collections.sort(this.processes);
		
		for(int i = 0; i < processes.size(); i++){
			sorted_processes.add(processes.get(i));
		}
		for (int i = 0; i < sorted_processes.size(); i++){
			output += " " + sorted_processes.get(i);
		}
		output += "\n\n";
		if (output_option == 1){ // print out the simpler results
			ArrayList<Process> queue = new ArrayList<Process>();
			ArrayList<Process> blockedList = new ArrayList<Process>();
			cycle_blocked = 0;
			cycle_counter = 0;
			int terminated = 0;
			int rand_burst_time;
			Process current_process = null;
			int rr_index = 0;
			while (terminated != sorted_processes.size()){
				if (blockedList.size() > 0){
					cycle_blocked++;
				}
				for(int i = 0; i < sorted_processes.size(); i++){
					if (sorted_processes.get(i).get_arrivalTime() == cycle_counter) {
						queue.add(sorted_processes.get(i));
						sorted_processes.get(i).setState("ready");
						if (i > 0){
							sorted_processes.get(i).incrementWaiting();
							sorted_processes.get(i).setWaitingTime(0);
						}
						sorted_processes.get(i).setRemaining(0);
					}			
				}	
				int terminate_first = -1;
				ArrayList<Process> readyToRun = new ArrayList<Process>();
				for (int i = 0; i < queue.size(); i++){
					if (queue.get(i).getCurrentCPUTime() >= queue.get(i).get_cpuTime()){
						terminated++;
						queue.get(i).setFinishingTime(cycle_counter);
						queue.get(i).setState("terminated");
						queue.get(i).setRemaining(0);
						terminate_first = i;
						continue;
					}
					if (queue.get(i).getState().equals("running")){
						if (queue.get(i).getRemaining() == 1){
							if (queue.get(i).getCurrentCPUBurst() != 0){
								queue.get(i).setState("ready");
								queue.get(i).setRemaining(0);
								readyToRun.add(queue.get(i));
								rr_index++;
							}
							else{
								queue.get(i).setState("blocked");
								blockedList.add(queue.get(i));
								queue.get(i).setRemaining(queue.get(i).getBlockedTime());
								queue.get(i).incrementBlocked();
							}
						}
						else {
							current_process = queue.get(i);					
						}
					}
					else if (queue.get(i).getState().equals("ready")){
						readyToRun.add(queue.get(i));
						queue.get(i).setWaitingTime(queue.get(i).getWaitingTime() + 1);
					}
					else if (queue.get(i).getState().equals("blocked")){
						if (queue.get(i).getRemaining() == 1){
							blockedList.remove(queue.get(i));
							readyToRun.add(queue.get(i));
							queue.get(i).setState("ready");
							queue.get(i).setRemaining(0);
							queue.get(i).setWaitingTime(1);
						}
						else {
							queue.get(i).incrementBlocked();
							queue.get(i).setRemaining(queue.get(i).getRemaining() - 1);
						}
					}
				}
				if (current_process == null && !readyToRun.isEmpty()){
					for (int i = 0; i < sorted_processes.size(); i++){
						if (sorted_processes.get(rr_index % sorted_processes.size()).getState().equals("ready")){
							current_process = sorted_processes.get(rr_index % sorted_processes.size());
							break;
						}
						rr_index++;
					}
				}
				if (current_process != null){
					for (int i = 0; i < readyToRun.size(); i++){
						if (current_process != readyToRun.get(i)){
							readyToRun.get(i).incrementTotalWaiting();
						}
					}
				}
				if (terminate_first >= 0){
					queue.remove(terminate_first);
				}
				if (current_process != null){
					// run it	
					if (current_process.getState().equals("running")){
						current_process.setRemaining(current_process.getRemaining() - 1);	
						current_process.setCurrentCPUBurst(current_process.getCurrentCPUBurst() - 1);
					}
					else if (current_process.getRemaining() == 0){
						// only get a new random number if the current process has no cpu burst leftover
						if (current_process.getCurrentCPUBurst() == 0){
							rand_burst_time = current_process.randomOS(current_process.get_burstTime(), rand);
							current_process.setRunningTime(rand_burst_time);
							current_process.setBlockedTime();
							// if this running time is greater than or equal to the quantum time then just run for 2
							current_process.setCurrentCPUBurst(rand_burst_time - 1);
							current_process.setRemaining(Math.min(rand_burst_time, QUANTUM));
							current_process.setState("running");
						}
						// what if cpu burst is not 0? Then check its leftover burst and if that leftover is greater than quantum or equal to, 
						// then just set the current burst to (leftover - 2)
						// if the leftover is less than quantum then just run it for that leftover amount
						else {
							current_process.setRemaining(Math.min(current_process.getCurrentCPUBurst(), QUANTUM));
							current_process.setCurrentCPUBurst(current_process.getCurrentCPUBurst() - 1);
							current_process.setState("running");
						}
					}
					current_process.increment_current_CPU_Time();
					if (current_process.getRemaining() == 1 || current_process.getCurrentCPUTime() >= current_process.get_cpuTime()){
						current_process = null;
					}
				}	
				cycle_counter++;
			}
		}
		
		
		
		if (output_option == 2){
			output += "This detailed printout gives the state and remaining burst for each process\n\n";
			ArrayList<Process> queue = new ArrayList<Process>();
			ArrayList<Process> blockedList = new ArrayList<Process>();
			cycle_blocked = 0;
			cycle_counter = 0;
			int terminated = 0;
			Process current_process = null;
			int rr_index = 0;
			int rand_burst_time;
			while (terminated != sorted_processes.size()){
				String detailed = Verbosity(sorted_processes.size(), cycle_counter);
				output += detailed;
				if (blockedList.size() > 0){
					cycle_blocked++;
				}
				for(int i = 0; i < sorted_processes.size(); i++){
					if (sorted_processes.get(i).get_arrivalTime() == cycle_counter) {
						queue.add(sorted_processes.get(i));
						sorted_processes.get(i).setState("ready");
						if (i > 0){
							sorted_processes.get(i).incrementWaiting();
							sorted_processes.get(i).setWaitingTime(0);
						}
						sorted_processes.get(i).setRemaining(0);
					}			
				}	
				int terminate_first = -1;
				ArrayList<Process> readyToRun = new ArrayList<Process>();
				for (int i = 0; i < queue.size(); i++){
					if (queue.get(i).getCurrentCPUTime() >= queue.get(i).get_cpuTime()){
						terminated++;
						queue.get(i).setFinishingTime(cycle_counter);
						queue.get(i).setState("terminated");
						queue.get(i).setRemaining(0);
						terminate_first = i;
						continue;
					}
					if (queue.get(i).getState().equals("running")){
						if (queue.get(i).getRemaining() == 1){
							if (queue.get(i).getCurrentCPUBurst() != 0){
								queue.get(i).setState("ready");
								queue.get(i).setRemaining(0);
								readyToRun.add(queue.get(i));
								rr_index++;
							}
							else{
								queue.get(i).setState("blocked");
								blockedList.add(queue.get(i));
								queue.get(i).setRemaining(queue.get(i).getBlockedTime());
								queue.get(i).incrementBlocked();
							}
						}
						else {
							current_process = queue.get(i);					
						}
					}
					else if (queue.get(i).getState().equals("ready")){
						readyToRun.add(queue.get(i));
						queue.get(i).setWaitingTime(queue.get(i).getWaitingTime() + 1);
					}
					else if (queue.get(i).getState().equals("blocked")){
						if (queue.get(i).getRemaining() == 1){
							blockedList.remove(queue.get(i));
							readyToRun.add(queue.get(i));
							queue.get(i).setState("ready");
							queue.get(i).setRemaining(0);
							queue.get(i).setWaitingTime(1);
						}
						else {
							queue.get(i).incrementBlocked();
							queue.get(i).setRemaining(queue.get(i).getRemaining() - 1);
						}
					}
				}
				if (current_process == null && !readyToRun.isEmpty()){
					for (int i = 0; i < sorted_processes.size(); i++){
						if (sorted_processes.get(rr_index % sorted_processes.size()).getState().equals("ready")){
							current_process = sorted_processes.get(rr_index % sorted_processes.size());
							break;
						}
						rr_index++;
					}
					for (int i = 0; i < readyToRun.size(); i++){
						if (current_process != readyToRun.get(i)){
							readyToRun.get(i).incrementTotalWaiting();
						}
					}
				}
				if (terminate_first >= 0){
					queue.remove(terminate_first);
				}
				if (current_process != null){
					// run it	
					if (current_process.getState().equals("running")){
						current_process.setRemaining(current_process.getRemaining() - 1);	
						current_process.setCurrentCPUBurst(current_process.getCurrentCPUBurst() - 1);
					}
					else if (current_process.getRemaining() == 0){
						// only get a new random number if the current process has no cpu burst leftover
						if (current_process.getCurrentCPUBurst() == 0){
							rand_burst_time = current_process.randomOS(current_process.get_burstTime(), rand);
							current_process.setRunningTime(rand_burst_time);
							current_process.setBlockedTime();
							// if this running time is greater than or equal to the quantum time then just run for 2
							current_process.setCurrentCPUBurst(rand_burst_time - 1);
							current_process.setRemaining(Math.min(rand_burst_time, QUANTUM));
							current_process.setState("running");
						}
						// what if cpu burst is not 0? Then check its leftover burst and if that leftover is greater than quantum or equal to, 
						// then just set the current burst to (leftover - 2)
						// if the leftover is less than quantum then just run it for that leftover amount
						else {
							current_process.setRemaining(Math.min(current_process.getCurrentCPUBurst(), QUANTUM));
							current_process.setCurrentCPUBurst(current_process.getCurrentCPUBurst() - 1);
							current_process.setState("running");
						}
					}
					current_process.increment_current_CPU_Time();
					if (current_process.getRemaining() == 1 || current_process.getCurrentCPUTime() >= current_process.get_cpuTime()){
						current_process = null;
					}
				}	
				cycle_counter++;
			}
		}
		output += "The scheduling algorithm used was Round Robin\n\n";
		float cpu_total = 0;
		float io_total = 0;
		float thruput;
		float tat_total = 0;
		float waiting_total = 0;
		float proc_total = sorted_processes.size();
		for (int i = 0; i < sorted_processes.size(); i++){
			int tat = sorted_processes.get(i).finishing_time - sorted_processes.get(i).arrivalTime;
			cpu_total += sorted_processes.get(i).get_cpuTime();
			io_total += sorted_processes.get(i).get_io_time();
			tat_total += tat;
			waiting_total += sorted_processes.get(i).total_waiting;
			output += "Process " + i + ":\n";
			output += "\t(A,B,C,M) = (" + sorted_processes.get(i).arrivalTime + "," + sorted_processes.get(i).burstTime + "," + sorted_processes.get(i).cpuTime + "," + sorted_processes.get(i).io_multiplier + ")\n";
			output += "\tFinishing time: " + sorted_processes.get(i).finishing_time + "\n";
			output += "\tTurnaround time: " + tat + "\n";
			output += "\tI/O time: " + sorted_processes.get(i).get_io_time() + "\n";
			output += "\tWaiting time: " + sorted_processes.get(i).total_waiting + "\n\n";
		}
		int finishing_time = cycle_counter - 1;
		float cpu_util = cpu_total / finishing_time;
		float io_util = cycle_blocked / finishing_time;
		float avg_tat = tat_total / sorted_processes.size();
		float avg_waiting = waiting_total / sorted_processes.size();
		thruput = (proc_total / finishing_time) * 100;
		output += "Summary Data:\n";
		if (sorted_processes.size() == 1){
			output += "\tFinishing time: " + finishing_time + "\n";
			output += "\tCPU Utilization: ";
			output += String.format("%.6f", cpu_util) + "\n";
			output += "\tI/O Utilization: ";
			output += String.format("%.6f", io_util) + "\n";
			output += "\tThroughput: ";
			output += String.format("%.6f", thruput) + " processes per hundred cycles\n";
			output += "\tAverage turnaround time: ";
			output += String.format("%.6f", avg_tat) + "\n";
			output += "\tAverage waiting time: ";
			output += String.format("%.6f", avg_waiting);
			output += "\n-----------------------------------------------------------------------------------------------";
		}
		else {
			output += "\tFinishing time: " + finishing_time + "\n";
			output += "\tCPU Utilization: ";
			output += String.format("%.6f", cpu_util) + "\n";
			output += "\tI/O Utilization: ";
			output += String.format("%.6f", io_util) + "\n";
			output += "\tThroughput: ";
			output += String.format("%.6f", thruput) + " processes per hundred cycles\n";
			output += "\tAverage turnaround time: ";
			output += String.format("%.6f", avg_tat) + "\n";
			output += "\tAverage waiting time: ";
			output += String.format("%.6f", avg_waiting);
			output += "\n-----------------------------------------------------------------------------------------------";
		}
		output += "--------------------------------------------------------------";
		return output;
	}
}