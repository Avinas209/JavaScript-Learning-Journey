// Scopes in javascript
var c = 500;
if(true){
    let a =30;
    const b =40;
    var c = 50;
}
// console.log(a)
// console.log(b)
// console.log(c)


function one(){
    const username = "Avinash"
    function two(){
        const website = "Youtube";
        console.log(username);
    }
    // console.log(website);
    two()
}
// one()

if(true){
    const username = "Avinash";
    if(username === "Avinash"){
        const website = " Worried_web"
        console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);

console.log(addOne(5));
function addOne(num){
    return num + 1;
}


//  If we call the function stored in the variable before it is declared then it will give error:
// In the given case below we stored the given function in a variable addTwo. If we call the function before the 
// declaration of variable it will throw error

console.log(addTwo(5));

const addTwo = function(num){
    return num + 2;
}

// console.log(addTwo(5));