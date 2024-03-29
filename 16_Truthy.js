const userEmail = "avinash@google.com"

if (userEmail) {
    console.log("Got user Email")
}else{
    console.log("User email not found")
}

// Falsy value
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// Truthy Values
// "0", 'false', " ", [], {}, function(){}

const myArr = []
if (myArr.length === 0) {
    console.log("Array is Empty");
}

const emptyObj = {}

if (Object.keys(emptyObj) === 0) {
    console.log("Array is Empty");
}


//  Nullish Coalescing Operator (??) : null , undefined

let val1;
// val1 = 50 ?? 10;
// val1 = null ?? 30;
// val1 = undefined ?? 676
// val1 = undefined ?? null
val1 = null ?? undefined

// console.log(val1);

// Terniary Operator
// condition ? true : false

let teaPrice = 100
teaPrice >= 80 ? console.log("Price is more than 80") : console.log("Price is less than 80");