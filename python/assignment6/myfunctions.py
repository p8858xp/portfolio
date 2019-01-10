import random
def horizontal_line(width):
    print("*" * width)

def vertical_line(shift, height):
    for i in range(0, height):
        print(" " * shift, end="")
        print("*" * 1)

def two_vertical_lines (height, width):
    for i in range(height):
        print("*" + " " *(width-2) + "*")



#part b
def number_0(width):
    horizontal_line(width)
    two_vertical_lines(3,width)
    horizontal_line(width)
    return "\n"


def number_1(width):
    vertical_line(width-1, 5)
    return "\n"
def number_2(width):
    horizontal_line(width)
    vertical_line(width-1, 1)
    horizontal_line(width)
    vertical_line(0, 1)
    horizontal_line(width)
    return "\n"
def number_3(width):
    horizontal_line(width)
    vertical_line(width-1, 1)
    horizontal_line(width)
    vertical_line(width-1, 1)
    horizontal_line(width)
    return "\n"

def number_4(width):
    two_vertical_lines(2,width)
    horizontal_line(width)
    vertical_line(width-1, 2)
    return  "\n"

def number_5(width):
    horizontal_line(width)
    vertical_line(0, 1)
    horizontal_line(width)
    vertical_line(width-1, 1)
    horizontal_line(width)
    return "\n"
def number_6(width):
    horizontal_line(width)
    vertical_line(0, 1)
    horizontal_line(width)
    two_vertical_lines(1,width)
    horizontal_line(width)
    return "\n"

def number_7(width):
    horizontal_line(width)
    vertical_line(width-1, width-1)
    return "\n"

def number_8(width):
    horizontal_line(width)
    two_vertical_lines(1,width)
    horizontal_line(width)
    two_vertical_lines(1,width)
    horizontal_line(width)
    return "\n"

def number_9(width):
    horizontal_line(width)
    two_vertical_lines(1,width)
    horizontal_line(width)
    vertical_line(width-1, 2)
    return "\n"

def printNum(number,size):
    if number == 0:
        print(number_0(size))
    elif number == 1:
        print(number_1(size))
    elif number == 2:
        print(number_2(size))
    elif number == 3:
        print(number_3(size))
    elif number == 4:
        print(number_4(size))
    elif number == 5:
        print(number_5(size))
    elif number == 6:
        print(number_6(size))
    elif number == 7:
        print(number_7(size))
    elif number == 8:
        print(number_8(size))
    else:
        print(number_9(size))
    

#part c
def plus(width):
    vertical_line(2, 2)
    horizontal_line(width)
    vertical_line(2, 2)
    return "\n"

def minus(width):
   
    print()
    print()
    horizontal_line(width)
    print()
    print()
    return "\n"
def multiply(width):
    two_vertical_lines(1,5)
    print(" ", end="")
    two_vertical_lines(1,3)
    vertical_line(2, 1)
    print(" ", end="")
    two_vertical_lines(1,3)
    two_vertical_lines(1,5)
    return "\n"
def divide(width):
    vertical_line(width-1, 1)
    vertical_line(width-2, 1)
    vertical_line(width-3, 1)
    vertical_line(width-4, 1)
    vertical_line(width-5, 1)
    return "\n"

   
    

#part d

def check_answer(num1,num2,answer,operator):
    if operator == "+":
        if answer == num1 + num2:
            return "Correct!\n"
        else:
            return "Sorry, that's not correct.\n"
    if operator == "-":
        if answer == num1 - num2:
            return "Correct!\n"
        else:
            return "Sorry, that's not correct.\n"
    if operator == "*":
        if answer == num1 * num2:
            return "Correct!\n"
        else:
            return "Sorry, that's not correct.\n"
    if operator == "/":
        if answer == num1 / num2:
            return "Correct!\n"
        else:
            return "Sorry, that's not correct.\n"


