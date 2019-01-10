package project1;

import java.util.ArrayList;
import java.util.Collections;

/**
 * This class is a container class just like the ArrayList<E> class that is part
 * of the JavaAPI. It also inherits from the ArrayList<E> class and will be used
 * for working with generic elements whose type implements Comparable<E> interface.
 * @author PaulPark
 * @version 09/24/16
 */

public class MyArrayList<E extends Comparable<E>> extends ArrayList<E> {

	/**
	 * This sort method overloads the sort method of the ArrayList class and
	 * operates on the object on which it is called. It also sorts the elements
	 * according to their natural order.
	 */
	public void sort(){
		Collections.sort(this);
	}
	
	/**
	 * compareTo returns 1 if self is bigger than the other, so in this case
	 * if the array object at index x is bigger than the array object at x+1, then
	 * it is not sorted(not in ascending order which is what we want)
	 * @return true if the elements stored in the collection are sorted
	 * false, otherwise
	 */
	public boolean isSorted(){
		for(int x = 0; x < this.size()-1; x++){
			if (this.get(x).compareTo(this.get(x+1))==1){
				return false;
			}
		}
		return true;
	}
	
	/**
	 * This method overrides the contains method implemented in the ArrayList 
	 * class. Uses the IsSorted method and if the elements stored are sorted,
	 * then a binary search algorithm will be used. However, if the elements 
	 * are not sorted, the method will call the contains method in the ArrayList
	 * class
	 * @param o
	 * @return true if the generic object being searched for is contained 
	 * false, otherwise
	 */
	public boolean contains(E o){
		if (this.isSorted()){
			return Collections.binarySearch(this,o) >= 0;
		}
		else {
			return super.contains(o);
		}
	}
}
