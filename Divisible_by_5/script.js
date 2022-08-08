// Given number is divisible by 5 or not 
let number=parseInt(prompt("Enter the Number"));
if(number==0){
    console.log(' Given Number is zero and it gives 0 as output');
}
else{
  if(number%5==0){
    console.log("Number is divisible by 5");
}
 else{
    console.log("Number is Not divisible by 5");
}
}