//Write a function that converts an object into an array of key-value pairs.
function objectToArray(obj) {
    if (typeof obj !== "object" || obj === null) {
      throw new Error("Invalid input: Expected an object.");
    }
    
    return Object.entries(obj);
  }
  
  // Example Usage
  const student = {
    name: "Alice",
    age: 22,
    grade: "A"
  };
  
  console.log(objectToArray(student));
  