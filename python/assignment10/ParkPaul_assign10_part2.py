#Paul Park
#assignment10part2
#Intro to Programming

import random

#open the thesaurus file 
filename = open("python_asg10_Roget_Thesaurus.txt", "r")
new_filename = filename.readlines()
filename.close()

#make empty dict
thesaurus = {}
for x in new_filename:
    strip_lines = x.strip()
    split_lines = strip_lines.lower().split(",")
    thesaurus[split_lines[0]] = split_lines[1:len(split_lines)]

#count all words in thesaurus using len()
total = len(thesaurus)
print ("Total words in thesaurus:", total) 
#tell user to enter in a phrase 
phrase = input("Enter a phrase: ") 
phrase = phrase.lower()

#create a new empty string to put in synonyms
newphrase = ""
for x in phrase:
    if x.isalpha():
        newphrase += x
    if x == " ":
        newphrase += x
words = newphrase.split(" ")

for word in words:
    if word in thesaurus:
        print(thesaurus[word][random.randint(0,len(thesaurus[word])-1)].upper(), end=" ")
    else:
        print(word, end=" ") 
