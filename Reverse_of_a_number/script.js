let n = 145,remain;
while (n > 0) {
    n = parseInt(n);
    remain = n % 10;
    n = n / 10;
    if(remain>0){
        console.log("");
    console.log(remain);
    }
}

// parseInt is a function so we need to give function value to convert into integer
// While dividing the answer it will come in float, to convert float into integer we are using parseInt.
// 1.It check the condition (145>0 or not)
// 2.Using Modulus operator is used to find the remainder 
// 3.n=n/10- In this 145/10=14.5 this value goes in again to the loop and the same process repeated again.
// if condition is used to avoid the printing of remainder 0
