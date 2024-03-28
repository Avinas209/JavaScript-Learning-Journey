// 
const user = {
    username:"Avinash",
    price:999,
    welcomeMessage: function(){
        console.log(`${this.username},welcome to the website`)
        // console.log(this)
    }
}
// console.log(this) // Here this is used in the node environment so it gives an empty object as a output but if we were
//  using it in the browser environment we will get a window object
// user.welcomeMessage()
// user.username = "Rohit";
// user.welcomeMessage();


// function kuchhBhi(){
//     let username = "Avinash"
//     console.log(this.username); // we cannot use this keyword in a function. It is suitable for objects only.
// }
// kuchhBhi()


// Another method to declare function
const chai = function(){
    let username = "Avinash"
    console.log(this.username)
}
// chai();


// Here we will declare the same function but with arrow function

const someVarible = () => {       //Arrow function
    let username="Avinash"
    console.log(this);
}
// someVarible();



// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
console.log(addTwo(3,5));



const  addTwo = (num1, num2) => ( num1 + num2)
