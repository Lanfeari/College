def main() -> (None):
    # asking for first number
    x = float(input('What is numvber one? '))
    #Asking for number 2
    y = float(input('What is number 2? '))
    #perform calculation
    z = x*y
    #printing z
    #if else block checking is z is int.
    if (z).is_integer():
        z = int(z)
        print(z)
    else:
        print(z)

main()