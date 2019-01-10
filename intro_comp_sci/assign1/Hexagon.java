//HW1(Hexagon)
//pp1445
//
//Paul Park
//10 minutes
//*************************
import java.util.Scanner;

public class Hexagon {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner in = new Scanner (System.in);
		//create a variable to store user input of hexagon size
		double length;
		System.out.println("Enter the size of your hexagon.");
		System.out.print("length = ");
		length = in.nextDouble();
		//compute area
		double area;
		area = (6.0*length*length)/(4.0*Math.tan(Math.PI/6));
		//compute perimeter
		double perimeter;
		perimeter = 6*length;
		//output
		System.out.println("The area of this hexagon is " + area);
		System.out.println("The perimeter of this hexagon is " +perimeter);
		in.close();
	}

}
