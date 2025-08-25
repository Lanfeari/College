def main() -> (None):
    name = str(input('What is your name? '))
    hello(name)

def hello(x='world') -> (None):
    print('hello,', x )

main()