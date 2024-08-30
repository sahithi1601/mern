//arithmetic operations using variables
var a = 10;
var b = 5;
let X = a + b;
console.log(`addition : ${X}`);
var Y = a - b;
console.log(`subtraction : ${Y}`);
const Z = a * b;
console.log(`multiplication : ${Z}`);
let W = a / b;
console.log(`division : ${W}`);
let P = a % b;
console.log(`modulus : ${P}`);
let Q = a ** b;
console.log(`exponentiation : ${Q}`);

//comparison operators to compare the values of variables
var c = 15;
var d = 20;
console.log(`c == d : ${c == d}`);      
console.log(`c != d : ${c != d}`);      
console.log(`c > d : ${c > d}`);        
console.log(`c < d : ${c < d}`);        
console.log(`c >= d : ${c >= d}`);      
console.log(`c <= d : ${c <= d}`);      

//logical operators to combine conditions
var c = 15;
var d = 20;
console.log(`(c > 10 && d < 25) : ${(c > 10 && d < 25)}`);  
console.log(`(c > 20 || d < 25) : ${(c > 20 || d < 25)}`); 
console.log(`!(c == d) : ${!(c == d)}`); 

// Ternary operator to assign a value based on a condition
var c = 15;
var d = 20;
let result = (c > d) ? "c is greater than d" : "c is not greater than d";
console.log(result);

