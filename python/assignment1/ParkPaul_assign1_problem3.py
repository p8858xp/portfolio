#Paul Park
#Intro to Programming
#Assignment 1 problem 3


#create a variable for the speed of light and print
speed_of_light = 299792.458
print("Speed of light (Kilometers / sec):   ", speed_of_light, end=" kps")

#convert kilometers/sec to miles/sec
one_kilometer = 0.621 
speed_of_light_mps = speed_of_light * one_kilometer
print("\nSpeed of light (Miles / sec):        ", speed_of_light_mps, end=" mps")

#divide whatever the output is for speed of light in miles per second by 2
halfspeed_of_light_mps = speed_of_light_mps / 2
print("\nHalf speed of light (Miles / sec):   ", halfspeed_of_light_mps, end=" mps")

#divide this time by 4 to get the quarter speed
quarterspeed_of_light_mps = speed_of_light_mps / 4
print("\nQuarter speed of light (Miles / sec):", quarterspeed_of_light_mps, end=" mps")


print()
print("\nThe earth moves 66,600 miles / hour around the sun")

#convert miles per hour of earth speed around the sun to kilometers per second
earthspeed_around_sun = 66600
one_hour = 60
one_minute = 60
one_kilometer = 0.621

kps_earthspeed = earthspeed_around_sun / (one_hour * one_minute * one_kilometer)

print("66,600 miles per hour is equal to:   ", kps_earthspeed, end=" kps")

earthspeed_in_percentage = kps_earthspeed / speed_of_light
print("\n66,600 miles per hour is equal to:   ", earthspeed_in_percentage, end=" % of the speed of light")

