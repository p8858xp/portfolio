package project5;

import java.util.*;
import java.io.File;
import java.io.FileNotFoundException;

/**
 * This class represents the actual program that will try to read a text file and put the words as keys
 * into a hashmap and the count as the values. Before, putting the words into the hashmap however, the class
 * will parse the words to take care of any delimiters or cases in which the String is not a word. Depending on the
 * arguments inputted, the words will be sorted by "name", "frequency", or scarcity by creating Word objects from the hashmap 
 * and adding them to an ArrayList and using mergesort. 
 * @author PaulPark
 * @version 12/08/16
 */
public class PopularWords{  
	
	public static void main(String[] args) throws FileNotFoundException {
		//setup the hashmap
		HashMap<String, Integer> map = new HashMap<>();
 		
		//If the file cannot be read then print an error message, otherwise, try to find the file 
		File words = new File("src/words.txt");
		if (!words.canRead()) {
			System.err.printf("Error: cannot read data from file 'words.txt'");
			System.exit(1);
		}
		Scanner input = null;
		try {
			input = new Scanner(words);
		}
		//if a FileNotFoundException is caught, then print an error message and exit the program.
		catch (FileNotFoundException e) {
			System.err.printf("Error: cannot read data from file 'words.txt'");
			System.exit(1);
		}
		//useDelimiter to handle most of the cases that separate words by some delimiter
		input.useDelimiter("(\\s*[^A-Za-z\\-_']\\s*)|([\\-_'][\\-_']+)|(\\s+[\\-_']+)|([\\-_']+\\s+)");
		
		
	    while (input.hasNext()){
	    	String line = input.next();
	    	//make all the words in the file lower case
	    	line = line.toLowerCase();
	    	//if the length of the word is 0, then continue through the while loop
	    	if (line.length() == 0){
	    		continue;
	    	}
	    	//if the first and last character of the word is an apostrophe, then don't include those charaters and put into the hashmap
	    	//if the word is already in the hashmap, then just increment its count
	    	else if (line.charAt(0) == '\'' && line.charAt(line.length()-1) == '\''){
	    		line = line.substring(1, line.length()-1);
	    		if (map.containsKey(line)){
	    			map.put(line, map.get(line)+1);
	    		}
	    		else{
	    			map.put(line,1);
	    		}
	    	}
	    	//if just the first character is an apostrophe, then remove it and add it to the hashmap
	    	//if the word is already in the hashmap, then just increment its count
	    	else if (line.charAt(0) == '\'') {
	    		line = line.substring(1,line.length());
	    		if (map.containsKey(line)){
	    			map.put(line, map.get(line)+1);
	    		}
	    		else{
	    			map.put(line,1);
	    		}
	    	}
	    	//if just the last character is an apostrophe, then remove it and add it to the hashmap
	    	//if the word is already in the hashmap, then just increment its count
	    	else if (line.charAt(line.length()-1) == '\''){
	    		line = line.substring(0,line.length()-1);
	    		if (map.containsKey(line)){
	    			map.put(line, map.get(line)+1);
	    		}
	    		else{
	    			map.put(line,1);
	    		}
	    	}
	    	//if both the first and last characters are an hyphen, then remove them and add the word to the hashmap
	    	//if the word is already in the hashmap, then just increment its count
	    	else if (line.charAt(0) == '-' && line.charAt(line.length()-1) == '-'){
	    		line = line.substring(1, line.length()-1);
	    		if (map.containsKey(line)){
	    			map.put(line, map.get(line)+1);
	    		}
	    		else{
	    			map.put(line,1);
	    		}
	    	}
	    	//if just the first character is a hyphen, then remove it and add it to the hashmap
	    	//if the word is already in the hashmap, then just increment its count
	    	else if (line.charAt(0) == '-') {
	    		line = line.substring(1,line.length());
	    		if (map.containsKey(line)){
	    			map.put(line, map.get(line)+1);
	    		}
	    		else{
	    			map.put(line,1);
	    		}
	    	}
	    	//if just the last character is a hyphen, then remove it and add it to the hashmap
	    	//if the word is already in the hashmap, then just increment its count
	    	else if (line.charAt(line.length()-1) == '-'){
	    		line = line.substring(0,line.length()-1);
	    		if (map.containsKey(line)){
	    			map.put(line, map.get(line)+1);
	    		}
	    		else{
	    			map.put(line,1);
	    		}
	    	}
	    	//if both the first and last characters are an underscore, then remove them and add the word to the hashmap
	    	//if the word is already in the hashmap, then just increment its count
	    	else if (line.charAt(0) == '_' && line.charAt(line.length()-1) == '_'){
	    		line = line.substring(1, line.length()-1);
	    		if (map.containsKey(line)){
	    			map.put(line, map.get(line)+1);
	    		}
	    		else{
	    			map.put(line,1);
	    		}
	    	}
	    	//if just the first character is an underscore, then remove it and add it to the hashmap
	    	//if the word is already in the hashmap, then just increment its count
	    	else if (line.charAt(0) == '_') {
	    		
	    		line = line.substring(1,line.length());
	    		
	    		if (map.containsKey(line)){
	    			map.put(line, map.get(line)+1);
	    		}
	    		else{
	    			map.put(line,1);
	    		}
	    	}
	    	//if just the last character is a hyphen, then remove it and add it to the hashmap
	    	//if the word is already in the hashmap, then just increment its count
	    	else if (line.charAt(line.length()-1) == '_'){
	    		line = line.substring(0,line.length()-1);
	    		if (map.containsKey(line)){
	    			map.put(line, map.get(line)+1);
	    		}
	    		else{
	    			map.put(line,1);
	    		}
	    	}
	    	//if none of those cases are true, then just add the word to the hashmap 
	    	//if the word is already in the hashmap, then just increment its count
    		else {
    			if (map.containsKey(line)){
	    			map.put(line, map.get(line)+1);
	    		}
	    		else{
	    			map.put(line,1);
	    		}
    		}
	    }
	   //create an Arraylist of Word objects
	    ArrayList<Word> keys = new ArrayList<Word>();
	    
	    //if args.length is 2 then k is total number of unique words, so add all the Word objects to the Arraylist
	    if (args.length == 2){
	    	for (String key: map.keySet()){
		    	Word word = new Word(key, map.get((key)));
		    	keys.add(word);
		    }
	    	
	    	if (args[1].equalsIgnoreCase("name")){
	    		//mergesort alphabetically
	    		mergeSort(keys, 1);
	    		//Since everything is now sorted, print out the results
	    		for(Word w: keys){
	    			System.out.println(w);
	    		}
	    	}
	    	else if (args[1].equalsIgnoreCase("frequency")){
	    		//mergesort by count
	    		mergeSort(keys, 2);
	    		Collections.reverse(keys);
	    		for(int i = 0; i <keys.size(); i++){
	    			boolean changee = false;
	    			int change = 0;
	    			for (int j = i +1; j < keys.size(); j++){
	    				if (keys.get(i).getCount() == keys.get(j).getCount()){
	    					if (keys.get(i).compareBy(keys.get(j), 1) == 1){
	    						changee = true;
	    						change = j;
	    					}
	    				}
	    			}
	    			if (changee == true){
	    				Word temp = keys.get(i);
	    				keys.set(i, keys.get(change));
	    				keys.set(change, temp);
	    			}
	    			
	    		}
	    		//Since everything is now sorted, print out the results
	    		for(int i = 0; i < keys.size(); i++){
	    			System.out.println(keys.get(i).toString());
	    		}
	    	}
	    	else if (args[1].equalsIgnoreCase("scarcity")){
	    		//mergesort by count
	    		mergeSort(keys, 2);
	    		//Since everything is now sorted, print out the results
	    		for(Word w: keys){
	    			System.out.println(w);
	    		}
	    	}
	    	//if args[1] is not any of these inputs, print an error message and exit the program.
	    	else{
	    		System.err.println("That is not a valid argument entry. Please try again.");
	    		System.exit(1);
	    	}
	    }
	   //else if args.length is 3 then check whether args[2] is in fact a number....if it's not give an error and exit 
	   else if (args.length == 3){
	    	//cast the args[2] to a char and then check if args[2] is a number or not with Character class
	    	//if its not a number, print an error message.
		   	char c = args[2].charAt(0);
	    	if (Character.isDigit(c)!=true){
	    		System.err.println("The argument must be a number. Try agin.");
	    	}
	    	//otherwise, check if the number is not 0, negative, and greater than the number of unique words
	    	else{
	    		int num = Integer.parseInt(args[2]);
	    		if (num <= 0 || num > map.size()){
	    			System.err.println("Sorry, that is not a valid number.Try again.");
	    		}
	    		//since the number is valid, now add all the Word objects to the ArrayList
	    		else {
	    			for (String key: map.keySet()){
	    		    	Word word = new Word(key, map.get((key)));
	    		    	keys.add(word);
	    		    }
    				if (args[1].equalsIgnoreCase("name")){
    		    		//mergesort alphabetically
    					mergeSort(keys,1);
    					//Print only the first num(the 3rd arugment) words of the ArrayList
    					for(int i = 0; i < num; i++){
    		    			System.out.println(keys.get(i).toString());
    		    		}
    		    	}
    		    	else if (args[1].equalsIgnoreCase("frequency")){
    		    		mergeSort(keys,2);
    		    		//Print only the first num(the 3rd arugment) words of the ArrayList
    		    		Collections.reverse(keys);
    		    		for(int i = 0; i <keys.size(); i++){
    		    			boolean changee = false;
    		    			int change = 0;
    		    			for (int j = i +1; j < keys.size(); j++){
    		    				if (keys.get(i).getCount() == keys.get(j).getCount()){
    		    					if (keys.get(i).compareBy(keys.get(j), 1) == 1){
    		    						changee = true;
    		    						change = j;
    		    					}
    		    				}
    		    			}
    		    			if (changee == true){
    		    				Word temp = keys.get(i);
    		    				keys.set(i, keys.get(change));
    		    				keys.set(change, temp);
    		    			}
    		    			
    		    		}
    		    		for (int i = 0; i < num; i++){
    		    			System.out.println(keys.get(i).toString());
    		    		}
    		    	}
    		    	else if (args[1].equalsIgnoreCase("scarcity")){
    		    		mergeSort(keys,2);
    		    		//Print only the first num(the 3rd arugment) words of the ArrayList
    		    		for(int i = 0; i < num; i++){
    		    			System.out.println(keys.get(i).toString());
    		    		}
    		    	}
    				//if args[1] is not any of these inputs, then print an error message and exit the program.
    		    	else{
    		    		System.err.println("That is not a valid argument entry. Please try again.");
    		    		System.exit(1);
    		    	}
	    		}
	    	}
	    }
	    //else, theres invalid number arguments so print an error message and exit the program
	    else {
	    	System.err.println("Invalid number of arguments. Please try again.");
			System.exit(1);
	    }
	    
	}
	
