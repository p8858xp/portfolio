#Paul Park
#assignment 5 problem 1

while True:
    num_bottles = int(input("How many bottles of beer on the wall? "))
    if num_bottles < 1:
        print("Sorry, that's not a valid number of bottles. Try again.\n")
    else:
        print("\nOk, here we go!\n")
        break

for x in range(num_bottles, 0, -1):
    
    if x > 1:
        print(x, "bottles of beer on the wall,",x,"bottles of beer.")
        print("Take one down, pass it around,",x-1,"bottles of beer on the wall.\n")
    else:
        print(x, "bottle of beer on the wall,",x,"bottle of beer.")
        print("Take it down, pass it around, no more bottles of beer on the wall!")
        
