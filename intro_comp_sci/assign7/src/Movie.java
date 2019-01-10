//HW7(Movie)
//pp1445
//
//Paul Park
//20 minutes
//*************************
public abstract class Movie {
	//set variables here
	private double rating;
	protected int year;
	protected int duration;
	protected String title;
	protected double price;
	
	//Create constructor
	public Movie(String title, int year, int duration, double rating) throws IllegalArgumentException{
		//test for invalid inputs and throw exceptions
		if (year < 1870 || year > 2015 || rating < 0.0 || rating > 4.0){
			if (year < 1870 || year > 2015){
				throw new IllegalArgumentException("Invalid year; year should be in between 1870 and 2015.");
			}
		
			if (rating < 0.0 || rating > 4.0){
				throw new IllegalArgumentException("Invalid rating; rating should be in between 0.0 and 4.0.");
			}
		}
		else{
			//Initialize variables with the arguments
			this.title = title;
			this.year = year;
			this.duration = duration;
			this.rating = rating;
		}
	}
	//allow user to set a rate 
	public void setRate(double rating){
		this.rating = rating;
	}
	//get the rate
	public double getRate(){
		return this.rating;
	}
	//get title of the movie
	public final String getTitle(){
		return title;
	}
	//get year of the movie
	public final int getYear(){
		return year;
	}
	//get the duration of the movie
	public final int getDuration(){
		return duration;
	}
	//returns a string format of movie info
	public String toString(){
		String status = String.format("%s: %d, rating: %.1f, price: $%.2f", title, year, rating, getPrice());
		return status;
	}
	//set abstract method called getPrice
	public abstract double getPrice();
}

