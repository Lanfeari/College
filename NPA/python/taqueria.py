def main() -> (None):
    total = 0.00
    while True:
            try:
               total = total + total_func()
               print(total)

            except KeyboardInterrupt:
                exit()

def total_func():
       d = {
    "Baja Taco": 4.25,
    "Burrito": 7.50,
    "Bowl": 8.50,
    "Nachos": 11.00,
    "Quesadilla": 8.50,
    "Super Burrito": 8.50,
    "Super Quesadilla": 9.50,
    "Taco": 3.00,
    "Tortilla Salad": 8.00
}
       key = input('Item: ')
       if key in d:
            return d[key]
            
            
       else:
            print('no')

main()