// Write a recursive function to calculate the factorial of a given number
function factorial(x){
    if(x==0){
        return 1;
    }
    return x*factorial(x-1);// n!=n*(n-1)
}
console.log(factorial(10));