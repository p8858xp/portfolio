#Paul Park
#Assignment8part2
#Intro to Programming

#parta
"""
#product lists
product_names = ["hamburger", "cheeseburger", "small fries"]
product_costs = [0.99, 1.29, 1.49]


while True:
    report_status = input("(s)earch for product or (q)uit: ")
    lc_report = report_status.lower()

    if lc_report == "s":
        product = input("Enter a product name: ")
        lc_product = product.lower()
        for x in range(0,len(product_names)):
            if lc_product == product_names[x]:
                print("We sell \""+lc_product+"\" at",product_costs[x],"per unit\n")
            elif lc_product not in product_names:
                print("Sorry, we don't sell \""+lc_product+"\"\n")
                break
    elif lc_report == "q":
        print("See you soon!")
        break
    else:
        print("Invalid option, try again\n")
            
"""

#partb
"""
product_names = ["hamburger", "cheeseburger", "small fries"]
product_costs = [0.99, 1.29, 1.49]
product_quantity = [10, 5, 20]

while True:
    report_status = input("(s)earch, (l)ist or (q)uit: ")
    lc_report = report_status.lower()

    if lc_report == "s":
        product = input("Enter a product name: ")
        lc_product = product.lower()
        for x in range(0,len(product_names)):
            if lc_product == product_names[x]:
                print("We sell \""+lc_product+"\" at",product_costs[x],"per unit")
                print("We currently have",product_quantity[x],"in stock\n")
            elif lc_product not in product_names:
                print("Sorry, we don't sell \""+lc_product+"\"\n")
                break
    elif lc_report == "l":
        print(format("Product","<16s"),end="")
        print(format("Price","<7s"),end="")
        print(format("Quantity"))
        for x in range(0,len(product_names)):
            print(format(product_names[x],"<16s"),end="")
            print(format(product_costs[x],"<7.2f"),end="")
            print(format(product_quantity[x]))
        print()
    elif lc_report == "q":
        print("See you soon!")
        break
    
    else:
        print("Invalid option, try again\n")
"""                

#partc
"""
product_names = ["hamburger", "cheeseburger", "small fries"]
product_costs = [0.99, 1.29, 1.49]
product_quantity = [10, 5, 20]

while True:
    report_status = input("(s)earch, (l)ist, (a)dd or (q)uit: ")
    lc_report = report_status.lower()

    if lc_report == "s":
        product = input("Enter a product name: ")
        lc_product = product.lower()
        for x in range(0,len(product_names)):
            if lc_product == product_names[x]:
                print("We sell \""+lc_product+"\" at",product_costs[x],"per unit")
                print("We currently have",product_quantity[x],"in stock\n")
            elif lc_product not in product_names:
                print("Sorry, we don't sell \""+lc_product+"\"\n")
                break
    elif lc_report == "l":
        print(format("Product","<18s"),end="")
        print(format("Price","<7s"),end="")
        print(format("Quantity"))
        for x in range(0,len(product_names)):
            print(format(product_names[x],"<18s"),end="")
            print(format(product_costs[x],"<7.2f"),end="")
            print(format(product_quantity[x]))
        print()
    elif lc_report == "a":
        while True:
            new_product = input("Enter a new product name: ")
            lc_new_product = new_product.lower()
            if lc_new_product in product_names:
                print("Sorry, we already sell that product. Try again.")
            else:
                break

        while True:
            newproduct_cost=float(input("Enter a product cost: "))
            if newproduct_cost <= 0:
                print("Invalid cost. Try again.")
            else:
                break
        while True:
            quantity_newcost = int(input("How many of these products do we have? "))
            if quantity_newcost <=0:
                print("Invalid quantity. Try again.")
            else:
                product_names.append(lc_new_product)
                product_costs.append(newproduct_cost)
                product_quantity.append(quantity_newcost)
                print("Product added!\n")
                break
        
    elif lc_report == "q":
        print("See you soon!")
        break
    
    else:
        print("Invalid option, try again\n")
"""

