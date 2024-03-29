//  Syntax

// while (condition) {
    
// }



let i = 0;
while (i <= 20) {
    // console.log(`Value of i is ${i}`);
    i += 3
}

let myArray = ["Avinash", "Rohit", "Aditya", "Vikash"]
let index = 0;
while (index < myArray.length) {
    // console.log(myArray[index]);
    index++;
}


let score = 100;

do {
    console.log(score);
    score = score + 10;
} while (score < 100);