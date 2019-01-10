
#Paul Park
#Assignment 1 problem 2
#09/09/15
#Intro to Programming


#Prompt the user to enter 3 names and store each name in a separate variable
name1 = input("Please enter name #1: ")
name2 = input("Please enter name #2: ")
name3 = input("Please enter name #3: ")
print()
print("Here are your names in every possible order: ")
print("--------------------------------------------")
print()
#print the first three combinations all on one line separated by commas
print("1.", end=" ")
print(name1, name2, name3, sep=", ")
print()
print("2.", end=" ")
print(name1, name3, name2, sep=", ")
print()
print("3.", end=" ")
print(name2, name1, name3, sep=", ")
print()

#print the second three combinatons with one name per line
print("4.", name2)
print(name3)
print(name1)
print()
print("5.", name3)
print(name2)
print(name1)
print()
print("6.", name3)
print(name1)
print(name2)



    
