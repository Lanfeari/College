def main():
    ns = ''
    v  = ''
    s = input('this should remove vowels')
    for c in s:
        if c in (['A','E','I','O','U','a','e','i','o','u']):
            v += c
        else:
            ns += c

    print(ns)

main()

#Is this the best way to iterate over a string and change it, is it even the best way to do what i have done. the answer is no and it enranges me.