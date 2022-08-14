// Prime number
// The number that is divisible by 1 and divisible by the same number 
let n=parseInt(prompt("Enter value"));
let s=1;
for(i=2;i<n;i++){
    if(n%i==0){
        s=1;
        break;
    }
}
    if(s==1){
        console.log("Not Prime Number");
    }
    else{
        console.log("Prime Number");
    }

    // 
    // 