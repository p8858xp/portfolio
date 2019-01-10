#Paul Park
#assignment10part1
#Intro to Programming

import random

#define thesaurus
thesaurus = {
              "happy":["glad",  "blissful", "ecstatic", "at ease"],
              "sad"  :["bleak", "blue", "depressed"]
            }

#get phrase from the user
phrase = input("Enter a phrase: ")

#remove punctuation 
phrase = phrase.lower()
newphrase = "" 
for x in phrase:
    if x.isalpha():
        newphrase += x
    if x == " ":
        newphrase += x
words = newphrase.split(" ")

#pick synonymous word randomly 
for word in words:
    if word in thesaurus:
        print(thesaurus[word][random.randint(0,len(thesaurus[word])-1)].upper(), end=" ")
    else:
        print(word, end=" ")

