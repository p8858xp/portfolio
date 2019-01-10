import java.io.FileNotFoundException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;
public class InputSet {
	ArrayList<Module> moduleArray;
	int mod_num;
	String symbol_defined;
	int symbol_defined_num;
	String symbol_used;
	int symbol_used_num;
	HashMap<String, Integer> symbol_map = new HashMap<String, Integer>();
	int absoluteAdd = 0;
	ArrayList<Integer> instructions = new ArrayList<Integer>();
	int text_num;
	String text_temp;
	ArrayList<Text> text_array = new ArrayList<Text>();
	int inputs_index = 1;
	ArrayList<Integer> absoluteAddList = new ArrayList<Integer>();
	ArrayList<String> symbolsdefinedlist_mods = new ArrayList<String>();
	ArrayList<String> symbolsusedlist_mods = new ArrayList<String>();
	
	ArrayList<Map<String, String>> errors = new ArrayList<Map<String, String>>();
	HashMap<String, String> never_used = new HashMap<String, String>();
	HashMap<String, String> multi = new HashMap<String, String>();
	HashMap<String, String> undefined = new HashMap<String, String>();
	HashMap<String, String> exceeds = new HashMap<String, String>();
	HashMap<String, String> immediate = new HashMap<String, String>();
	HashMap<String, String> external = new HashMap<String, String>();
	
