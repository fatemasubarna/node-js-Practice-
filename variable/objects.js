let person= {
    firstname:"john",
    lastname:"Doe",
    age:60,
    height:5.9
}
    
// accending object properties
console.log(person);
console.log(person["firstname"]);
console.log(person["age"]);

// add new properties in existing object
person["weight"]=80;
console.log(person["weight"]);
// update a properties in the object
person["age"]=70;
console.log(person["age"]);
// delete an object
delete person ["height"];
console.log(person["height"]);
console.log(person.firstname + " is " + person.age +" years old.");