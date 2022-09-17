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

// let n=parseInt(prompt("enter the number")),remain,a=[],i=0,
// arr=["zero","one","two","three","four","five","six","seven","eight","nine"];
// while (n > 0) {
//     remain = n % 10;
//     n = n / 10;
// 	n = parseInt(n);
// 	i=remain;
// 		console.log(arr[i]);
// 	}

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

// 1.Write a program to Check whether a date is a weekend date or not?
// let date=new Date("09/11/2022"),
// day=date.getDay(date);
// console.log(day);
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
// out=gn_date-((24*60*60*1000)*(day-1));
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