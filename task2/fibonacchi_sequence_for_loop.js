//Write a Node.js program that prints the first 10 numbers of the Fibonacci sequence using a for loop.
function fibonacchi(n){
    const fib=[2,3];
    for(let i=2; i<n; i++)
    {
        fib[i]= fib[i-1] + fib[i-2];
    }
    return(fib);
}
console.log (fibonacchi(10));