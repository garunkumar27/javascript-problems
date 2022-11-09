//Review on Condition(if,else-if,nested if,switch case)
//let oa=10;
//if(oa>0){
//console.log("Positive number");
//}
//else if(oa==0){
//console.log("Given Number is Zero");
//}
//else{
//console.log("Negative Number");
//}

//let ab=10;
//if(ab>20){
//	console.log("Number is Greater")
//	if(ab==20){
//		console.log("Number is Equal")
//}

//	else{
//		console.log("Number is Smaller")
//	}
//}

//	let x=parseInt(prompt("value"));
//	switch(x){
//		case (x<10): console.log("less thn 10");
//		break;
//		case (x>10): console.log("Greater than 10");
//		break;
//	}

// WINDOW OBJECT-SCREEN.WIDTH
// let n=("Screen width is " + screen.width);
// console.log(n);

//Nested if Concept
//let y=parseInt(prompt("Enter Value"));
//if(y>=18){

//	if(y<=25){
//		console.log("Eligible");
//}

//else{
//	console.log("Not Eligible");
//}
//}
// let color=prompt("Enter the color");
// switch (color){
// 	case "Red":
// 		color="Red";
// 		console.log(color);
// 		break;

// 	case "Blue":
// 		color="Blue";
// 		console.log(color);
// 		break;

// 	case "Green":
// 		color="Green";
// 		console.log(color);
// 		break;
// 	case "Black":
// 		color="Black";
// 		console.log(color);
// 		break;
// 	default : 
// 		console.log("The given Entry is not available");
// }

// Review on Condition
// Question
// Ask user to enter age, sex (M or F), marital status (Y or N) and then using following rules print their place of service. if employee is female, then she will work only in urban areas. 
// if employee is a male and age is in between 20 to 40 then he may work in anywhere 
// if employee is male and age is in between 40 to 60 then he will work in urban areas only.
// And any other input of age should print "ERROR".

// let age=parseInt(prompt("Enter the AGE"));
// let gen=prompt("Enter male or female");
// let mrg=prompt("Married Or Unmarried");
// if(gen=="female"){
// 	console.log("She can only work in Urban Areas");
// }
// else if(gen=="male" ){
// 	if(age>=20 && age<=40){
// 		console.log("He can work in anywhere");
// 	}
// 	else if(age>40 && age<=60){
// 		console.log("He can only work in urban Areas");
// 	}
// 	else {
// 		console.log("Error");
// 	}
// }  

// DO WHILE
//let i=0;
//do{
//b=i;
//i++;
//console.log(b); 


//}
//while(i<=10);

//let a=parseInt(prompt("Give The Number"));
//for(i=0;i<=a;i++){
//	console.log(a-i);
//}
//let a=parseInt(prompt("Give The Number"));
//let i=0;
//while(i<a){
//	i++;
//	console.log(a-i);
//}

//let a=parseInt(prompt("Give The Number"));
//let i=0;
//do{
//	i++;
//	console.log(a-i);
//}
//while(i<a);

// let a={
// 	name:"Arun",
// 	Age:"22",
// }
// for(i in a){
// 	console.log(i);
// }
// let b=[1,3,4,5,7,99,00,"Arun"];
// for(i in b){
// 	console.log(i);
// }

//ForEach Method--we can pass two parameters to get both value and index number.
// let c=[1,3,4,5,7,99,00,"Arun"];
// c.forEach((i,e)=>{
// 	console.log(i,e)
// })

//Tables of the Number
//let a= parseInt(prompt("Enter the table Value")),
//b= parseInt(prompt("Enter the table number"));
//for(i=1;i<=b;i++){
//c=a*i;
//console.log(i,'*',a,'=',c);
//}

//Cube of a Number upto Given Integer
// let a= parseInt(prompt("Enter the table Value"));
// let i=1;
// while(i<=a){
// 	b=i**3;
// 	console.log(b);
// 	i++;
// }

// TASK(01/09/22);
// Write a Program that outputs all possibility to put +- or nothing between a numbers
// (1,2,3,4,5,6,7,8,9- in these order),such that the result is 100 .
// let a=[1,28,32,4,5,6,7,8,9],s=0,b;
// for(i=0;i<a.length;i++){
// 	b=a[i]+s;
// 	s=b;

// }
// console.log(s);

