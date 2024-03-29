// Immediately Invoked Function Expressions (IIFE)

function chai(){
    console.log(`DB CONNECTED`);
}
// chai();

// Another way to use this function is 

(function chai(){       //Named IIFE
    console.log(`DB CONNECTED`);
})();            //   Pay attention to the parenthesis used in this function
//  Question: Why we use IIFE? 
// Answer : It is used to immediately execute the function and it is also used to protect the pollution caused by
//  variable of global scope


//  We must use semicolon to stop the execution of the previous IIFE before initiating 2nd IIFE function to avoid error

( (name) => {       // Unnamed IIFE or Simple IIFE
    console.log(`DB CONNECTED TWO ${name}`)
})("Avinash")