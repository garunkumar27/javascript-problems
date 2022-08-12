// Directly GIven n value
let n = 145;
// Getting n value from User
// let n=parseInt(prompt("Enter the Number"));
let sum = 0, remain;
while (n > 0) {
    n = parseInt(n);
    remain = n % 10;
    sum +=remain;
    n = n / 10;
}
console.log(sum);

// In this Sum of a number is done,
// parseInt is a function so we need to give function value to convert into integer
// While dividing the answer it will come in float, to convert float into integer we are using parseInt.
// 1.It check the condition (145>0 or not)
// 2.Using Modulus operator is used to find the remainder 
// 3.sum=sum+remain / sum+=remain-In this the remainder get stored
// 4.n=n/10- In this 247/10=24.7 this value goes in again to the loop and the same process repeated again.
// Output is 10(1+4+5=10);