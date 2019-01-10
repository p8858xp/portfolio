package project3;

/**
 * This class represents a Node class. Each node container should be allowed to have SquarePosition objects as
 * its data
 * @author PaulPark
 * @version 10/27/16
 */

public class Node {
	SquarePosition data;
	Node next;
	SquarePosition s;
	
	/**
	 * This method will get the data inside of whichever Node container you are calling it to
	 * @return SquarePosition object
	 */
	public SquarePosition getData(){
		return data;
	}
	
	/**
	 * This method will get and return the next Node container of your reference-based structure
	 * @return Node object
	 */
	public Node getNext(){
		return next;
	}
	
	/**
	 * This method will set a SquarePosition object as its data inside of a Node
	 * @param data - a SquarePosition object you setting inside of some Node container
	 */
	public void setData(SquarePosition data){
		this.data = data;
	}
	
	/**
	 * This method will set the next Node of some other Node object before it
	 * @param next - a Node 
	 */
	public void setNext(Node next){
		this.next = next;
	}
	
}
