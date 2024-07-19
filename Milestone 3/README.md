## Operators:

1. Unary Operator:

- Unary operator is an operator that takes only one operand. It can be prefix or postfix.


    `Unary Plus`:
    
    Unary plus operator is used to convert an operand to a number data type. 

    
        let a = '7';
        document.getElementById("demo1").innerHTML = typeof a;   // string
        document.getElementById("demo2").innerHTML = typeof +a;  // number

    `Unary Minus`:

    The operator converts a value into a number and negates it

        let x = '7'
        let y = -x                 // -7 


    `Increment operator (prefix)`:

    - The operator uses to inserts one value before the incremental value by one

            var x =  2;
            document.getElementById("demo").innerHTML = ++x;   // 3


    `Decrement operator (prefix)`:

    - The operator uses to subtracts one value before the incremental value by one
 
            var x = 2;
            document.getElementById("demo").innerHTML = --x;   // 1

    `Increment operator (postfix)`:

    - The operator uses to inserts one value after the incremental value by one

            var x = 2;
            document.getElementById("demo").innerHTML = x++;   // 2

   `Decrement operator (postfix)`:

    - The operator uses to subtracts one value after the incremental value by one

            var x = 2;
            document.getElementById("demo").innerHTML = x--;   // 2


2. Bitwise Operator:

`& Operator (AND)`:

    - Only if both bits are 1, set resultant as 1.

`| operator (OR)`:
    
    - If any 1 bits is 1, set resultant as 1.

`~ operator (NOT)`:
    
    - Invert all the bits.

`^ operator (XOR)`:

    - If both bits are same, resultant is 0.

`<< operator`:

    - Shifts the operands left by n bits.

      Example: 3<<2 

            3 = 0000 0011  (shift towards left by 2 bits)
            -------------
            12 = 0000 1100

`>> operator`:

    - Shifts the operands right by n bits.

      Example: 5>>2 
      
            5 = 0000 0101 (shift towards right by 2 bits)
            -------------
            1 = 0000 0001


3. Boolean Operators:

`AND (&&)`:

Returns only if both condition satisfies.

        let hour = 12;
        let minute = 30;

        if (hour == 12 && minute == 30) {
        alert( 'The time is 12:30' );
        }

`OR (||)`:

Returns if one of the condition satisfies.

        let hour = 11;

        if (hour== 12 || hour == 11){
            alert("The time is either 12 or 11);
        }

`NOT (!)`:

Returns the opposite of the condition.

    let name = "kanish";

    if(name!=""){
        alert("Name is not empty");
    }

4. Multiplicative operators:

The multiplication (*) operator produces the product of the operands.

        console.log(3 * 4);    // 12

        console.log(-3 * 4);   // -12

        console.log('3' * 2);  // 6

        console.log('foo' * 2);   //Nan


