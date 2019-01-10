//HW1(Bonus)
//pp1445
//
//Paul Park
//1 hour
//*************************
import java.util.Scanner;
public class Bonus {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		/*use scanner in to store user input
		 * ask user to enter a number of employees and then for
		 * each number employee, ask user to enter in their name
		 * and their bonus. Create variables to store the highest and second highest bonus and also
		 * variables to store the name of which employee has the highest and second highest bonus.
		 * Then print out the result.
		 */
		
		Scanner in = new Scanner(System.in);
		int employees;
		System.out.println("Please enter a number of employees.");
		System.out.print("employees = ");
		employees = in.nextInt();
		int count;
		String s;
		float b;
		String highname="";
		float high=0;
		float hightwo=0;
		String highnametwo="";
		for(count=1;count<=employees;count+=1) {
			System.out.println("Enter name for employee #"+count);
			s = in.next();
			System.out.println("Enter a bonus for employee #"+count);
			b = in.nextFloat();
			String tempName;
			float tempHigh;
			if (b >= high) {
				tempName = highname;
				tempHigh = high;
				high=b;
				highname=s;
				b = tempHigh;
				s = tempName;
			}
			if (b<= high && b >= hightwo) {
				hightwo=b;
				highnametwo=s;
			}
		}		
		System.out.println(highname +" has the highest bonus amount of " + high);
		System.out.println(highnametwo + " has the second highest bonus amount of " + hightwo);
		in.close();
	}

}
	