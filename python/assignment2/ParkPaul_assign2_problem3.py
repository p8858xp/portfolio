#PaulPark
#Assignment2 problem3

#Ask user for their name and the name of the class
user_name = input("What is your name? ")
Class_name = input("What class are you in? ")
print()
#ask the user for the weighting of tests in their class
test_worths = float(input("How much are tests worth in this class (i.e. 0.40 for 40%): "))

#ask the user for 3 test scores
test_1 = float(input("Enter test score #1: "))
test_2 = float(input("Enter test score #2: "))
test_3 = float(input("Enter test score #3: "))
print()

#input calculation for average
test_average = (test_1 + test_2 + test_3) / 3
ftest_average = format(test_average, ".2f")
print("Your test average is: ", ftest_average)
print()

#ask the user for the weighting of hw in class
homework_worth = float(input("How much are homework assignments worth in this class (i.e. 0.60 for 60%): "))
homework_1 = float(input("Enter homework score #1: "))
homework_2 = float(input("Enter homework score #2: "))
homework_3 = float(input("Enter homework score #3: "))
print()

#calculate homework average
homework_average = (homework_1 + homework_2 + homework_3) / 3
print("Your homework average is:", homework_average)
print()

#calculate the student's final grade and display it to user

final_grade = (test_average * test_worths) + (homework_average * homework_worth)
ffinal_grade = format(final_grade, ".2f")
print("Thanks,", user_name, end=".")
print(" Your final score in", Class_name,"is", ffinal_grade)


