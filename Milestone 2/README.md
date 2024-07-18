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
2. Eror, if we use an object without declaring it.
3. Deleting a function is not allowed.
4. Duplicating a parameter name is not allowed
5. Octal numeric literals are not allowed
6. Octal escape characters are not allowed
7. Writing to a read-only property is not allowed
8. The word eval, arguments cannot be used as a variable
9. Future reserved keywords are not allowed
10. this keyword behaves differently in strict mode.