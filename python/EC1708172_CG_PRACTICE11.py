def mature() -> None:
    age: float = float(input('Enter your age: '))
    if age > 21:
        print('You are a mature student')
    else:
        print('You are under 21 years old')

def height() -> None:
    height1: float = float(input('Enter your height in meters: '))
    if height1 > 1.9:
        print('You are Very tall')
    elif height1 < 1.9:
        print('You are not Very tall')
    else:
        print('invalid')

def currency() -> [float, None]:
    user_input: str = str(input('Do you want to convert to dollars or euros: '))
    if user_input == 'dollars':
        cash: float = float(input('Enter your cash: '))
        total = cash * 1.32
        print(total, '£')
        return float(total)

    elif user_input == 'euros':
        cash: float = float(input('Enter your cash: '))
        total = cash * 1.20
        print(total, '$')
        return float(total)
    else:
        print('Invalid input')