//With two string write a program which string has more vowels:
//let a=prompt("Enter the String"),
//b=prompt("Enter the String"),
//ab=0,ba=0,c=["a","e","i","o","u","A","E","I","O","U"];
//for(i=0;i<a.length;i++){
// 	for(j=0;j<c.length;j++){
// 		if(a[i]==c[j]){
// 			ab++;
// 		}
// 	}
// }
// console.log(ab);

// for(i=0;i<b.length;i++){
// 	for(j=0;j<c.length;j++){
// 		if(b[i]==c[j]){
// 			ba++;
// 		}
// 	}
// }
// console.log(ba);
// if(ab==ba){
// 	console.log("Both has same number of vowels")
// }
// else if(ab>ba){
// 	console.log(a,"Has More Vowels")
// }
// else{
// 	console.log(b,"Has More Vowels")
// }

// Reverse of N numbers
// let n=20;
// for(i=n;i>=0;i--){
// 	console.log(i);
// }

// for(i=0;i<=5;i++){
//for(i=5;i>=0;i--){
//	for(j=0;j<=i;j++){
//		document.write("*");
//	}	
//	document.write("<br>");	
//}	
//}

// Math Function for Random Colors using rgb
// function randomcolor(){
// 	let a=Math.trunc(Math.random()*256),
// 	b=Math.trunc(Math.random()*256),
// 	c=Math.trunc(Math.random()*256),colors;
// 	colors="rgb("+a+","+b+","+c+")";
// 	document.body.style.background=colors;
// 	console.log(colors);
// }
// randomcolor();
// // setInterval(randomcolor,2000);


// Print the number in the reverse as a string
// let n=parseInt(prompt("enter the number")),remain,a=[],i=0,
// arr=["zero","one","two","three","four","five","six","seven","eight","nine"];
// while (n > 0) {
//     remain = n % 10;
//     n = n / 10;
// 	n = parseInt(n);
// 	i=remain;
// 		console.log(arr[i]);
// 	}

// Print the nearest larger number one by one
// let b=[80,15,75,22,-10,-100,2],arr=[];
// for(i=0;i<b.length;i++){
//     for(j=0;j<b.length;j++){
//         if(b[i]<b[j]){
//             arr.push(b[j]);
//         }
//     }
//     number(arr);
//     arr=[];
// }
// function number(arr){
//     arr=arr.sort(function(a,b){return a-b});
//     if(arr==""){
//         console.log("-1");
//     }
//         else{
//            console.log(arr[0]); 
//         }
//     }

// Write a program to Check whether a date is a weekend date or not?
// let date=new Date("09/11/2022"),
// day=date.getDay(date);
// console.log(day
// if(day=="0"||day=="6"){
// 	console.log("Given Date is weekend");
// }
// else{
// 	console.log("Given Date is not a weekend");
// }


// 2.Write a program to calculate age using JS date
// let dob = new Date("02/27/2000") ;
// // console.log(dob);
// let time=dob.getTime(); 
// // console.log(time);
// let total = Date.now() - time;
// // console.log(total);   
// let age_cal = new Date(total);
// // console.log(age_cal);
// let year = age_cal.getFullYear();
// // console.log(year);
// let age = Math.abs(year - 1970); 
// console.log("Age :"+age); 


// Generate/Print nearest largest number
// function small(number){
//     number=number.sort(function(a,b){return a-b})
//     if(number==""){
//     console.log("-1");
//     }
//     else
//         console.log(number[0]);

// }

// let a=[12,50,80,100,-15,8],number=[];
// for(i=0;i<a.length;i++){
//     for(j=0;j<a.length;j++){
//         if(a[i]<a[j]){
//             number.push(a[j]);
//         }

//     }
//     small (number);
//     number=[];
// }


// 1. Get time differences in hours between two dates
// let date1=new Date(2022,09,12,10,00);
// let date2=new Date(2022,09,14,10,00);
// let total=date1-date2;
// let hour=Math.abs(Math.floor(total/(1000*60*60)));
// document.write(hour," hours");


// 2.  Get the week start date
// let d=30,mon=07,yr=2002;
// date=mon+"/"+d+"/"+yr;
// console.log(date);
// let gn_date=new Date(date);
// console.log(gn_date);
// fn_day=gn_date.getDay(gn_date);
// console.log(fn_day);
// out=gn_date-((24*60*60*1000)*(fn_day-1));
// console.log(out);
// output=new Date(out);
// console.log(output);


