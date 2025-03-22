#This is a psudo RNG generator using the colazts conjecture and some dynamic value as an input

def mainrng() -> (int):
    #1, receives dynamic input value from the amount of whole seconds since the epoch
    x, y = dyn_var()
    x=int(x)
    y=int(y)
    n = (x + 5)
    count=0
    
    #2, using the coalatz conjecture --- repeat until value is 4 ---
    while n != 4:

        if n % 2 == 0:
            n =  n / 2
            count += 1
        
        else: 
            n = 3 * n + 1 
            count += 1
        
        if n == 4:
            break
    
    #3, taking the loop count and then multiplying it by the remainder of the amount of whole seconds since the epoch
    print(int(1 + count*y))


#Dynamic variable using the date turned into seconds and then returned to the main rng function
def dyn_var() -> (float):
        from datetime import datetime
        dt = datetime.now()
        floatvar = dt.timestamp()
        strvar = str(floatvar)
        var1 ,var2 = strvar.split('.',1)
        return((var1,var2))

mainrng()