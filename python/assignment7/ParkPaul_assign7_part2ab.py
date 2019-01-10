#Paul Park
#assignment7part2a
#Intro to Programming

clean_string = ""
name = input("Name: ")
lc_name = str.lower(name)
for x in lc_name:
    if x.isalpha():
        clean_string += x
    else:
        print("", end="")
        
print("Your 'clean up' name is: ",clean_string)

print("Your 'clean up' name reduces to:")

counter = 0
total = 0
for x in clean_string:
    counter += 1
    number = ord(x) - 96
    for y in range(1,27):
        if x == clean_string[-1] and counter == len(clean_string) and y== number:
            total += y
            print(y, end = "")
            break
        if y == number:
            total += y
            print(y, '+ ', end="")
print(" = ", total)
            
#Paul Park
#assignment7partb
#Intro to Programming



reduction = 0
while total > 9:
    for x in str(total):
        reduction += int(x)
    total = reduction
    print("Further reduction:", reduction)
    if reduction==0:
        print("This name means ...Emptiness")
    elif reduction==1:
        print("This name means ...Independence")
    elif reduction==2:
        print("This name means ...Quiet")
    elif reduction==3:
        print("This name means ...Charming")
    elif reduction==4:
        print("This name means ...Harmony")
    elif reduction==5:
        print("This name means ...New Directions")
    elif reduction==6:
        print("This name means ...Love")
    elif reduction==7:
        print("This name means ...Spirituality")
    elif reduction==8:
        print("This name means ...Organization")
    elif reduction==9:
        print("This name means ...Romantic")  
    reduction = 0

        
    




        
        


