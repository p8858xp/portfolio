
public class Page {
	int page_ID;
	int process_ID;
	int loaded;
	int last_accessed;
	public Page(int page_ID, int process_ID){
		this.page_ID = page_ID;
		this.process_ID = process_ID;
	}
	public void set_last_accessed(int last_accessed){
		this.last_accessed = last_accessed;
	}
	public void set_loaded(int loaded){
		this.loaded = loaded;
	}
	public int compareTo(Page other){
		if (this.page_ID == other.page_ID && this.process_ID == other.process_ID){
			return 0;
		}
		else {
			return -1;
		}
	}
}
