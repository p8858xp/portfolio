#Paul Park
#Assignment 2 problem 2
#Intro to programming

#Welcome the user
print("This program will project how much you can earn by investing money in a high-yield savings account over a 6 month period.")
print()
#prompt the user to enter the inital invest and the interest rate

initial_invest = float(input("To begin, enter how much money you would like to initially invest (i.e. 500): "))
annual_interest_rate = float(input("Next, enter your projected annual interest rate. For example, enter 0.05 for 5%: "))
print()
#Calculations
print("------- Calculating --------")
print()

interest_month1 = (annual_interest_rate / 12) * initial_invest
ending_balance1 = initial_invest + interest_month1

interest_month2 = (annual_interest_rate / 12) * ending_balance1
ending_balance2 = ending_balance1 + interest_month2

interest_month3 = (annual_interest_rate / 12) * ending_balance2
ending_balance3 = ending_balance2 + interest_month3


#format everything to line up

column1 = format("Month", "<6s")
column2 = format("Starting Balance", "<21s")
column3 = format("Interest", "<12s")
column4 = "Ending Balance"
print(column1 + column2 + column3 + column4)

initial_for_print = format(initial_invest, ",.2f")
column1_1 = format("1", "<6s")
column2_1 = format(initial_for_print, "<21s")
finterest_month1 = format(interest_month1, ".2f")
column3_1 = format(finterest_month1, "<12s")
fending_balance1 = format(ending_balance1, ",.2f")
print(column1_1 + column2_1 + column3_1 + fending_balance1)

column1_2 = format("2", "<6s")
column2_2 = format(fending_balance1, "<21s")
finterest_month2 = format(interest_month2, ",.2f")
column3_2 = format(finterest_month2, "<12s")
fending_balance2 = format(ending_balance2, ",.2f")
column4_2 = format(fending_balance2)
print(column1_2+ column2_2 + column3_2 +column4_2)

column1_3 = format("3", "<6s")
column2_3 = format(fending_balance2, "<21s")
finterest_month3 = format(interest_month3, ",.2f")
column3_3 = format(finterest_month3, "<12s")
fending_balance3 = format(ending_balance3, ",.2f")
column4_3 = format(fending_balance3)
print(column1_3 + column2_3 + column3_3 + column4_3)



                       
                             
