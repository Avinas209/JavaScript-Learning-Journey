// ++++++++   Objects   +++++++

// Singleton
// Object.create

// Object literals
const mySym = Symbol("key1"); // Important for Interview


const user = {
    name: "Avinash",
    "full name" : "Avinash Kumar",
    [mySym] :"key2",
    age: 21,
    location:"Bihar",
    email: "avinash@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Wednesday"]
}

user.email = "avinash@facebook.com"
// console.log(user.name);
// console.log(user["email"]);
// console.log(user["full name"]);
// console.log(typeof user[mySym]);//Important for interview in how to use symbol
// console.log(user[mySym]);

// console.log(user);
// Object.freeze(user);
// user.name="Rohit";
// console.log(user);

user.greeting = function(){
    console.log(`Hello, ${user.name}`)
}
// console.log(user.greeting());
user.greeting2 = function(){
    console.log(`Hello, ${this.name}`);
}
// console.log(user.greeting2());



// Part-2


// const tinderUser = new Object();
const tinderUser = {};

tinderUser.id = "123abc"
tinderUser.name = "Shyam"
tinderUser.isLoggedIn = true
// console.log(tinderUser);

const RegularUser = {
    email : "myself@gmail.com",
    fullname : {
        userfullname:{
            firstName : "Avinash",
            lastname : "Kumar"
        }
    }
}
// console.log(RegularUser);
// console.log(RegularUser.fullname);
// console.log(RegularUser.fullname.userfullname);
// console.log(RegularUser.fullname.userfullname.firstName);

const obj1 = {1: "a" , 2: "b"}
const obj2 = {3: "c" , 4: "d "}

const obj3 = {obj1, obj2};
// console.log(obj3);


const obj4 = {...obj1, ...obj2};
// console.log(obj4);


//  Another Method for doing this
const obj5 = Object.assign({},obj1,obj2);
// console.log(obj5);

// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const project = {
    projectname : "20days challenge",
    projectdirector : "Avinash Kumar"
}

console.log(project.projectdirector)
// Alternate way
const {projectdirector : director} = project;
console.log(director);

const {projectname}=project;
console.log(projectname)