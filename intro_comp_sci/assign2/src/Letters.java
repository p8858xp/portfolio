//HW2(Letters)
//pp1445
//
//Paul Park
//30 minutes
//*************************
import java.util.Scanner;
public class Letters {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner in = new Scanner (System.in);
		/*prompt user to enter a single character
		  check if the character is a letter
		  if it is a letter, return whether the letter is 
		  a consonant or a vowel. Otherwise, return that what they
		  entered is not a letter.
		 */
		System.out.println("Enter a character: ");
		char letter = in.next().charAt(0);
		
		if (Character.isLetter(letter))
			//if char is letter then check if it's vowel/consonant
			
			if (letter == 'A' || letter == 'E' || letter == 'I' || letter == 'O' || letter == 'U'
			|| letter == 'a' || letter == 'e' || letter == 'i' || letter == 'o' || letter == 'u')
				System.out.println(letter + " is a vowel.");
			else {
				System.out.print(letter + " is a consonant.");
			}
		
		else {
			System.out.print(letter + " is not a letter.");
		}
					
		in.close();
	}

}
