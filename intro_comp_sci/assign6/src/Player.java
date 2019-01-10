//HW6(Player)
//pp1445
//
//Paul Park
//10 minutes
//*************************
public class Player {
	String player;
	//create a Player constructor with an int as a parameter
	//if the integer is 1, player is rectangle, otherwise circle
	public Player(int x){
		if (x == 1){
			player="rectangle";
		}
		else {
			player="circle";
		}
	}
	public String getShape(){
		return player;
	}
}
