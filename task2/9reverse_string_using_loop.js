//9. Implement a function that reverses a string using a for loop instead of built-in methods
 function reversestring(str){
    let reversed='';
    for (let i=str.length-1; i>=0;i--){
       reversed+=str[i];
    }
    return reversed;
 }
 let string= "hello";
 let result = reversestring(string);
 console.log(result);
 
