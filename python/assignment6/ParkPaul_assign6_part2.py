#Paul Park
#Assignment 6
#part 2a
#Intro to Programming

import myfunctions
import random

while True:
    attempts = int(input("How many problems would you like to attempt? "))
    if attempts <= 0:
        print("Invalid number, try again\n")
    else:
        break
while True:
    size = int(input("How wide do you want your digits to be? 5-10: "))
    if size < 5 or size > 10:
        print("Invalid width, try again\n")
    else:
        print("\nHere we go!\n")
        break
drill_mode = str.lower(input("Would you like to activate 'drill' mode? "))

             
         
     

total_score = 0
total_addition = 0
correct_addition = 0
total_subtraction = 0
correct_subtraction = 0
total_multiplication = 0
correct_multiplication = 0
total_division = 0
correct_division = 0
extra_attempts_subtraction = 0
extra_attempts_add = 0
extra_attempts_multiply = 0
extra_attempts_divide = 0

for x in range(attempts):
    
    num1 = random.randint(0,9)
    num2 = random.randint(0,9)
    operator = random.randint(1,4)
    print("What is .....\n")
    
    if operator == 1:
        total_addition +=1
        myfunctions.printNum(num1, size)
        print(myfunctions.plus(5))
        myfunctions.printNum(num2, size) 
        answer = int(input("= "))
        print(myfunctions.check_answer(num1, num2, answer, "+"))
        if answer == num1 + num2:
            total_score += 1
            correct_addition += 1
        while drill_mode == "yes" and myfunctions.check_answer(num1, num2, answer, "+") != "Correct!\n":
            answer = int(input("= "))
            print(myfunctions.check_answer(num1, num2, answer, "+"))
            extra_attempts_add += 1
        
    elif operator == 2:
        total_subtraction += 1
        myfunctions.printNum(num1, size)
        print(myfunctions.minus(5))
        myfunctions.printNum(num2, size)
        answer = int(input("= "))
        print(myfunctions.check_answer(num1, num2, answer, "-"))
        if answer == num1 - num2:
            total_score += 1
            correct_subtraction += 1
        while drill_mode == "yes" and myfunctions.check_answer(num1, num2, answer, "-") != "Correct!\n":
            answer = int(input("= "))
            print(myfunctions.check_answer(num1, num2, answer, "-"))
            extra_attempts_subtraction += 1
            
    elif operator == 3:
        total_multiplication += 1
        myfunctions.printNum(num1, size)
        print(myfunctions.multiply(5))
        myfunctions.printNum(num2, size) 
        answer = int(input("= "))
        print(myfunctions.check_answer(num1, num2, answer, "*"))
        if answer == num1 * num2:
            total_score += 1
            correct_multiplication += 1
        while drill_mode == "yes" and myfunctions.check_answer(num1, num2, answer, "*") != "Correct!\n":
            answer = int(input("= "))
            print(myfunctions.check_answer(num1, num2, answer, "*"))
            extra_attempts_multiply += 1
    else:
        while num2 == 0 or num1 % num2 != 0:
            num1 = random.randint(0,9)
            num2 = random.randint(0,9)
        total_division += 1
        myfunctions.printNum(num1,size)
        print(myfunctions.divide(5))
        myfunctions.printNum(num2, size) 
        answer = int(input("= "))
        print(myfunctions.check_answer(num1, num2, answer, "/"))
        if answer == num1 / num2:
            total_score += 1
            correct_division += 1
        while drill_mode == "yes" and myfunctions.check_answer(num1, num2, answer, "/") != "Correct!\n":
            answer = int(input("= "))
            print(myfunctions.check_answer(num1, num2, answer, "/"))
            extra_attempts_divide += 1

print("You got", total_score,"out of", attempts,"correct!\n")
if total_addition == 0:
    print("No addition problems presented")
elif drill_mode == "no":
    print("Total addition problems presented:", total_addition)
    print("Correct addition problems:", correct_addition, end=" (")
    print(format(100*(correct_addition/total_addition), ".1f"), end = "%)\n")
else:
    print("Total addition problems presented:", total_addition)
    if extra_attempts_add == 0:
        print("# of extra attempts needed:", extra_attempts_add,"(perfect!)")
    else:
        print("# of extra attempts needed:", extra_attempts_add)
    
if total_subtraction == 0:
    print("No subtraction problems presented")
elif drill_mode =="no":
    print("\nTotal subraction problems presented:", total_subtraction)
    print("Correct subtraction problems:", correct_subtraction, end=" (")
    print(format(100*(correct_subtraction/total_subtraction),".1f"), end ="%)\n")
else:
    print("Total subtraction problems presented:", total_subtraction)
    if extra_attempts_subtraction == 0:
        print("# of extra attempts needed:", extra_attempts_subtraction,"(perfect!)")
    else:
        print("# of extra attempts needed:", extra_attempts_subtraction)
    
if total_multiplication == 0:
    print("No multiplication problems presented")
elif drill_mode == "no":
    print("\nTotal multiplication problems presented:", total_multiplication)
    print("Correct multiplication problems:", correct_multiplication, end=" (")
    print(format(100*(correct_multiplication/total_multiplication),".1f"), end = "%)\n")
else:
    print("Total multiplication problems presented:", total_multiplication)
    if extra_attempts_multiply == 0:
        print("# of extra attempts needed:", extra_attempts_multiply,"(perfect!)")
    else:
        print("# of extra attempts needed:", extra_attempts_multiply)

if total_division == 0:
    print("No division problems presented")
elif drill_mode == "no":
    print("\nTotal division problems presented:", total_division)
    print("Correct division problems:", correct_division, end=" (")
    print(format(100*(correct_division/total_division), ".1f"), end = "%)\n")
else:
    print("Total division problems presented:", total_division)
    if extra_attempts_divide == 0:
        print("# of extra attempts needed:", extra_attempts_divide,"(perfect!)")
    else:
        print("# of extra attempts needed:", extra_attempts_divide)


    
    


  




        


        

