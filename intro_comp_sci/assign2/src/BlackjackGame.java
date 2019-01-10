//HW2(BlackjackGame)
//pp1445
//
//Paul Park
//3 hours
//*************************
//Use the methods you made from the GetCard program 
import java.util.Scanner;
public class BlackjackGame{
	public static int drawCardNumber() {
		return 1 + (int) (Math.random()*13);
		
	}
	public static int drawCardSuit() {
		return 1+ (int) (Math.random()*4);
	}
	public static String displayCard(int num, int suit) {
		String card;
		if (num == 1) {
			card = "Ace of ";
		} else if (num == 11) {
			card = "Jack of ";
		} else if (num == 12) {
			card = "Queen of ";
		} else if (num == 13) {
			card = "King of ";
		} else {
			card = num + " of ";
		}
		return card + suitnumToString(suit);
	}
	public static String suitnumToString(int suit) {
		if (suit == 1) {
			return "Spades";
		} else if (suit == 2) {
			return "Hearts";
		} else if (suit == 3) {
			return "Diamonds";
		} else {
			return "Clubs";
		}
	}
//make a while loop that will generate two random cards to the dealer but do not display it
//have accumulator variables to count number of loops and to count dealer score
	public static void main(String[] args) {
			// get the number from a user
		Scanner in = new Scanner(System.in);
		int counter = 0;
		int dealer_score=0;
		int score;
		while (true){
			
			int dealercard = drawCardNumber();
			if (dealercard==11 || dealercard==12 || dealercard==13){
				score=10;
				dealer_score+=score;	
				}
			else if (dealercard==1) {
				score=11;
				dealer_score+=score;
				}
			else {
				score=dealercard;
				dealer_score+=score;
				}
			counter+=1;
			//the dealer's first two cards will not be displayed to user so its a secret
			//System.out.println("Dealer card is " + displayCard(dealercard,drawCardSuit()));
			if (counter>=2) {
				//the dealer's current score will obviously also be a secret to the user
				//System.out.println("Dealer score: " + dealer_score) ;
				break;
					}
			
			}
			
		
		//create another loop that will generate cards for the user
		//count user's score 
		//make sure if user_score is over 21, you end the loop or if user says no to additional cards
			int user_score=0;
			int counter_two=0;
			while (true){
			
			int usercard = drawCardNumber();
			if (usercard==11 || usercard==12 || usercard==13){
				score=10;
				user_score+=score;	
				}
			else if (usercard==1) {
				score=11;
				user_score+=score;
				}
			else {
				score=usercard;
				user_score+=score;
				}
			counter_two+=1;
			//display user's first two cards
			System.out.println("User card is " + displayCard(usercard,drawCardSuit()));
			if (counter_two>=2) {
				System.out.println("User score: " + user_score) ;
				break;
				}	
			}
			if (user_score > 21){
				System.out.println("User has bust.");
				}
			else if (user_score == 21){
				System.out.println("User got blackjack!");	
			}
			//only ask user for another card if the user didn't already bust or get blackjack
			if (user_score<21) {
				for (int x=0;x<3;++x) {
				System.out.println("User...hit?(yes/no): ");
				String again = in.nextLine();
				again = again.toLowerCase();
				if (again.equals("no")) {
					break;
					}
				//if user asks for another card, then display it and add to user_score
				else if (again.equals("yes")) {
					int additionalcard = drawCardNumber();
					if (additionalcard==11 || additionalcard==12 || additionalcard==13){
						score=10;
						user_score+=score;	
						}
					else if (additionalcard==1) {
						score=11;
						user_score+=score;
						}
					else {
						score=additionalcard;
						user_score+=score;
						}
					counter_two+=1;
					System.out.println("User card is " + displayCard(additionalcard,drawCardSuit()));
					System.out.println("User score: " + user_score) ;
					if (user_score>21){
						System.out.println("User has bust.");
						break;
					}
					else if (user_score==21){
						System.out.println("User got blackjack!");
						break;
					}
						
					}
				else {
					System.out.println("Invalid option.");
					break;
					}
				}
			}
			//Dealer draws two additional cards no matter what
			for (int y=0;y<2;++y) {
				int dealer_additionalcard = drawCardNumber();
				if (dealer_additionalcard==11 || dealer_additionalcard==12 || dealer_additionalcard==13){
					score=10;
					dealer_score+=score;	
					}
				else if (dealer_additionalcard==1) {
					score=11;
					dealer_score+=score;
					}
				else {
					score=dealer_additionalcard;
					dealer_score+=score;
					}
				counter+=1;
				System.out.println("Dealer card is " + displayCard(dealer_additionalcard,drawCardSuit()));
				System.out.println("Dealer score: " + dealer_score) ;
				if (dealer_score>21){
					System.out.println("Dealer has bust.");
					break;
				}
				else if (dealer_score==21){
					System.out.println("Dealer got blackjack!");
					break;
				}
			//list all the possible outcomes of the games using an if and else if statements
			//print out the outcome
			 
			}
			if (user_score > 21 && dealer_score>21) {
				System.out.println("Draw! No winner or loser!");
			}
			else if (user_score <= 21 && dealer_score >21){
				System.out.println("User wins!");
			}
			else if (user_score > 21 && dealer_score <= 21){
				System.out.println("Dealer wins!");
			}
			else if (user_score <= 21 && dealer_score < 21 && user_score > dealer_score) {
				System.out.println("User wins!");
			}
			else if (user_score < 21 && dealer_score <= 21 && user_score < dealer_score) {
				System.out.println("Dealer wins!");
			}
			else if (user_score < 21 && dealer_score < 21 && user_score==dealer_score){
				System.out.println("Draw!");
			}
			else if (user_score == 21 && dealer_score==21) {
				System.out.println("Both user and dealer got Blackjack! Both win!");
			}
			in.close();
	}
			
}

		