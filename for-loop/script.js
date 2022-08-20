// FOR IN- for in used in object give only the key(name,lname)
// If FOR OF is used in object it shows an error
 //for(i of a){
 //console.log(i);
 //} 
let a={
    name:"Arun",
    lname:"Kumar",
}
//for(i in a){
  //  console.log(i);
    // console.log(a);
//}
// Output:
// name  
 //lname

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
// Output
// arun
// 2
// 5

//"FOR EACH"
let v =["1","2","3","4","5"];
v.forEach((i,e)=>{
console.log(i,e)
})
//OUTPUT
// 1  0
// 2  1
// 3  2
// 4  3
// 5  4	