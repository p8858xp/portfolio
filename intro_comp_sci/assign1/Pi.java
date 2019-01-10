//HW1(Pi)
//pp1445
//
//Paul Park
//30 minutes
//*************************
public class Pi {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		//compute the value of 4(1-1/3+1/5-1/7+1/9-1/11)
		//compute the value of 4(1-1/3+1/5-1/7+1/9-1/11+1/13)
		double pi = 4*(1.0-(1.0/3)+(1.0/5)-(1.0/7)+(1.0/9)-(1.0/11));
		double pitwo = 4*(1.0-(1.0/3)+(1.0/5)-(1.0/7)+(1.0/9)-(1.0/11)+(1.0/13));
		//print out the results of both
		System.out.println(pi);
		System.out.println(pitwo);
		
		/*print the third but this time use the first 1000 terms
		setup 3 different variables and create a for loop that will
		iterate 1000 times.
		Create a variable called sum to keep track of the total
		inside the parentheses
		If the term is even, subtract from the sum
		If the term is odd, add to the sum
		Once the loop is done, multiply 4 to what is held in the
		variable called sum and print out the result which should
		be very close to PI
		*/
		int pithree;
		int count = 1;
		int denominator = 1;
		double sum = 0;
		for (pithree=1;pithree<=1000; ++pithree ) {
			if (count%2==0)
				//always subtract
				sum -= (1.0/denominator);
				
			else
				//always add
				sum += (1.0/denominator);
			count+=1;	
			denominator+=2;
			}
		double answer = (4 * sum);
		System.out.println(answer);
			
		}
				
}

