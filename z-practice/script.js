// var a=10;
// let b=8;
// {
//     a=5;
//     b=12;
// }
// console.log(a);
// console.log(b);
// // output 5,12

// var a;
// let x;
// {
//     a=10;
//     x=15;
// }
// console.log(a);
// console.log(x);
// // Output 10,15



// {
//     var a=25;
//     let x=14;
// }
// console.log(a);
// console.log(x);
// Output:25

// const y=12345; /only new variable can be given/
// console.log(y);
// var coffee=3;
// console.log(coffee);
// let condition="";
// if (condition){
//     if(coffee)
//     console.log(condition);
//     console.log("condition false");
//    let z=10;
//    console.log(z);
// }
// else{
//     console.log("condition false");
//     console.log("condition true");
//     console.log("condition false");
// }
// let ya;
// for(ya=5;ya>0;ya--){
//     console.log(ya);
// }
// let m,t;
// for(m=1;m<5;m++){
//     for(t=5;t>0;t--){
//         console.log("*");
//     }
// }
// let xa,yb;
// for(xa=1;xa<6;xa++){
//     yb=xa**3;
//     console.log(yb);
// }
// let ax;
// for(ax=0;ax<100;ax++){
//     if(ax%2==0)
// {
//     console.log(ax);
// }
// }
// let odd;
// for (odd = 1; odd < 101; odd++) {
//     if (odd % 2 == 1) {
//         console.log(odd);
//     }
// }
// let A,c,r;
// c=3.14;
// r=parseInt(prompt('Give radius'))
// A=c*r**2;
// console.log(A);

// To find Are of Triangle_1/2*b*h
// let T,B,H,X;
// X=1/2;
// B=parseFloat(prompt('Give base value'));
// H=parseInt(prompt('Give Height value'));
// T=X*B*H;
// console.log(T);0

// To Find Simple Intrest
// let number,SI,P,N,S;
// number=100;
// P=parseInt(prompt('Give P value'));
// N=parseInt(prompt('Give N value'));
// S=parseInt(prompt('Give S value'));
// SI=P*N*S/number;
// console.log(SI);

// To find Addition
// let ad, add, total;
// ad = 10; add = 50;
// total = ad + add;
// console.log(total);

// To find Subraction
// let sub,subb,ans;
// sub=10;subb=40;
// ans=subb-sub;
// console.log(ans);

// To Find Multiplication
// let mul,mult,answ;
// mul=10;mult=10;
// answ=mul*mult;
// console.log(answ);

// Divide
// let divi,div,answe;
// divi=100;div=5;
// answe=divi/div;
// console.log(answe);

// Square A=s^2
// let square,sq;
// sq=10;
// square=sq**2;
// console.log(square);

// cube_vol of cube:a^3
// area of cube:6a ^2
// let vol,cube;
// cube=4;
// vol=cube**3;
// console.log(vol);

// swap two numbers
// let A,R,U;
// A=10;R=15;
// U=A;
// A=R;
// R=U;
// console.log(A,R);

// swap four numbers
// let V,W,X,Y,Z;
// V=20;W=30;X=40,Y=60;
// Z=V;
// console.log(Z);
// V=W;
// console.log(V);
// W=X;
// console.log(W);
// X=Y;
// console.log(X);
// Y=Z;
// console.log(Y,V,W,X);

// let n,a=[],s,sum;
// s=0;
// n=parseInt(prompt('Number of terms'));
// for(i=0;i<n;i++){
//     a[i]=parseFloat(prompt('Enter the Number'));
// }
// for(i=0;i<n;i++){
//     sum=a[i]+s;
//     s=sum;
// }
// console.log(sum);
// let avg;
// avg=sum/n;
// console.log(avg);

// function


// a=10;
// b=20;
// function num(a,b){
//     if(a>b){
//         return a
//     }
//      else{
//         return b
//     }  
// }
// let g=num(a,b);
// console.log(g);

/*  let u = [];
 let s = 0, sum, avg, v;
v = parseInt(prompt('Number of terms'));
 for (i = 0; i < v; i++) {
     u[i] = parseFloat(prompt('Enter the value'));
     sum = u[i] + s;
     s = sum;
 }
 console.log(u);
 console.log(s);
 avg = sum / v;
console.log(avg); */


// If Clause
// let number=parseInt(prompt('Enter Value'));
// if(number<0){
//     console.log('Give Positive Number');
// }
// else  if(number===0)
//     console.log('Give Positive Number');
// else{
//     if(number%2==0){
//         console.log('Even Number');
//     }
//     else{
//         console.log('Odd Number');
//     }
//     }

// Matrix Addition
// let n;// variable declaration
// let a=[]; b=[] ;s=[];// declaring empty array
// n=parseInt(prompt('Number of terms'));
// for(i=0;i<n;i++){
//     a[i]=parseFloat(prompt('Enter numbers'));// Getting value and storing in array
// }
// // console.log(a); to check whether value stored in array
// for(i=0;i<n;i++){
//     b[i]=parseFloat(prompt('Enter number'));// Getting value and storing in array
// }
// // console.log(b); to check whether value stored in array
// for(i=0;i<n;i++)
// {
//     s[i]=a[i]+b[i];// Expression
// }
// console.log(s);// Printing statement

// To Find a larger number
// let a,b,c;
// a=parseInt(prompt('Enter the number'));
// b=parseInt(prompt('Enter the number'));
// c=parseInt(prompt('Enter the number'));
// if(a>b){
//     if(a>c){
//         console.log(a);
//     }
// }
// else{
//     if(b>c){
//         console.log(b);
//     }
//     else{
//         console.log(c);
//     }
// }