#part d
"""
product_names = ["hamburger", "cheeseburger", "small fries"]
product_costs = [0.99, 1.29, 1.49]
product_quantity = [10, 5, 20]

while True:
    report_status = input("(s)earch, (l)ist, (a)dd, (r)emove or (q)uit: ")
    lc_report = report_status.lower()

    if lc_report == "s":
        product = input("Enter a product name: ")
        lc_product = product.lower()
        for x in range(0,len(product_names)):
            if lc_product == product_names[x]:
                print("We sell \""+lc_product+"\" at",product_costs[x],"per unit")
                print("We currently have",product_quantity[x],"in stock\n")
            elif lc_product not in product_names:
                print("Sorry, we don't sell \""+lc_product+"\"\n")
                break
    elif lc_report == "l":
        print(format("Product","<18s"),end="")
        print(format("Price","<7s"),end="")
        print(format("Quantity"))
        for x in range(0,len(product_names)):
            print(format(product_names[x],"<18s"),end="")
            print(format(product_costs[x],"<7.2f"),end="")
            print(format(product_quantity[x]))
        print()
    elif lc_report == "a":
        while True:
            new_product = input("Enter a new product name: ")
            lc_new_product = new_product.lower()
            if lc_new_product in product_names:
                print("Sorry, we already sell that product. Try again.")
            else:
                break

        while True:
            newproduct_cost=float(input("Enter a product cost: "))
            if newproduct_cost <= 0:
                print("Invalid cost. Try again.")
            else:
                break
        while True:
            quantity_newcost = int(input("How many of these products do we have? "))
            if quantity_newcost <=0:
                print("Invalid quantity. Try again.")
            else:
                product_names.append(lc_new_product)
                product_costs.append(newproduct_cost)
                product_quantity.append(quantity_newcost)
                print("Product added!\n")
                break
    elif lc_report == "r":
        product_remove = input("Enter a product name: ")
        if product_remove in product_names:
            location = product_names.index(product_remove)
            product_costs.remove(product_costs[location])
            product_quantity.remove(product_quantity[location])
            product_names.remove(product_names[location])
            print("Product removed!\n")
        else:
            print("Product doesn't exist. Can't remove.\n")
        
    elif lc_report == "q":
        print("See you soon!")
        break
    
    else:
        print("Invalid option, try again\n")
"""

#part e
"""
product_names = ["hamburger", "cheeseburger", "small fries"]
product_costs = [0.99, 1.29, 1.49]
product_quantity = [10, 5, 20]

while True:
    report_status = input("(s)earch, (l)ist, (a)dd, (r)emove, (u)pdate or (q)uit: ")
    lc_report = report_status.lower()

    if lc_report == "s":
        product = input("Enter a product name: ")
        lc_product = product.lower()
        for x in range(0,len(product_names)):
            if lc_product == product_names[x]:
                print("We sell \""+lc_product+"\" at",product_costs[x],"per unit")
                print("We currently have",product_quantity[x],"in stock\n")
            elif lc_product not in product_names:
                print("Sorry, we don't sell \""+lc_product+"\"\n")
                break
    elif lc_report == "l":
        print(format("Product","<20s"),end="")
        print(format("Price","<7s"),end="")
        print(format("Quantity"))
        for x in range(0,len(product_names)):
            print(format(product_names[x],"<20s"),end="")
            print(format(product_costs[x],"<7.2f"),end="")
            print(format(product_quantity[x]))
        print()
    elif lc_report == "a":
        while True:
            new_product = input("Enter a new product name: ")
            lc_new_product = new_product.lower()
            if lc_new_product in product_names:
                print("Sorry, we already sell that product. Try again.")
            else:
                break

        while True:
            newproduct_cost=float(input("Enter a product cost: "))
            if newproduct_cost <= 0:
                print("Invalid cost. Try again.")
            else:
                break
        while True:
            quantity_newcost = int(input("How many of these products do we have? "))
            if quantity_newcost <=0:
                print("Invalid quantity. Try again.")
            else:
                
                print("Product added!\n")
                break
    elif lc_report == "r":
        product_remove = input("Enter a product name: ")
        if product_remove in product_names:
            location = product_names.index(product_remove)
            product_costs.remove(product_costs[location])
            product_quantity.remove(product_quantity[location])
            product_names.remove(product_names[location])
            print("Product removed!\n")
        else:
            print("Product doesn't exist. Can't remove.\n")
    elif lc_report == "u":
        update_name = input("Enter a product name: ")
        if update_name not in product_names:
            print("Product doesn't exist. Can't update.\n")
        else:
            type_update = input("What would you like to update?\n(n)ame, (c)ost or (q)uantity: ")
            if type_update == "n":
                while True:
                    new_name = input("Enter a new name: ")
                    if new_name in product_names:
                        print("Duplicate name!")
                    else:
                        location_update = product_names.index(update_name)
                        product_names[location_update]=new_name
                        print("Product name has been updated\n")
                        break
            elif type_update == "c":
                while True:
                    new_cost = float(input("Enter a new cost: "))
                    if new_cost <=0:
                        print("Invalid cost!")
                    else:
                        location_update = product_names.index(update_name)
                        product_costs[location_update]=new_cost
                        print("Product cost has been updated\n")
                        break
            elif type_update == "q":
                while True:
                    new_quantity = int(input("Enter a new quantity: "))
                    if new_quantity<=0:
                        print("Invalid quantity!")
                    else:
                        location_update = product_names.index(update_name)
                        product_quantity[location_update]=new_quantity
                        print("Product quantity has been updated\n")
                        break
            else:
                print("Invalid option\n")
                
                
            
        
    elif lc_report == "q":
        print("See you soon!")
        break
    
    else:
        print("Invalid option, try again\n")
"""
#part f
#add a reporting feature that finds the highest, lowest priced product and the total value of all inventory

