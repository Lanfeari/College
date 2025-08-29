This is my first go with using java to take user input and then process it in some manner
It feels more complicated than Python but also more precise.

```java
import java.util.Scanner;

class UserInputPractice{
    public static void main(String[] args){
        Scanner input = new Scanner(System.in);
        
        System.out.print("Please enter a number: ");
        Integer n = input.nextInt();
        
        Integer nProc = (n*n);
        
        System.out.println(nProc);

        input.close();
    }
}
```

so for this seemingly simple action i first have to import the scanner class from the provided utilis package.
then in my own main class i begin by defining a new scanner object. i am still unsure of the methods being used here
as String[] and args.

after witch i define the variables i am going to use, in this case i define a variable of type Integer and call it n
then i use the method (nextInt) from my Scanner object named input.

next up i define a new variable to hold the processed value, this is also of type Integer. i have named this nProc as shorthand for nProcessed. i have performed the multiplication and then used the provided System.out.println() to output the processed value back into the command line. 

finally i have closed the Scanned object, witch i am told will prevent future mishaps.

Upon reviewing my above code with the help of an AI assisstant i have learned a bit more. 
the feedback given was in general positive and it did explain the Strings[] args thing, witch turns out to be related to CLP a command line programs.

in the above code i have used Integer and not int, in Java int is a primitive type while Integer is a "wrapper" witch i do not fully understand but i do know that the 
wrapper is a bit more hungry and for a program as above using the simpler more basic int would suffice.
it also explaied a bit to me in regards to the Scanner object and how it reads the standard basic input stream.

furthermore it was explained to me that closing the object saves resources and prevents conflicts.
---------------------------------------------------------------------------------------------------------------------------------------------------

```java
import java.util.Scanner;

class UserInputPractice{
    public static void main(String[] args){
        Scanner input = new Scanner(System.in);

        System.out.print("Please enter the first number: ");
        int n = input.nextInt();
        
        System.out.print("please eneter the second number: ");
        int n2 = input.nextInt();

        int nProccessed = (n*n2);

        System.out.println(nProccessed);
        input.close();

    }
}
```

This time i have taken two inputs from the user and then mutiplied them together. 
I have also used the primitive int type instead of using the class wrapper Integer.
i have used print when taking input to ensure that the given input is on the same line is the question asking for it 
i have then used println to ensure that the Proccessed input is displayed on a new line to the user.
I HAVE CLOSED my scanner object to maintain resources.

i would like to know how to type annotate my code in java a bit better and also how the System.out.print function is working to print my text to the console but these feel like advanced questions than can wait until i have a better grasp on the fundamentals on the language.
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------

```java
import java.util.Scanner;

class UserInputPractice{
    public static void main(String[] args){
        Scanner userInput = new Scanner(System.in);
        System.out.print("This is my this java program, can we take a user string and number?: ");
        String enteredText = userInput.next();

        System.out.print("Enter your age: ");
        int enteredNumber = userInput.nextInt();

        System.out.print("the name you entered was " + enteredText + " " + "the age you enetered is: " + enteredNumber);

        userInput.close();

    }
}
```
for this thirs program i wanted to see if i would be able to take two different type of data using the same Scanner object. as evidenced i can take both a primitive int and also a primitive string from the user using the same Scanner object. i have then checked to see if using the print i could print more than the primitive data type of int and this also worked.
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------

End of day checkin:

right now i feel fairly confident in taking user inputs and outputting information.
tomorrow i am going to try and pickup if, or ,for. this should expand my toolkit further.

all in all i feel that todays work was very enlightening and i feel a lot more confident in my ability to take inputs from users.
Java is very complicated and simple at the same time. it's complication comes from it's exacting precision. in language and in foundation.
the things built in are built in the same way that I as a programmer may build something. Java uses the theory that it's built on and uses it to an exacting degree.
the lanagauge is very precise and understanding something like System.out.print is more taxing than the equivlent print in python but i am enjoying how from the ground up java is.




