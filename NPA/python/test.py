import re

def main():
    plate = input("Plate: ")
    if is_valid(plate):
        print("Valid")
    else:
        print("Invalid")

def is_valid(s):
    return len(s) <= 6 and re.match(r"[a-zA-Z]{2,}([1-9]\d*)?$", s)

main()



