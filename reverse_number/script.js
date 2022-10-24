// Method 1
let a=[];
let n=parseInt(prompt("Number of Terms"));
for(i=0;i<n;i++){
  a[i]=parseInt(prompt("Enter the number"));
}
a.sort((function(a,b) {return b-a}));
console.log(a);

// In this the array method sort is used to print ascending/descending .
// For numeric values function and return is used (b-a)is to give output descending order
// Similarly (function(a,b) {return a-b} is for ascending order

// Method 2 one and only input 
// output is in reverse order
let o=parseInt(prompt("Enter terms"));
for(i=o;i>0;i--){//its a basic method decrement operator
    console.log(i);//using decrement function the value get reversed 
}

// Method 3 one and only input 
// output is in reverse order 
// let m=parseInt(prompt("Enter terms"));
for(i=0;i<m;i++){
    console.log(m-i);//m-i the value of m get subracted from i (eg (m-i)_10-0=0;10-1=9,10-2=8)
}