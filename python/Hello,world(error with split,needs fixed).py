#Ask the user for their name and use the return string as a varaible
name = input('What is your name? ')

#Format the users name to account for extra space or missing capatalization
name = name.strip().title()

#Split the name string into two sub strings (THIS ONLY WORKS IF THE USER ACTUALLY PUTS A BLANK SPACE INTO THERE RESPONSE.)
first, last = name.split(" ")

#return response using either name, first or last depending on need
print(f'hello, {first}')

