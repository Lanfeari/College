def main() -> None:
    num: float = float(input('Enter a number: '))
    if num > 0:
        print('Your number is positive')
        if num % 2 == 0:
            print('Your number is even')
        else:
            print('Your number is odd')
    else:
        print('your number is negative')

def case_matching() -> None:
    num: float = float(input('Enter a number: '))
    match num:
        case _ if num < 0:
            print('Your number is negative')
        case _ if num > 0:
            print('Your number is positive')
    match num:
        case _ if num == 0:
            print('Your number is zero')
        case _ if num % 2 == 0:
            print('Your number is even')
        case _ if num % 2 != 0:
            print('Your number is odd')
        case _:
            print('Invalid userInput')
    ## This will only output the first matched case.

    def iftest() -> None:
        if num > 0:
            print()
        if num < 0:
            print()




case_matching()

