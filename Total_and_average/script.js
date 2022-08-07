let n,a=[],s,sum;// Variable Declaration
s=0;
n=parseInt(prompt('Number of terms'));// Input from User Number of terms 
for(i=0;i<n;i++){
    a[i]=parseFloat(prompt('Enter the Number'));// Storing values in array
}
for(i=0;i<n;i++){
    sum=a[i]+s;
    s=sum;
}
console.log(sum);// Printing Statement
let avg;
avg=sum/n;
console.log(avg);// Printing Statement

