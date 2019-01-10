package project4;
import java.io.IOException;
import java.util.*;

/**
 *This class is a container class that follows the binary search tree ideas. This class will
 *implement a subset of methods provided by the TreeSet<E> class
 * @author PaulPark
 * @version 11/21/16
 */

public class MyBST<E extends Comparable<E>> {
	protected Node<E> root;
	
	//This default constructor instantiates the root data field as a new Node object
	public MyBST(){
		root = new Node<E>();
	}
	
	/**
	 * This method will implement the recursive algorithm that was given and
	 * will store information about all the regular files that are contained 
	 * in the directory 
	 * @param e a generic element to be added to the set
	 * @throws ClassCastException
	 * @throws NullPointerException
	 * @return a boolean deciding whether an element e can be added or not
	 */
	public boolean add( E e ) throws ClassCastException, NullPointerException{
		//if e is null, then throw a NullPointerException
		if (e == null){
			throw new NullPointerException("The element trying to be added is null.");
		}
		//if the root is null, then make a new node with e as its data and set it as the root
		else if ( root == null ){
			root = new Node<E>(e);
			return true;
		}
		//if e, the element trying to be added is not the same type as what's already in the set, then throw a ClassCastException
		
		//otherwise, add e according the the binary search tree ideas discussed in class
		
		return root.add(e);
		
	}

	/**
	 * This method will return true if the set contains the specified elements.
	 * @param o an object to be checked whether it is or is not already in the set
	 * @throws ClassCastException
	 * @throws NullPointerException
	 * @return a boolean deciding whether the set does or does not contain the object o
	 */
	public boolean contains( Object o ) throws NullPointerException, ClassCastException{
		//if the object o is null, then throw a NullPointerException
		if ( o == null){
			throw new NullPointerException("The specified element is null.");
		}
		//if the root is null, then there's not way the set contains the element and return false
		if (root == null){
			return false;
		}
		//if the object o is not the same type as what is already part of the set, then throw a ClassCastException
		
		E object = (E)o;
		
		//Otherwise, follow the BST ideas to check whether the set does contain o
		return root.contains(object);

	}
	
	/**
	 * This method will return the first(lowest) element currently in the set
	 * @throws NoSuchElementException if the root is null(the set is empty)
	 * @return E the first(lowest) element currently in the set
	 */
	public E first() throws NoSuchElementException{
		if (root == null){
			throw new NoSuchElementException("The set is empty.");
		}
		else {
			//if the root does not have a left child, then just return root's data because it must be the lowest element
			if (root.getLeft() == null){
				return (E)root.getData();
			}
			//otherwise, call the first method inside the Node class that will recursively go through the left subtree
			else {
				return (E)root.first();
			}
		}
	}
	
	/**
	 * This method will return the last(highest) element currently in the set
	 * @throws NoSuchElementException if the root is null(the set is empty)
	 * @return E the last(highest) element currently in the set
	 */
	public E last() throws NoSuchElementException{
		if (root == null){
			throw new NoSuchElementException("The set is empty.");
		}
		else {
			//if the root does not have a right child, then the root must be the highest element because the left subtree have values all less than the root
			if (root.getRight() == null){
				return (E)root.getData();
			}
			//otherwise, call the last method inside the Node class that will recursively go through the right subtree
			return (E)root.last();
		}
	}

	/**
	 * This method will return a boolean deciding whether the set is empty or not
	 * @return a boolean deciding whether the tree is empty or not
	 */
	public boolean isEmpty(){
		//if the root is null, then the tree is empty and return true
		if (root == null){
			return true;
		}
		//otherwise, the tree is not empty and return false
		else {
			return false;
		}
	}
	
	/**
	 * This method will removed the specified element from the set if it is present
	 * @param o an object to be removed from the set
	 * @throws ClassCastException if the object o is not the same type as the elements already in the set
	 * @throws NullPointerException if the object o is null
	 * @return a boolean deciding whether an object o can be removed or not
	 */
	public boolean remove( Object o ) throws ClassCastException, NullPointerException{
		if ( o == null){
			throw new NullPointerException("The element to be removed is null.");
		}
		else if (!(o.getClass().equals(root.getClass()))){
			throw new ClassCastException("The element to be removed is not the same type as those in the set.");
		}
		//if the root is null, the set is empty and there is nothing you can remove so return false
		else if(root == null){
			return false;
		}
		E object = (E)o;
		if (!this.contains(object)){
			return false;
		}
		return remove(root, object);
	}
	
	/**
	 * This method will take two parameters(a Node<E> object and an E object) and return a boolean
	 * @param node a node object
	 * @param object a generic E object
	 * @return a boolean deciding whether an object o can be removed or not
	 */
	public boolean remove(Node<E> node, E object){
		if (node.getData().equals(object)){
			if (node.getLeft() != null){
				Node<E> temp = node.getLeft();
				while(temp.getRight()!= null){
					temp = temp.getRight();
				}
				node.setData(temp.getData());
				temp.getLeft().setRight(null);
			}
			else if (node.getRight() != null){
				Node<E> temp = node.getRight();
				while(temp.getLeft()!= null){
					temp = temp.getLeft();
				}
				node.setData(temp.getData());
				temp.getRight().setLeft(null);
			}
			else {
				node.setData(null);
			}
			return true;
		}
		else {
			if (object.compareTo(node.getData()) < 0){
				return remove(node.getLeft(),object);
			}
			else {
				return remove(node.getRight(),object);
			}
		}
	}
	
	/**
	 * This method will return an iterator over the elements in this set in ascending order
	 * @return Iterator<E> object over the elements in the set in ascending order(inorder traversal)
	 */
	public Iterator<E> iterator(){
		//make a LinkedList of Node<E> objects called queue
		LinkedList<Node<E>> queue = new LinkedList<Node<E>>();
		//call the recInorderTraversal method to get the elements inorder 
		recInorderTraversal(root, queue);
		MyBSTIterator<E> iterator = new MyBSTIterator(queue);
		return iterator;
	}
	
	/**
	 * This method will recursively traverse through the entire set and add elements to the queue in ascending order
	 * @param node a Node<E> object to start traversing from(most likely the root)
	 * @param queue a LinkedList<Node<E>> to put the elements inorder
	 */
	public void recInorderTraversal(Node<E> node, LinkedList<Node<E>> queue){
		if (node == null){
			return;
		}
		else {
			recInorderTraversal(node.getLeft(), queue);
			queue.add(node);
			recInorderTraversal(node.getRight(), queue);
		}
	}
	
}
