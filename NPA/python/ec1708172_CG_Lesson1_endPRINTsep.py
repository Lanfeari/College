def main() -> (None):
    print('hello world')
    
    #"print(Hello world)" this will not work because python cannot read this, it will
    #tell us there is a problem on line 2 with the given argument (Hello world).
    
    #"print hello world" also does not work because we do not have the paraenthesis nessecceasy for the
    #print function.
    
    #Printing my name.
    print('Curtis Goldthorpe')
    
    #we can also print a given name like this. by using the assignment operator and asking the user for input for the assignment.
    name = input('What is your name? ')
    print(f'hello {name}')
    
    # Using backslash and n here we are using the escape charcter for new line, this causes the console to create a new line.
    print('The itsy bitsy spider' ,  '\nclimbed up' , '\nthe waterspout')
    
    #if we try to print a single \ because it is out escape character it is not read and the print function is not able to run
    #because of the empty string.
    #but if we do \\ it does infact print a single backslash
    print('\\')
    #We are escaping the escape character here.
    
    #the Pythonic way to create spaces at the end of print is
    print('My name is', 'Python.', end=' ')
      
    #we also have the seperator, this will add whatever is argued between each declared item in the print function.
    print('\nMy', 'name', 'is', 'monty', 'python.', 1,  sep='-')
    
    #the default end is "new line" and default sep is "BLANK SPACE"
    #we can change this to get this effect
    print('Programming','essentials','in', sep='***',end='...')
    
    print('Python')
    #we notice here that because we have changed the default end the second pirnt
    #prints out python on the same line.

    
    
    
    
    

main()    