import random
def add_letters(word, num):
    scram = ""
    for y in word:
        additional_letters = ""
        for x in range(0,num):
            ran = random.randint(0,1)
            if ran == 0:
                z = random.randint(65,90)
            else:
                z = random.randint(97,122)
            additional_letters += chr(z)
        scram += y + additional_letters
    return scram
       
def remove_letters(word, num):
    ubscram = ""
    unscram = word[0:len(word):num+1]
           
    return unscram


def shift_characters(word, num):
    shifted = ""
    for x in word:
        shifted += chr(ord(x) + num)
    return shifted
        
     


while True:
    options = input("(e)ncode, (d)ecode or (q)uit: ")
    if options == "q":
        break
    else:
        while True:
            num = int(input("Enter a number between 1 and 5: "))
            if num > 5 or num < 1:
                print("Invalid, try again.")
            else:
                break
        if options == "e":
            phrase = input("Enter a phrase to encode: ")
            encode = add_letters(phrase, num)
            final_encode = shift_characters(encode, num)
            print("Your encoded word is:", final_encode)
            print()
        elif options == "d":
            phrase = input("Enter a phrase to decode: ")
            decode = remove_letters(phrase, num)
            final_decode = shift_characters(decode, -num)
            print("Your decoded word is:",final_decode)
            print()
                



