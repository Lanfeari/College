## i am really sick while doing these, apolgies for any bad code.

def main():
    list = []
    z = int(input('How many numbers would you like to list?'))
    while len(list) < z:
        list.append(int(input('Please enter a number')))  
    print(list)
    print(sum(list))
main()