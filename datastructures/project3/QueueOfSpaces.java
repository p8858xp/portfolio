package project3;

/**
 * This class implements the SetOfSpaces interface and therefore implements all the methods contained in
 * the interface given. This class will provide methods for adding and removing by following a queue referenced-based
 * algorithm and also a method to test whether the queue is empty or not.
 * @author PaulPark
 * @version 10/27/16
 */
public class QueueOfSpaces implements SetOfSpaces {
		
		Node head = null;
		Node tail = null;
		
		/**
		 * Add a SquarePosition object to the set.
		 * @param s - object to be added
		 */
		public void add ( SquarePosition s ){
			if (head == null){
				Node n = new Node();
				n.setData(s);
				head = n;
				tail = n;
			}
			else {
				Node n = new Node();
				n.setData(s);
				Node current = head;
				while (current.next != null){
					current = current.getNext();
				}
				n.setNext(null);
				current.setNext(n);
				tail = n;
			}
		}
		
		/**
		 * Remove the next object from the set. The specific
		 * item returned is determined by the underlying structure
		 * of set representation.
		 * @return - the next object, or null if set is empty
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
