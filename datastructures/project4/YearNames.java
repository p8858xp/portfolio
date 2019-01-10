package project4;
import java.util.*;

/**
 * This class will be used to store all the Name objects for some year(1880-2015) and will contain
 * a data field that stores all the Name objects for a given year. Also should inherit from MyBST<Name>
 * @author PaulPark
 * @version 11/21/16
 */

public class YearNames extends MyBST<Name> {
	int year;
	
	/*
	 * make a one parameter constructor and instantiate the data field
	 */
	public YearNames (int year){
		this.year = year;
	}
	
	/**
	 * This method adds a new Name object to the list for a current year.
	 * @param n a Name object to be added
	 * @throws IllegalArgumentException if it called with a Name object that already exists
	 */
	public boolean add ( Name n ) throws IllegalArgumentException,ClassCastException, NullPointerException{
		if (root == null){
			super.add(n);
			return true;
		}
		if (this.contains(n)){
			throw new IllegalArgumentException("That name already exists.");
		}
		else {
			super.add(n);
			return true;
		}
	}
	
	/**
	 * This method returns the number of babies that were given the
	 * name specified by the parameter.
	 * @param name name that is used to identity how many there are (the count)
	 * @return the total number of names 
	 */
	public int getCountByName (String name, String gender) throws IllegalArgumentException{
		if (name == null || gender == null){
			throw new IllegalArgumentException("The name or the gender was null.");
		}
		if (gender.toLowerCase().equals("f") || gender.toLowerCase().equals("m")){
			return find(root, name, gender);
		}
		throw new IllegalArgumentException("The gender must be 'm','f','M', or 'F'.");
		
	}
	
	/**
	 * This method will be used to find the specific node in the set, given the name and gender
	 * @param node
	 * @param name
	 * @param gender
	 * @return an integer
	 */
	public int find(Node<Name> node, String name, String gender){
		if (node == null){
			return 0;
		}
		if (name.compareTo(node.getData().getName()) == 0){
			if (gender.toLowerCase().compareTo(node.getData().getGender().toLowerCase()) == 0){
				return node.getData().getCount();
			}
			else if (gender.compareTo(node.getData().getGender()) < 0){
				if ( node.getLeft() != null && (!node.getLeft().getData().getName().equals(name)) ){
					return 0;
				}
				return find(node.getLeft(),name,gender);
			}
			else {
				if (node.getRight() != null && (!node.getRight().getData().getName().equals(name)) ){
					return 0;
				}
				return find(node.getRight(),name,gender);
			}
		}
		else if (name.compareTo(node.getData().getName()) < 0){
			return find(node.getLeft(),name,gender);
		}
		else {
			return find(node.getRight(),name,gender);
		}
		
	}
	
	/**
	 * This method returns the fraction of babies that were given the name
	 * specified by the parameter
	 * @param name name used to identity the fraction of babies for that specific name
	 * @return the number of such babies divided by the total number of babies in the data
	 * file for the year
	 */
	public double getFractionByName (String name, String gender){
		double total = 0;
		int count_babies = getCountByName(name, gender);
		Iterator<Name> iterator = this.iterator();
		while (iterator.hasNext()){
			total+=iterator.next().getCount();
		}
		return count_babies/total;
	}
	
	/**
	 * This method overrides the toString method in the Object class
	 * @return a String message describing the object in the array
	 */
	public String toString(){
		String total = "";
		Iterator<Name> iterator = this.iterator();
		while (iterator.hasNext()){
			total += iterator.next().toString();
			total += "\n";
		}
		return total;
	}
}
 