## i am really sick while doing these, apolgies for any bad code.
# Design and write a program which asks the user for scores. After each 
# score ask whether there will be another score – Y or N. When the user 
# enters N show the total of all scores entered. 
def main():
    x = int
    total = 0
    x = (int(input('Enter a score ')))
    while True:
        string = input((str('Will there be another score Y/N? '))).lower()
        string = string.lower()
        if string == 'y':
            x = (int(input('Enter a score '))) + x
        elif string == 'n':
            print(f'score total is {x}')
            break
        else:
            print('Invalid input')
            print(f'score total is {x}')
            break
    
main()