// Changing Color of <h1> by getting the color from from User
// document.getElementById("tri").addEventListener("click",generate);
// function generate(){
// 	let inpt=document.getElementById("col").value,
// 	name=document.getElementById("head");
// 	name.style.color=inpt;
// }


// let a=[2,6,7,9,5];
// // a.for(let b in a){
// // 	console.log(b);
// // }

// a.forEach((e)=>{

// })
// console.log(a);

/*  let str=prompt("Enter the Word"),check;
 check=str.split("");
 console.log(check);
 check=check.reverse();
 check=check.join("");
 if(str==check){
     console.log("Given Word is Palindrome");
 }
 else{
     console.log("Given Word is not a Palindrome");
 } */

//Palindrome Logical
/* let text=prompt("Enter the Text"),
x="";
for(i=text.length-1;i>=0;i--){
	x+=text[i];
	console.log(text.length);
}
if(x==text){
	console.log("Palindrome");
}
else{
	console.log("Not Palindrome");
} */
// Age Calculate
// document.getElementById("trigger").addEventListener("click",calculate);
// function calculate(){
//     let dob=document.getElementById("dob").value,
//     dob_age=new Date(dob),
//     time=dob_age.getTime(),
//     cal=Date.now()-time,
//     age_calc=new Date(cal),
//     year=age_calc.getFullYear(),
//     age=Math.abs(year-1970);
//     document.write("Age is ",age);
//     console.log(age);

// }

// let inpt=prompt("Enter the Value"),
// number=inpt.replace(/[^a-zA-Z]/g,"");
// document.write(number);
// let str=inpt.replace(/[^0-9]/g,"");
// document.write(str);

// function omit(get){
//     let num=get.replace(/[^a-zA-Z]/g,""),
//     alpha=get.replace(/[^0-9]/g,"");
//     return  num+alpha;

// }
// let para=prompt("Enter the value"),
// res=omit(para);
// document.write(res);

// let mail="arun2722000@gmail.com",
// clear=mail.replace(/[^a-zA-Z]/g,"");
// document.write(clear);

// Seperate odd and even numbers

/* document.getElementById("check").addEventListener("click", even);
function even() {
	let numb = document.getElementById("numb").value,
		odd = numb.replace(/[^13579]$/g, "");
	if (numb == odd) {
		document.getElementById("result").innerHTML = "The number is Odd";
	}
	else {
		document.getElementById("result").innerHTML = "The Number is Even";
	}
} */

// Separating Odd and Even Numbers and Adding them together
// let arr="235781",sum=0,res,sums=0,result,
// od=arr.replace(/[^13579]/g,"");
// document.write(od);
// console.log(od);
// let eve=arr.replace(/[^24680]/g,"");
// console.log(eve);
// document.write(eve);
// let spl=od.split("");
// for(i=0;i<spl.length;i++){
// spl[i]=parseInt(spl[i]);
// res=sum+spl[i];
// sum=res;
// }
// document.write(sum);
// console.log(sum);
// let sp=eve.split("");
// for(j=0;j<sp.length;j++){
// sp[j]=parseInt(sp[j]);
// result=sums+sp[j];
// sums=result;
// }
// document.write(sums);
// console.log(sums);

//Write a javascript to get humanized number with the correct suffix such as 1st,2nd,3rd 4th:
// let number=parseInt(prompt("Enter the Value")),
// remain1=number%10,
// remain2=number%100;
// function nremain(){
// 	if(remain1==1&&remain2!==11){
// 		document.write(number+"st");
// 	}
// 	else if(remain1==2&&remain2!==12){
// 		document.write(number+"nd");
// 	}
// 	else if(remain1==3&&remain2!==13){
// 		document.write(number+"rd")
// 	}
// 	else{
// 		document.write(number+"th")
// 	}
// }
// nremain();

/* let rang=200,arr=[],sep,val,val2;
for(i=1;i<rang;i++){
	if(i%7==0){
		sep=i;
		// console.log(sep);
		arr.push(sep);
	}
}
// console.log(arr);
for(i=0;i<arr.length;i++){
	val=arr[i];
	val=String(val);
	val=val.split("");
	// console.log(val);
	val2=val;
}
	for(j=0;j<val2.length;j++){
		if(val2[0]%10<val2[1]%10||val2[0]%10<val2[1]%10<val2[2]%10){
			// console.log(val2[0]);
			val2=val.join("");
			console.log(val2);
		}
	}

 */

