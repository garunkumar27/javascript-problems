let x,y,f,s=1;
x=parseInt(prompt("Enter the number"));
for(i=1;i<=x;i++){
    y=i*s;
    s=y;
    
}
console.log(s);

// Factorial =5!=5*4*3*2*1=120
// i<=x - this helps to take the x value completely
// s=1; variable definition is already done
// In y the multiplication is done ,then the value of y is stored in s i.e the value of s is changed
// Again the loop go in and incerment fn will takes place the value of i get increased from 1 to 2
// Multiply i with new value of s
// Continous operation takes place until the loop gets out