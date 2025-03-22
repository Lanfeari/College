nutdic = ({"apple": '130',
           "avocado": '50',
           "banna": "110",
           "cantaloupe": "50",
           "grapes": "90",
           "honeydew melon": "50",
           "kiwifruit": "90",
           "lemon": "15",
           "lime": "20",
           "nectarine": "60",
           "orange": "80",
           "peach": "60",
           "pear": "100",
           "pineapple": "50",
           "plums": "70",
           "strawberries": "50",
           "sweet cherries": "100",
           "tangerine": "50",
           "watermelon": "80"})

def main () -> (None): 
    x = input("what fruit would you like information on?").lower()
    answer = nutdic.get(x)
    if answer == None: 
        print("this fruit is not on my list")
    else:
        print(answer, "calories")

main()