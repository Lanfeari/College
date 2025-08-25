def main() -> (None):
    name =''
    while name!= 'alice':
        try:
            name = str(input('Please enter your name? ').lower())
            break
        except:
            print('nope')
            pass
    print('yep')
   
    
main()