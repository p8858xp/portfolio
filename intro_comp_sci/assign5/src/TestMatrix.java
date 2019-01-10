//HW5(TestMatrix)
//pp1445
//
//Paul Park
//2 hour
//*************************
public class TestMatrix {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
	
		//create a matrix with low row value
		Matrix a = new Matrix(-1,3);
		System.out.print("This matrix has " + a.getNumOfRows() + " rows");
		System.out.println(" and " + a.getNumOfColumns() + " columns");
		System.out.println(a.toString());
		
		//create a matrix with a high row value
		Matrix b = new Matrix(6,3);
		System.out.print("This matrix has " + b.getNumOfRows() + " rows");
		System.out.println(" and " + b.getNumOfColumns() + " columns");
		System.out.println(b.toString());
		
		//create a matrix with a low column value
		Matrix c = new Matrix(2,-1);
		System.out.print("This matrix has " + c.getNumOfRows() + " rows");
		System.out.println(" and " + c.getNumOfColumns() + " columns");
		System.out.println(c.toString());
		
		//create a matrix with a high column value
		Matrix d = new Matrix(2,6);
		System.out.print("This matrix has " + d.getNumOfRows() + " rows");
		System.out.println(" and " + d.getNumOfColumns() + " columns");
		System.out.println(d.toString());
		
		Matrix e = new Matrix(2,5);
		System.out.print("This matrix has " + e.getNumOfRows() + " rows");
		System.out.println(" and " + e.getNumOfColumns() + " columns");
		System.out.println(e.toString());
		
		//create a matrix using the one dimension parameter constructor
		Matrix f = new Matrix(3);
		System.out.print("This matrix has " + f.getNumOfRows() + " rows");
		System.out.println(" and " + f.getNumOfColumns() + " columns");
		System.out.println(f.toString());
		
		Matrix g = new Matrix(3,5);
		System.out.print("This matrix has " + g.getNumOfRows() + " rows");
		System.out.println(" and " + g.getNumOfColumns() + " columnsHELLO");
		System.out.println(g.toString());
		
		//call and print out array of each rowmax of the g matrix
		//call and print out array of each columnsum of the g matrix
		System.out.print("rowmax: ");
		int [] y = Matrix.rowMax(g.getArray());
		int [] z = Matrix.columnSum(g.getArray());
		for (int j: y){ 
			System.out.print(j+" ");
		}
		System.out.println("");
		System.out.print("columnsum: ");
		for (int j: z){
			System.out.print(j+" ");
		}
		
		System.out.println();
		System.out.println();
		//transpose the g matrix here
		g.transpose_matrix();
		System.out.println("tranposed matrix: ");
		System.out.println(g);
		System.out.println();
		//add the g matrix to itself(same row by column)
		System.out.println(g.add(g));
		System.out.println(g);
		System.out.println();
		//add the f matrix which is a different row by column to g matrix
		System.out.println(g.add(f));
		System.out.println(g);
		
		System.out.println();
		//call the mulitply method and print out the adjusted matrix multiplied by 3,-3,0
		//for each position on the matrix
		System.out.println("1st matrix multiplied by 3: ");
		a.multiply(3);
		System.out.println(a);
		System.out.println();
		System.out.println("previous matrix multiplied by -3: ");
		a.multiply(-3);
		System.out.println(a);
		System.out.println();
		System.out.println("1st matrix multiplied by 0: ");
		a.multiply(0);
		System.out.println(a);
	}

}