// 	 const names=[
// 	 {
// 		 Name:"Arun",
// 		 Ed:"B Tech",
// 		 Place:"Sivasailam"
// 	 },{
// 		 Name:"Kumar",
// 		 Ed:"B Tech",
// 		 Place:"Sivasailam"
// 	 }
// 	 ];
// 	 let count=0;

// 	names.forEach((key)=>{
// 		for(x in key){
// 			count++;

// 		}
//  });
//  console.log(count);

// Printing 7 Divisible number in the ascending order of 'a' number
// let range=200,rem,remain,a=[],b=[],sum,total,tot;
// for(i=0;i<=range;i++){
// 	if(i%7==0){
// 		a.push(i);
// 	}
// 	// console.log(a);
// }
// for(i=0;i<a.length;i++){
// 		rem=a[i]%10;
// 		remain=parseInt(a[i]/10);
// 		// console.log(rem,remain);
// 		if(rem>remain){
// 			console.log(a[i]);
// 		}
// 		if(a[i]>100){
// 			sum=a[i]-100;
// 			total=sum%10;
// 			tot=parseInt(sum/10);
// 			if(tot<total){
// 				console.log(a[i]);
// 			}
// 		}
// }



//  let a=[18,25,30,34];
//  b=a.every(checkAdult);
//  function checkAdult(a){
//  	if(a>18){
//  		console.log("All the Members are Above 18");
//  	}
//  	else{
//  		console.log("Below 18")
//  	}

//  }

//  let arr = [1, 4, 5, 7, 3, 12], b,fd;
//  b =arr.findLast(ele=>ele>2);
//  console.log(b);
/* 
//Array Methods
//Reduce 
let arr=[1,22,31,40,5],initial=0,val;
val=arr.reduce((preval,crntval)=>
preval+crntval,initial);
console.log(val);
//Output:99 


//Reduce
let arra=[139,14,25],tot,total,sum;
total=arra.reduce((tot,sum)=>
tot-sum);
console.log(total);
//Output:100

//Map
let ar=[2,8,4,9,7],num;
num=ar.map(x=>x**2);
console.log(num);
//Output:[4, 64, 16, 81, 49]

//Map
let array=[21,22,25,27,30];
console.log(array.map(calc));
function calc(array){
	return array/2;
}
//Output:[10.5, 11, 12.5, 13.5, 15]

//Filter
let cal=[15,21,18,26,39],result;
result=cal.filter(vari=>vari>21);
console.log(result);
//Output:[26, 39]
 
//Filter
let calcu=["arun","kumar","sivasailam","fabevy","job","possible"];
console.log(calcu.filter(separate));
function separate(number){
	return number.length>4;
}
//Output:['kumar', 'sivasailam', 'fabevy', 'possible']

//Find
let value=[1,15,11,10,14];
console.log(value.find(finds));
function finds(get){
return get>10;
};
//Output:15

//Find
let fn=["arun","kumar","sivasailam","fabevytechno","job","possible"],res;
res=fn.find(data=>data.length>5);
console.log(res);
//Output:sivasailam

//every
let ca=[15,21,18,26,39],results;
results=ca.every(vars=>vars>21);
console.log(results);
//Output:false

//every
let ev=[22,14,18,19,29,24,27];
console.log(ev.every(myFun));
function myFun(ever){
	return ever<51;
}
//Output:true

//ForEach
let person=["arun","kumar","Siva","Chennai"],each;
each=person.forEach((file)=>
console.log(file));
//Output:
//arun
//kumar
//Siva
//Chennai

//ForEach
let digit=[10,20,30,40],digi;
digi=digit.forEach((para)=>
console.log(para));
//Output:
//10
//20
//30
//40

//String
let a=[1,2,3,4,5],out;
out=String(a);
console.log(out);
//Output:1,2,3,4,5

//String
let st=["Hii","This","Is","not","a","Joke"],ok;
ok=String(st);
console.log(ok);
//Output:Hii,This,Is,not,a,Joke


//Splice
let ab=[10,11,12,13,14,16,17];
ab.splice(5,2,15);
console.log(ab);
//Output:[10, 11, 12, 13, 14, 15]

let rev=["a","b","c","e"]
rev.splice(3,1,"d");
console.log(rev);
//Output:['a', 'b', 'c', 'd']

let per={
	name:"Arun",
	Age:"22",
	Place:"Sivasailam"
}

let abc=Object.keys(per).filter((k)=>{
	console.log(per[k]);
	return (per[k.length]>3)
	});
console.log(abc);
//Output:

//flatMap
let fl = [13, 12, [23], [21,22], 26, [55]],flat;
flat= fl.flatMap(nums => nums);
console.log(flat);
//Output:[13, 12, 23, 21, 22, 26, 55]

//last index 
let las=[1,5,9,22,12,5,4,8,7,5,1,3,1,5],lst;
lst=las.lastIndexOf(1);
console.log(lst);
//Output:12

//find last
let la=[1,2,3,12,40,20,60,44,22],last;
last=la.findLast(element => element >39);
console.log(last);
//Output:44

//reduceRight
let red=[[4,8],[5,8]],redu;
redu=red.reduceRight((e,w)=>w);
console.log(redu);
//Output:[26, 39]

//values
let vals=["r","v","a"],va;
va=vals.values();
for(n of va){
console.log(n);
}
//Output:
//r
//v
//a

//includes
let fruits=["Apple","mango","Berry","banana","Orange"];
console.log(fruits.includes("mango"));
//Output:True
 */
