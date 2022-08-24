# JavaScript Notes

## Variables

A variable is a “named storage” for data. We can use variables to store goodies, visitors, and other data.

To create a variable in JavaScript, use the let keyword.

The statement below creates (in other words: declares) a variable with the name “message”:

    let message;

Now, we can put some data into it by using the assignment operator `=`:

    let message;
    message = 'Hello'; // store the string 'Hello' in the variable named message

The string is now saved into the memory area associated with the variable. We can access it using the variable name:

    let message;
    message = 'Hello!';

    alert(message); // shows the variable content

To be concise, we can combine the variable declaration and assignment into a single line:

    let message = 'Hello!'; // define the variable and assign the value

    alert(message); // Hello!

We can also declare multiple variables in one line:

    let user = 'John', age = 25, message = 'Hello';

That might seem shorter, but we don’t recommend it. For the sake of better readability, please use a single line per variable.

The multiline variant is a bit longer, but easier to read:

We can also declare two variables and copy data from one into the other.

    let hello = 'Hello world!';

    let message;

    // copy 'Hello world' from hello into message
    message = hello;

    // now two variables hold the same data
    alert(hello); // Hello world!
    alert(message); // Hello world!

### Constants

To declare a constant (unchanging) variable, use `const` instead of `let`:

    const myBirthday = '18.04.1982';

Variables declared using const are called “constants”. They cannot be reassigned. An attempt to do so would cause an error:

    const myBirthday = '18.04.1982';

    myBirthday = '01.01.2001'; // error, can't reassign the constant!

Uppercase constants
There is a widespread practice to use constants as aliases for difficult-to-remember values that are known prior to execution.

Such constants are named using capital letters and underscores.

When should we use capitals for a constant and when should we name it normally? Let’s make that clear.

Being a “constant” just means that a variable’s value never changes. But there are constants that are known prior to execution (like a hexadecimal value for red) and there are constants that are calculated in run-time, during the execution, but do not change after their initial assignment.

For instance:

    const pageLoadTime = /* time taken by a webpage to load */;

The value of pageLoadTime is not known prior to the page load, so it’s named normally. But it’s still a constant because it doesn’t change after assignment.

In other words, capital-named constants are only used as aliases for “hard-coded” values.



## JavaScript Arithmetic Operators
- `+` Addition
- `-` Subbtraction
- `*` Multiplication
- `**` Exponential
- `/` Division
- `%` Modulus
- `++` Increment
- `--` Decrement

### Arithmetics Operations Examples
- `let x = 100 + 50;`
- `let x = a + b;` variable
- `let x = (100 = 50) * a;` expresion

### Operators and Operands
The numbers (in an arithmetic operation) are called operands.

The operation (to be performed between the two operands) is defined by an operator.

### Adding
The addition operator `+` adds numbers:

EG

    let x = 5;
    let y = 2;
    let z = x - y;

### Remainder
The modulus operator `%` returns the division remainder.

EG

    let x = 5;
    let y = 2;
    let z = x % y;      //result 1


### Incrementing
The increment operator `++` increments numbers.

EG

    let x = 5;
    x++;
    let z = x;      //result 6

### Exponentiation
The exponentiation operator `**` raises the first operand to the power of the second operand.

EG

    let x = 5;
    let z = x ** 2;         // result is 25

`x ** y` produces the same result as `Math.pow(x,y):`

    let x = 5;
    let z = Math.pow(x,2);   // result is 25

Operator	Example	    Same As

    =       x = y       x = y           The = assignment operator assigns a value to a variable.
    +=      x += y      x = x + y       The += assignment operator adds a value to a variable.
    -=      x -= y      x = x - y       The -= assignment operator subtracts a value from a variable.
    *=      x *= y      x = x * y       The *= assignment operator multiplies a variable.
    /=      x /= y      x = x / y       The /= assignment divides a variable.
    %=      x %= y      x = x % y       The %= assignment operator assigns a remainder to a variable.
    <<=     x <<= y     x = x << y
    >>=     x >>= y     x = x >> y
    >>>=    x >>>= y    x = x >>> y
    &=      x &= y      x = x & y
    ^=      x ^= y      x = x ^ y
    |=      x |= y      x = x | y
    **=     x **= y     x = x ** y

### Numbers

JavaScript Numbers are Always 64-bit Floating Point

