//HW8(TestInventory)
//pp1445
//
//Paul Park
//30 minutes
//*************************


import java.io.FileNotFoundException;
import java.io.FileReader;
import java.util.Scanner;
public class TestInventory {

  public static void main(String[] args) throws FileNotFoundException {
    Inventory inv = new Inventory();
    
    // TODO:  Read in the input file and populate the movieList. Manage exceptions.
    // On a failed movie load print the message
    // "Exception " + e.getMessage() + " for film " + title. No loading."
    
    FileReader movies = new FileReader("src/movies_db.txt");
    
    
    //open txt for reading using Scanner 
    Scanner input = new Scanner(movies);
    //keep checking to see if there is another line in the text file
    while (input.hasNext()){
    	String line = input.nextLine();
    	//separate by "-"  
    	String[] splitted = line.split("-");
    	//if length of splitted is 6, it is an action movie
    	if (splitted.length == 6){
    		//test for valid arguments
    		try{
    			Action a = new Action(splitted[0], Integer.parseInt(splitted[1]),Integer.parseInt(splitted[2]), Double.parseDouble(splitted[3]), Integer.parseInt(splitted[5]));
    			inv.add(a);
    		} catch (IllegalArgumentException e){
    			System.out.println("Exception-" + e.getMessage() + " for film " + splitted[0] + ". No loading.");
    		}
    	}
    	//if length of splitted is 7, it is a romcom 
    	else if (splitted.length == 7){
    		//test for valid arguments
    		try{
    			RomCom r = new RomCom(splitted[0], Integer.parseInt(splitted[1]),Integer.parseInt(splitted[2]), Double.parseDouble(splitted[3]), Integer.parseInt(splitted[5]), Integer.parseInt(splitted[6]));
    			inv.add(r);
    		} catch (IllegalArgumentException e){
    			System.out.println("Exception-" + e.getMessage() + " for film " + splitted[0] + ". No loading.");
    		}
    		
    	}
    }
    
    System.out.println();
    System.out.println("Inventory should now contain file contents.");
    System.out.println(inv.toString());
    
    Movie starWars = new Action("Star Wars - A New Hope", 1977, 121, 3.8, 89);
    inv.add(starWars);
    
    Movie numberFour = new Action("I Am Number Four", 2011, 101, 3.2, 11);
    inv.add(numberFour);
    
    Movie someoneLikeYou = new RomCom("Someone Like You", 2011, 101, 3.2, 2, 5);
    inv.add(someoneLikeYou);
    
    Movie crazyStupidLove = new RomCom("Crazy, Stupid, Love 2", 2013, 113, 3.9, 1, 3);
    inv.add(crazyStupidLove);

    System.out.println("Inventory should now contain 13 movies. " + (inv.size() == 13));

    if(inv.remove(crazyStupidLove.getTitle(), crazyStupidLove.getYear())) {
      System.out.println("Successfully removed 'Crazy, Stupid, Love'");
      if(!inv.remove(crazyStupidLove.getTitle(), crazyStupidLove.getYear())) {
        System.out.println("Successfully ignored second remove attempt for 'Crazy, Stupid, Love'");
      }
    }
    
    try {
      inv.add(new RomCom("27 Dresses", 2008, 103, 4.4, 1, 1));
    } catch (IllegalArgumentException e) {
      System.out.println("Successfully threw exception on invalid parameter.");
    }
    
    try {
      inv.add(someoneLikeYou);
    } catch (MovieInInventoryException e) {
      System.out.println("Successfully threw exception on duplicate add attempt.");
    }

    System.out.println("Inventory should now contain 12 movies. " + (inv.size() == 12));
      
    System.out.println("Inventory should not contain 'The Matrix'? " + !inv.contains("The Matrix", 1999));
    System.out.println("Inventory should not contain 'Something Borrowed'? " + !inv.contains("Something Borrowed", 2009));
    System.out.println("Inventory should not contain '27 Dressed'? " + !inv.contains("27 Dressed", 2008));

    System.out.println("\n" + inv.toString());
    input.close();
  }
  

}