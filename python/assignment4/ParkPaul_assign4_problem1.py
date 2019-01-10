#Paul Park
#Assignment 4 problem 1
#Intro to Programming

import random

#prompt the user to enter the number of sides of the first die
die_number = int(input("How many sides on your dice (4-20)? "))

#if the user enters an invalid number keep asking the user to choose a valid size value
while die_number < 4 or die_number > 20:
    print("Sorry, that's not a valid size value. Please choose a valid size value.")
    die_number = int(input("How many sides on your dice (4-20)? "))

    #if the user does enter a valid number then start the program and break out of the loop
    if die_number >= 4 and die_number <=20:
        break
print()
print("Thanks! Here we go ...")
print()

#make vars for counting number of tries to get snakes eyes
#make vars for counting rolled doubles
counter = 0
counter_for_double = 0
sum_of_die1 = 0
sum_of_die2 = 0
while True:
    die1 = random.randint(1,die_number)
    die2 = random.randint(1,die_number)
    counter += 1
    sum_of_die1 += die1
    sum_of_die2 += die2
    if die1 == die2:
        counter_for_double += 1

    print("die number 1 is", die1,"and die number 2 is", die2, end=".\n")
    if die1 == 1 and die2 == 1:
        print()
        print("You got snakes eyes! Finally! On try number", counter,end="!")
        percentage = float((counter_for_double / counter) * 100)
        f_percentage = format(percentage, ".2f")
        print("\nAlong the way you rolled doubles", counter_for_double, "times (" + str(f_percentage) +"% of all rolls were doubles)", )
        #calculate the average roll
        average_roll_one = sum_of_die1 / counter
        average_roll_two = sum_of_die2 / counter
        #format averages to two decimal places
        faverage_roll_one = format(average_roll_one,".2f")
        faverage_roll_two = format(average_roll_two,".2f")
        #print out the average roll for die 1 and die 2
        print("The average roll for die #1 was", faverage_roll_one)
        print("The average roll for die #2 was", faverage_roll_two)
        break
    
        
        

    
        






        
        
    
   
    

    
