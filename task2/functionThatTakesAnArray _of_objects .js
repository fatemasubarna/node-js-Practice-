//Write a function that takes an array of objects (each representing a product) and returns the most expensive product.

function getMostExpensiveProduct(product) {
    if (!Array.isArray (product) || product.length === 0) return null;

return product.reduce((max, product) => 
    product.price > max.price ? product : max
);
}

const product= [
    {name: "p1", price: 1200},
    {name: "p2", price:1000},
    {name: "p3", price:400},
    {name: "p4", price:800}
];
const mostExpensive = getMostExpensiveProduct(product);
console.log("Most Expensive Product:", mostExpensive);