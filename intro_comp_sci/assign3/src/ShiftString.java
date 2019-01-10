//HW2(ShiftString)
//pp1445
//
//Paul Park
//1 hour
//*************************
import java.util.Scanner;
public class ShiftString {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner in = new Scanner(System.in);
		//prompt user to enter a string
		System.out.println("Please enter a string: ");
		//ask user how much they want to shift by
		System.out.println("How much do you want to shift by: ");
		String name = in.nextLine();
		int shiftNum = in.nextInt();
		//call the method shift here
		System.out.println(shift(name, shiftNum));
		in.close();
	}
	//create a method called shift with two parameters (one for user's word and other for shift num)
	public static String shift(String word, int numberToShift){
		//use the toCharArray method to get the string into an array of characters
		char [] listChar = word.toCharArray();
		char lastLetter = listChar[word.length()-1];
		//set last letter to index of position 0
		for (int x = word.length()-2;x >= 0;x--){
			listChar[x+1]=listChar[x];
			}
		//put the last latter of the user's string as the first letter now
		listChar[0]=lastLetter;
		//convert characters to string form
		String shiftedWord = new String (listChar);
		//if user wants to shift by anything more than 1 called the method here to shift the by whatever is remaining
		if (numberToShift!=1){
			return shift(shiftedWord,numberToShift-1);
		}
		return shiftedWord;
		}
	
	
}
