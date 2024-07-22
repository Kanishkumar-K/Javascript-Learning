# JS Functions:

A Function is a block of code that performs a specific task.
- It can be used as  reusable components

`Function declaration`:

Function declaratin (also called as function definition or function statement)
- It contains
- Function keyword
- Function name (user defined)
- Function parameters
- Function body inside {}


        function Addition(number1, number2) { 
            return number1 + number2; 
        }

`Function Expression`

Function expression is same as function declaration except the function name is written as a variable.

        let Addition = function(number1, number2) { 
                    return number1 + number2; 
                }

`Functin Invocation`:

It can be invoked when
- Any event occurs
- Called from JS code
- Automatically invoked


`Return Statement`:

When JavaScript reaches a return statement, the function will stop executing.


        function myFunction(a, b) {
            return a * b;
        }

`() Operator`:


        function MulBy100(x) {
        return x * 100;
        }

        let value = MulBy100(10);  // function call

---

