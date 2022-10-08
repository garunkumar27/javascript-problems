// Fibanocci Series
// The first two terms of the Fibonacci series are zero and one, respectively.
//  And the next terms are the addition of the two previous terms.
let n=parseInt(prompt("Enter the values"));
let a,b,c;
a=0,b=1;
console.log(a);
console.log(b);
for(i=0;i<n-2;i++){
   c=a+b;
    a=b;
   b=c;
   console.log(c);
}

