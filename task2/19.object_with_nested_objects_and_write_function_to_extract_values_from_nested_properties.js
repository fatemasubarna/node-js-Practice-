//19. Create a Node.js object with nested objects and write a function to extract values from nested properties.
const student = {
    name: "john",
    age: 40,
    address: {
    city: "New York",
    zip: "10001",
    country: {
      name: "USA",
      code: "US"
    }
},
courses: {
    math: { grade: "A", credits: 4},
    science: { grade: "B+", credits: 3}
}

};

function getNestedValue(obj, path) {
    return path.split('.').reduce((acc, key) => acc && acc[key], obj);
}
console.log(getNestedValue(student, "address.city"));
console.log(getNestedValue(student, "address.country.name")); 
console.log(getNestedValue(student, "courses.math.grade"));   
console.log(getNestedValue(student, "courses.science.credits")); 
console.log(getNestedValue(student, "address.street"));  