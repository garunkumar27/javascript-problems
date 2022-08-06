// Matrix Addition Using Array
let n;// variable declaration
let a=[]; b=[] ;s=[];// declaring empty array
n=parseInt(prompt('Number of terms'));
for(i=0;i<n;i++){
    a[i]=parseFloat(prompt('Enter numbers'));// Getting value and storing in array
}
// console.log(a); to check whether value stored in array
for(i=0;i<n;i++){
    b[i]=parseFloat(prompt('Enter number'));// Getting value and storing in array
}
// console.log(b); to check whether value stored in array
for(i=0;i<n;i++)
{
    s[i]=a[i]+b[i];// Expression
}
console.log(s);// Printing statement


