package project5;

/**
 * This class Word is a way to construct a Word object that contains a String and an int which
 * represents the frequency of that word. The class will have two private data fields, word and count
 * that will have getter methods to be used in the PopularWords class. Lastly this class will have a 
 * toString method to represent the data of the Word object and a compareBy method that can compare
 * which word object is greater or smaller
 * @author PaulPark
 * @version 12/08/16
 */

public class Word {
private String word;
private int count;
	
	//Create a two parameter constructor that will accept a String and an integer 
	public Word(String word, int count){
		this.word = word;
		this.count = count;
	}
	
	/**
	 * This method will get the word from the Word object
	 * @return the word (String)
	 */
	public String getWord(){
		return word;
	}
	
	/**
	 * This method will get the count from the Word object
	 * @return the count (int)
	 */
	public int getCount(){
		return count;
	}
	
	/**
	 * This method will display a meaningful message of the Word object
	 * @return a String representation of the Word object that displays the word and the count
	 */
	public String toString(){
		return word + " " + count;
	}
	
	/**
	 * This method will get the word from the Word object
	 * @param W the Word being compared by
	 * @param num the number that will decide whether to compare by the word or the count
	 * @return int that will decide which Word is greater or smaller 
	 */
	public int compareBy(Word W, int num){
		//if num is 1, compare alphabetically
		if (num == 1){
			int result  = this.word.compareTo(W.word);
			if (result < 0){
				return -1;
			}
			else if (result > 0){
				return 1;
			}
			else {
				return 0;
			}
		}
		//if num is 2, compare by count
		else if (num == 2){
			if (this.count < W.count){
				return -1;
			}
			else if (this.count > W.count){
				return 1;
			}
			else {
				//if there's a tie of count use alphabetical ordering
				int result  = this.word.compareTo(W.word);
				if (result < 0){
					return -1;
				}
				else if (result > 0){
					return 1;
				}
				else {
					return 0;
				}
			}
		}
		else{
			return -1;
		}
	}
	
}


