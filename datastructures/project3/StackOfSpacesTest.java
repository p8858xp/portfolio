package project3;
import static org.junit.Assert.*;
import org.junit.Test;

/**
 * This class will have a set of unit tests for the StackOfSpaces class and test whether or not the
 * methods inside of that class are working the way that they are supposed to. The unit tests will also
 * demonstrate the class’ correctness (or bugs) independent of the program itself.
 * @author PaulPark
 * @version 10/27/16
 */

public class StackOfSpacesTest {

	 /*
	  *This method will test if an object of the StackOfSpaces class, 
	  *assigned a reference variable will point to null or not
	  *(Should not be null)
	 */
	@Test
	public void testConstructor(){
		StackOfSpaces stack = new StackOfSpaces();
		assertNotNull("Default constructor is null.", stack);
	}
	
	/*
	 * This method will test if the stack is empty when just creating 
	 * an instance of the StackOfSpaces class (Should be empty)
	 */
	@Test
	public void testIsEmpty(){
		StackOfSpaces stack = new StackOfSpaces();
		assertTrue("The stack is not empty", stack.isEmpty());
	}
	
	/*
	 * This method will test if by adding a SquarePosition 
	 * object to the initially empty stack, the stack is now empty or not(should NOT be empty)
	 */
	@Test
	public void testAddAndIsEmpty(){
		StackOfSpaces stack = new StackOfSpaces();
		stack.add(new SquarePosition(3,5));
		assertFalse("The stack is empty.", stack.isEmpty());
	}
	
	/*
	 * This method will test if by adding one SquarePosition object and then
	 * removing it, the stack is empty (Stack should be empty)
	 */
	@Test
	public void testRemoveAndIsEmpty(){
		StackOfSpaces stack = new StackOfSpaces();
		stack.add(new SquarePosition(3,5));
		stack.remove();
		assertTrue("The stack is not empty", stack.isEmpty());
	}
	
	/*
	 * This method will test if the remove method is returning the correct SquarePosition object
	 */
	@Test
	public void testAddingAndRemoving(){
		StackOfSpaces stack = new StackOfSpaces();
		SquarePosition first = new SquarePosition(3,5);
		SquarePosition second = new SquarePosition(2,5);
		stack.add(first);
		stack.add(second);
		SquarePosition removed = stack.remove();
		assertEquals("The object returned by the remove method is not the SquarePosition object at (2,5)", second, removed);
	}
	
	/*
	 * This method will attempt to remove from an empty stack and test 
	 * whether remove() is returning null or not(Should be returning null)
	 */
	@Test
	public void testRemoveFromEmptyStack(){
		StackOfSpaces stack = new StackOfSpaces();
		SquarePosition removed = stack.remove();
		assertEquals("What was removed from the empty stack was not equal to null.",removed, null);
	}
	
	/*
	 * This method will test whether or not the stack will be
	 * empty when adding null to a stack.(should NOT be empty)
	 */
	@Test
	public void testAddNull(){
		StackOfSpaces stack = new StackOfSpaces();
		stack.add(null);
		assertFalse("Stack is empty.",stack.isEmpty());
	}
	
	/*
	 * This method will test if by adding and removing to make the stack empty, whether or not the
	 * stack points to null (Stack reference variable should still not point to null)
	 */
	@Test
	public void testEmptyStackNotNull(){
		StackOfSpaces stack = new StackOfSpaces();
		stack.add(new SquarePosition(2,1));
		stack.remove();
		assertNotNull("Stack is null",stack);
	}
	
	/*
	 * This method will again test whether the remove() and add() method are working but
	 * this time will test that when removing the same/different SquarePosition objects twice
	 * what's being returned from the two instances should be equal/not equal depending on
	 * whether or not the SquarePositions objects next to each other have the same (rows, columns)
	 */
	@Test
	public void testAddingAndRemoveAgain(){
		StackOfSpaces stack = new StackOfSpaces();
		SquarePosition first = new SquarePosition(3,5);
		SquarePosition second = new SquarePosition(3,4);
		SquarePosition third = new SquarePosition(4,6);
		stack.add(first);
		stack.add(second);
		stack.add(third);
		SquarePosition removed_third = stack.remove();
		SquarePosition removed_second = stack.remove();
		assertNotEquals("Remove method must have failed.", removed_third, removed_second);
		
		SquarePosition fourth = new SquarePosition(2,3);
		SquarePosition fifth = new SquarePosition(2,3);
		stack.add(fourth);
		stack.add(fifth);
		SquarePosition removed_fifth = stack.remove();
		SquarePosition removed_fourth = stack.remove();
		assertEquals("Remove method must have failed.", removed_fourth, removed_fifth);
		assertFalse("Stack is empty.",stack.isEmpty());
	}
	
	
}



