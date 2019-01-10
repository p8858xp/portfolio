#Paul Park
#Assignment 4 problem 2
#Intro to Programming

import random

#ask user for anumber of sticks to be used in the game (between 10 and 100)

num_sticks = int(input("How many sticks (10-100)? "))
#display too many or too few sticks if user enters a number outside the range
while True:
    if num_sticks > 100:
        print("Sorry, that's too many sticks. Try again")
        num_sticks = int(input("How many sticks (10-100)? "))
    if num_sticks < 10:
        print("Sorry, that's too few sticks. Try again.")
        num_sticks = int(input("How many sticks (10-100)? "))
    if num_sticks >= 10 and num_sticks <= 100:
        break
print("Great Let's play ...\n")

#Continue to ask the user how many sticks are on the table
#and ask the user to enter in a number of sticks to take away (1-3)
#anything that's not 1,2 or 3 must be an error displayed

    
counter_for_player_turns = 0
    
    
while True:
        
    counter_for_player_turns += 1
    if num_sticks == 0:
        print("There are no sticks left on the table! Game over.")
        if counter_for_player_turns %2 == 0:
            print("Computer wins!")
        else:
            print("Player 1 wins!")
        break
    if counter_for_player_turns %2 == 0:
        print("Turn: Computer")
        takeaway_num_sticks = random.randint(1,3)
        if(num_sticks - takeaway_num_sticks < 0):
            takeaway_num_sticks = random.randint(1,2)
            if(num_sticks - takeaway_num_sticks < 0):
                takeaway_num_sticks = 1
        print("There are", num_sticks,"sticks on the table.")
        print("Computer took", takeaway_num_sticks, "sticks away!")
    if counter_for_player_turns %2 != 0:
        print("Turn: Player 1")
        print("There are", num_sticks,"sticks on the table.")
        takeaway_num_sticks = int(input("How many sticks do you want to take (1, 2 or 3)? "))
        
           
    while num_sticks - takeaway_num_sticks < 0 or takeaway_num_sticks < 1 or takeaway_num_sticks > 3:
        print("Sorry, that's not a valid number.\n")    
        print("Turn: Player 1")
        print("There are", num_sticks,"sticks on the table.")
        takeaway_num_sticks = int(input("How many sticks do you want to take (1, 2 or 3)? "))
                
    print()
    
    num_sticks -= takeaway_num_sticks
        
        



    
            
        
