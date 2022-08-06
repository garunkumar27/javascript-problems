// To Find aGiven Number is larger number or not
let a,b,c;//variable declaration
a=parseInt(prompt('Enter the number'));//Input from User
b=parseInt(prompt('Enter the number'));//Input from User
c=parseInt(prompt('Enter the number'));//Input from User
if(a>b){
    if(a>c){
        console.log(a);
    }
}
else{
    if(b>c){
        console.log(b);
    }
    else{
        console.log(c);
    }
}
