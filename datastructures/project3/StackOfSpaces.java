package project3;

/**
 * This class implements the SetOfSpaces interface and therefore implements all the methods contained in
 * the interface given. This class will provide methods for adding and removing by following a stack referenced-based
 * algorithm and also a method to test whether the stack is empty or not.
 * @author PaulPark
 * @version 10/27/16
 */

public class StackOfSpaces implements SetOfSpaces {
	
	Node head = null;
	
	/**
	 * Add a SquarePosition object to the set.
	 * @param s
	 *    object to be added
	 */
	
	public void add ( SquarePosition s ){
		if (head == null){
			Node n = new Node();
			n.setData(s);
			head = n;
		}
		else {
			Node n = new Node();
			n.setData(s);
			n.setNext(head);
			head = n;
		}
	}
	/**
	 * Remove the next object from the set. The specific
	 * item returned is determined by the underlying structure
	 * of set representation.
	 * @return
	 *    the next object, or null if set is empty
	 */
	public SquarePosition remove (){
		SquarePosition removed = null;
		if (head == null){
			return removed;
		}
		else{
			removed = head.getData();
			head = head.getNext();
			return removed;	
		}
	}
	
	/**
	 * Determines if set is empty or not.
	 * @return
	 *    true, if set is empty,
	 *    false, otherwise.
	 */
	public boolean isEmpty(){
		if (head == null){
			return true;
		}
		else {
			return false;
		}
	}
}