// "SET  FULL YEAR"
// const d =new Date();
// (d.setFullYear(2020));
// console.log(d);

// "SET MONTH"
// const a =new Date();
// (a.setMonth(5));
// console.log(a);

// "GET FULL YEAR"
// const b=new Date();
// b.getFullYear();
// console.log(b);

// FOR IN- for in used in object give only the key(name,lname)
// If FOR OF is used in object it shows an error 
// let a={
//     name:"Arun",
//     lname:"Kumar",
// }
// for(i in a){
//     console.log(i);
// console.log(a);
// }
// Output:name  
 //       lname

// FOR IN used in array,it gives index values of array(0,1,2.....)
// let z=["arun","2","5"]
// for(b in z){
//     console.log(b);
// }
// Output:
// 0
// 1
// 2

// FOR OF-for of used in array gives array values ..

// let m=["arun","2","5"];
// for(x of m){
//     console.log(x);
// }

//"FOR EACH"
//let v =["1","2","3","4","5"];
//v.forEach((i,e)=>{
//	console.log(i,e)
//})
//Output Column one is array values &Column 2 is Array index value
//1  0
//2  1
//3  2
//4  3
//5  4

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
//		case (x<10): console.log("less than 10");
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

//ForEach Method 
// let c=[1,3,4,5,7,99,00,"Arun"];
// c.forEach((i)=>{
// 	console.log(i)
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

// let a=prompt("give a first string"),
// b=prompt("give a second string"),
// res_a,res_b,
// c=["a","e","i","o","u","A","E","I","O","U"];
// function aclick(ax,cx){
//     ab=0,bc=0;
//     for(i=0;i<a.length;i++){
//         for(j=0; j<c.length; j++){
//             if(ax[i]==cx[j]){
//                 ab++;
                
//             }
        
//         }
//     return ab;
// }
// console.log(ab);
// }
// res_a=aclick(a,c);
// res_b=aclick(b,c);
// console.log(res_a);
// console.log(res_b);
// if(res_a>res_b){
//     console.log("a has a more vowels")
// }
// else{
// 	console.log("b has more vowels")
// }		
	


//function cal(a,b){
	//ans=a+b;
	//return ans;
//}
//let e=cal(5,25);
//console.log(e);

//function calcu(x,y){
//if(x>y){
//		console.log("x is greater");
//	}
//	else
//		console.log("Y is Greater");
//}
//let a=parseInt(prompt("Enter the value")),b=parseInt(prompt("Enter the value"));
//calcu(a,b);//function call

//let a=(prompt("Enter the text")),
// let a="durai"

// c=a.replace(durai,diamond);
//c=a.slice(-5,-3);
//console.log(c);


// let a="Arun Kumar Arun Kumar Arun Kumar ";
// console.log(a.match(/run/));

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


// Math Function for Random Colors using hexa
// function random(){ 

// let color=0xFFFFFF;
// let random_num = Math.random() * color;
// random_num = Math.floor(random_num);
// random_num = random_num.toString(16);
// let rand_color=random_num.padStart(6,0);
// return `#${rand_color.toUpperCase()}`
// } 
// console.log(random());
 
//Math Function for Random Colors using rgb
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



// function small_large(grt){
//     t=-1;
//     grt=grt.sort(function(a,b){return a-b})
//     if(grt==[]){
//     console.log(t);
//     }
//     else
//         console.log(grt[0]);

// }

// let a=[10,5,11,20,12],greater_num=[];
// for(i=0;i<a.length;i++){
//     for(j=0;j<a.length;j++){
//         if(a[i]<a[j]){
//             greater_num.push(a[j]);
//         }
        
//     }
//     console.log(greater_num);
//     small_large(greater_num);
//     great=[];
// }

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
/* let date=new Date("09/11/2022"),
 day=date.getDay(date);
 console.log(day);
 if(day=="0"||day=="6"){
 	console.log("Given Date is weekend");
 }
 else{
 	console.log("Given Date is not a weekend");
 }
 */

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
// let date1=new Date(2022,09,14,10,00);
// let date2=new Date(2022,09,14,08,00);
// let total=date1-date2;
// let hour=Math.abs(Math.floor(total/(1000*60*60)));
// document.write(hour," hours");


// 2.  Get the week start date
// fn_day-1 is given to subtract the date (i.e 6-1=5)
// We need to get the output only as Monday.

// let d=21,mon=07,yr=2002;
// date=mon+"/"+d+"/"+yr;
// // console.log(date);
// let gn_date=new Date(date);
// // console.log(gn_date);
// fn_day=gn_date.getDay(gn_date);
// // console.log(fn_day);
// out=gn_date-((24*60*60*1000)*(fn_day-1));
// // console.log(out);
// output=new Date(out);
// console.log(output);


// Changing Color of <h1> by getting the color from from User
// document.getElementById("tri").addEventListener("click",generate);
// function generate(){
// 	let inpt=document.getElementById("col").value,
// 	name=document.getElementById("head");
// 	name.style.color=inpt;
// }

// Generating Random Color Using rgb by clicking the button
// function randomcolor(){
// 	let a=Math.trunc(Math.random()*256),
// 	b=Math.trunc(Math.random()*256),
// 	c=Math.trunc(Math.random()*256),colors;
// 	colors="rgb("+a+","+b+","+c+")";
// 	document.body.style.background=colors;
// 	console.log(colors);
// }
// let back=document.getElementById("but");
// back.addEventListener("click",randomcolor);