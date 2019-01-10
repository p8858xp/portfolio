package project4;
import java.util.*;

/**
 *This class will implement the Iterator<E> interface and use a LinkedList data structure to create an iterator
 *and that implements the methods provided in the Iterator<E> interface
 * @author PaulPark
 * @version 11/21/16
 */

public class MyBSTIterator<E> implements Iterator<E> {
	LinkedList<Node> queue;
	
	//A one parameter constructor that takes a LinkedList<Node> called queue
	public MyBSTIterator(LinkedList<Node> queue){
		this.queue = queue;
	}

	/**
	 * This method returns true if the iteration has more elements.
	 * @return a boolean to see whether or not there is another element in the iterator
	 */
    public boolean hasNext() {
    	if (queue.isEmpty()){
    		return false;
    	}
    	else {
    		return true;
    	}
    }
    
    /**
	 * This method returns true if the iteration has more elements.
	 * @throws NoSuchElementException if the iteration has no more elements
	 * @return E the next element in the iteration
	 */
    public E next() throws NoSuchElementException {
        if(this.hasNext()) {
            Node node = queue.removeFirst();
            return (E)node.getData();
        }
        throw new NoSuchElementException("The iteration has no more elements.");
    }
    
    /**
	 * This method removes from the underlying collection the last element returned by this iterator 
	 * @throws UnsupportedOperationException if the remove operation is not supported by this iterator
	 */
    public void remove() throws UnsupportedOperationException {
        throw new UnsupportedOperationException("Remove operation is not supported by this iterator.");
    }
}
