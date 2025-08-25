#each item costs 50 cents
#machien only accepts 25,10,5 cents denom
#machien should give change

def main() -> (None):
    x = 50
    print('amount due: ', x)
    while x > 0:
        y = int(input('Insert coin: '))
        if y not in ([5,10,25]):
            print('This machine only accepts 5 , 10 or 25 cents')
        else:
            x = x - y
            print('accepted')
            if x > 0: 
                print('amount due: ' , x)
            elif x < 0:
                print('here is your drink!')
                print('change due: ', x*-1)

    
    
main()