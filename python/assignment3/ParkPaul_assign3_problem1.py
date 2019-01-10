#Paul Park
#Assignment 3 problem 1
#Intro to Programming



# prompt the user to enter 3 points

print("Valid Triangle Tester")
point_1 = float(input("Enter Point #1 - x position: "))
point_1_2 = float(input("Enter Point #1 - y position: "))

point_2 = float(input("Enter Point #2 - x position: "))
point_2_2 = float(input("Enter Point #2 - y position: "))

point_3 = float(input("Enter Point #3 - x position: "))
point_3_2 = float(input("Enter Point #3 - y position: "))

#Compute distance between each points using the distance formula
distance_point1_point2 = ((point_1 - point_2)**2 + (point_1_2 - point_2_2)**2)**0.5

distance_point2_point3 = ((point_2 - point_3)**2 + (point_2_2 - point_3_2)**2)**0.5

distance_point3_point1 = ((point_3 - point_1)**2 + (point_3_2 - point_1_2)**2)**0.5


# report the distance to the user of each side rounded to 2 decimal places
print()
print("The length of each side of your test shape is:")
fside_1 = format(distance_point1_point2, ".2f")
fside_2 = format(distance_point2_point3, ".2f")
fside_3 = format(distance_point3_point1, ".2f")

print("Side 1:", fside_1)
print("Side 2:", fside_2)
print("Side 3:", fside_3)
print()

# determine if the three points could form a valid trangle

if distance_point1_point2 + distance_point2_point3 > distance_point3_point1:
    if distance_point2_point3 + distance_point3_point1 > distance_point1_point2:
        if distance_point3_point1 + distance_point1_point2 > distance_point2_point3:
            print("This is a valid triangle!")
else:
    print("This is not a valid triangle")
