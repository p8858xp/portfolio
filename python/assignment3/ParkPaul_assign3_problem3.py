#Paul Park
#Assignment 3 problem 3
#Intro to Programming

#ask user to enter a month and a date
month_number = int(input("Enter a month (1-12): "))
day_number = int(input("Enter a day (1-31): "))

#if the month or day entered if not within the range possible print it's not a valid date
if month_number > 12 or month_number < 1:
    print("That's not a valid date!")
elif day_number > 31 or day_number < 1:
    print("That's not a valid date!")
else:
    if month_number == 9 and day_number == 2:
        print("September 2 is the beginning of the term. NYU is not open on this day.")
    elif month_number == 9 and day_number < 2:
        print("September 1 is before the start of the Fall 2015 term.")
    elif month_number == 9 and day_number == 31:
        print("That's not a valid date!")
    else:
        if month_number == 9 and day_number == 7:
            print("September 7 is Labor Day. NYU is not open on this day.")
        else:
            if month_number == 10 and day_number == 12:
                print("October 12 is Fall Break. NYU is not open on this day.")
            else:
                if month_number == 10 and day_number == 13:
                    print("October 13 is Legislative Day. NYU is open and classes meet on a Monday schedule.")
                else:
                    if month_number == 11 and (day_number == 25 or day_number == 26 or day_number == 27 or day_number == 28 or day_number == 29):
                        print("November 25th-November 29th is Thanksgiving Break. NYU is not open on this day.")
                    else:
                        if month_number == 12 and day_number == 15:
                            print("December 15 is the last day of classes. NYU is open on this day.")
                        elif month_number == 12 and day_number > 15 and day_number <= 31:
                            print("December", day_number, "is after the end of the Fall 2015 term.")
                        else:
                            if month_number == 2 and day_number > 29:
                                print("That's not a valid date!")
                            elif month_number == 4 and day_number > 30:
                                print("That's not a valid date!")
                            elif month_number == 6 and day_number > 30:
                                print("That's not a valid date!")
                            elif month_number == 9 and day_number > 30:
                                print("That's not a valid date!")
                            elif month_number == 11 and day_number > 30:
                                print("That's not a valid date!")
                            else:
                                if month_number == 1 and day_number >= 1:
                                    print("January", day_number, "is before the start of the Fall 2015 term.")
                                elif month_number == 2 and day_number >= 1:
                                    print("February", day_number, "is before the start of the Fall 2015 term.")
                                elif month_number == 3 and day_number >= 1:
                                    print("March", day_number, "is before the start of the Fall 2015 term.")
                                elif month_number == 4 and day_number >= 1:
                                    print("April", day_number, "is before the start of the Fall 2015 term.")
                                elif month_number == 5 and day_number >= 1:
                                    print("May", day_number, "is before the start of the Fall 2015 term.")
                                elif month_number == 6 and day_number >= 1:
                                    print("June", day_number, "is before the start of the Fall 2015 term.")
                                elif month_number == 7 and day_number >= 1:
                                    print("July", day_number, "is before the start of the Fall 2015 term.")
                                elif month_number ==8 and day_number >= 1:
                                    print("August", day_number, "is before the start of the Fall 2015 term.")
                                else:
                                    if month_number == 9 and (day_number > 2 or day_number < 7 or day_number <= 30):
                                        print("September", day_number, "is not a holiday at NYU. NYU is open on this day.")
                                    elif month_number == 10 and (day_number < 12 or day_number > 12):
                                        print("October", day_number, "is not a holiday at NYU. NYU is open on this day.")
                                    elif month_number == 11 and (day_number > 29 or day_number < 25):
                                        print("November", day_number, "is not a holiday at NYU. NYU is open on this day.")
                                    elif month_number == 12 and day_number < 15:
                                        print("December", day_number, "is not a holiday at NYU. NYU is open on this day.")
                                                        
                                    
                           
                        
                        
           
