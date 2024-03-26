const myArray = [1,2,3,4,5,6];
// console.log(myArray);

const siblings = ["Avinash", "Rohit", "Aditya", "Munar"];
// console.log(siblings[2]);

const newArray = new Array(1,2,9,80,44);
// console.log(newArray);

// Arrays Method

// siblings.push("Vishal");
// siblings.push("Vikash");
// console.log(siblings);
// siblings.pop();
// console.log(siblings);


// newArray.unshift(200);
// console.log(newArray);
// console.log(newArray.shift());
newArray.shift();
// console.log(newArray);

// console.log(myArray.includes(6));
// console.log(myArray.indexOf(4));
// console.log(myArray.indexOf(39));

// console.log(myArray);
// const myNewArr = myArray.join();
// console.log(myNewArr);
// console.log(typeof myNewArr);

// Slice and Splice
// console.log("A" , myArray);
const myN1 = myArray.slice(2,5);
// console.log(myN1);
// console.log("B" , myArray);

const myN2 = myArray.splice(2,5);
// console.log(myN2);
// console.log("C" , myArray);

const Array1 = ["Ram","Mohan","Sohan"];
// console.log(Array1);
const Array2 = ["Avinash","Rohit", "Aditya"];
// console.log(Array2);
// Array1.push(Array2);
// console.log(Array1);
const Array3 = Array1.concat(Array2);
// console.log(Array3);


// Use of spread Operator
const allArrays = [...Array1, ...Array2, ...myArray, ...myN1, ...myN2, ...newArray, ...siblings];
// console.log(allArrays);


// Let's Face some complicated Arrays

const complicatedArray =[1,2,3,[4,5,6],7,[7,8,[5,6,7]]];
const simpleArray = complicatedArray.flat(1);
// console.log(simpleArray);

// console.log(Array.isArray(simpleArray));
// console.log(Array.from("simpleArrayvhfijr"));
console.log(Array.from({name:"Avinash"})); //Interesting Case


let name1 = "Avinash";
let name2 = "Rohit";
let name3 = "Aditya";

console.log(Array.of(name1,name2,name3));
