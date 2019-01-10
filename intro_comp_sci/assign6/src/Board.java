//HW6(Board)
//pp1445
//
//Paul Park
//1 hour
//*************************
public class Board {
	int [][] board;
	public Board(){
		board = new int[3][3];
	}
	//create a method called container 
	public int container(int x, int y){
		return board[x][y];
	}
	//create a method called put that will take in a string and two ints as parameters
	public void put(String letter, int x, int y){
		if (letter.equals("X")){
			board[x][y]=1;
		}
		else {
			board[x][y]=2;
		}
	}
	//create a method to check if there is indeed a winner at every turn
	public int checkWinner(){
		int counter = 0;
		for (int x = 0;x<board.length;x++){
			for(int y = 0;y<board[x].length;y++){
				if (board[x][y]!=0){
					counter+=1;
				}
			}	
		}
		if (counter == 9){
			return -1;
		}
		
		//horizontals
		if (board[0][0] == board[0][1] && board[0][1] == board[0][2] && board[0][0]!=0) {
			return board[0][0];
		}
		if (board[1][0] == board[1][1] && board[1][1] == board[1][2] && board[1][0]!=0){
			return board[1][0];
		}
		if (board[2][0] == board[2][1] && board[2][1] == board[2][2] && board[2][0]!=0){
			return board[2][0];
		}
		
		//verticals
		if (board[0][0] == board[1][0] && board[1][0] == board[2][0] && board[0][0]!=0){
			return board[0][0];
		}
		if (board[0][1] == board[1][1] && board[1][1] == board[2][1] && board[0][1]!=0){
			return board[0][1];
		}
		if (board[0][2] == board[1][2] && board[1][2] == board[2][2] && board[0][2]!=0){
			return board[0][2];
		}
		//diagonals
		if (board[0][0] == board[1][1] && board[1][1] == board[2][2] && board[0][0]!=0){
			return board[0][0];
		}
		if (board[0][2] == board[1][1] && board[1][1] == board[2][0] && board[0][2]!=0){
			return board[0][2];
		}
		return 0;
	}
}