	public InputSet(ArrayList<String> inputs) throws FileNotFoundException{
		errors.add(never_used);
		errors.add(multi);
		errors.add(undefined);
		errors.add(exceeds);
		errors.add(immediate);
		errors.add(external);
		mod_num = Integer.parseInt(inputs.get(0));
		moduleArray = new ArrayList<Module>(mod_num);
		for(int x = 0; x < mod_num; x++){
			Module mod = new Module();
			/*First Instruction*/
			mod.setdef_num(Integer.parseInt(inputs.get(inputs_index)));
			inputs_index++;
			if (mod.getdef_num() > 0){
				for (int j = 0; j < mod.getdef_num(); j++){
					symbol_defined = inputs.get(inputs_index);
					mod.setdef_symbol(symbol_defined);
					mod.add_symbolsdefined(symbol_defined);
					if(symbol_map.containsKey(symbol_defined)){
						errors.get(1).put(symbol_defined, symbol_map.get(symbol_defined) + " Error: This variable is multiply defined; first value used.");
						inputs_index++;
						inputs_index++;
					}
			
					else{
						inputs_index++;
						symbol_defined_num = Integer.parseInt(inputs.get(inputs_index));
						mod.setdef_address(symbol_defined_num);
						mod.add_symboldefinednums(symbol_defined_num);
						inputs_index++;
						mod.set_defmap(symbol_defined, x);
						symbol_map.put(symbol_defined, absoluteAdd + symbol_defined_num);
						absoluteAddList.add(absoluteAdd);
					}
				}
			}
			
			mod.setuses_num(Integer.parseInt(inputs.get(inputs_index)));
			inputs_index++;			
			if (mod.getuses_num() != 0){
				for(int j = 0; j <mod.getuses_num(); j++){
					symbol_used = inputs.get(inputs_index);
					mod.setsymbol_used(symbol_used);
					mod.add_symbolusedlist(symbol_used);
					inputs_index++;
					symbol_used_num = Integer.parseInt(inputs.get(inputs_index));
					instructions.add(symbol_used_num);
					inputs_index++;
					mod.set_instruction(symbol_used, symbol_used_num);
				}
			}
			
			mod.settext_num(Integer.parseInt(inputs.get(inputs_index)));
			absoluteAdd += mod.gettext_num();
			inputs_index++;
			if (mod.gettext_num() != 0){
				for(int j = 0; j < mod.gettext_num(); j++){
					text_temp = inputs.get(inputs_index);
					Text text = new Text();
					text.setText(text_temp);
					text_array.add(text);
					mod.add_textarray(text);
					inputs_index++;
				}
			}
			for (int k = 0; k < mod.getuses_num(); k++){
				if (mod.getuses_num() != 0){ 
					mod.add_usesList(mod.get_textarray().get(mod.instructions.get(mod.get_symbolsusedlist().get(k))));
					if (mod.get_textarray().get(mod.instructions.get(mod.get_symbolsusedlist().get(k))).isSentinel() == false){
						Text startingPoint = mod.get_textarray().get(mod.instructions.get(mod.get_symbolsusedlist().get(k)));
						while (true){
							if (startingPoint.isSentinel() == false){
								startingPoint = mod.get_textarray().get(startingPoint.getMoveNum());
								mod.add_usesList(startingPoint);
							}
							else{
								break;
							}	
						}
					}
				}
			}
			mod.add_usemap(mod.use_map);
			moduleArray.add(mod);
		}
		for (int i = 0; i < mod_num; i++){
			//System.out.println(moduleArray.get(i).def_map);
			for (int a = 0; a < moduleArray.get(i).get_symbolsdefinedlist().size(); a++){
				if (!symbolsdefinedlist_mods.contains(moduleArray.get(i).get_symbolsdefinedlist().get(a))){
					symbolsdefinedlist_mods.add(moduleArray.get(i).get_symbolsdefinedlist().get(a));
				}
			}
			for (int b = 0; b < moduleArray.get(i).get_symbolsusedlist().size(); b++){
				symbolsusedlist_mods.add(moduleArray.get(i).get_symbolsusedlist().get(b));
			}
		}
		// ERROR CHECKINGGGGGGG
		for (int i = 0; i < mod_num; i++){
			if (moduleArray.get(i).getuses_num()!= 0){
				for (Map.Entry entry: moduleArray.get(i).instructions.entrySet()){
					if (!symbolsdefinedlist_mods.contains(entry.getKey())){
						for(int j = 0; j < moduleArray.get(i).get_usesList().size(); j++){
							errors.get(2).put(moduleArray.get(i).get_usesList().get(j).toString(), "Error: " + entry.getKey() + " is not defined; zero used.");
						}
					}
				}
			}
		}
		for (int i = 0; i < mod_num; i++){
			if (moduleArray.get(i).getdef_num() != 0){
				//System.out.println(moduleArray.get(i).getdef_symbol());
				for (Map.Entry entry : moduleArray.get(i).def_map.entrySet()){
					if (!symbolsusedlist_mods.contains(entry.getKey())){
						errors.get(0).put((String) entry.getKey(), "Warning: " + entry.getKey() + " was defined in module " + entry.getValue() + " but never used.");
					}
				}
			}
			// Taking care of defintion exceeding the size of module problem
			if (moduleArray.get(i).getdef_num() != 0){
				for (int c = 0; c < moduleArray.get(i).get_symbol_definednumlist().size(); c++){
					if (moduleArray.get(i).get_symbol_definednumlist().get(c) >= moduleArray.get(i).gettext_num()){
						moduleArray.get(i).get_symbol_definednumlist().set(c, 0);
						int new_defAddress = moduleArray.get(i).get_symbol_definednumlist().get(c);
						int num = new_defAddress += absoluteAddList.get(i-1);
						String symbol_witherror = moduleArray.get(i).get_symbolsdefinedlist().get(c);
						errors.get(3).put(symbol_witherror, num +" Error: The definition of " + symbol_witherror +" is outside module " + i + "; zero (relative) used.");
					}
				}
			}
			// Taking care of immediate appearing on use list error
			for (int j = 0; j < moduleArray.get(i).get_usesList().size(); j++){
				if (moduleArray.get(i).get_usesList().get(j).getType() == '1'){
					String text = moduleArray.get(i).get_usesList().get(j).toString();
					errors.get(4).put(text, "Error: Immediate address on use list; treated as External.");
				}
			}
			// Taking care of external address not on use list, treat it as immediate
			//System.out.println(moduleArray.get(i).get_textarray());
			for (int k = 0; k < moduleArray.get(i).get_textarray().size(); k++){
				if (moduleArray.get(i).get_textarray().get(k).isExternal() && !(moduleArray.get(i).get_usesList().contains(moduleArray.get(i).get_textarray().get(k)))){
					//then treat it as an immediate address and put it in the external error
					String text = moduleArray.get(i).get_textarray().get(k).toString();
					errors.get(5).put(text, "Error: E type address not on use chain; treated as I type.");
				}
			}	
		} // this bracket ends the for loop
		
		for (int x = 0; x < symbolsusedlist_mods.size(); x++){
			if (!(symbolsdefinedlist_mods.contains(symbolsusedlist_mods.get(x)))){
				// then not defined
				errors.get(2).put(symbolsusedlist_mods.get(x), "Error: " + symbolsusedlist_mods.get(x)  + " is not defined; zero used.");
			}
		}
	}
	public String toString(){
		String output = "";
		output += "Symbol Table\n";
		for (int x = 0; x < symbolsdefinedlist_mods.size(); x++){
			if(!errors.get(1).isEmpty()){
				if (!errors.get(1).containsKey(symbolsdefinedlist_mods.get(x))){
					output += symbolsdefinedlist_mods.get(x) + "=" + symbol_map.get(symbolsdefinedlist_mods.get(x)) + "\n";
				}
				else{
					output += symbolsdefinedlist_mods.get(x) + "=" + errors.get(1).get(symbolsdefinedlist_mods.get(x)) + "\n";
				}
			}
			else if(!errors.get(3).isEmpty()){
				if (!errors.get(3).containsKey(symbolsdefinedlist_mods.get(x))){
					output += symbolsdefinedlist_mods.get(x) + "=" + symbol_map.get(symbolsdefinedlist_mods.get(x)) + "\n";
				}
				else{
					output += symbolsdefinedlist_mods.get(x) + "=" + errors.get(3).get(symbolsdefinedlist_mods.get(x)) + "\n";
				}
			}
			else{
				output += symbolsdefinedlist_mods.get(x) + "=" + symbol_map.get(symbolsdefinedlist_mods.get(x)) + "\n";
			}
		}
		output += "\nMemory Map\n";
		
		ArrayList<Integer> relative_case_nums = new ArrayList<Integer>();
		relative_case_nums.add(0);
		for(int a = 0; a < mod_num-1; a++){
			relative_case_nums.add(moduleArray.get(a).gettext_num() + relative_case_nums.get(a));
		}
		
		
		ArrayList<String> final_output_text = new ArrayList<String>();
		for(int j = 0; j < mod_num; j++){
			for (int k = 0; k < moduleArray.get(j).get_textarray().size(); k++){
				if (!errors.get(2).isEmpty()){
					if (errors.get(2).containsKey(moduleArray.get(j).get_textarray().get(k).toString())){
						final_output_text.add(moduleArray.get(j).get_textarray().get(k).getFirstValue() + "000" + " " + errors.get(2).get(moduleArray.get(j).get_textarray().get(k).toString()));
					}
					else {
						if (moduleArray.get(j).get_textarray().get(k).getType() == '1' || moduleArray.get(j).get_textarray().get(k).getType() == '2'){
							final_output_text.add(moduleArray.get(j).get_textarray().get(k).getInstruction());
						}
						if (moduleArray.get(j).get_textarray().get(k).getType()  == '3'){
							int relative = Integer.parseInt(moduleArray.get(j).get_textarray().get(k).getInstruction()) + relative_case_nums.get(j);
							String relative_converted = Integer.toString(relative);
							final_output_text.add(relative_converted);
						}
						if (moduleArray.get(j).get_textarray().get(k).getType() == '4'){
							if (moduleArray.get(j).get_symbolsusedlist().size() > 0){
								String text = moduleArray.get(j).get_textarray().get(k).getFirstValue() +  "000";
								int text_convert = Integer.parseInt(text);
								int symbol_num = symbol_map.get(moduleArray.get(j).get_symbolsusedlist().get(0));
								int combined = text_convert + symbol_num;
								String combined_converted = Integer.toString(combined);
								final_output_text.add(combined_converted);
							}
						}
					}
				}
				else if (!errors.get(3).isEmpty()){
					if (moduleArray.get(j).get_textarray().get(k).getType() == '1' || moduleArray.get(j).get_textarray().get(k).getType() == '2'){
						final_output_text.add(moduleArray.get(j).get_textarray().get(k).getInstruction());
					}
					if (moduleArray.get(j).get_textarray().get(k).getType()  == '3'){
						int relative = Integer.parseInt(moduleArray.get(j).get_textarray().get(k).getInstruction()) + relative_case_nums.get(j);
						String relative_converted = Integer.toString(relative);
						final_output_text.add(relative_converted);
					}
					if (moduleArray.get(j).get_textarray().get(k).getType() == '4'){
						if (moduleArray.get(j).get_symbolsusedlist().size() > 0){
							String text = moduleArray.get(j).get_textarray().get(k).getFirstValue() +  "000";
							int text_convert = Integer.parseInt(text);
							String symbol_num_error_message = errors.get(3).get(symbolsdefinedlist_mods.get(0));
							String symbol_num = symbol_num_error_message.substring(0,1);
							int symbol_num_converted = Integer.parseInt(symbol_num);
							int combined = text_convert + symbol_num_converted;
							String combined_converted = Integer.toString(combined);
							final_output_text.add(combined_converted);
						}
					}
				}
				else if (!errors.get(4).isEmpty()){
					if(errors.get(4).containsKey(moduleArray.get(j).get_textarray().get(k).toString())){
						String text = moduleArray.get(j).get_textarray().get(k).getFirstValue() +  "000";
						int text_convert = Integer.parseInt(text);
						int symbol_num = symbol_map.get(moduleArray.get(j).get_symbolsusedlist().get(0));
						String error_message = errors.get(4).get(moduleArray.get(j).get_textarray().get(k).toString());
						int combined = text_convert + symbol_num;
						String combined_converted = Integer.toString(combined);
						final_output_text.add(combined_converted + " " + error_message);
						errors.get(4).remove(moduleArray.get(j).get_textarray().get(k).toString());
					}
					else{
						if (moduleArray.get(j).get_textarray().get(k).getType() == '1' || moduleArray.get(j).get_textarray().get(k).getType() == '2'){
							final_output_text.add(moduleArray.get(j).get_textarray().get(k).getInstruction());
						}
						if (moduleArray.get(j).get_textarray().get(k).getType()  == '3'){
							int relative = Integer.parseInt(moduleArray.get(j).get_textarray().get(k).getInstruction()) + relative_case_nums.get(j);
							String relative_converted = Integer.toString(relative);
							final_output_text.add(relative_converted);
						}
						if (moduleArray.get(j).get_textarray().get(k).getType() == '4'){
							if (moduleArray.get(j).get_symbolsusedlist().size() > 0){
								String text = moduleArray.get(j).get_textarray().get(k).getFirstValue() +  "000";
								int text_convert = Integer.parseInt(text);
								int symbol_num = symbol_map.get(moduleArray.get(j).get_symbolsusedlist().get(0));
								int combined = text_convert + symbol_num;
								String combined_converted = Integer.toString(combined);
								final_output_text.add(combined_converted);
							}
						}
					}
				}
				
				else if (!errors.get(5).isEmpty()){
					if(errors.get(5).containsKey(moduleArray.get(j).get_textarray().get(k).toString())){
						String text = moduleArray.get(j).get_textarray().get(k).getFirstValue() +  "000";
						int text_convert = Integer.parseInt(text);
						String error_message = errors.get(5).get(moduleArray.get(j).get_textarray().get(k).toString());
						String combined_converted = Integer.toString(text_convert);
						final_output_text.add(combined_converted + " " + error_message);
						errors.get(5).remove(moduleArray.get(j).get_textarray().get(k).toString());
					}
					else{
						if (moduleArray.get(j).get_textarray().get(k).getType() == '1' || moduleArray.get(j).get_textarray().get(k).getType() == '2'){
							final_output_text.add(moduleArray.get(j).get_textarray().get(k).getInstruction());
						}
						if (moduleArray.get(j).get_textarray().get(k).getType()  == '3'){
							int relative = Integer.parseInt(moduleArray.get(j).get_textarray().get(k).getInstruction()) + relative_case_nums.get(j);
							String relative_converted = Integer.toString(relative);
							final_output_text.add(relative_converted);
						}
						if (moduleArray.get(j).get_textarray().get(k).getType() == '4'){
							if (moduleArray.get(j).get_symbolsusedlist().size() > 0){
								String text = moduleArray.get(j).get_textarray().get(k).getFirstValue() +  "000";
								int text_convert = Integer.parseInt(text);
								int symbol_num = symbol_map.get(moduleArray.get(j).get_symbolsusedlist().get(0));
								int combined = text_convert + symbol_num;
								String combined_converted = Integer.toString(combined);
								final_output_text.add(combined_converted);
							}
						}
					}
				}
				else {
					if (moduleArray.get(j).get_textarray().get(k).getType() == '1' || moduleArray.get(j).get_textarray().get(k).getType() == '2'){
						final_output_text.add(moduleArray.get(j).get_textarray().get(k).getInstruction());
					}
					if (moduleArray.get(j).get_textarray().get(k).getType()  == '3'){
						int relative = Integer.parseInt(moduleArray.get(j).get_textarray().get(k).getInstruction()) + relative_case_nums.get(j);
						String relative_converted = Integer.toString(relative);
						final_output_text.add(relative_converted);
					}
					if (moduleArray.get(j).get_textarray().get(k).getType() == '4'){
						if (moduleArray.get(j).get_textarray().get(k).getType() == '4'){
							if (moduleArray.get(j).get_symbolsusedlist().size() > 0){
								String text = moduleArray.get(j).get_textarray().get(k).getFirstValue() +  "000";
								int text_convert = Integer.parseInt(text);
								int symbol_num = symbol_map.get(moduleArray.get(j).get_symbolsusedlist().get(0));
								int combined = text_convert + symbol_num;
								String combined_converted = Integer.toString(combined);
								final_output_text.add(combined_converted);
							}
						}
					}
				}
				
			}
		}
		for (int k = 0; k < text_array.size(); k++){
			output += k + ": " + final_output_text.get(k)  + "\n";
		}
		
		// DEFINED BUT NEVER USED ERROR
		if (!errors.get(0).isEmpty()){
			for (Map.Entry entry: errors.get(0).entrySet()){
				output += "\n" + entry.getValue();
			}
		}
		return output;
		
	}
}		
		
