// 15. Define a function that takes an array of numbers and returns an array of squared values.
function squaredarray(arr) {
    return arr.map(num=> num*num);

}
const a=[1,2,3,4,5];
console.log(squaredarray(a));