#Paul Park
#assignment 5 part 4
#Intro to Programming

#pattern 1(fill axes with cubes)
for x in range(-500, 501, 50):
    cube(x, 0, 0)
for y in range(50, 501, 50):
    cube(0, y, 0)
for z in range(-500,501,50):
    cube(0,0,z)

#pattern 2(diamond)
for y in range(0,250,10):
    cube(0,y,0,y,10,y)
z=250
for x in range(250,501,10):
    cube(0,x,0,z,10,z)
    z-=10

#pattern 3(tree)
for y in range(0, 150, 50):
	cube(0, y, 0)
lw = 350
for y in range(150, 501, 10):
	cube(0, y-25, 0, lw, 10,lw)
	lw-=10

#pattern 4 (stalagmites)
for x in range(-500, 501, 50):
    lwh = 55
    for y in range(0, 501, 50):
        cube(x, y, 0, lwh, lwh, lwh)
	lwh-=5	
#pattern 5 (stairway)
counter = 1
for x in range(0, 501, 50):
    h = 0
    for y in range(0, counter, 1):
        cube(x, h, 0)
        h+=50
    counter += 1
	
