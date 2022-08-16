// //Quadratic Equation = -b+-root of b**2-4ac/2a
// anyone of the value must given in negative numbers
// the value of c must given in negative number to avoid the negative output
//Giving the value of A in negative gives the negative output
// Giving the value of B in negative gives the output as NaN 
// the above mentioned value related points only applicable for (-b+ i.e starting formula)
// for (-b- i.e starting formula)
// Value of A is negative, output is positive and c is positive and output is also positive


let a=parseInt(prompt("Enter value"));
let b=parseInt(prompt("Enter value"));
let c=parseInt(prompt("Enter value"));
// let number=(b*b)-(4*a*c),total,answer;//Method 1
// let n=Math.sqrt(number);
// total=(-b-n)/2*a;
// answer=(-b+n)/2*a;
// console.log(total);
// console.log(answer);

let n=(-b+(Math.sqrt(b*b-4*a*c))/2*a);//Method 2
let m=(-b-(Math.sqrt(b*b-4*a*c))/2*a);
console.log(n);
console.log(m);
