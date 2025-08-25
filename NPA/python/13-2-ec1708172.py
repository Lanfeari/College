## i am really sick while doing these, apolgies for any bad code.

def main():
    x = 0
    list = []
    while x < 10:
        list.append(int(input('Please enter a number')))
        x += 1  
    print(list)
    print(sum(list))

main()