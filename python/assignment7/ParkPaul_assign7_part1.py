#Paul Park
#Assignment 7 problem 1
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
        
                
                
        
            
      


    


        
        



  
