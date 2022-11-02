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
let numb=6;hal="";
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
console.log(hal);