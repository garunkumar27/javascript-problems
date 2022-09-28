// fn_day-1 is given to subtract the date (i.e 6-1=5)
// We need to get the output only as Monday.
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

// let str=prompt("Enter the Word"),check;
// check=str.split("");
// check=check.reverse();
// check=check.join("");
// if(str==check){
//     console.log("Given Word is Palindrome");
// }
// else{
//     console.log("Given Word is not a Palindrome");
// }

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

// Seperate odd amd even numbers

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

// let arr="235781",sum=0,res,sums=0,result,
// od=arr.replace(/[^13579]/g,"");
// console.log(od);
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
// docume-+nt.write(sums);
// console.log(sums);

//Write a javascript to get humanized number with the correct suffix such as 1st,2nd,3rd 4th:
/* let g_num=prompt("Enter the number"),
odd=g_num.replace(/[^1]/g,"");
let sp=odd.split("");
odd_2=g_num.replace(/[^3]$/g,"");
odd_3=g_num.replace(/[^59]$/g,"");
even=g_num.replace(/[^02468]$/g,"");
if(g_num==sp){
	st=sp.push("st");
	console.log(st)
} */

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

let rang=200
for(i=7;i<rang;i++){
    if(i%7==0){
    console.log(i);
}
}


