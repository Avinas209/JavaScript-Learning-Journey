//  For loop
// let array = [1,2,3,4,5,6,7]
for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        // console.log("5 is the best number");
    }
    // console.log(element)
}
// console.log(element);

for (let i = 0; i <= 10; i++) {
    // console.log(`Table of : ${i}`)
    for (let j = 0; j <= 10; j++) {
        // console.log(`Inner loop value : ${j} and outer loop value ${i}`)
        // console.log(`${i} * ${j} = ${i*j}`)
    }
    
}

let myArray = ["Batman", "Superman", "Ironman"]
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
}

// Break and Continue

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log('Detected 5');
        // break;
        continue;
    }
    console.log(`Value of i is : ${index}`)
    
}