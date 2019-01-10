#Paul Park
#Assignment 2 problem 4

#prompt user to enter in file size in KB

file_size_kilobytes = float(input("Enter a file size, in kilobytes (KB): "))
print()
print(int(file_size_kilobytes), end=" KB ...\n")
print()
#convert supplied input into bits, bytes, megabytes, and gigabytes

kbconverted_bits = (file_size_kilobytes * 1024 * 8)
kbconverted_bytes = file_size_kilobytes * 1024
kbconverted_megabytes = file_size_kilobytes / 1024
kbconverted_gigabytes = file_size_kilobytes / 1024 / 1024

#Format converted values to 2 decimal places and add comma separation
column1 = "... in bits"
bconverted = format(kbconverted_bits, ",.2f")
column2 = format(bconverted, ">28s")

print(column1 + column2, end = " bits")


column1_1 = "\n... in bytes"
byconverted = format(kbconverted_bytes, ",.2f")
column2_1 = format(byconverted, ">27s")
print(column1_1 + column2_1, end=" bytes")

column1_2 = "\n... in megabytes"
mconverted = format(kbconverted_megabytes, ".2f")
column2_2 = format(mconverted, ">23s")
print(column1_2 + column2_2, end=" MB")

column1_3 = "\n... in gigabytes"
gconverted = format(kbconverted_gigabytes, ".2f")
column2_3 = format(gconverted, ">23s")
print(column1_3 + column2_3, end=" GB")

# line34 would cause a syntax error because I forgot
# to add the "=" after end
# print(column1_3 + column2_3, end" GB")


# line6 would cause a run-time error because I forgot
# to convert the string function as a float function
# file_size_kilobytes = input("Enter a file size, in kilobytes (KB): ")

# line30 would cause a run-time error because I mistakenly
# put "column1_4" instead of "column1_2", the incorrect variable
# print(column1_4 + column2_2, end=" MB")

# line21 would cause a syntax error because I forgot
# to close the statement with a parentheses
# print(column1 + column2, end = " bits"

# line14 would cause a logic error because I used
# the wrong division operator so it would automatically round the answer which I don't wnat
# kbconverted_megabytes = file_size_kilobytes // 1024
