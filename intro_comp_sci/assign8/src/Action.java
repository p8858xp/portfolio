//HW8(Action)
//pp1445
//
//Paul Park
//30 minutes
//*************************
public class Action extends Movie {
	
	//create data field for number of explosions the movie features
	private int explosions;
	
	//set constructor for action with multiple arguments and exception
	public Action(String title, int year, int duration, double rating, int explosions) throws IllegalArgumentException {
		//get the constructor from Movie class	
		super(title, year, duration, rating);
			//throw exception
			if (explosions < 1 || explosions > 100) throw new IllegalArgumentException("Invalid explosions; explosions must be in between 1 and 100");
			else{
				//initialize the variable to the data field
				this.explosions = explosions;
			}
	}
	//allow user to set num of explosions here
	public void setExplosions(int explosions){
		this.explosions = explosions;
	}
	//have a getter for explosions
	public int getExplosions(){
		return explosions;
	}
	//override the toString method in the Movie class
	@Override
	public String toString(){
		String status = String.format(", explosions: %d",explosions);
		return super.toString() + status;
	}
	//calculate the price of the movie and return it
	public double getPrice() {
		return (this.year + this.explosions * this.duration)/1000;
	}

}