/* 
//Starting an array containing the numbers 1 to 10 ,use  filter, map,reduce to produce the following.
//Use console.log to display the results 
 let arrays=[1,2,3,4,5,6,7,8,9,10];
 //1.Array of Odd Numbers
 console.log(arrays.filter(odd))
 function odd(abc){
	 return abc%2==1;
 }
 //Output:[1, 3, 5, 7, 9]
 //2.Array of Num Divisible by 2 or 5
 console.log(arrays.filter(div));
 function div(bcd){
	  if(bcd%2==0){
		  return bcd;
	  }
	 else if(bcd%5==0){
		 return bcd;
	 }
 }
 //Output:[2, 4, 5, 6, 8, 10]
 //3.An array of numbers divisible by 3 and then square those numbers
 arrays.filter(three);
 function three(data){
	 if(data%3==0){
		 console.log(data**2);
	 }
 }
 //Output:9,36,81
 //4.The sum of following :Square the numbers divisible by 5
 arrays.filter(five);
 function five(dat){
	 if(dat%5==0){
		  console.log(dat**2); 
		i=0;			
		dat**2+i;
		s=i;
		
		 console.log(s)
	 }
	 
 }
 //Output:25,100 */
 
/*  function createPyramid(rows)
{
    for (let i = 0; i < rows; i++) {
        var output = '';
        for (let j =0; j < rows - i; j++) output += ' ';
        for (let k = 0; k <= i; k++) output += '* ';
        console.log(output);  
    } 
}
createPyramid(8); */

//Array Swapping
/* let arr1=[1,2,3,4,5],
arr2=[6,7,8,9,10],arr3=[];
arr3=arr1;
//console.log(arr3);
arr1=arr2;
console.log(arr1);
arr2=arr3
console.log(arr2); */

//Prime Number
/* let i=parseInt(prompt("Enter the Number"));
//for(i=2;i<=prime;i++){
	if((i%2!==0)&&(i%3!==0)&&(i%5!==0)&&(i%7!==0)){
		console.log("It is Prime Number",+i);
	} 
	 else if(i==2||i==3||i==5||i==7){
		console.log("It is a Prime Number");
	}  
	else{
		console.log("It is not a Prime number",+i)
	}
	
//} */


let obj=[
{
	name:"Arun",
	age:27,
	role:"Front-end Developer",
	
},
{

	name:"Kumar",
	age:23,
	role:"Front-end Developer",	
},
{
	
	name:"Karthi",
	age:24,
	role:"Front-end Developer",
}
];
let ans=[]
let arr=["arun","Kartahi","Jenifer"];
for(i of arr){
	for(j=0;j<i.length;j++){
		if(i[j]=="a"){
			ans.push(i);
			break;
		}
		
	}
}	
console.log(ans);	
let newArr=obj.filter((val)=>{return(val.age>=23)});
let newArr1=obj.sort((a,b)=>(a.age - b.age))
console.log(newArr);
console.log(newArr1);	