//Write a JavaScript program to add items in an blank array and display the items.
/* document.getElementById("trigger").addEventListener("click",adding);
function reset(inp){
	inp.value="";
}
function adding(){
	let input=document.getElementById("inpt"),
	display=document.getElementById("list"),
	inptEle=input.value;
	//let array=[];
	//array and loop is necessary only when we store value in arrays and later we display it using display button.
	//array.push(inptEle);
	//console.log(array);
	for(i=0;i<array.length;i++){
		let list=document.createElement("li");
		list.innerHTML=array[i];
		display.append(list);
		
	}
	reset(input);
	} */

//Write a JavaScript program which accept a number as input and insert dashes (-) 
//between each two even numbers. For example if you accept 525468 the output should be 0-254-6-8.
/* let number=parseInt(prompt("Enter the Number")),arr=[];
numb=number.toString();
for(i=0;i<numb.length;i++){
	console.log(numb[i-1]);
 if((numb[i-1]%2==0)&&(numb[i]%2==0)){
	//console.log("-",numb[i]);
	arr.push("-",numb[i]);	
}
else
	//console.log(numb[i]);
	arr.push(numb[i])
//console.log(arr);
}
arr=arr.join("");
console.log(arr); */

//Write a program to find duplicate values in a array
/* let array=[1,2,4,5,2,4,1,9,8,6,9],count=0,ab;
for(i=0;i<array.length;i++){
	for(j=i+1;j<array.length;j++){
		if(array[i]==array[j]){
	
			console.log(array[i]);
		}

	}
	
}  
 */
//Duplicates value of array and also how many times it get repeated
/* let values=[1,1,2,5,2,4,5,6,8,7,8,9,1],object={};
values.forEach((numb)=>{
	object[numb]=(object[numb]||0)+1;
})
console.log(object);
 */
//Using Star pattern print Hallow Square
/* let val="",num=5;
for(i=0;i<num;i++){
	for(j=0;j<num;j++){
		if(i==0||i==num-1){
			val+="*";
		}
			else{
				if(j==0||j==num-1){
					val+="*";
					console.log(val)
				}
				else{
					val+=" ";
					console.log(val)
				}
					
			}
			
	}
	val+="\n";
}
console.log(val)

let number=parseInt(prompt("Enter the Value")),str="";
for(i=0;i<number;i++){
	for(j=0;j<number;j++){
		str+=" *";
	}
	str+="<br>"
} */
//console.log(str);
//document.write(str);

//Print Square using Star Pattern
/* let value="",inte=5;
for(i=0;i<inte;i++){
	for(j=0;j<inte;j++){
		if(i==0||i==inte-1){
		value+=" *"
	}
	else{
		if(j==0||j==inte-1){
			value+=" *   ";
			console.log(value);
		}
	else{
		value+=" "
		console.log(value);
	}
	}
	
	}
	value+="\n";
}
console.log(value); */

//Write a program to Print Left bottom triangle of * symbol
/* let numbs=5,st="";
for(i=0;i<numbs;i++){
	for(j=0;j<i;j++){
		st+="*";
	}
	st+="\n";
}
console.log(st); */

//Write a program to print Hollow Triangle Star Pattern
/* let numb=6;hal="";
for(i=1;i<=numb;i++){
	for(j=0;j<i;j++){
		if(i==numb){
			hal+="*";
		}
		else{
			if(j==0||j==i-1){
				hal+="*";
			}	
			else{
				hal+=" ";
				}
	}
	}
	hal+="\n";
	
}
console.log(hal); */

/* for(i=di;i>1;i--){
	for(j=di-i;j>0;j--){
		diam+=" ";
	}
	for(k=2*i-1;k<0;k--){
		diam+="*";
	}
	diam+="\n";
} */

//Diamond
/* let di=5;diam="";
for(i=1;i<di;i++){
	for(j=0;j<di-i;j++){ 		
		diam+=" ";
	}
	for(k=0;k<i*2-1;k++){
		diam+="*";
	}
	diam+="\n";
}
//console.log(diam);
for(i=0;i<di;i++){
for(j=0;j<i;j++){
	diam+=" ";
}
for(k=(di-i)*2-1;k>0;k--){
	diam+="*";
}
diam+="\n";
}
console.log(diam); */

/* let array=[80,15,75,22,-10,-100,2],arr=[];
for(i=0;i<array.length;i++){
	for(j=0;j<array.length;j++){
		if(array[i]<array[j]){
			arr.push(array[j]);
			//console.log(arr);
		}
	}
	number(arr);
	arr=[];
}
function number(arr){
	arr=arr.sort(function(a,b){return a-b});
	if(arr==""){
		console.log("-1");
	}
		else{
		   console.log(arr[0]); 
		}
		}
let newArr=obj.filter((val)=>{return(val.age>=23)});
let newArr1=obj.sort((a,b)=>(a.age - b.age))
console.log(newArr);
console.log(newArr1);	 */


//Printing 9 Divisible number in the ascending order of 'a' number
/*  let range=200,rem,remain,a=[],sum,total,tot,ab=0;
 for(i=0;i<=range;i++){
	  if(i%9==0){
			a.push(i);
	  }
	  // console.log(a);
 }
 for(i=0;i<a.length;i++){
			rem=a[i]%10;
			remain=parseInt(a[i]/10);
			 //console.log(rem,remain);
			if(rem>remain){
				console.log(a[i]);
	
			}
			if(a[i]>100){
				sum=a[i]-100;
				total=sum%10;
				tot=parseInt(sum/10);
				if(tot<total){
					console.log(a[i]);
				}
			}
 } */

//  let rang=1000,res=[],strn;
//  for(i=1;i<=rang;i++){

// 	 if(i%9==0){
// 		 strn=i.toString();
// 		 if(strn.length<=2){
// 			 if(parseInt(strn[0]) < parseInt(strn[1])){
// 				 if((parseInt(strn[0])+parseInt(strn[1]))==9){
// 				 res.push(i);	 
// 			 }
// 			 }else if(i<10){
// 				 res.push(i);
// 			 }


// 		 }
// 		 else {
// 			 if(parseInt(strn[0]) < parseInt(strn[1]) && 
// 			 parseInt(strn[1])< parseInt(strn[2])){
// 				 if(parseInt(strn[0])+parseInt(strn[1])+parseInt(strn[2])==9){
// 					 res.push(i)
// 				 }
// 			 }
// 		 }

// 	 }


//  }
//  console.log(res)

