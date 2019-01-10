//HW4(Matrix)
//pp1445
//
//Paul Park
//3 hours
//*************************
import java.util.Scanner;
public class Matrix {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner in = new Scanner(System.in);
		//ask user for number of rows and columns for the matrix
		System.out.println("How many rows?(1-5): ");
		int row = in.nextInt();
		System.out.println("How many columns?(1-5): ");
		int column = in.nextInt();
		while (true) {
			if (row<1 || row>5 || column<1 || column>5){
				System.out.println("Error, please enter a value 1-5");
				System.out.println("How many rows?(1-5): ");
				row = in.nextInt();
				System.out.println("How many columns?(1-5): ");
				column = in.nextInt();
			}
			else {
				break;
			}
		}
		//make a new matrix with the given rows and columns user inputed
		int [][] matrix = new int [row][column];
		//have each value of the matrix be a random number between =10 and 10
		for (int x = 0; x< matrix.length; x++){
			for (int y = 0; y < matrix[x].length; y++){
				matrix[x][y] = -10 + (int) (Math.random()*21);
			}
		}
		//print out the matrix with the printMatrix method
		printMatrix(matrix);
		
		//setup a while loop that will keep giving a menu option for the user until user
		//wants to quit
		while (true) {
			System.out.println("T, R, C, or Q: ");
			//make sure sensitivity of upper and lower_case does not apply
			char option = in.next().charAt(0);
			if (option == 'T' || option == 't'){
				transpose(matrix);
			}
			else if (option == 'R' || option == 'r'){
				rowMax(matrix);
				System.out.println();
			}
			else if (option == 'C' || option == 'c'){
				columnSum(matrix);
				System.out.println();
			}
			else if (option == 'Q' || option == 'q'){
				break;
			}
			//if user does not give good input, keep asking for another menu option
			//until a valid choice is given
			else {
				System.out.println("Invalid choice, try again!");
			}
		}
		in.close();
	}
	//make a method that will print out a visual matrix that is void
	public static void printMatrix (int [][] matrix){
		for (int x = 0; x < matrix.length; x++){
			int counter = 0;
			for (int y = 0; y < matrix[x].length; y++){
				System.out.printf("%6d", matrix[x][y]);
				counter+=1;
				if (counter % matrix[x].length == 0) {
					System.out.print("\n");
				}
			}
		}
			
		}
	//make a method called transpose which will make the rows, columns and vice versa
	//return a two dimensional array
	public static int [][] transpose (int [][] matrix ){
		
		int [][] transpose_matrix = new int [matrix[0].length][matrix.length];
		for (int x = 0; x < matrix[0].length; x++){
			int counter = 0;
			for (int y = 0; y < matrix.length; y++){
				System.out.printf("%6d", matrix[y][x]);
				counter+=1;
				if (counter % matrix.length == 0) {
					System.out.print("\n");
				}
			}
		}
		return transpose_matrix;
	}
	//make a method called rowMax which will find the max int of each row
	//of the matrix and returns an array of each max
	public static int [] rowMax (int [][] matrix){
		int max = -10;
		int [] maxArray = new int[matrix.length];
		
		for (int x = 0; x < matrix.length;x++) {
		for (int y = 0; y < matrix[x].length;y++){
			if (matrix[x][y]>max){
				max = matrix[x][y];
				maxArray[x] = max;
				
			}
		}
		max = -10;
		}
		for (int i = 0; i<maxArray.length;i++){
			System.out.printf("%6d",maxArray[i]);
		}
		
		return maxArray;
	}
	//make a method called columnSum which will find the sum of each column
	//of the matrix and returns an array of the sums
	public static int [] columnSum (int [][] matrix){
		int [] sumArray = new int[matrix[0].length];
		int sum = 0;
		for (int x = 0; x<matrix[0].length;x++){
		for (int y = 0; y<matrix.length;y++){
			sum += matrix[y][x];
			sumArray[x] = sum;
		}
		sum = 0;
		}
		System.out.println();
		for (int i = 0; i<sumArray.length;i++){
			System.out.printf("%6d", sumArray[i]);
		}
		return sumArray;
	}
	
}

