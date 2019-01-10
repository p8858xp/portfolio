#Paul Park
#assignment9 part 7(extra credit)
#Intro to Programming

import turtle
import urllib.request

url = "http://cs.nyu.edu/~kapp/python/"
response = urllib.request.urlopen(url)
data = response.read().decode('utf-8');
while True:
    filename = input("Enter an image filename: ")
    if filename in data:
        url = "http://cs.nyu.edu/~kapp/python/"+filename+".txt"
        response = urllib.request.urlopen(url)
        data = response.read().decode('utf-8');
        print("Success! I was able to find 'http://cs.nyu.edu/~kapp/python/"+filename+".txt'")
        break

     

    else:
        print("Sorry, 'http://cs.nyu.edu/~kapp/python/"+filename+".txt' doesn't exist.")

    
print(data)
split = data.split(",")
print(split)
greyscale = float(split[2])
turtle.bgcolor(greyscale,greyscale,greyscale)
turtle.begin_fill()
turtle.end_fill()
turtle.setup(int(split[0]),int(split[1]))


def draw_box(pixel_list):
    xpos = -250
    ypos = 250
    turtle.penup()
    turtle.goto(xpos,ypos)
    counter = -1
    for x in range(len(pixel_list) - 4):
        if pixel_list[x+4] == 'b':
            ypos -= 50
            xpos = -250
            turtle.goto(xpos,ypos)
        elif pixel_list[x] == 'true':
            a = 1
        elif pixel_list[4] == 'true':
            if counter % 3 == 0 and counter != 0:
                color1 = float(pixel_list[x])
                color2 = float(pixel_list[x+1])
                color3 = float(pixel_list[x+2])
                turtle.fillcolor(color1, color2, color3)
                turtle.begin_fill()
                for y in range(4):
                    turtle.forward(int(pixel_list[3]))
                    turtle.right(90)
                turtle.end_fill()
                xpos += 50
                turtle.goto(xpos,ypos)
            counter+=1
        else:
            thiscolor = float(pixel_list[x+4])
            turtle.fillcolor(thiscolor, thiscolor, thiscolor)
            turtle.begin_fill()
            for y in range(4):
                turtle.forward(int(pixel_list[3]))
                turtle.right(90)
            turtle.end_fill()
            xpos += 50
            turtle.penup()
            turtle.goto(xpos,ypos)

draw_box(split)
