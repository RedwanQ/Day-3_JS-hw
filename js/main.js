var test = 'Hey Red'

console.log(test)

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

for (let key in person3) {
  console.log(person3[key])
};



//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years.
*/

// Create our Person Prototype (Person class)
function Person(name, age){
    let person = Object.create(Person.prototype)
    person.name = name
    person.age = age

    return person
}

// create the printInfo method
Person.prototype.info = function(){
    console.log(`${this.name} is ${this.age} years old.`)
}
// Create another method for the addAge method

Person.prototype.grow = function(amount){
    console.log(` Happy Birthday ${this.name} `)
    this.age += amount
}


//=======Exercise #3=========//

/*Write a function that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */


function replaceEvens(arr){
    //code goes here
    
}

//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]