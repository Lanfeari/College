#Iterate over a string and print each charcter so that a mixed case variable is printed below in snkae case. took me a big of time, i think the method i was onto was actually the 
#better method but i'm getting annoyed and this method also works witout indexing.

#for index, c in enumerate(s):
   #if c.isupper():
      #mylist = list(index)

#print(mylist)        

s = input('test')
res=""
for i in s:
    if(i.isupper()):
        res+="_"+i
    else:
        res+=i
x=res.split("_")
print(res.lower())