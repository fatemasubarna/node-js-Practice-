//12. Create a function that takes a string and returns its reverse without using built-in reverse functions
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
 