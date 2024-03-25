/**
 * In this file we are going to practice code based on strings and their properties
 */

const myFirstName = "Avinash";
const myNumber = 9345989290;
console.log(`My name is ${myFirstName} and my Phone number is : ${myNumber}`)

//  Now let's use concatenate property to add surname to my name 
const myLastName = "Kumar"
// We can use + sign to concatenate two or more strings like in the given example below

console.log(myFirstName+" "+myLastName);

// Here is a better way to declare string
const myOriginalName = new String("Avinash Yadav");
console.log(myOriginalName);
console.log(typeof myOriginalName);
console.log(myFirstName);
console.log(myOriginalName.toUpperCase());
console.log(myOriginalName.indexOf(' '));
console.log(myOriginalName.charAt(5));


const newName = myOriginalName.substring(0,5);
console.log(newName);

const myNewString = "    This is my New String    ";
// console.log(myString);
// console.log(myString.trim());

// let myNewString = myString.replace(' ','-');
// console.log(myNewString);

// myNewString = myString.replace(/ /g,'-');
// console.log(myNewString);


console.log(myNewString.split(' '));

