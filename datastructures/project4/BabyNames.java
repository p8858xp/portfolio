package project4;

import java.io.File;
import java.io.FileNotFoundException;
import java.util.Scanner;

/**
 * This class represents the actual program. It has the main method
 * and it is responsible for opening and reading the data files, obtaining 
 * user input, performing some data validation and handing all errors that may occur
 * @author PaulPark
 * @version 11/21/16
 */

public class BabyNames {
	
	/**
	 * This method reads one data file depending on what the year is in the parameter and
	 * it puts that data as an YearNames object
	 * @param year
	 * @return YearNames 
	 */
	public static YearNames makeYearName(int year){
		String fileName = "data/yob"+year+".txt";
		YearNames year_name = new YearNames(year);
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
			String[] line = inputFile.nextLine().split(",");
			Name babyname = new Name(line[0].toLowerCase(),line[1],Integer.parseInt(line[2]));
			year_name.add(babyname);
		}
		inputFile.close();
		return year_name;
	}
	
	public static void main(String[] args) {
		/*
		 * Run the program with command line arguments. The two arguments should be the year range for the
		 * program to work with. If there is any invalid arguments, you should print and error message and
		 * terminate. If no arguments are given, the default years 1880 and 2015 should be used to run the
		 * program.
		 */
		int year_one = 0;
		int year_two = 0;
		if (args.length == 0){
			year_one = 1880;
			year_two = 2015;
		}
		else {
			if (args[0].toLowerCase().equals("begin")){
				year_one = 1880;
			}
			else if (args[0].toLowerCase().equals("end")){
				year_one = 2015;
			}
			else {
				try {
					year_one = Integer.parseInt(args[0]);
				}
				catch (NumberFormatException n) {
					System.err.println("The string does not have the appropriate format to convert to an integer.");
					System.exit(1);
				}
				if (year_one < 1880 || year_one > 2015){
					System.err.println("The first year must be between 1880 and 2015(inclusive).");
					System.exit(1);
				}
			}
			
			if (args[1].toLowerCase().equals("begin")){
				year_two = 1880;
			}
			else if (args[1].toLowerCase().equals("end")){
				year_two = 2015;
			}
			else {
				try {
					year_two = Integer.parseInt(args[1]);
				}
				catch (NumberFormatException n) {
					System.err.println("The string does not have the appropriate format to convert to an integer.");
					System.exit(1);
				}
				if (year_two < 1880 || year_two > 2015){
					System.err.println("The second year must be between 1880 and 2015(inclusive).");
					System.exit(1);
				}
			}
			if (year_one > year_two){
				System.err.println("First year must be less than the second year.");
				System.exit(1);
			}
			
		}
		YearNames[] data = new YearNames[year_two+1-year_one];
		for (int x = 0; x < data.length;x++){
			data[x]=makeYearName(x+year_one);
		}
			
		while (true){
			/*
			 * prompt the user the enter any name of their choice.
			 *The user may only quit the program if he or she enters
			 *the character "q" or "Q"
			 */
			System.out.println("Please enter any name: ");
			Scanner input = new Scanner(System.in);
			String name = input.nextLine().toLowerCase();
			if (name.toLowerCase().equals("q")){
				break;
			}
			
			System.out.println("Please enter gender: ");
			Scanner in = new Scanner(System.in);
			String gender = in.nextLine().toLowerCase();
			if (gender.toLowerCase().equals("q")){
				break;
			}
			
			
			int counter = 0;
			for (int x = 0; x < data.length; x++){
				counter+=data[x].getCountByName(name, gender);
			}
			if (counter == 0){
				System.out.println("No such name in the dataset.");
			}
			else {
				/*
				 * Create a for loop that will iterate through the entire data list and will
				 * format the output showing the year number, the percentage(rounded to 4 decimal
				 * places), and the vertical bars using the Math.ceil method
				 */
				for (int x = 0; x < data.length; x++){
					double percentage = (data[x].getFractionByName(name, gender))*100;
					percentage = (double)Math.round(percentage*10000)/10000;
					double num_bars = Math.ceil(percentage * 100);
					int year = x + 1880;
					System.out.printf(year + " (%.4f) : ", percentage);
					for (int y = 0; y < num_bars; y++){
						System.out.print("|");
					}
					System.out.println("");
				}
			}
		}
	}

}