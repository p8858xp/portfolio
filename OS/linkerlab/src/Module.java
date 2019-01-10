import java.util.ArrayList;
import java.util.HashMap;


public class Module{
	HashMap<String, Integer> instructions = new HashMap<String, Integer>();
	HashMap<String, Integer> def_map = new HashMap<String,Integer>();
	HashMap<String, Text> use_map = new HashMap<String, Text>();
	ArrayList<HashMap<String, Text>> use_map_list = new ArrayList<HashMap<String,Text>>();
	int def_num;
	int def_address;
	int uses_num;
	int text_num;
	String symbol_used;
	String symbol_def;
	
	ArrayList<String> definitions = new ArrayList<String>();
	ArrayList<Text> textArray = new ArrayList<Text>();
	ArrayList<Text> create_use_list;
	ArrayList<String> symbol_usedlist = new ArrayList<String>();
	ArrayList<Text> usesList = new ArrayList<Text>();
	ArrayList<String> symbol_definedlist = new ArrayList<String>();
	ArrayList<Integer> symbol_definednumlist = new ArrayList<Integer>();
	
	public void add_symboldefinednums(int symbol_defined_num){
		symbol_definednumlist.add(symbol_defined_num);
	}
	public ArrayList<Integer> get_symbol_definednumlist(){
		return symbol_definednumlist;
	}
	public void setsymbol_used(String symbol_used){
		this.symbol_used = symbol_used;
	}
	public void setdef_symbol(String symbol){
		this.symbol_def = symbol;
	}
	public String getdef_symbol(){
		return symbol_def;
	}
	public String getsymbol_used(){
		return symbol_used;
	}
	ArrayList<String> getDefs(){
		return definitions;
	}
	public int getdef_num(){
		return def_num;
	}
	public void setdef_num(int num){
		this.def_num = num;
	}
	public void setdef_address(int num){
		this.def_address = num;
	}
	public int getdef_address(){
		return def_address;
	}
	public int getuses_num(){
		return uses_num;
	}
	public void setuses_num(int num){
		uses_num = num;
	}
	public int gettext_num(){
		return text_num;
	}
	public void settext_num(int num){
		text_num = num;
	}
	public void set_instruction(String definition, Integer symbol_used_num){
		instructions.put(definition, symbol_used_num);
	}
	public void set_defmap(String symbol_defined, Integer module){
		def_map.put(symbol_defined, module);
	}
	public void set_usemap(String symbol_used, Text text){
		use_map.put(symbol_used, text);
	}
	public void add_usemap(HashMap<String, Text> use_map){
		use_map_list.add(use_map);
	}
	public ArrayList<HashMap<String,Text>> get_usemap_list(){
		return use_map_list;
	}
	public void add_definition(String definition){
		definitions.add(definition);
	}
	public void add_symbolusedlist(String symbol_used){
		symbol_usedlist.add(symbol_used);
	}
	public ArrayList<String> get_symbolsusedlist(){
		return symbol_usedlist;
	}
	public void add_usesList(Text usesNum){
		usesList.add(usesNum);
	}
	public ArrayList<Text> get_usesList(){
		return usesList;
	}
	public void add_textarray(Text text){
		textArray.add(text);
	}
	public ArrayList<Text> get_textarray(){
		return textArray;
	}
	public void add_symbolsdefined(String symbol){
		symbol_definedlist.add(symbol);
	}
	public ArrayList<String> get_symbolsdefinedlist(){
		return symbol_definedlist;
	}
}