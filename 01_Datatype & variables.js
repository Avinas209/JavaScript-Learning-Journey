// const myHeading = document.querySelector("h1");
// myHeading.textContent = "Hello world!";

let myVariable;
myVariable = "This is me Avinash";
console.log(myVariable);
myVariable = "This is his brother";
console.log(myVariable);

// We can declare variable using let, var and const. It is the good practice to use let instead of var because there
// are a lot of issue with var but the issues are resolved in let

// Const is generally used for the value which we don't want to change frequently

var myNumber;
myNumber=90;
console.log(myNumber);
// Here we used var keyword to declare variable.
/*
Prefer not to use var
because of issue in block scope and functional scope
*/



// here we can use typeof method to determine the datatype of any variable
console.log(typeof myNumber);
console.log(typeof myVariable);


/*
There are two type of datatypes 
1. Primitive datatype
2. Non-Primitive datatype

further Primitive type can be divided into : number, string, boolean, undefined, null, Bigint, Symbol
Non-primitive datatype can be divided into : objects and arrays
 */

/*
Difference between primitive and non-primitive datatypes:
primitive datatypes:
Primitive Data types are predefined. 
Primitive Data types will have certain values.
Size depends on the type of data structure.
Examples are numbers and strings.
It can start with a lowercase.

Non-Primitive datatypes:
Non-Primitive data types are created by the programmer.
Non-Primitive data types can be NULL.
Size is not fixed
Examples are Array and Linked List.
It can start with uppercase.
*/