product_names = ["hamburger", "cheeseburger", "small fries"]
product_costs = [0.99, 1.29, 1.49]
product_quantity = [10, 5, 20]

while True:
    report_status = input("(s)earch, (l)ist, (a)dd, (r)emove, (u)pdate, r(e)port or (q)uit: ")
    lc_report = report_status.lower()

    if lc_report == "s":
        product = input("Enter a product name: ")
        lc_product = product.lower()
        for x in range(0,len(product_names)):
            if lc_product == product_names[x]:
                print("We sell \""+lc_product+"\" at",product_costs[x],"per unit")
                print("We currently have",product_quantity[x],"in stock\n")
            elif lc_product not in product_names:
                print("Sorry, we don't sell \""+lc_product+"\"\n")
                break
    elif lc_report == "l":
        print(format("Product","<18s"),end="")
        print(format("Price","<7s"),end="")
        print(format("Quantity"))
        for x in range(0,len(product_names)):
            print(format(product_names[x],"<18s"),end="")
            print(format(product_costs[x],"<7.2f"),end="")
            print(format(product_quantity[x]))
        print()
    elif lc_report == "a":
        while True:
            new_product = input("Enter a new product name: ")
            lc_new_product = new_product.lower()
            if lc_new_product in product_names:
                print("Sorry, we already sell that product. Try again.")
            else:
                break

        while True:
            newproduct_cost=float(input("Enter a product cost: "))
            if newproduct_cost <= 0:
                print("Invalid cost. Try again.")
            else:
                break
        while True:
            quantity_newcost = int(input("How many of these products do we have? "))
            if quantity_newcost <=0:
                print("Invalid quantity. Try again.")
            else:
                
                print("Product added!\n")
                break
    elif lc_report == "r":
        product_remove = input("Enter a product name: ")
        if product_remove in product_names:
            location = product_names.index(product_remove)
            product_costs.remove(product_costs[location])
            product_quantity.remove(product_quantity[location])
            product_names.remove(product_names[location])
            print("Product removed!\n")
        else:
            print("Product doesn't exist. Can't remove.\n")
    elif lc_report == "u":
        update_name = input("Enter a product name: ")
        if update_name not in product_names:
            print("Product doesn't exist. Can't update.\n")
        else:
            type_update = input("What would you like to update?\n(n)ame, (c)ost or (q)uantity: ")
            if type_update == "n":
                while True:
                    new_name = input("Enter a new name: ")
                    if new_name in product_names:
                        print("Duplicate name!")
                    else:
                        location_update = product_names.index(update_name)
                        product_names[location_update]=new_name
                        print("Product name has been updated\n")
                        break
            elif type_update == "c":
                while True:
                    new_cost = float(input("Enter a new cost: "))
                    if new_cost <=0:
                        print("Invalid cost!")
                    else:
                        location_update = product_names.index(update_name)
                        product_costs[location_update]=new_cost
                        print("Product cost has been updated\n")
                        break
            elif type_update == "q":
                while True:
                    new_quantity = int(input("Enter a new quantity: "))
                    if new_quantity<=0:
                        print("Invalid quantity!")
                    else:
                        location_update = product_names.index(update_name)
                        product_quantity[location_update]=new_quantity
                        print("Product quantity has been updated\n")
                        break
            else:
                print("Invalid option\n")
    elif lc_report == "e":
        most_expensive_price = max(product_costs)
        least_expensive_price = min(product_costs)
        thing = product_costs.index(most_expensive_price)
        thing_2 = product_costs.index(least_expensive_price)
        most_expensive_name = product_names[thing]
        least_expensive_name = product_names[thing_2]
        counter = 0
        for x in range(0,len(product_names)):
            counter += (product_costs[x] * product_quantity[x])    
        print(format("Most expensive product:","<29s"),end="")
        print(most_expensive_price,"("+ most_expensive_name +")")
        print(format("Least expensive product:","<29s"),end="")
        print(least_expensive_price,"("+least_expensive_name+")")
        print("Total value of all products:",format(counter,"<29.2f"))
        print()
    elif lc_report == "q":
        print("See you soon!")
        break
    
    else:
        print("Invalid option, try again\n")
