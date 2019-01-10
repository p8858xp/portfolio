package project1;

import java.io.File;
import java.io.FileNotFoundException;
import java.util.Scanner;

/**
 * This class represents the actual program. It has the main method
 * and it is responsible for opening and reading the data files, obtaining 
 * user input, performing some data validation and handing all errors that may occur
 * @author PaulPark
 * @version 09/24/16
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
		// TODO Auto-generated method stub
		YearNames[] data = new YearNames[2016-1880];
		for (int x = 0; x < data.length;x++){
			data[x]=makeYearName(x+1880);
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
			
			/*
			 * Create a for loop that will iterate through the entire data list and will
			 * format the output showing the year number, the percentage(rounded to 4 decimal
			 * places), and the vertical bars using the Math.ceil method
			 */
			for (int x = 0; x < data.length; x++){
				double percentage = (data[x].getFractionByName(name))*100;
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
