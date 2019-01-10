#Paul Park
#Assignment7part1b
#Intro to Programming

while True:
    username = input("Please enter a username: ")
    upper_case = 0
    lower_case = 0
    digits = 0
    for x in username:
        if x.isupper()==True:
            upper_case += 1
        elif x.isdigit()==True:
            digits+=1
        elif x.islower()==True:
            lower_case += 1
       
    if len(username) < 8 or len(username) > 15:
        print("Username must be between 8 and 15 characters.")
    elif not username.isalnum():
        print("Username must contain only alphanumeric character.")
    elif username[0].isdigit() or username[-1].isdigit():
        print("The first / last character in your username cannot be a digit")
    elif upper_case < 1:
        print("Your username must contain at least one uppercase character")
    elif digits < 1:
        print("Your username must contain at least one numeric digit")
    elif lower_case < 1:
        print("Your username must contain at least one lowercase character")
    else:
        print("Your username is valid")
        break

while True:
    password = input("Please enter a password: ")
    upper_case = 0
    lower_case = 0
    special = 0
    digits = 0
    invalid = 0
    for x in password:
        if x.isupper()==True:
            upper_case += 1
        elif x.isdigit()==True:
            digits+=1
        elif x.islower()==True:
            lower_case += 1
        elif x == "#" or x=="&" or x == "$" or x == "%":
            special+=1
        else:
            invalid+=1
    if len(password) < 8:
        print("Passowrds must be at least 8 characters long")
    elif username in password:
        print("You cannot use your username as part of your password")
    elif upper_case < 1:
        print("Your username must contain at least one uppercase character")
    elif digits < 1:
        print("Your username must contain at least one numeric digit")
    elif lower_case < 1:
        print("Your username must contain at least one lowercase character")
    elif invalid > 0:
        print("Your password contains at least one invalid character")
    elif special < 1:
        print("Your password must contain at least one 'special' character")
    else:
        print("Your password is valid!")
        break

    
        
