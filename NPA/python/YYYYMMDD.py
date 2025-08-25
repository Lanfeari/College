#I really need to learn regular expressions#
import re
def main() -> None:
    dd = 0
    mm = 0
    yyyy = 0
    while dd < 1 or dd > 31 or yyyy < 0 or mm < 0 or mm > 12:
        yyyy, mm, dd = get_user_inputs()

        if month_as_string(mm) is None:
            try:
                mm = int(mm)

            except ValueError:
                print('invalid input')
                exit()
        else:
            mm = month_as_string(mm)
    if mm < 10:
        mm = f'0{mm}'
    if dd < 10:
        dd = f'0{dd}'
    print(f'{yyyy}-{mm}-{dd}')

def month_as_string(x) -> int:
    month = \
        {
        'january': 1,
        'february': 2,
        'march': 3,
        'april': 4,
        'may': 5,
        'june': 6,
        'july': 7,
        'august': 8,
        'september': 9,
        'october': 10,
        'november': 11,
        'december':12
        }
    return month.get(x)

def get_user_inputs() -> tuple[int, str, int] | None:
    while True:
        try:
            date = input('enter date in the format mm/dd/yyyy ').lower()
            mm, dd, yyyy = re.split(r'[ ,/\-]+', date)
            return int(yyyy), str(mm), int(dd)
        except ValueError:
            print('invalid input')
            pass

if __name__ == "__main__":
    main()




