//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

for (let i = 0; i < Object.keys(person3).length; i++) {
    console.log(`${Object.keys(person3)[i]}: `)
    if (Array.isArray(Object.values(person3)[i])) {
        console.log(`${Object.values(person3)[i]}\n`)
    }  else {
        console.log(`${Object.values(person3)[i]}\n`) //Really struggling to find the values of the shakes object; I know how in python, can't find
    }
}
    // console.log(Object.keys(person3)[i])

//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype
function Person(name, age) {
    this.name = name;
    this.age = age;
    
// Use an arrow to create the printInfo method

    this.printInfo = () => {
        console.log(`Name: ${this.name}, Age: ${this.age}`)
    } 

// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 

    this.happyBirthday = (years = 1) => {
        this.age += years
    }
}

let steve = new Person('Steve', 38)
let melanie = new Person('Melanie', 39)


steve.printInfo()
melanie.printInfo()
steve.happyBirthday()
steve.happyBirthday()
steve.happyBirthday()
melanie.happyBirthday()
steve.printInfo()
melanie.printInfo()
steve.happyBirthday(10)
steve.printInfo()



// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

const isBigWord = (word) => {
    return new Promise( (resolve, reject) => {
        if (word.length > 10) {
            resolve(true)
        } else {
            reject(false)
        }
    })
}

isBigWord("test")

.then( (result) => {
    console.log(`Big word: ${result}`)
})

.catch( (error) => {
    console.log(`Small Number: ${error} (It should probably say small word, but I'm following the prompt)`)
})
