import java.util.ArrayList;

public class Process {
	double A;
	double B;
	double C;
	int id;
	int word;
	int num_refs;
	int size;
	double residency_time;
	int num_evict;
	int num_fault;
	boolean finished;
	ArrayList<Page> pages = new ArrayList<Page>();
	
	public Process(int id, double A, double B, double C){
		this.id = id;
		this.A = A;
		this.B = B;
		this.C = C;
		this.num_fault = 0;
		this.num_evict = 0;
		this.residency_time = 0;
		this.finished = false;
	}
	// getters
	public double getA(){
		return this.A;
	}
	public double getB(){
		return this.B;
	}
	public double getC(){
		return this.C;
	}
	public int getWord(){
		return this.word;
	}
	public int getRef(){
		return this.num_refs;
	}
	// setters
	public void setWord(int word){
		this.word = word;
	}
	public void setRef(int ref){
		this.num_refs = ref;
	}
	public void setSize(int size){
		this.size = size;
	}
}
