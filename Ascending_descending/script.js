// Ascending Order & Descending Order
let a=parseInt(prompt("Enter numbers"));
let b=parseInt(prompt("Enter numbers"));
let c=parseInt(prompt("Enter numbers"));
if(a>b && a>c){
    if(b>c){
        console.log("Ascending order",c,b,a);
        console.log("Descending order",a,b,c);
    }
    else{
        console.log("Ascending order-",b,c,a);
        console.log("Descending order",a,c,b);
    }
}
if(b>a && b>c){
    if(a>c){
        console.log("Ascending order",c,a,b);
        console.log("Descending order",b,a,c);
    }
    else{
        console.log("Ascending order",a,c,b);
        console.log("Descending order",b,c,a);
    }
}
if(c>a && c>b){
    if(a>b){
        console.log("Ascending order",a,b,c);
        console.log("Descending order",c,b,a);
    }
    else{
        console.log("Ascending order",b,a,c);
        console.log("Descending order",c,a,b);
    }
}
