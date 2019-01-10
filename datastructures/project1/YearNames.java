package project1;

/**
 * This class will be used to store all the Name objects for some year(1880-2015) and will contain
 * a data field that stores all the Name objects for a given year.
 * @author PaulPark
 * @version 09/24/16
 */

public class YearNames {
	int year;
	MyArrayList<Name> name_year;
	
	/*
	 * make a one parameter constructor and instantiate the data fields
	 */
	public YearNames (int year){
		this.year = year;
		name_year = new MyArrayList<Name>();
	}
	
	/**
	 * This method adds a new Name object to the list for a current year.
	 * @param n a Name object to be added
	 * @throws IllegalArgumentException if it called with a Name object that already exists
	 */
	public void add ( Name n ) throws IllegalArgumentException{
		if (name_year.contains(n)){
			throw new IllegalArgumentException("That name already exists.");
		}
		else {
			name_year.add(n);
		}
	}
	
	/**
	 * This method returns the number of babies that were given the
	 * name specified by the parameter.
	 * @param name name that is used to identity how many there are (the count)
	 * @return the total number of names 
	 */
	public int getCountByName (String name){
		int total = 0;
		for (int x = 0; x < name_year.size();x++){
			if (name_year.get(x).getName().equals(name)){
				total+=name_year.get(x).getCount();
			}
		}
		return total;
	}
	
	/**
	 * This method returns the fraction of babies that were given the name
	 * specified by the parameter
	 * @param name name used to identity the fraction of babies for that specific name
	 * @return the number of such babies divided by the total number of babies in the data
	 * file for the year
	 */
	public double getFractionByName (String name){
		double total = 0;
		int count_babies = getCountByName(name);
		for (int x = 0; x < name_year.size();x++){
			total+=name_year.get(x).getCount();
		}
		return count_babies/total;
	}
	
	/**
	 * This method overrides the toString method in the Object class
	 * @return a String message describing the object in the array
	 */
	public String toString(){
		String total = "";
		for (int x = 0; x < name_year.size();x++){
			total += name_year.get(x).toString();
			total += "\n";
		}
		return total;
	}
}
 