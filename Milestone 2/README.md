## JavaScript Case sensitivity

- Javascript is a case sensitive language.

- This means that language keywords, variables, function names, and any other identifiers are treated differently based on case.

- Example: variables firstname and Firstname are treated differently.

**Camelcase**

- CamelCase is a naming convention in JavaScript where the first letter of a variable, function, or method name is lowercase, and the first letter of each subsequent concatenated word is capitalized. 

``` 
Example: lastName 
```

## Identifiers:

- Identifiers are name given to a variable, function or a class.

Rules:
- Identifier names must start with either a letter, an underscore _, or the dollar sign $.
- It may contain numbers (0-9)
- Identifier names cannot start with numbers. 

```
Valid : firstName
Invalid : 1name
```

## Comments

 1. Single line comments start with //.

 2. Multi line comments /* ... */

 Example:

 ```
// This is an inline comment


/ *
Commented code
*/
 ```

## Strict mode

- It defines that JavaScript code should be executed in "strict mode".

- Strict mode makes it easier to write "secure" JavaScript.

```
    "use strict";
```

In strict mode,

1. Error, if the variable isnt declared.
2. Error, if we use an object without declaring it.
3. Deleting a function is not allowed.
4. Duplicating a parameter name is not allowed
5. Octal numeric literals are not allowed
6. Octal escape characters are not allowed
7. Writing to a read-only property is not allowed
8. The word eval, arguments cannot be used as a variable
9. Future reserved keywords are not allowed

        ```
            - implements
            - interface
            - package
            - private
            - protected
            - public
            - static
            
        ```
10. this keyword behaves differently in strict mode.

```
"use strict";
x = 110  // Error

"use strict";
function x(p1, p1) {}; // Error

"use strict";
let x = 010;       // Error   
let x = "\010"     // Error

```


---

## Statements

- JavaScript statements are made of: Values, Operators, Keywords, Expressions, and Comments. 
- JavaScript statements are executed in the same order as they are written, line by line.

- A semicolon marks the end of a statement in JavaScript. 

  Multiple statements are allowed if they are seperated by semicolon.

    ```
    a = 2; b = 3; z = a + b;
    ```

## Code Blocks

- JavaScript statements can be grouped together inside curly brackets. Such groups are known as code blocks.

``` 
    func name(){
        ...
        ...
        ...
    }
```

## White Space

JavaScript ignores multiple white spaces.

```
    a = 2 + 3
    a = 2+3
```

## Keywords

 - Keywords are reserved words which cannot be used for variables, labels, or function names.

 Example

 ```
 var, let, const, for, while
 ```


## Variables:

- Variables are Containers for Storing Data
- Declared using var, let, const.

```
var :
    - Fuctional or global scope
    - Redeclared and reassigned
    - Initialization not required

let :
    - Block scope
    - Redeclared not allowed
    - Can be reassigned
    - Initialization not required

const:
    -Block scope
    - Redeclared not allowed
    - Cannot be reassigned
    - Initialization required
```

Example:

```
const z = 5
let y = 3
```

---

## typeof operator

- The typeof operator returns the type of a variable or an expression.

    ```
    typeof "Kanish"         // Returns string
    typeof 3.14           // Returns number
    typeof true           // Returns boolean
    typeof 1234n          // Returns bigint
    typeof x              // Returns undefined
    ```

## undefined

- Undefined is a type of Data type in JavaScript. 

- When a variable is declared and not initialized or not assigned with any value. 

- By default, the variable was stored with an Undefined value. 

```
let x
console.log(x)
```
## null

- In JavaScript, null is a special value that represents an empty or unknown value.

```
let number = null;
```

- In javascript, null and undefined are treated as false values.

<br />
<br />

**Comparison:**

```
undefined == null    // true
undefined === null   // false
```

---

## Boolean 

In javascript, boolean can have either two values
- True
- False

1. Boolean of undefined is false.
2. Boolean of empty string is false.
3. Boolean of null is false.
4. Boolean of NaN is false.
5. Comparing two JavaScript objects always return false.

---

## Number

Number() converts value to a Number.

- JavaScript numbers are always stored in double-precision 64-bit binary format IEEE 754. 
- This format stores numbers in 64 bits:

        0-51 bits store the value
        52-62 bits store the exponent
        63rd bit is the sign bit
    
- When you add a string and a number in JavaScript, the result will be a string concatenation.

- Constant with 0x are hexadecimal numbers

        ```
        let num1 = 5                  // 5
        let num2 = 9.2                // 9.2

        let num3 = 3 - "kanish"  
        console.log(num3)             // undefined

        let num4 = 2 /0 
        console.log(num4)             // infinity

        let num5 = -2 /0
        console.log(num5)             // -infinity

        let num6 = 5e4
        console.log(num6)             // 50000

        ```

**JavaScript Strings**

-   Strings are used to store text.
-   Strings are surrounded with either single quotes or double quotes.
-   It can be zero or more characters.


**Template Strings**
- Templates are strings enclosed in backticks.
- Template String provide a way to interpolate variables and expressions into strings.
- Template Strings are also called Template Literals.
- Templates allow multi lines.

```
`This is a template string`
```

Created using 2 ways
1. String literal
2. Object (new keyword)


```
let name = 'kanish';  // String literal

var stringname=new String("kanish");   // String Object

```





