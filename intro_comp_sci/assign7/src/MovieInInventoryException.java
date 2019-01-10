//HW7(MovieInInventoryException)
//pp1445
//
//Paul Park
//1 minute
//*************************

//A custom exception
//just copied and pasted in
public class MovieInInventoryException extends RuntimeException{
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	public MovieInInventoryException(String title){
		super(title + " already in inventory.");
	}
}


