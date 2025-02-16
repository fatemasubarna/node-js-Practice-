//Given an array of integers, write a function that finds the second largest number.
const point=[20,30,50,70,10];

function arraySecondLargest(point){
    return Math.max.apply(null, point);
    
}
console.log(Math.max(point));

