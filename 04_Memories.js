/**
 * Memories
 * Types of memories: Heap memory and Stack memories;
 * Use case of different type of memory :
 *      Heap - Non-primitive datatypes()
 *      Stack - Primitive datatypes()
 */


// Example of stack memory:
let myName = "Avinash Kumar";

let myAnotherName = myName;
myAnotherName = "It is nothing";
console.log(myAnotherName);
console.log(myName);



// Example of Heap Memory:

let userOne = {
    email: "userOne@gmail.com",
    upi: "user@ybl.com"
}

let userTwo = userOne;
console.log(userTwo.email);
userTwo.email = "userTwo@gmail.com";
console.log(userTwo.email);
console.log(userTwo);
console.log(userOne);