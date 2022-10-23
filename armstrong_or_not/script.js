let a=parseInt(prompt("Enter the Value"));
let remain,sum=0;
let c=a;
while(c>0){
remain=c%10;
sum+=remain*remain*remain;
c=parseInt(c/10);
}
if( sum==a){
    document.write("Given Number is Armstrong Number" , a);
    // console.log("Given Number is Armstrong Number", a);
}
else{
    document.write("Given Number is not a Armstrong Number" , a);
    // console.log("Given Number is not a Armstrong Number" , a);
}

// An Armstrong number is one whose sum of digits raised to the power three equals the number itself.
// 
//  
 