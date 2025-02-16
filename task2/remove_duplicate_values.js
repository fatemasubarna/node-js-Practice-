//Write a function that removes duplicate values from an array in Node.js
//reduce() with array.includes() method
let v1= [1,2,3,4,5,2,3];
let v2= v1.reduce(function (new_value,current_value){
    if(!new_value.includes(current_value)){
   new_value.push(current_value);
}
return new_value;
},[]);
console.log(v2);
