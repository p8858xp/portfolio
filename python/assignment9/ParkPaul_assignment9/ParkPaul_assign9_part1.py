#Paul Park
#Assignment9 (parts1-6)
#Intro to programming


answer_key = "B,A,D,D,C,B,D,A,C,C,D,B,A,B,A,C,B,D,A,C,A,A,B,D,D"

filename = input("Enter a class to grade(i.e. class1 for class1.txt): ")

try:
    myfile = open(filename + ".txt","r")
except:
    print("File can't be found")

else:
    print("Successfully opened",filename+".txt")
    print("\n**** ANALYZING ****\n")
    alldata = myfile.read()
    myfile.close()

    lines = alldata.split("\n")
    

    student_score = []
    list_n_number = []
    invalid = 0
    for line in lines:
        check_invalid = False
        #examine this line
        value_in_line = line.split(",")
        n_number = value_in_line[0]
        student_mc_answers = value_in_line[1::]

        #make sure it has 26 values between the ,
        if len(value_in_line) != 26:
            print("Invalid line of data: does not contain exactly 26 values:")
            invalid+=1
            print(value_in_line,"\n")
            check_invalid = True
        #make sure the N# is valid
        #starts with N
        #eight numeric values after the N character
        else:
            for i in n_number:
                if n_number[0] != "N":
                    print("Invalid line of data: N# is invalid")
                    print(value_in_line,"\n")
                    invalid += 1
                    check_invalid = True
                    break
                elif not n_number[1::].isdigit():
                    print("Invalid line of data: N# is invalid")
                    print(value_in_line,"\n")
                    invalid+=1
                    check_invalid = True
                    break
                elif len(n_number[1::])!=8:
                    print("Invalid line of data: N# is invalid")
                    print(value_in_line,"\n")
                    invalid+=1
                    check_invalid = True
                    break
            answerkey_list = list(answer_key[::2]) 
            total_score=0
            
            for s in range(0,len(student_mc_answers)):
                if student_mc_answers[s]==answerkey_list[s]:
                    total_score+=4
                    
                elif student_mc_answers[s]=="":
                    total_score+=0
                else:
                    total_score-=1
            if check_invalid == False:
                student_score+=[total_score]
                list_n_number+=[n_number]
                
            

      
    
    if invalid == 0:
        print("No errors found!")

   
        
     
    #make a duplicate list of student_score

    dup_score = []
    for i in student_score:
        dup_score.append(i)


    #find the mode in the student score list
    unique = []
    seen = []
    for i in student_score:
        if i not in unique:
            unique.append(i)
    for x in unique:
        counter = 0
        for y in student_score:
            if x == y:
                counter+=1
        seen.append(counter)
    
    
    location = seen.index(max(seen))
    
    mode = unique[location]

    student_score.sort()
    #find the median in the student score list
    if len(student_score)%2!=0:
        median = student_score[len(student_score)//2]
    else:
        medium_score = len(student_score) / 2
        middle_addition = (student_score[int(medium_score)] + student_score[int(medium_score-1)])
        median = middle_addition / 2
        
    #report to the user how many good and how many bad
    #lines we have in the file
    total_lines=len(lines)
    valid = total_lines - invalid
    print("\n****REPORT****\n")
    print("Total valid lines of data:", valid )
    print("Total invalid lines of data:", invalid )

    #look at the student scores list and find highes,lowest, range, and average
    high = max(student_score)
    low = min(student_score)
    Range = high - low
    average = sum(student_score)/valid
    f_average = format(average,".2f")
    #print mean, high, low, range, median, mode
    print("\nMean (average) score:",f_average )
    print("Highest score:", high )
    print("Lowest score:", low)
    print("Range of scores:", Range)
    print("Median score:",median)
    print("Mode score(s):",mode)
    
    #have to unsort your student_score list here but how
    

    #ask user if they want to curve their scores
    curve = input("Would you like to apply a curve to the scores? (y)es or (n)o? ")
    lc_curve = curve.lower()
    #if you want the curve, write a file with original and curved scores
    
    if curve == "y":
        curved_scores_list = []
        desired_mean_score = int(input("Enter desired mean score: "))
        print("Done! A new grade file has been written ("+ filename+"_grades_with_curve.txt)")
        curve_num = desired_mean_score - float(f_average)
        for i in dup_score:
            i+=curve_num
            f_i = format(i,".2f")
            curved_scores_list.append(f_i)
        
        
        file_name = open(filename+"_grades_with_curve.txt","w")

        for x in range(0,len(dup_score)):
            file_name.write(str(list_n_number[x])+","+str(dup_score[x])+","+str(curved_scores_list[x])+"\n")
        file_name.close() 
        
    #if user prints no just write the file of scores without the curve
    elif curve == "n":
        newfile = open(filename + "_grades.txt","w")
        for x in range(0,len(dup_score)):
            newfile.write(str(list_n_number[x])+","+str(dup_score[x])+"\n")
        newfile.close()
    else:
        print("Invalid option")


            
    
    

