//HW8(RomCom)
//pp1445
//
//Paul Park
//20 minutes
//*************************
public class RomCom extends Movie{

	//create data fields jerks and friendzones
	private int jerks;
	private int friendzones;
	
	//constructor for RomCom class
	public RomCom(String title, int year, int duration, double rating, int jerks, int friendzones) throws IllegalArgumentException{
		//recall constructor from Movie class using super keyword
		super(title, year, duration, rating);
		//if there's an invalid number throw an exception
		if (jerks < 1 || jerks > 10 || friendzones < 1 || friendzones > 10){
			if(jerks < 1 || jerks > 10){
				throw new IllegalArgumentException("Invalid jerks; jerks must be in between 1 and 10");
			}
			if(friendzones < 1 || friendzones > 10){
				throw new IllegalArgumentException("Invalid friendzones; friendzones must be in between 1 and 10");
			}
		}
		else{
			//initialize data fields
			this.jerks = jerks;
			this.friendzones = friendzones;
		}
	}
	//create a setter method for jerks
	public void setJerks(int jerks){
		this.jerks = jerks;
	}
	//create a getter method for jerks
	public int getJerks(){
		return jerks;
	}
	//create a setter method for number of friendzones
	public void setFriendzones(int friendzones){
		this.friendzones = friendzones;
	}
	//create a getter method for number of friendzones
	public int getFriendzones(){
		return friendzones;
	}
	//calculate the cost of movie and return
	public double getPrice() {
		return (this.jerks + this.friendzones + this.year - this.duration)/100;
	}
	//override the toString method from super class
	@Override
	public String toString(){
		String status = String.format(", jerks: %d, friendzones: %d", jerks, friendzones);
		return super.toString() + status;
	}
}