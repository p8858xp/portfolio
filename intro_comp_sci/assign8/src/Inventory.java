//HW8(Inventory)
//pp1445
//
//Paul Park
//35 minutes
//*************************
import java.util.ArrayList;
import java.util.Collections;

public class Inventory {

	//create private list data field using ArrayList
	private ArrayList<Movie> list = new ArrayList<Movie>() ;
	
	//takes a Movie object and has a void return type
	//if movie matching title and year does not exist then add movie to ArrayList
	//if movie already exists throw a MovieInInventoryException
	public void add(Movie m) throws MovieInInventoryException{
		boolean match = false;
		for (int i = 0; i < list.size(); i++){
			if (m.getTitle() == list.get(i).getTitle() && m.getYear() == list.get(i).getYear()){
				throw new MovieInInventoryException(m.getTitle());
			}
		}
		if (match == false){
			list.add(m);
		}
		Collections.sort(list);
	}
	//takes the title and year as parameters and returns a boolean
	//if a match remove it from inventory and return true
	//if no match return false
	public boolean remove(String movieName, int movieYear){
		boolean match = false;
		for (int i = 0; i < list.size(); i++){
			if (movieName == list.get(i).getTitle() && movieYear == list.get(i).getYear()){
				list.remove(i);
				match = true;
			}
		}
		Collections.sort(list);
		return match;
	}
	//takes the title and year and returns a boolean
	//if movie matching the title and year exists in the inventory, return true
	//otherwise, false
	public boolean contains(String movie_title, int movie_year){
		boolean match = false;
		for (int i = 0; i < list.size(); i++){
			if (movie_title == list.get(i).getTitle() && movie_year == list.get(i).getYear()){
				match = true;
			}
		}
		return match;
	}
	//returns total number of movies inside the ArrayList
	public int size(){
		return list.size();
	}
	//return String object containing the list of all the movies in the inventory
	//use the toString() method of the Movie class
	public String toString(){
		String Movies = "";
		for (int i = 0; i < list.size(); i++){
			Movies += list.get(i).toString();
			Movies += "\n";
		}
		return Movies;
	}
}
