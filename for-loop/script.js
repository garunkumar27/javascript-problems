// FOR IN- for in used in object give only the key(name,lname)
// If FOR OF is used in object it shows an error 
let a={
    name:"Arun",
    lname:"Kumar",
}
for(i in a){
    console.log(i);
console.log(a);
}
// Output:name  
 //       lname

// FOR IN used in array,it gives index values of array(0,1,2.....)
let z=["arun","2","5"]
for(b in z){
    console.log(b);
}
// Output:
// 0
// 1
// 2

// FOR OF-for of used in array gives array values ..

let m=["arun","2","5"];
for(x of m){
    console.log(x);
}