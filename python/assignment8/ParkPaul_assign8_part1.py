#Paul Park
#assignment8 part1
#Intro to Programming

#do data validation
#make sure user enter number greater or equal to 10
while True:
     num = int(input("Please enter an integer greater than or equal to 10: "))
     if num < 10:          
          print("Invalid, try again.")
     else:
          print("The prime numbers in the range: 2 to", num)
          break

#assume all numbers in list are prime
mylist = ["P"]*(num+1)

#the numbers 1 and 2 will never be prime so set them to "N"
mylist[0] = "N"
mylist[1] = "N"


for x in range (2, len(mylist)):
     if mylist[x] == "P":

          for y in range(x*2, len(mylist), x):
               mylist[y] = "N"
               
print(mylist,"\n")

#print out found prime numbers in neatly aligned columns(10 primes on every row)
counter = 0
for z in range(0, len(mylist)):
     if mylist[z] == "P":
          print(format(z,"<4d"), end=" ")
          counter += 1
          if counter % 10 == 0:
               print("\n")
               
