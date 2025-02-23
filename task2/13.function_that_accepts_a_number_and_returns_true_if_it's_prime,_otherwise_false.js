//13. Implement a function that accepts a number and returns true if it's prime, otherwise false.
function Prime(num) {
    if (num <= 1) 
        return false; 
    if (num === 2 || num === 3) 
        return true;

    if (num % 2 === 0 || num % 3 === 0) 
        return false; 

    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) 
            return false;
    }
    
    return true;
}
console.log(Prime(3));
