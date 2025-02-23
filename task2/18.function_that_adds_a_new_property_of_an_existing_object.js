//18. Implement a function that adds a new property to an existing object dynamically.
function addProperty(obj, key, value) {
    if (typeof obj !== 'object' || obj === null) {
      throw new Error("Invalid object provided.");
    }
  
    obj[key] = value; // Dynamically add property
    return obj;
  }
  
  // Example Usage
  const student = {
    name: "Alice",
    age: 22
  };
  
  console.log("Before:", student);
  
  // Adding a new property dynamically
  addProperty(student, "grade", "A");
  
  console.log("After:", student);
  
