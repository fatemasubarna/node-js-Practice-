// 1. Write a Node.js program to create an array of numbers and find the sum of all elements using the reduce() method.
const num =[1,4,5,6,8,9];
let sum = num.reduce(Function);
console.log(sum);
function Function(total, value, index, array) {
    return total + value;
  }