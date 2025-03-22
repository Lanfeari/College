def main() -> (None):
   #ensuring person enters string value
   while True:
      try:
        name = str(input('Please input name '))
        break
      except:
         print('Invalid input')
         pass
   #asking and setting user age as float
   while True:
    try:
        age = float(input('what is your age? '))
        break
    except:
       print('Invalid input')
       pass
    #performing calculation
   age_5y = age + 5
   #checking if can be changed to integer
   if (age_5y).is_integer():
      age_5y = int(age_5y)
      print((f'hello {name}, in 5 years you will be {age_5y} years old'))
   else:
      print((f'hello {name}, in 5 years you will be {age_5y} years old'))

main()