#### Integer Precision
Integers (numbers without a period or exponent notation) are accurate up to 15 digits.

The maximum number of decimals is 17.

#### Floating Precision

Floating point arithmetic is not always 100% accurate:

    let x = 0.2 + 0.1; // 0.2 + 0.1 = 0.30000000000000004

To solve the problem above, it helps to multiply and divide:
    let x = (0.2 * 10 + 0.1 * 10) / 10; // 0.2 + 0.1 = 0.3

### Adding Numbers and Strings
If you add two numbers, the result will be a number:

If you add two strings, the result will be a string concatenation:

If you add a number and a string, the result will be a string concatenation:

If you add a string and a number, the result will be a string concatenation:

### Numeric Strings
JavaScript strings can have numeric content:

JavaScript will try to convert strings to numbers in all numeric operations:

    let x = "100";
    let y = "10";
    let z = x - y; //This works as does / *, + DOESNT JS uses + operator to concatenate strings

### NaN - Not a number

### JavaScript Numbers as Objects

Normally JavaScript numbers are primitive values created from literals

    let x = 123;

But numbers can also be defined as objects with the keyword `new`:
    let y = new Number(123);


### Comparison Operators

    ===	    Strict equality	    Tests whether the left and right values are identical to one another	    5 === 2 + 4
    !==	    Strict-non-equality	    Tests whether the left and right values are not identical to one another	    5 !== 2 + 3
    <	    Less than	    Tests whether the left value is smaller than the right one.	    10 < 6
    >	    Greater than	    Tests whether the left value is greater than the right one.	    10 > 20
    <=	    Less than or equal to	    Tests whether the left value is smaller than or equal to the right one.	    3 <= 2
    >=	    Greater than or equal to	    Tests whether the left value is greater than or equal to the right one.	    5 >= 4
## The Concept of Data Types

when adding a number to a string, JS with treat the number as a string.

    let x = 16 + "Volvo";  //16Volvo

JS evaluates expressions left to right

    let x - 16 + 4 + "Volvo";       //20Volvo
    let x = "Volvo" + 16 + 4;       //Volvo164

### JS types are dynamic

    let x;           // Now x is undefined
    x = 5;           // Now x is a Number
    x = "John";      // Now x is a String

### JS Strings

A string (or a text string) is a series of characters like "John Doe".

Strings are written with quotes. You can use single or double quotes:

    let answer1 = "It's alright";             // Single quote inside double quotes
    let answer2 = "He is called 'Johnny'";    // Single quotes inside double quotes
    let answer3 = 'He is called "Johnny"';    // Double quotes inside single quotes

### JS Numbers

JavaScript has only one type of numbers.

Numbers can be written with, or without decimals:

    let x1 = 34.00;     // Written with decimals
    let x2 = 34;        // Written without decimals

Extra large or extra small numbers can be written with scientific (exponential) notation:

    let y = 123e5;      // 12300000
    let z = 123e-5;     // 0.00123

### JS Booleans

Booleans can only have two values: true or false.

    let x = 5;
    let y = 5;
    let z = 6;
    (x == y)       // Returns true
    (x == z)       // Returns false

Booleans are often used in conditional testing.

### JS Arrays

JavaScript arrays are written with square brackets.

Array items are separated by commas.

The following code declares (creates) an array called `cars`, containing three items `(car names)`:

    const cars = ["Saab", "Volvo", "BMW"];

Array indexes are zero-based, which means the first item is [0], second is [1], and so on.

### JS Objects

JavaScript objects are written with curly braces `{}`.

Object properties are written as `name:value` pairs, separated by commas.

    const person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};

The object (person) in the example above has 4 properties: firstName, lastName, age, and eyeColor.

### typeof Operator

You can use the JavaScript typeof operator to find the type of a JavaScript variable.

The typeof operator returns the type of a variable or an expression:

    typeof ""             // Returns "string"
    typeof "John"         // Returns "string"
    typeof "John Doe"     // Returns "string"
    typeof 0              // Returns "number"
    typeof 314            // Returns "number"
    typeof 3.14           // Returns "number"
    typeof (3)            // Returns "number"
    typeof (3 + 4)        // Returns "number"

### Undefined

In JavaScript, a variable without a value, has the value undefined. The type is also undefined.

### Empty Values

An empty value has nothing to do with undefined.

An empty string has both a legal value and a type.