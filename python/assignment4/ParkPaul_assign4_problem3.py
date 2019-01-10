#Paul Park
#Assignment 4 problem 3
#Intro to Programming

#prompt user for a number of columns

column_number = int(input("How many columns? "))

while column_number <= 0:
    print("Invalid entry, try again!")

    column_number = int(input("How many columns? "))
    
while True:
    direction = str.lower(input("Direction? (l)eft or (r)ight: "))
    while direction != "r" and direction != "l":
        print("Invalid entry, try again!")
        column_number = int(input("How many columns? "))
        direction = str.lower(input("Direction? (l)eft or (r)ight: "))
        
    if column_number > 0 or direction == "l" or direction == "r":
        break      
    
# produce the first half of the arrow pattern
if direction == "r":
    spaces = " "
    counter = 0

    while column_number > counter:
        print((spaces*counter),end="*\n")
        counter += 1

    #produce the 2nd half of the arrow pattern
    counter -= 1
    while 0 < counter:
        counter -= 1
        print((spaces*counter),end="*\n")
        
if direction == "l":
    spaces = " "
    counter = column_number
    counter -= 1
    while 0 < counter:
        print((spaces * counter),end="*\n")
        counter -= 1
    counter = 0
    while column_number > counter:
        print((spaces*counter),end="*\n")
        counter += 1   
                    

