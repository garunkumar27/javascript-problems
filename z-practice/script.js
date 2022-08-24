// var a=10;
// let b=8;
// {
//     a=5;
//     b=12;
// }
// console.log(a);
// console.log(b);

// var a;
// let x;
// {
//     a=10;
//     x=15;
// }
// console.log(a);
// console.log(x);



// {
//     var a=25;
//     let x=14;
// }
// console.log(a);
// console.log(x);

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

// let u = [];
// let s = 0, sum, avg, v;
// v = parseInt(prompt('Number of terms'));
// for (i = 0; i < v; i++) {
//     u[i] = parseFloat(prompt('Enter the value'));
//     sum = u[i] + s;
//     s = sum;
// }
// console.log(u);
// console.log(s);
// avg = sum / v;
// console.log(avg);


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

//"SET  FULL YEAR"
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

