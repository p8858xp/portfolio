package project1;

import java.io.File;
import java.io.FileNotFoundException;
import java.util.Scanner;

/**
 * This class is used to test whether or not I have correctly setup up all my data files
 * @author PaulPark
 * @version 09/24/16
 */

public class TestFileRead {
public static void main(String[] args) {
String fileName = "data/yob1984.txt";
File f = new File(fileName);
if (!f.canRead()) {
	System.err.printf("Error: cannot read " + "data from file %s" , fileName);
	System.exit(1);
}
Scanner inputFile = null;
try {
	inputFile = new Scanner(f);
} 
catch (FileNotFoundException e) {
	System.err.printf("Error: cannot read "+ "data from file %s" , fileName);
	System.exit(1);
}

while (inputFile.hasNextLine()) {
	System.out.println( inputFile.nextLine() );
}
inputFile.close();
	}
}
