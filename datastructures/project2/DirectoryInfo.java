package project2;
import java.io.File;
import java.io.IOException;
import java.util.*;

/**
 * This class represents the actual program. This class should parse and validate command line arguments
 * and display the results accordingly. 
 * @author PaulPark
 * @version 10/11/16
 */

public class DirectoryInfo {
	/*this will make an Arraylist of FileOnDisk objects that we will use to 
	 * keep track of all the files
	 */
	static ArrayList<FileOnDisk> files = new ArrayList<FileOnDisk>();
	//numFiles will keep track of the number of total files 
	static int numFiles = 0;
	
	/**
	 * This method will implement the recursive algorithm that was given and
	 * will store information about all the regular files that are contained 
	 * in the directory 
	 * @param potentialDirName a File object that you want to get the size of
	 * @throws IOException
	 */
	
	public static long getSize( File potentialDirName ) throws IOException{
		long totalSize = 0;
		String absPath = potentialDirName.getAbsolutePath();
		String canonicalPath = potentialDirName.getCanonicalPath();
		/*if the absolute path and the canoncial path of the File object are not the same
		 * then the file is symbolic
		 */
		if (!absPath.equals(canonicalPath)){
			if (potentialDirName.isDirectory()){
				return potentialDirName.length();
			}
			if (potentialDirName.isFile()){
				numFiles += 1;
				return totalSize;
			}
		}
		//otherwise the file is not symbolic
		if (potentialDirName.isDirectory()){
			totalSize += potentialDirName.length();
			for (File file: potentialDirName.listFiles()){
				totalSize += getSize(file);
			}
			return totalSize;
		}
		/*if potentialDirName is a file then make a FileOnDisk object of it and 
		 * add it to the Arraylist. Also, if it's a file then increase both the
		 * number of files and the total size 
		 */
		if (potentialDirName.isFile()){
			numFiles+=1;
			FileOnDisk file = new FileOnDisk(potentialDirName.getAbsolutePath());
			files.add(file);
			totalSize += potentialDirName.length();
		}
		return totalSize;
	}
	public static void main(String[] args) throws IOException {
		/*if the program is run with fewer than 2 args then print an
		 * error message and terminate
		 */
		if (args.length < 2){
			System.err.println("Error, cannot be run with less than two arguments given. Please try again.");
			return;
		}
		/*if the second argument is not any one of the keywords,
		 * then print a message that the option inputed is not supported
		 */
		if (!args[1].equals("largest") && !args[1].equals("oldest") && !args[1].equals("newest")){
			System.err.println("Please choose from the following keywords: largest, oldest, newest.");
			return;
		}
		/*print out the correct unit of size(bytes, KB, MB, GB)
		 *depending on how big the file size is and format it
		 *according to the spec
		 */
		
		File firstDir = new File(args[0]);
		long bytes = getSize(firstDir);
		double divisor = 1024;
		double kilobytes = bytes/divisor;
		double megabytes = kilobytes/divisor;
		double gigabytes = megabytes/divisor;
		
		String to_print = "Total space used:   ";
		if (bytes < 1000){
			to_print += String.format("%d.00 bytes," , bytes);
		}
		else if (kilobytes < 1000){
			to_print += String.format("%.2f KB,", kilobytes);
		}
		else if (megabytes < 1000){
			to_print += String.format("%.2f MB,", megabytes);
		}
		else {
			to_print += String.format("%.2f GB,", gigabytes);
		}
		to_print += "   Total number of files: " + numFiles;
		System.out.println(to_print);
		
		/*use Arrays.sort to sort the Arraylist of FileOnDisk objects
		 * and depending on the input of the second argument, use the CompareFilesBySize
		 * or the CompareFilesByDate to either sort it from largest to smallest, newest to
		 * oldest, or oldest to newest. Make sure to print out the first 20 files in the
		 * list if there are more than 20 or to print out the entire list if the list
		 * contains less than or equal to 20 files
		 */
		
		FileOnDisk [] file_sort = new FileOnDisk [files.size()];
		file_sort = files.toArray(file_sort);
		if (args[1].equals("largest")){
			Arrays.sort(file_sort, new CompareFilesBySize());
			System.out.println("Largest 20 files: ");
			for (int x = Math.min(file_sort.length-1, 19); x >= 0;x--){
				System.out.println(file_sort[x]);
			}
		}
		if (args[1].equals("newest")){
			Arrays.sort(file_sort, new CompareFilesByDate());
			System.out.println("Most recently modified 20 files: ");
			for (int x = Math.min(file_sort.length-1, 19); x >= 0;x--){
				System.out.println(file_sort[x]);
			}
		}
		if (args[1].equals("oldest")){
			Arrays.sort(file_sort, new CompareFilesByDate());
			System.out.println("Least recently modified 20 files: ");
			for (int x = 0; x < Math.min(file_sort.length, 20);x++){
				System.out.println(file_sort[x]);
			}
		}
	}
	
//These classes were given by Professor Klukowska to use as is 
}
class CompareFilesByDate implements Comparator<FileOnDisk>{
	@Override
	public int compare(FileOnDisk o1, FileOnDisk o2) {
		long comp = o1.lastModified() - o2.lastModified();
		if (comp == 0){
			return o1.compareTo(o2);
		}
		if (comp > 0){
			return 1;
		}
		else{
			return -1;
		}
	}
}
class CompareFilesBySize implements Comparator<FileOnDisk>{
	@Override
	public int compare(FileOnDisk o1, FileOnDisk o2) {
		int comp = (int)(o1.length() - o2.length());
		if (comp == 0){
			return o1.compareTo(o2);
		}
		return comp;
	}
}
