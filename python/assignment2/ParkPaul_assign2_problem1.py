#Paul Park
#Assignment 2 problem 1

#prompt user to enter the bill and the tip
#input the bill and the tip as a float
print("Hello! I'm here to help you calculate your tip.")

amount_bill = float(input("How much was your bill? (enter as a number without dollar signs or commas): "))

percent_of_tip = float(input("How much tip would you like to leave? (enter just a number): "))

#convert the tip entered as a number into a decimal value
tip = 0.01 * percent_of_tip
print("Thanks!")

#calculate the tip

tip_result = amount_bill * tip

#output

ftip_result = format(tip_result,".2f")
print("You need to leave $", ftip_result, " as a tip.", sep="")

#find the total by adding the bill and the formatted tip

total = amount_bill + tip_result
ftotal = format(total, ".2f")
print("Your total bill will be $",ftotal, sep="")











      
