//HW5(SortingMatrices)
//pp1445
//
//Paul Park
//1 hour
//*************************
public class SortingMatrices {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Matrix [] sortMatrix = new Matrix[5];
		for (int x = 0;x<sortMatrix.length;x++){
			//create matrices with random dimensions 1-5
			sortMatrix[x]=new Matrix(1+(int)(Math.random()*5),1+(int)(Math.random()*5));
			//print out all 5 matrices with random dimensions
			System.out.println(sortMatrix[x]);
		}
		System.out.println("sortMatrix: ");
		//call the selection sort method you made here
		selectionSort(sortMatrix);
		//print out the sorted matrices 
		for (int x=0;x<sortMatrix.length;x++){
			System.out.println(sortMatrix[x]);
		}
		
	
	}
	//create a method called selectionSort that will sort the matrix objects using the getMax method 
	//you created in the Matrix class
	public static void selectionSort(Matrix[] a) {
		for (int x = a.length -1; x >= 1; x--) {
			int max = -11;
			int index = -1;
			for (int y = x; y >= 0; y--) {
				if (max < a[y].getMax()) {
					max = a[y].getMax();
					index = y;
				}
			}
			if (x != index) {
				Matrix sub = a[x];
				a[x] = a[index];
				a[index] = sub;
			}
		}
	}

		}
	


