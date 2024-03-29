//  Conditional Operator
//  +++++++++++    If Else +++++++++++

// Syntax
// if(condition){      // If condition is true then the if block will work otherwise else block will be executed
//     console.log("Hello WOrld")
// }
// else{
//     console.log("Else is executed")
// }

// if(true){
//     console.log("if is executed")
// }
// else{
//     console.log("else is executed")
// }

// >, <, >=, <=, ==, ===, !=, !==   (Comparison operator)

// const score = 200;
// if(score>100){
//     let power = "Fly";
//     console.log(`Player power: ${power}`)
// }
// else{
//     console.log(`Player Power: Run`)
// }



// const balance = 5000;
// if(balance > 500 ) console.log("Here Implicit scope is used");

// if(balance>500) console.log("Test1"), console.log("Test2");     // Don't write code in this way because it is not readable

const money = 1100;
if (money < 500) {
    console.log("Less than 500")
}else if (money < 750) {
    console.log("Money is less than 750")
}else if (money < 1000) {
   console.log("Money is less than 1000") 
}else{
    console.log("Money is greater than 1000")
}

const userLogggedIn = true
const debitCard = true
const loggedInFromGoogle = true
const loggedInFromEmail = false

if (userLogggedIn && debitCard) {       // Study about the syntax
    console.log("You are authorised for shopping")
}

if (loggedInFromEmail || loggedInFromGoogle) {
    console.log("User Logged In")
}