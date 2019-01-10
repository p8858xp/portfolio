//HW5(Matrix)
//pp1445
//
//Paul Park
//2 hours
//*************************
public class Matrix {
	private int rows;
	private int columns;
	private int [][] matrix;

	//1st constructor with specified row and column
	public Matrix(int x, int y){
		rows = x;
		columns = y;
		if (x < 1) {
			rows = 1;
		}
		if (y < 1) {
			columns = 1;
		}
		if (x > 5) {
			rows = 5;
		}
		if (y > 5) {
			columns = 5;
		}
		//create and show string rep of matrix
		matrix = new int [rows][columns];
		//have each value of the matrix be a random number between =10 and 10
		
		for (int a = 0; a< matrix.length; a++){
			for (int b = 0; b < matrix[a].length; b++){
				matrix[a][b] = -10 + (int) (Math.random()*21);
			}
		}
	}
	
	
	//2nd constructor with one parameter-the row/column will be the same value
	public Matrix(int dimensions){
		this(dimensions,dimensions);
	}
	
	
	public int [][] getArray(){
		return matrix;
	}
	public String toString(){
		String matrix_rep="";
		for (int a = 0; a< matrix.length; a++){
			for (int b = 0; b < matrix[a].length; b++){
				matrix_rep+=String.valueOf(matrix[a][b]);
				matrix_rep+="\t";
			}
			matrix_rep+="\n";
		}
		return matrix_rep;
	}
	
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
		
		return maxArray;
	}
	
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
		
		return sumArray;
	}
	
	public int [][] transpose_matrix (){
		
		int [][] transpose_matrix = new int [matrix[0].length][matrix.length];
		for (int x = 0; x < matrix[0].length; x++){
			
			for (int y = 0; y < matrix.length; y++){
				transpose_matrix[x][y] = matrix[y][x];
			}
		}
		matrix = transpose_matrix;
		return transpose_matrix;
	}
	
	public boolean add(Matrix b){
		if(b.getNumOfRows()!=this.rows || b.getNumOfColumns()!=this.columns){
			return false;
		}
		int [][] b_matrix = b.getArray();
		for (int x=0; x<b_matrix.length;x++){
			for (int y = 0; y<b_matrix[0].length;y++){
				this.matrix[x][y] += b_matrix[x][y];
			}
		}
		return true;
	}
	
	public void multiply(int num){
		
		for (int x = 0; x<matrix.length;x++){
			for (int y = 0;y<matrix[0].length;y++){
				matrix[x][y]*= num;
			}
		}
	}
	public int getMax(){
		
		int max = -10;
		for (int x = 0;x<matrix.length;x++){
			for (int y = 0;y<matrix[0].length;y++){
				if (matrix[x][y]>max){
					max = matrix[x][y];
				}
			}
		}
		return max;
	}
	
	public int getNumOfRows(){
		return rows;
	}
	
	public int getNumOfColumns(){
		return columns;
	}
	
}
