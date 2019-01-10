#PaulPark
#Assignment5 problem 3
#Intro to Programming
"""
#PART A

while True:
    num_test = int(input("Enter a positive number to test: "))
    if num_test < 1:
        print("Invalid entry, try again.")
    else:
        print()
        break
prime = True
for x in range(2,num_test,1):
    if num_test % x != 0:
        print(x,"is NOT a divisor of",num_test,"...continuing")
        
    if num_test % x == 0:
        print(x,"is a divisor of",num_test,"... stopping")
        prime = False
        break
print("\n",end="")

if prime == True:
    print(num_test, "is a prime number!")
else:
    
    print(num_test,"is not a prime number.")

#PART B
for y in range(1,1001):
    prime = True
    for x in range(2,y,1):
        if y % x ==0:
            prime = False
    if prime == True:
        print(y,"is a prime number!")

#PART C
while True:
    
    start_num = int(input("Start number: "))
    if start_num <= 0:
        print("Start and end must be positive")
    else:
        break
while True:
    end_num = int(input("End number: "))
    if end_num <= 0:
        print("Start and end must be positive")
    elif end_num <= start_num:
        print("End number must be greater than start number")
    else:
        break

            
for y in range(start_num,end_num+1,1):
    prime = True
    for x in range(2,y,1):
        if y % x ==0:
            prime = False
    if prime == True:
        print(y)
 """       
#PART C EXTRA CREDIT VERSION

while True:
    
    start_num = int(input("Start number: "))
    if start_num <= 0:
        print("Start and end must be positive")
    else:
        break
while True:
    end_num = int(input("End number: "))
    if end_num <= 0:
        print("Start and end must be positive")
    elif end_num <= start_num:
        print("End number must be greater than start number")
    else:
        break

counter = 0            
for y in range(start_num,end_num+1,1):
    prime = True
    for x in range(2,y,1):
        if y % x ==0:
            prime = False
    if prime == True:
        print(format(y,">4d"),end="")
        
        counter+=1
        if counter%10 == 0:
            print("\n",end="")
    

        
       
  
