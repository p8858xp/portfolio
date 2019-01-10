//HW23(IsSorted)
//pp1445
//
//Paul Park
//20 minutes
//*************************
import java.util.Scanner;
public class IsSorted {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		//create a new list with 10 elements of 0's
		int [] list_num = new int[10];
		Scanner in = new Scanner(System.in);
		int i;
		//prompt user to enter in 10 numbers and replace 0's with user's numbers
		for (i=1;i<=10;i++){
		System.out.println("Enter number " + i + ": ");
		int num = in.nextInt();
		list_num[i-1]=num;
		}
		//call the method
		sortTest(list_num);
		in.close();
		}

		//create a method to test whether the list of 10 numbers is sorted or not
		public static void sortTest(int [] array){
			int test = 0;
			for (int x = 1;x < array.length; x++){
				if (array[x]>array[x-1]){
					test+=1;
					}
				}	
			if (test==9){
				System.out.print("Your list is sorted");
			}
			else {
				System.out.print("Your list is NOT sorted");
			}
		}
		
	}
	

			