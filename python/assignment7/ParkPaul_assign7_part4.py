#Paul Park
#Part4ExtraCreditassignment7
#Intro to Programming

def string_length(word):
    counter = 0
    for x in word:
        counter += 1
    return counter

def string_isalpha(word):
    counter = 0
    for x in word:
        if (ord(x) >= 65 and ord(x) <= 90) or (ord(x) >=97 and ord(x) <= 122):
            counter +=1
    if counter == len(word) and counter != 0:
        return True
    else:
        return False



def string_isupper(word):
    counter = 0
    for x in word:
        if ord(x) >=65 and ord(x) <=90:
            counter += 1

    if counter == len(word) and counter != 0:
        return True
    else:
        return False

def string_isdigit(word):
    counter = 0
    for x in word:
        if ord(x) >=48 and ord(x) <=57:
            counter += 1
    if counter == len(word) and counter != 0:
        return True
    else:
        return False
def string_swapcase(word):
    string = ""
    for x in word:
        if x.isalpha():
            if x.islower():
                string += str.upper(x)
            else:
                string += str.lower(x)
        else:
            string += str(x)
    return string

def string_lower(word):
    string = ""
    for x in word:
        if x.isalpha():
            if x.isupper():
                string += chr(ord(x)+32)
            else:
                string += chr(ord(x))
        else:
            string += str(x)
    return string



