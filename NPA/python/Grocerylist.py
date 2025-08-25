def main() -> None:
    test_dic = {}
    x = False
    while not x:
        try:
            key = input('add items to list? ').lower()
            
            if  key in test_dic:
                test_dic[key] += 1

            if key not in test_dic:
                print('added to list ')
                test_dic.setdefault(key, 1)

        except EOFError:
            x = True
            pass
#This is a link explaining the below methods https://www.freecodecamp.org/news/python-sort-dictionary-by-key/
# we are calling the dict here witch is like assigning value using int, we are saying the output should be a
# dictionary #

    sorted_dict = dict(sorted(test_dic.items()))
    for key, value in sorted_dict.items():
        print(f"{value} {key}")

main()