	/**
	 * This method will merge two ArrayLists together and sort depending on sort_by_what.
	 * If sort_by_what is 1, then the method will sort the ArrayLists by alphabetic order. If 
	 * sort_by_what is 2, then the method will sort the ArrayLists by the Word objects' counts.
	 * @param array an ArrayList of Word objects
	 * @param leftFirst an int representing the left part's first index
	 * @param leftLast an int representing the left part's last index
	 * @param rightFirst an int representing the right part's first index
	 * @param rightLast an int representing the right part's last index
	 * @param sort_by_what an int that will decide whether to sort by the word(alphabetically) or by the count
	 */
	public static void merge (ArrayList<Word> array, int leftFirst, int leftLast, int rightFirst, int rightLast, int sort_by_what){
		ArrayList<Word> temp = new ArrayList<Word>();
		//make the size of the temp array the same size as the array being passed 
		for (int i = 0; i < array.size(); i++){
			temp.add(i, new Word("doesnt matter",2));
		}
		//set indexLeft to leftFirst
		int indexLeft = leftFirst;
		//set indexRight to rightFirst
		int indexRight = rightFirst;
		//set index to 0
		int index = 0;
		
		while (indexLeft <= leftLast && indexRight <= rightLast){
			//this is only if sorting alphabetically by the word
			if (sort_by_what == 1){
				if (array.get(indexLeft).compareBy(array.get(indexRight),1) < 0){
					//set tmp[index] to array[indexLeft]
					temp.set(index, array.get(indexLeft)); 
					//increment indexLeft
					indexLeft++;
				}
				else{
					//set tmp[index] to array[indexRight]
					temp.set(index, array.get(indexRight));
					//increment indexRight
					indexRight++;
				}	
				//increment index
				index++;
			}
			else if (sort_by_what == 2){
				if (array.get(indexLeft).compareBy(array.get(indexRight),2) < 0){
					//set tmp[index] to array[indexLeft]
					temp.set(index, array.get(indexLeft)); 
					//increment indexLeft
					indexLeft++;
				}
				else if (array.get(indexLeft).compareBy(array.get(indexRight),2) > 0){
					//set tmp[index] to array[indexRight]
					temp.set(index, array.get(indexRight));
					//increment indexRight
					indexRight++;
				}
				else {
					if (array.get(indexLeft).compareBy(array.get(indexRight),1) < 0){
						//set tmp[index] to array[indexLeft]
						temp.set(index, array.get(indexLeft)); 
						//increment indexLeft
						indexLeft++;
					}
					else{
						//set tmp[index] to array[indexRight]
						temp.set(index, array.get(indexRight));
						//increment indexRight
						indexRight++;
					}
				}
				//increment index
				index++;
			}
			else {
				System.err.println("Invalid way to sort. Please enter 1 or 2 to sort by.");
			}
		}
		//copy elements in range indexLeft-leftLast to tmp
		for (int i = indexLeft; i < leftLast + 1; i++){
			temp.set(index, array.get(i));
			index++;
		}
		//copy elements in range indexRight-rightLast to tmp
		for (int i = indexRight; i < rightLast + 1; i++){
			temp.set(index, array.get(i));
			index++;
		}
		//copy tmp to array starting at leftFirst
		int j = 0;
		for (int i = leftFirst; i < rightLast + 1; i++){
			array.set(i, temp.get(j));
			j++;
		}
	}
	
