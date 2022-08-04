let n,a=[],s,sum;
s=0;
n=parseInt(prompt('Number of terms'));
for(i=0;i<n;i++){
    a[i]=parseFloat(prompt('Enter the Number'));
}
for(i=0;i<n;i++){
    sum=a[i]+s;
    s=sum;
}
console.log(sum);
let avg;
avg=sum/n;
console.log(avg);