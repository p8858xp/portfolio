public class Text {
	String text;
	char type;
	public void setText(String text){
		this.text = text;
	}
	public String getText(){
		return text;
	}
	public boolean isExternal(){
		boolean external = true;
		String text_converted = this.toString();
		if (text_converted.charAt(4) == '4'){
			return external;
		}
		else {
			return false;
		}
	}
	public char getType(){
		String text_converted = this.toString();
		return text_converted.charAt(4);
	}
	public int getMoveNum(){
		String text_converted = this.toString();
		return Character.getNumericValue(text_converted.charAt(3));
	}
	
	public boolean isSentinel(){
		boolean sentinel = true;
		String text_converted = this.toString();
		String sentinel_text = text_converted.substring(1, 4);
		if (sentinel_text.equals("777")){
			return sentinel;
		}
		else {
			return false;
		}
	}
	public String getInstruction(){
		String text_converted = this.toString();
		String instruction = text_converted.substring(0, 4);
		return instruction;
	}
	public String getFirstValue(){
		String text_converted = this.toString();
		String first_num = text_converted.substring(0,1);
		return first_num;
	}
	public String toString(){
		return text;
	}

}
