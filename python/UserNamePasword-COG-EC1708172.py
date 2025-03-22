def main() -> (None):
    #Setting the variables i will be using.
    userName = ''
    MarysPassword = 'snickers'
    password = ''
    
    # Setting up loop for signing in
    while userName != 'mary':
        userName = input('What is the username? ').lower()
        #setting up qualfiying conditions
        if userName == 'mary':
            while password != MarysPassword:
                password = input('What is the password? ')
                #setting up failure consition
                if password != MarysPassword:
                    print('Invalid password retry ')
            else: 
                print('Access granted')
        #this is the failure condition for username
        else:
            print('Invalid user')
            userName = ''

main()

