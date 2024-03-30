//  For of
// ["", [""], [""]]

// [{}, {}, {}]

const myArray = [1,2,3,4,5,6,7]

for (const Value of myArray) {
    // console.log(Value)
}

const myStr = "I am very good today";
for (const Value of myStr) {
    // console.log(Value);
}

// Maps

const map = new Map()
map.set('IN', 'India')
map.set('USA', 'United States of America')
map.set('Fr','France');
map.set('IN', 'India')

// console.log(map)


for (const country of map) {
    // console.log(country)
}

for (const [key, value] of map) {
    // console.log(key, ":-", value);
}

// const myObject = {
//     'game1': "NFS",
//     'game2': "GTA"       // for of loop doesn't work for object
// }

// for (const key of myObject) {
//     console.log(key)
// }


const myObject = {
    js : 'Javsscript',
    cpp : 'C++',
    rb : 'Ruby',
    swift : 'Swift by Apple'
}

for (const key in myObject) {
//    console.log(key,":-", myObject[key]);
}

const siblings = ['Me','myself','you','yourself']

for (const [key,value] in siblings) {
    // console.log(key, siblings[key]);
 }



//  For Each


const coding = ['js','java','python','cpp','ruby']

// coding.forEach(  function (value){
//     console.log(value)
// })


// We will write the above code with arrow function

// coding.forEach((value) => console.log(value))
// coding.forEach( (item) => {
//     console.log(item)
// } )


function printMe(item){
    console.log(item)
}
// coding.forEach(printMe)

// coding.forEach( (value, num, arr) => {
//     console.log(value, num, arr)
// })


const myCoding = [
    {
    languageName : "javascript",
    languageFileName : "js"
    },
    {
    languageName : "JAVA",
    languageFileName : "java"
    },
    {
    languageName : "python",
    languageFileName : "py"
    }
]

myCoding.forEach((item)=>{
    console.log(item.languageName);
})