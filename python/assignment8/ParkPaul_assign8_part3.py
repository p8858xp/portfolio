#Paul Park
#Assignment8part 3
#Intro to Programming

import random
cards  = ['10 of Hearts', '9 of Hearts', '8 of Hearts', '7 of Hearts', '6 of Hearts', 
          '5 of Hearts', '4 of Hearts', '3 of Hearts', '2 of Hearts', 'Ace of Hearts', 
          'King of Hearts', 'Queen of Hearts', 'Jack of Hearts', '10 of Diamonds', 
          '9 of Diamonds', '8 of Diamonds', '7 of Diamonds', '6 of Diamonds', 
          '5 of Diamonds', '4 of Diamonds', '3 of Diamonds', '2 of Diamonds', 
          'Ace of Diamonds', 'King of Diamonds', 'Queen of Diamonds', 'Jack of Diamonds', 
          '10 of Clubs', '9 of Clubs', '8 of Clubs', '7 of Clubs', '6 of Clubs', 
          '5 of Clubs', '4 of Clubs', '3 of Clubs', '2 of Clubs', 'Ace of Clubs', 
          'King of Clubs', 'Queen of Clubs', 'Jack of Clubs', '10 of Spades', 
          '9 of Spades', '8 of Spades', '7 of Spades', '6 of Spades', '5 of Spades', 
          '4 of Spades', '3 of Spades', '2 of Spades', 'Ace of Spades', 
          'King of Spades', 'Queen of Spades', 'Jack of Spades']

values = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 10, 10, 10, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 
          10, 10, 10, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 10, 10, 10, 10, 9, 8, 7, 6, 5, 
          4, 3, 2, 1, 10, 10, 10]

user_deck = []
user_deck_value = []
card_one = random.randint(0,51)
draw_one = (cards[card_one])
user_deck.append(draw_one)
cards.remove(draw_one)
# add card to user's deck
# remove card from list

card_two = random.randint(0,len(cards))


draw_two = (cards[card_two])
cards.remove(draw_two)
user_deck.append(draw_two)

value_one = (values[card_one])
del values[card_one]
value_two = (values[card_two])
del values[card_two]

total_value = value_one + value_two

while True:
    print("Player hand:",user_deck,"is worth",total_value)
    #how do you remove the random two cards chosen from the 52 deck of cards
    if total_value < 21:
        hit_stand_option = input("(h)it or (s)tand? ")
        if hit_stand_option == "h":
            draw_index = random.randint(0,len(cards))
            draw_new = cards[draw_index]
            draw_value = values[draw_index]
            print("You drew",draw_new)
            user_deck.append(draw_new)
            total_value += draw_value
            cards.remove(draw_new)
            del values[draw_index]
        elif hit_stand_option == "s":
            computer_deck = []
            computer_deck_value = []
            computer_card_one = random.randint(0,len(cards))
            computer_draw_one = (cards[computer_card_one])
            computer_deck.append(computer_draw_one)
            cards.remove(computer_draw_one)
            computer_card_two = random.randint(0,len(cards))
            computer_draw_two = (cards[computer_card_two])
            cards.remove(computer_draw_two)
            computer_deck.append(computer_draw_two)

            computer_value_one = (values[computer_card_one])
            del values[computer_card_one]
            computer_value_two = (values[computer_card_two])
            del values[computer_card_two]

            computer_total_value = computer_value_one + computer_value_two
            while computer_total_value < total_value and computer_total_value<21:
                print("Computer hand:",computer_deck,"is worth", computer_total_value)
                computer_draw_index = random.randint(0,len(cards))
                computer_draw_new = cards[computer_draw_index]
                computer_draw_value = values[computer_draw_index]
                print("You drew",computer_draw_new)
                computer_deck.append(computer_draw_new)
                computer_total_value += computer_draw_value
                cards.remove(computer_draw_new)
                del values[computer_draw_index]
            if computer_total_value > total_value and computer_total_value <= 21:
                if computer_total_value == 21:
                    print("Computer hand:",computer_deck,"is worth", computer_total_value)
                    print("Computer got 21! Blackjack!")
                    print("Computer Wins!")
                    break
                else:
                    print("Computer hand:",computer_deck,"is worth", computer_total_value)
                    print("Computer wins!")
                    break
            elif computer_total_value>21:
                print("Computer hand:",computer_deck,"is worth", computer_total_value)
                print("Computer bust!")
                print("Player wins!")
                break
            
                

    elif total_value == 21:
        print("Player got 21! Blackjack!")
        print("Player wins!")
        break
    else:
        print("Bust!")
        print("Computer Wins!")
        break

