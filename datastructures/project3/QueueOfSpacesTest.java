package project3;
import static org.junit.Assert.*;
import org.junit.Test;

/**
 * This class will have a set of unit tests for the QueueOfSpaces class and test whether or not the
 * methods inside of that class are working the way that they are supposed to. The unit tests will also
 * demonstrate the class’ correctness (or bugs) independent of the program itself.
 * @author PaulPark
 * @version 10/27/16
 */


public class QueueOfSpacesTest {

	/*
	  *This method will test if an object of the QueueOfSpaces class, 
	  *assigned a reference variable will point to null or not
	  *(Should not be null)
	 */
	@Test
	public void testConstructor(){
		QueueOfSpaces queue = new QueueOfSpaces();
		assertNotNull("The default constructor is null.", queue);
	}
	
	/*
	 * This method will test if the queue is empty when just creating 
	 * an instance of the QueueOfSpaces class (Should be empty)
	 */
	@Test
	public void testIsEmpty(){
		QueueOfSpaces queue = new QueueOfSpaces();
		assertTrue("The queue is not empty.", queue.isEmpty());
	}
	
	/*
	 * This method will test if whether or not the queue will be empty
	 * by adding null to the queue(should NOT be empty)
	 */
	@Test
	public void testAddNull(){
		QueueOfSpaces queue = new QueueOfSpaces();
		queue.add(null);
		assertFalse("Queue is empty.",queue.isEmpty());
	}
	
	/*
	 * This method will test if by adding a SquarePosition 
	 * object to the initially empty queue, the queue is now empty or not(should NOT be empty)
	 */
	@Test
	public void testAddAndIsEmpty(){
		QueueOfSpaces queue = new QueueOfSpaces();
		queue.add(new SquarePosition(4,2));
		assertFalse("The queue is empty.", queue.isEmpty());
	}
	
	/*
	 * This method will test if by adding one SquarePosition object and then
	 * removing it, the queue is empty (queue should be empty)
	 */
	@Test
	public void testRemoveAndIsEmpty(){
		QueueOfSpaces queue = new QueueOfSpaces();
		queue.add(new SquarePosition(4,2));
		queue.remove();
		assertTrue("The queue is not empty", queue.isEmpty());
	}
	
	/*
	 * This method will attempt to remove from an empty queue and test 
	 * whether remove() is returning null or not(Should be returning null)
	 */
	@Test
	public void testRemovingFromEmptyQueue(){
		QueueOfSpaces queue = new QueueOfSpaces();
		assertEquals("Removing from the empty queue does not return null.",queue.remove(),null);
	}
	
	/*
	 * This method will test if by adding and removing to make the queue empty, whether or not the
	 * queue points to null (queue reference variable should still not point to null)
	 */
	@Test
	public void testEmptyQueueNotNull(){
		QueueOfSpaces queue = new QueueOfSpaces();
		SquarePosition first = new SquarePosition(3,5);
		queue.add(first);
		queue.remove();
		assertNotNull("The queue is null.",queue);
	}
	
	/*
	 * This method will test that the remove() method is working and that removing two different
	 * SquarePosition what the remove() method returns is different in comparison to the different objects.
	 */
	@Test
	public void testRemovingReturnValues(){
		QueueOfSpaces queue = new QueueOfSpaces();
		SquarePosition first = new SquarePosition(3,5);
		SquarePosition second = new SquarePosition(4,6);
		queue.add(first);
		queue.add(second);
		assertNotEquals("The SquarePosition object returned from removing first is equal to the object returned from removing again.",queue.remove(),queue.remove());
	}
	
	/*
	 * This method will test that by adding to the queue and having the last node in the queue be equal 
	 * to the first queue, what is being removed and therefore returned is the same/different to what is at
	 * the end of the queue depending on the SquarePosition object given.
	 */
	@Test
	public void testAddingAndRemoving(){
		QueueOfSpaces queue = new QueueOfSpaces();
		SquarePosition first = new SquarePosition(3,5);
		SquarePosition second = new SquarePosition(4,6);
		SquarePosition third = new SquarePosition(3,5);
		queue.add(first);
		queue.add(second);
		queue.add(third);
		SquarePosition removed = queue.remove();
		assertEquals("What was removed and the last node in the queue are not equal.",removed, third);
		
		SquarePosition fourth = new SquarePosition(2,4);
		SquarePosition fifth = new SquarePosition(3,4);
		queue.add(fourth);
		queue.add(fifth);
		assertNotEquals("The object just added is equal to what just removed from the queue.", fifth, queue.remove());
	}
	
	
	
}