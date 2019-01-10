package project4;

/**
 * This class provides the building blocks for MyBST<E> class. The generic type should be restricted to types that implement
Comparable<E> interface.
 * @author PaulPark
 * @version 11/21/16
 */
public class Node < E extends Comparable <E> > implements Comparable < Node <E> > {
	private E data;
	private Node <E> left;
	private Node <E> right;
	
	//A default constructor for the Node class
	public Node(){
		this.data = null;
		this.left = null;
		this.right = null;
	}
	
	//A one parameter constructor that takes an element of type E as argument
	public Node( E data ){
		this.data = data;
	}
	
	//A three parameter constructor that takes an element of type E and two references of type Node<E> called left and right
	public Node( E data, Node<E> left, Node<E> right ){
		this.data = data;
		this.left = left;
		this.right = right;
	}
	
	/**
	 * This method will get the data of whichever node it is called to
	 * @return E the data of the node
	 */
	public E getData(){
		return data;
	}
	
	/**
	 * This method will set the data inside the parameter of whichever node it is called to
	 * @param data of the node
	 */
	public void setData( E data ){
		this.data = data;
	}
	
	/**
	 * This method will return the left node of its parent node
	 * @return Node<E> the left child of some node
	 */
	public Node <E> getLeft(){
		return left;
	}
	
	/**
	 * This method will set a node's left child as whatever is inside the ()
	 * @param Node<E> the left child of some node
	 */
	public void setLeft( Node <E> left ){
		this.left = left;
	}
	
	/**
	 * This method will return the right child of some node
	 * @return Node<E> the right node of the parent node
	 */
	public Node <E> getRight(){
		return right;
	}
	
	/**
	 * This method will set a node's right child as whatever is inside ()
	 * @param right a Node<E> to be set as the right child of some parent node
	 */
	public void setRight( Node <E> right ){
		this.right = right;
	}
	
	/**
	 * This method is used to compare nodes between each other(by whatever the data is inside the nodes)
	 * @param other the node being compared to 
	 * @return an integer representing which node is bigger or smaller
	 */
	public int compareTo( Node <E> other ){
		return this.data.compareTo( other.data );
	}
	
	/**
	 * This method will return a String message about some node
	 * @return String message that will display the data and left/right child of any node
	 */
	public String toString(){
		return "This node contains data: " + this.getData();
	}
	
	/**
	 * This method will use recursion to add the specified element to the set according to BST ideas
	 * @param e the element that is trying to be added
	 * @return boolean to decide whether or not the element can be added to the set(duplicates are not allowed)
	 */
	public boolean add(E e){
		if (this.data == null){
			this.data = e;
			return true;
		}
		if (this.data == e){
			return false;
		}
		else if (e.compareTo(this.data) < 0 ){
			if (this.left == null){
				this.left = new Node<E>(e);
				return true;
			}
			else{
				return this.left.add(e);
			}
		}
		else if ( e.compareTo(this.data) > 0 ){
			if (this.right == null){
				this.right = new Node<E>(e);
				return true;
			}
			else{
				return this.right.add(e);
			}
		}
		return false;
	}
	
	/**
	 * This method will use recursion to test whether the set contains the specified elements
	 * @param o the object to be tested
	 * @return boolean deciding whether or not the elements is in the set
	 */
	public boolean contains( E o ){
		if (this.data == null){
			return false;
		}
		if ( ((E)o).equals(this.data) ){
			return true;
		}
		else if ( ((E)o).compareTo(this.data) < 0 ){
			if (this.left == null){
				return false;
			}
			else {
				return this.left.contains(o);
			}
		}
		else if ( ((E)o).compareTo(this.data) > 0){
			if (this.right == null){
				return false;
			}
			else {
				return this.right.contains(o);
			}
		}
		return false;
	}
	
	/**
	 * This method will use recursion to go as far left of the set as possible to find the lowest element
	 * @return E the first(lowest) element in the set
	 */
	public E first(){
		if (this.left != null){
			return this.left.first();
		}
		return this.data;
	}
	
	/**
	 * This method will use recursion to go as far right of the set as possible to find the highest element
	 * @return the last(highest) element in the set
	 */
	public E last(){
		if (this.right != null) {
			return this.right.first();
		}
		return this.data;
	}
}
