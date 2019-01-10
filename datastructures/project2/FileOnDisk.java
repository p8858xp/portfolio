package project2;
import java.io.File;
import java.io.IOException;
import java.util.*;
import java.text.SimpleDateFormat;

/**
 * This class inherits from the File class in Java API and it will be provided
 * with its own toString() method 
 * @author PaulPark
 * @version 10/11/16
 */

public class FileOnDisk extends File {
	long size;
	String absPath;
	
	//this constructor calls the File superclass constructor on the String absPath
	public FileOnDisk(String absPath){
		super(absPath);
	}
		
	/**
	 * This method will be responsible for printing out the units based
	 * on the size(have to convert for large files) of the files, the date
	 * of last modification formatted as DD/MM/YY HH:mm:ss, and finally the 
	 * absolute path to the file
	 * @return a String object formatted as shown in the spec
	 */
	public String toString(){
		String to_string = "";
		long bytes = super.length();
		double divisor = 1024;
		double kilobytes = bytes/divisor;
		double megabytes = kilobytes/divisor;
		double gigabytes = megabytes/divisor;
		Date date = new Date(super.lastModified());
		SimpleDateFormat f_date = new SimpleDateFormat("dd/MM/yy hh:mm:ss");
		if (bytes < 1000){
			if (bytes / 100 != 0){
				to_string += String.format("%d.00" + "  bytes   " , bytes);
			}
			else if (bytes / 10 != 0){
				to_string += String.format(" %d.00" + "  bytes   " , bytes);
			}
			else {
				to_string += String.format("  %d.00" + "  bytes   " , bytes);
			}
		}
		else if (kilobytes < 1000){
			if (kilobytes / 100 >= 1){
				to_string += String.format("%.2f" + "  KB      ", kilobytes);
			}
			else if (kilobytes / 10 >= 1){
				to_string += String.format(" %.2f" + "  KB      ", kilobytes);
			}
			else {
				to_string += String.format("  %.2f" + "  KB      ", kilobytes);
			}
		}
		else if (megabytes < 1000){
			if (megabytes / 100 >= 1){
				to_string += String.format("%.2f" + "  MB      ", megabytes);
			}
			else if (megabytes / 10 >= 1){
				to_string += String.format(" %.2f" + "  MB      ", megabytes);
			}
			else {
				to_string += String.format("  %.2f" + "  MB      ", megabytes);
			}
		}
		else {
			if (gigabytes / 100 >= 1){
				to_string += String.format("%.2f" + "  GB      ", gigabytes);
			}
			else if (gigabytes / 10 >= 1){
				to_string += String.format(" %.2f" + "  GB      ", gigabytes);
			}
			else {
				to_string += String.format("  %.2f" + "  GB      ", gigabytes);
			}
		}
		to_string += f_date.format(date)+"   ";
		to_string += super.getAbsolutePath();
		return to_string;
	}
	
	
}
