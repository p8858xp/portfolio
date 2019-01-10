#Paul Park
#Assignment 3 problem 2
#Intro to Programming

# have your program choose a random integer 1-10 

import random

secret_number = random.randint(1, 10)

print("I'm thinking of a number between 1 and 10!")


# Ask user for their first number between 1-10 and if the user guesses the number right away, they win and the program ends
guess_1 = int(input("What's your guess? "))

if guess_1 == secret_number:
    print("You got it!")
    print("The secret number was", secret_number, end=".")
    print("\nIt took you 1 try to guess the number.")
else:
    if guess_1 > secret_number: 
        print("Too high, try again.")

    elif guess_1 < secret_number:
        print("Too low, try again.")

    
    
# ask user to guess again if they did not guess it the first try
    guess_2 = int(input("What's your guess? "))

    if guess_2 == secret_number:
        print("You got it!")
        print("The secret number was", secret_number, end=".")
        print("\nIt took you 2 tries to guess the number.")
    else:
        if guess_2 > secret_number:
            print("Too high, try again.")
        elif guess_2 < secret_number:
            print("Too low, try again.")
    
# ask user to guess for the third and last try if second guess was also wrong
        guess_3 = int(input("What's your guess? "))

        if guess_3 == secret_number:
            print("You got it!")
            print("The secret number was", secret_number, end=".")
            print("\nIt took you 3 tries to guess the number.")
        else:
            print("The secret number was", secret_number, end=".")
            print("\nYou didn't guess the number.")



            
    
    
