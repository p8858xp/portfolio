import java.util.ArrayList;
import java.util.HashMap;
import java.util.LinkedList;
import java.util.Map;
import java.util.Queue;
import java.util.HashMap;
import java.util.Map;

public class FIFO {
	int num_tasks;
	int num_resource_types;
	int tasktemp;
	int[] resource_units;
	int[] finish;
	int[] waiting;
	ArrayList<Integer> blockQueue = new ArrayList<Integer>();
	ArrayList<ArrayList<String>> terminated = new ArrayList<ArrayList<String>>();
	
	public FIFO(ArrayList<ArrayList<String>> instructions, int num_tasks, int num_resource_types, int[] resource_units){
		this.num_tasks = num_tasks;
		this.num_resource_types = num_resource_types;
		this.resource_units = resource_units;
		int[][] need = new int[num_tasks][num_resource_types];
		int[][] claims = new int[num_tasks][num_resource_types];
		int[][] alloc = new int[num_tasks][num_resource_types];
		int[] compute = new int[num_tasks];
		int[] available_resources = new int[num_resource_types];
		int[] available_resources_next_cycle = new int[num_resource_types];
		boolean[] cycle_completed = new boolean[num_tasks];
		finish = new int[num_tasks];
		waiting = new int[num_tasks];
		// for every number of resource types that were processed in main program, set the initial number of available
		// resources 
		for(int i = 0; i < num_resource_types; i++){
			available_resources[i] = resource_units[i];
		}
		int cycle = 0;
		// have a while loop that runs until terminated's size is equal to the number of instructions
		while(terminated.size() != instructions.size()){
			cycle++;
			available_resources_next_cycle = available_resources.clone();
			int blocksize = blockQueue.size();
			int index = 0;
			for(int j = 0; j < blocksize; j++){
				int temp = blockQueue.get(index);
				boolean terminate = false;
				for(int i = 0; i < num_resource_types; i++){
					// if a request cannot be granted then that task's waiting time should be incremented and has the potential 
					// to be terminated if a deadlock is present
					if(need[temp][i] > available_resources[i]){
						waiting[temp]++;
						terminate = true;
					}
				}
				// this means that all processes/tasks are blocked and that means there is a deadlock so you must find the 
				// lowest numbered task, release its current resources and abort it
				if (terminate && (blockQueue.size() + terminated.size()) == instructions.size()){
					//release all the resources then abort the task and make sure to remove it from blockQueue
					int lowest_task = getMin(blockQueue);
					for(int i = 0; i < num_resource_types; i++){
						available_resources[i] += alloc[lowest_task][i];
						available_resources_next_cycle[i] += alloc[lowest_task][i];
					}
					terminated.add(instructions.get(lowest_task));
					int index_lowest_task = blockQueue.indexOf(lowest_task);
					blockQueue.remove(index_lowest_task);
				}
				else if(terminate){
					index++;
				}
				else{
					String[] activity = instructions.get(temp).get(0).split(" ");
					available_resources[Integer.parseInt(activity[2])-1] -= Integer.parseInt(activity[3]);
					available_resources_next_cycle[Integer.parseInt(activity[2])-1] -= Integer.parseInt(activity[3]);
					alloc[Integer.parseInt(activity[1])-1][Integer.parseInt(activity[2])-1] += Integer.parseInt(activity[3]);
					instructions.get(temp).remove(0);
					blockQueue.remove(index);
					if (instructions.get(temp).get(0).contains("terminate")){
						terminated.add(instructions.get(Integer.parseInt(activity[1])-1));
						finish[Integer.parseInt(activity[1])-1] = cycle;
					}
					// this means that the request has been granted so this task should no longer do anything in the next for loop
					// basically the current cycle is over for this task
					cycle_completed[temp] = true;
				}
			}
			for(int i = 0; i < instructions.size(); i++){
				String[] activity = instructions.get(i).get(0).split(" ");
				// if the process is not computing then enter these statements
				if(compute[i] == 0){
					// if the current process is blocked, then do nothing and move onto the next iteration of the for loop
					if(blockQueue.contains(i)){
						continue;
					}
					// if the current process is already finished, then do nothing and move onto the next iteration of the for loop
					else if(terminated.contains(instructions.get(i))){
						continue;
					}
					// if cycle_completed is true that means that this task has already completed its activity for this cycle and cannot 
					// perform any other activity until the next cycle starts
					else if(cycle_completed[i]){
						cycle_completed[i] = false;
					}
					// if the instruction is "initiate" then set claims[][] to the value of initial-claim held in at activity[3]
					else if (instructions.get(i).get(0).contains("initiate")){
						claims[Integer.parseInt(activity[1])-1][Integer.parseInt(activity[2])-1] = Integer.parseInt(activity[3]);
						instructions.get(i).remove(0);
						// if the next instruction is "terminate" then terminate the process and record its finishing cycle number
						if (instructions.get(i).get(0).contains("terminate")){
							terminated.add(instructions.get(Integer.parseInt(activity[1])-1));
							finish[Integer.parseInt(activity[1])-1] = cycle;
						}
					}
					// if the instruction is "request" then set need[][] to the value of number-requested held in at activity[3]
					else if (instructions.get(i).get(0).contains("request")){
						need[Integer.parseInt(activity[1])-1][Integer.parseInt(activity[2])-1] = Integer.parseInt(activity[3]);
						// if what is being requested is greater than what the optimistic manager currently has available then block that task
						// and incremented the process's waiting time
						if (available_resources[Integer.parseInt(activity[2])-1] < Integer.parseInt(activity[3])){
							waiting[i]++;
							blockQueue.add(i);
						}
						// otherwise the request of that task is granted and so decrement the current system available resources by the requested amount
						else{
							available_resources[Integer.parseInt(activity[2])-1] -= Integer.parseInt(activity[3]);
							available_resources_next_cycle[Integer.parseInt(activity[2])-1] -= Integer.parseInt(activity[3]);
							// allocate the number of requested resources 
							alloc[Integer.parseInt(activity[1])-1][Integer.parseInt(activity[2])-1] += Integer.parseInt(activity[3]);
							instructions.get(i).remove(0);
							// if the next instruction is "terminate" then terminate the process and record its finishing cycle number
							if (instructions.get(i).get(0).contains("terminate")){
								terminated.add(instructions.get(Integer.parseInt(activity[1])-1));
								finish[Integer.parseInt(activity[1])-1] = cycle;
							}
						}
					}
					// if the instruction is "compute" then set compute[i] to the number-of-cycles held in at activity[2]
					else if(instructions.get(i).get(0).contains("compute")){
						compute[i] = Integer.parseInt(activity[2]);
						// if compute[i] is 1 then it immediately computes 1/1 at this current cycle and so computation is already over
						if (compute[i] == 1){
							instructions.get(i).remove(0);
							compute[i] = 0;
							// if the next instruction is "terminate" then terminate the process and record its finishing cycle number
							if (instructions.get(i).get(0).contains("terminate")){
								terminated.add(instructions.get(Integer.parseInt(activity[1])-1));
								finish[Integer.parseInt(activity[1])-1] = cycle;
							}
						}
					}
					// if the instruction is "release" then allocate the number of resources to the process and have to resources 
					//  been available to the manager in the next cycle 
					else if(instructions.get(i).get(0).contains("release")){
						alloc[Integer.parseInt(activity[1])-1][Integer.parseInt(activity[2])-1] -= Integer.parseInt(activity[3]);
						available_resources_next_cycle[Integer.parseInt(activity[2])-1] += Integer.parseInt(activity[3]);
						instructions.get(i).remove(0);
						// if the next instruction is "terminate" then terminate the process and record its finishing cycle number
						if (instructions.get(i).get(0).contains("terminate")){
							terminated.add(instructions.get(Integer.parseInt(activity[1])-1));
							finish[Integer.parseInt(activity[1])-1] = cycle;
						}
					}
				}
				// this means process is in the process of computing so decrement the current value of compute
				else {
					compute[i]--;
					// if the compute value after being decremented is 1 then it's done computing so remove the "remove" instruction
					// and set compute[i] back to 0
					if (compute[i] == 1){
						instructions.get(i).remove(0);
						compute[i] = 0;
						// check if the current instruction is now "terminate" and if it is, then just terminate the process and
						// record the cycle at which in finished using the finish array
						if (instructions.get(i).get(0).contains("terminate")){
							terminated.add(instructions.get(Integer.parseInt(activity[1])-1));
							finish[Integer.parseInt(activity[1])-1] = cycle;
						}
					}
				}
			}
			available_resources = available_resources_next_cycle.clone();
		}
	}
	// this function is to return the cycle at the which the given task set in the parameter was terminated/finished
	public int getCycle(int task){
		return finish[task];
	}
	// this function is to return the total waiting time of a given(set in the parameter) task 
	public int getWaiting(int task){
		return waiting[task];
	}
	// this function is to return the min value in a given ArrayList of integers 
	// purpose of this function is in the case there is a deadlock, you abort the lowest numbered task so you 
	// have to find out of the blocked processes, which one has the lowest task number
	public int getMin(ArrayList<Integer> arr){
		int min = arr.get(0);
		for (int i = 0; i < arr.size(); i++){
			if (arr.get(i) < min){
				min = arr.get(i);
			}
		}
		return min;
	}
}
