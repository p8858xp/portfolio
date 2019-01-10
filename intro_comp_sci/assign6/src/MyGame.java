//HW6(MyGame)
//pp1445
//
//Paul Park
//2 hours
//*************************
//import PApplet here
import processing.core.PApplet;

	public class MyGame extends PApplet {
		public static void main(String args[]) {
			PApplet.main(new String[] {"MyGame"});
		}
		//create instance variables
		boolean gameOver=false;
		int counter;
		Board game;
		Player circle;
		Player rectangle;
		//create a method called mousePressed here
		//have the counter to keep track of the player turns
		
		public void mousePressed(){
			int x = this.mouseX/166;
			int y = this.mouseY/166;
			if (game.container(x, y)==0 && !gameOver){
				
				if (counter%2==0){
					ellipse(x*166+83,y*166+83,50,50);
					game.put("O", x, y);
				}
				else {
					rect(x*146+83,y*146+83,50,50);
					game.put("X", x, y);
				}
				counter+=1;
				if (game.checkWinner()==1){
					System.out.println("Player rectangle wins");
					gameOver=true;
				}
				if (game.checkWinner()==2){
					System.out.println("Player circle wins");
					gameOver=true;
				}
				if (game.checkWinner()==-1){
					System.out.println("No Winner!");
					gameOver=true;
				}
			}
			redraw();
		}
		//setup the canvas to be 500 by 500 and create a Board object using the Board class
		//create objects of the two players
		public void setup(){
			game = new Board();
			rectangle = new Player(1);
			circle = new Player(2);
			size(500,500);
			background(0);
			counter = 0;
		}
		//draw the tic tac toe board using rect()
		public void draw(){
			rect(0,0,5,500);
			rect(0,500,500,5);
			rect(0,0,500,5);
			rect(500,0,5,500);
			rect(166,0,5,500);
			rect(332,0,5,500);
			rect(0,166,500,5);
			rect(0,332,500,5);
			
		}
	}
