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

## 