const normalObj = {}; // create a normal object
const nullProtoObj = Object.create(null); // create an object with "null" prototype

// console.log(`normalObj is: ${normalObj}`); // shows "normalObj is: [object Object]"
// console.log(`nullProtoObj is: ${nullProtoObj}`); // throws error: Cannot convert object to primitive value

const myObj = {}
// console.log(myObj);


var createCounter = function(n) {
    let number = n;
    return function() {
        return n=n++
    };
};
const counter = createCounter(10);
console.log(counter());