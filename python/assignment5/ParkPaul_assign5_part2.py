#begin by constructing a for loop to iterate over all the students in the class
#then have a loop inside of the for loop to handle inputting the scores for a particular student
#try to get program to work first without data validation

while True:
    students = int(input("How many students are in your class? "))
    if students < 1:
        print("Invalid # of students, try again.")
    else:
        break
while True:
    tests = int(input("How many tests in this class? "))
    if tests < 1:
        print("Invalid # of tests, try again.")
    else:
        print("\nHere we go!\n")
        break

class_average = 0
for x in range(1, students+1, 1):
    print("**** Student #", end="")
    print(x,"****")
    total_score = 0
    for y in range(1, tests+1, 1):
        while True:
            score = int(input("Enter score for test #" + str(y) + ": "))
            
            if score < 0:
                print("Invalid score, try again")
            else:
                total_score  += score
                break
        
    calculation_studentaverage = total_score / y
    print("Average score for student #", end="")
    print(x,"is", format(calculation_studentaverage, ".2f"))
    class_average += calculation_studentaverage
    
    
print("\nAverage score for all students is:",format(class_average/students,".2f")) 

            
            
  
            
        
       
        


