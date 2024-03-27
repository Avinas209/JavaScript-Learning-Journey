//  Function

// Typical Structure of a function 
function helloWorld(){
    console.log("Hello World!!");
    return
}
// console.log(helloWorld)
// console.log(helloWorld());


function addNumber(num1, num2){
    const sum = num1 + num2;
    return sum  //return keyword return the value of the sum
}

// console.log(addNumber(12,4));

function callmyname(name){
    console.log(`${name}, you are Welcome`);
}
// callmyname()

// A better way to write this code is 

function greetme(name){
    if(name === undefined || typeof name === "number"){
        return `Please enter a valid Name !!!!`;
    }
    else{
        return `${name}, you are welcome`;
    }
}
// console.log(greetme(54));

function telltype(parameter){
    console.log(typeof parameter);
}
// telltype(45)
// console.log(typeof(typeof 6));

const user = {
    name : "Avinash",
    price : 999
}

function handleObject(anyobject){
    console.log(`User name is ${anyobject.name} and price is ${anyobject.price}`)
}
// handleObject(user);
// handleObject({
//     name:"Rohit",
//     price: 399
// })

const myArr = [100, 200, 300]

function returnsecondvalue(anyArray){
   return (`2nd element in the array is ${anyArray[1]}`)
}
console.log(returnsecondvalue(myArr));