//16. Create a Node.js object that represents a student with properties like name, age, and grades. Write a method to calculate the average grade.

let student={
    name:"john",
    age: 20,
    grade:[100,90,70,85,75]
};

let result=(student.grade).reduce(function(total, currentItem){
    return (total+currentItem)// ((student.grade).length);

})
console.log(result/((student.grade).length));