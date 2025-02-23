// 5. Implement a function that merges two arrays without using built-in concatenation methods.
// concat method
array1=[1,2,3,4];
array2=[2,4,3,5,2,3,6,7];
array1 = array1.concat( array2 );
console.log(array1);

//splice method
a1=[1,2,3,4];
a2=[2,4,3,5,2,3,6,7];
a1.splice(a1.length,1,...a2); // Array.splice( index, remove_count, item_list )
console.log(a1);
