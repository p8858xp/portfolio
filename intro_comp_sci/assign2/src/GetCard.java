//HW2(GetCard)
//pp1445
//
//Paul Park
//1 hour
//*************************
//create method to randomly select number 1-13 (card number)
public class GetCard {
	public static int drawCardNumber() {
		return 1 + (int) (Math.random()*13);
	}
	//method to randomly select number1-4 (suit of card)
	public static int drawCardSuit() {
		return 1+ (int) (Math.random()*4);
	}
	//create a method called displayCard with two parameters(card number and card suit)
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
		return card + suitenumToString(suit);
	}
	//create a method that will return a string of the card suit based on random number chosen from 1-4
	public static String suitenumToString(int suit) {
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
	//generate the random card by calling methods above
	public static void main(String[] args) {
			// get the number from a user
		int cardnum = drawCardNumber();
		int cardsuit = drawCardSuit();
		String display = displayCard(cardnum,cardsuit);
		System.out.println(display);
	}
	
}