	/**
	 * This method will accept two parameters(an ArrayList of Word objects and an int). 
	 * Then it will call another method mergeSortRec.
	 * @param array an ArrayList of Word objects
	 * @param sort_by_what int that will later decide what to sort by.
	 */
	public static void mergeSort(ArrayList<Word> array, int sort_by_what){
		mergeSortRec(array, 0, array.size()-1, sort_by_what);
	}
	
	/**
	 * This method will recursively call itself in order to split an ArrayList in half until the base
	 * case is reached which is when the length of the array is just 1. Once the base case is reached,
	 * this method will call the merge method to merge the left and right parts together.
	 * @param array an ArrayList of Word objects
	 * @param firstIndex an int representing the first index of the array
	 * @param lastIndex an int representing the last index of the array
	 * @param sort_by_what an int that will later decide what to sort by
	 */
	public static void mergeSortRec(ArrayList<Word> array, int firstIndex, int lastIndex, int sort_by_what){
		//base case
		if (firstIndex == lastIndex){
			return;
		}
		int mid = (firstIndex + lastIndex)/2;
		mergeSortRec(array, firstIndex, mid, sort_by_what);
		mergeSortRec(array, mid+1, lastIndex, sort_by_what);
		merge(array, firstIndex, mid, mid+1, lastIndex, sort_by_what);
	}
}

	    	
