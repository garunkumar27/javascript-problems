// let mark=parseInt(prompt("Enter Mark"));
// if(mark>=85 && mark<=100){
// console.log("Grade 'A' Keep it Up");
// }
// else if(mark>=60 && mark<=84){
//     console.log("Grade 'B' Increase Your Grade");
// }
// else if(mark>=35 && mark<60){
//     console.log("Grade 'C' Need More Effort");
// }
// else{(mark<35 && mark>=0)
//     console.log("Grade 'F' Study Sincerely");
// }

// Grades are given based on the marks 
// if()--it fully called condition
// if()-content present inside the brackets is Statement
// console.log()-Content present inside the brackets is argument.

// This helps to calculate 10th marks and giving grades
// The below example is for total=500 
// Need to get Input from user is 5 values below 100
let n=5;
let a=[];
let k=0,sum;
for(i=0;i<n;i++){
    a[i]=parseInt(prompt("Enter values"))
    sum=a[i]+k;
    k=sum;
}
console.log(sum);
if(sum>=450 && sum<500){
    console.log("Grade 'A'");
}
else if(sum>=400 && sum<450){
    console.log("Grade 'B'");
}
else if(sum>=300 && sum<400){
    console.log("Grade 'C'");
}
else{(sum<300 && sum>175)
console.log("Grade 'D'");
}