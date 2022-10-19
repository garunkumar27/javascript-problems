//Write a JavaScript program to add items in an blank array and display the items.
/* document.getElementById("trigger").addEventListener("click",adding);
function reset(inp){
	inp.value="";
}
function adding(){
    let input=document.getElementById("inpt"),
	display=document.getElementById("list"),
    inptEle=input.value;
    let array=[];
    array.push(inptEle);
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

//Write a program to find duplicate values in a  array
/* let array=[1,2,4,5,2,4,1,8,6,9];
for(i=0;i<array.length;i++){
	for(j=i+1;j<array.length;j++){
		if(array[i]==array[j]){
			console.log(array[i]);
		}
	}
}  */









l/* et array=[1,2,4,5,2,4,8,6,9];
let number=array.filter((a,b)=>{
	array.indexOf(a)!==b
	
})
console.log(number);  */
