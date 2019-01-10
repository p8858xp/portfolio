import java.util.ArrayList;
import java.util.PriorityQueue;
import java.util.Scanner;

public class Process implements Comparable<Process> {
	//data fields
	int arrivalTime;
	int burstTime;
	int cpuTime;
	int current_cputime = 0;
	int io_multiplier;
	String state = "unstarted";
	int remaining = 0;
	int blockedTime;
	int finishing_time=0; // when all the processes have finished
	int turnaround_time; // finishing time - A
	int IO_time=0; // time in blocked state
	int waiting_time=0; // time in ready state
	int running_time=0;
	int total_rantime = 0;
	int curr_cpuburst = 0;
	int total_waiting = 0;
	
	// constructor
	public Process(int A, int B, int C, int M){
		this.arrivalTime = A;
		this.burstTime = B;
		this.cpuTime = C;
		this.io_multiplier = M;
	}
	// getter methods
	public String getState(){
		return state;
	}
	public int getRunning(){
		return running_time;
	}
	public int getBlockedTime(){
		return blockedTime;
	}
	
	public int get_arrivalTime(){
		return arrivalTime;
	}
	public int get_burstTime(){
		return burstTime;
	}
	public int get_cpuTime(){
		return cpuTime;
	}
	public int get_io_mulitplier(){
		return io_multiplier;
	}
	public int get_io_time(){
		return IO_time;
	}
	public int getRemaining(){
		return remaining;
	}
	public int getFinishingTime(){
		return finishing_time;
	}
	public int getWaitingTime(){
		return waiting_time;
	}
	public int getCurrentCPUTime(){
		return current_cputime;
	}
	public int getTotalRanTime(){
		return total_rantime;
	}
	public int getCurrentCPUBurst(){
		return curr_cpuburst;
	}
	// setter methods
	public void setCurrentCPUBurst(int burst){
		curr_cpuburst = burst;
	}
	public void setState(String state){
		this.state = state;
		if (!state.equals("ready")){
			waiting_time = 0;
		}
	}
	public int setBlockedTime(){
		blockedTime = this.running_time * this.io_multiplier;
		return blockedTime;
	}
	public void setRemaining(int remaining){
		this.remaining = remaining;
	}
	public void setFinishingTime(int f){
		this.finishing_time = f;
	}
	public void setIOTime(int io){
		this.IO_time = io;
	}
	public void setWaitingTime(int w){
		this.waiting_time = w;
	}
	public void setRunningTime(int random){
		running_time = random;
	}
	// incrementing methods
	public void incrementTotalWaiting(){
		total_waiting++;
	}
	public void incrementBlocked(){
		IO_time++;
	}
	public void incrementWaiting(){
		waiting_time++;
	}
	public void increment_current_CPU_Time(){
		current_cputime++;
	}
	public void increment_total_running(){
		total_rantime++;
	}
	public int randomOS(int btime, Scanner in){
		int x = Integer.parseInt(in.nextLine());
		int result = 1+(x % this.burstTime);
		return result;
	}
	public void reset(){
		this.state = "unstarted";
		this.remaining = 0;
		this.finishing_time = 0;
		this.running_time = 0;
		this.blockedTime = 0;
		this.IO_time = 0;
		this.waiting_time = 0;
		this.current_cputime = 0;
		this.total_waiting = 0;
	}
	@Override
	public int compareTo(Process other) {
		if (this.get_arrivalTime() == other.get_arrivalTime()){
			return 0;
		}
		else if (this.get_arrivalTime() < other.get_arrivalTime()){
			return -1;
		}
		else {
			return 1;
		}
	}
	public String toString(){
		return String.format("(%d,%d,%d,%d)", this.get_arrivalTime(), this.get_burstTime(), this.get_cpuTime(), this.get_io_mulitplier());
	}
}
