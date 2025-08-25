def main() -> (None):
    while True:
        try:
            n = float(input('enter a number between 0 and 200 '))
            break
        except:
            print('invalid input')
            pass
    print(n >= 100)
main()