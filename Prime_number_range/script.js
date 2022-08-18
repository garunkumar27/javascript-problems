let n=parseInt(prompt("Enter the lowest number"));
let m=parseInt(prompt("Enter the Highest number"));
for(i=n;i<=m;i++){  
    a=0; 
    for(j=2;j<i;j++){
        if(i%j==0){
            a=1;
            break;
        }
}
if(i>1 && a==0){
    console.log(i);
}
}