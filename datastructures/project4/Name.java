package project4;


/**
 * This class will be used to store information about a particular name
 * for a specific year from 1880-2015. The info. stored should be the name
 * itself, the gender, and the count.(number of babies that have been given that name)
 * @author PaulPark
 * @version 11/21/16
 */

public class Name implements Comparable<Name>{
	String name;
	String gender;
	int count;
	
	/*
	 * This 3 parameter Name constructor takes a name, gender, and count that will
	 * make a Name object once instantiated and throws an IllegalArgumentException.
	 * This exception is thrown with an error message if the name is an empty string, 
	 * the gender is not male or female or if the count is a negative value.
	 */
	public Name( String name, String gender, int count ) throws IllegalArgumentException {
		if (name.equals("") || !(gender.toLowerCase().equals("m") || gender.toLowerCase().equals("f")) || count < 0) {
			throw new IllegalArgumentException("Sorry, invalid entry. Please try again.");
		}
		this.name = name;
		this.gender = gender;
		this.count = count;
		
	}
	
	/**
	 * This method implements the Comparable<Name> interface. Primary key
	 * for comparing is by name, secondary key as the gender, and finally 
	 * the count as the tertiary key. So first, the method will compare some
	 * two name objects by their names alphabetically and if they share the
	 * same name, then compareTo will compare the gender and if both the name 
	 * and the count are the same still, then finally the method will compare
	 * by count. If all is the same, 0 will be
	 * returned meaning the objects are the same.
	 * @param N a Name object to be compared to
	 * @return an integer that represents which Name object is bigger or smaller according to our rules
	 */
	public int compareTo(Name N){
		int result  = this.name.compareTo(N.name);
		if (result != 0){
			if (result > 0){
				return 1;
			}
			else {
				return -1;
			}
		}
		else {
			result = this.gender.compareTo(N.gender);
			if (result > 0){
				return 1;
			}
			else if (result < 0){
				return -1;
			}
			else {
				if(this.count > N.count){
					return 1;
				}
				else if (this.count < N.count){
					return -1;
				}
				else {
					return 0;
				}
			}
		}
	}
		
	
	/**
	 * This method is used to test whether or not two Name objects are identical 
	 * @param x a Name object
	 * @return true if all the name, the gender, and the count is the same for two Name objects
	 * false, otherwise
	 */
	@Override
	public boolean equals(Object x){
		if (!(x instanceof Name)){
			return false;
		}
		else{
			Name x_name = (Name)x;
			return this.name.equals(x_name.name) && this.gender.equals(x_name.gender) && (this.count == x_name.count);
		}

	}
	
	/**
	 * This method overrides the toString method in the Object class
	 * @return a String message giving information about some Name object
	 */
	public String toString(){
		String baby = "There are " + count + " instances of the name " + name + " that is " + gender;
		return baby;
	}
	
	/**
	 * This method will get the name of the object instantiated
	 * @return a String of the name
	 */
	public String getName(){
		return name;
	}
	
	/**
	 * This method will get the count of the object instantiated
	 * @return an integer that represents the count(number of babies given some name)
	 */
	public int getCount(){
		return count;
	}
	
	/**
	 * This method will get the gender of the baby
	 * @return a String that represents the baby's gender
	 */
	public String getGender(){
		return gender;
	}
	

}