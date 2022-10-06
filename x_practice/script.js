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
// console.log(check);
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

//Symbol.iterator
let a=["a","b","c","d"];
let b=a[Symbol.iterator]();
console.log(b.next().value);
console.log(b.next().value);
console.log(b.next().value);
console.log(b.next().value);console.log(b.next().value);

//at
let cart = ['apple', 'banana', 'pear'];
console.log(cart.at(-1));

//concat
let array1 = ['a', 'b', 'c'];
let array2 = ['d', 'e', 'f'];
let array3 = array1.concat(array2);
console.log(array3);

//copyWithin
let number=[1,2,3,4,5,6],bcopy;
bcopy=number.copyWithin(0,3,4)
console.log(bcopy);

//entries
let ent=[1,2,3,4,5],rie;
rie=ent.entries(3);
console.log(rie.next().value);

//every
let evry=(value) => value<8;
let ev=[1,2,3,4,5,6],ry;
ry=ev.every(evry);
console.log(ry);

//fill
let fil=[1,2,3,4,5,6],fill;
fill=fil.fill(0,1,5);
console.log(fill);

//filter
let word=["ab","ba","cccc","dddd"];

let result = word.filter(word => word.length > 3);

console.log(result);

//find
let fi=[1,2,3,12,40,20],find;

find = fi.find(element => element >10);
console.log(find);

//find index
let fid=[1,2,3,12,40,20],findi;
findi=fid.findIndex(element => element == 4);
console.log(findi);

//find last
let la=[1,2,3,12,40,20,60],last;
last=la.findLast(element => element >39);
console.log(last);

//last index 
let li=[1,2,10,1,3,1,],lin;
lin=li.lastIndexOf(1);
console.log(lin);

//flat
let fl= [0, 1, 2, [3,[4,8,9],[23,45]]],flat;
flat=fl.flat(2);
console.log(flat);

//flatMap
let arrfl = [1, 2, [3], [4, 5], 6, []],arrflat;
arrflat= arrfl.flatMap(num => num);
console.log(arrflat);

//for each
let fore=[1,2,34],fore2;
fore2=fore.forEach(element=>console.log(element));
//console.log(fore2);

//from
let fr="karthik";
console.log(Array.from(fr))

//includes
let pets = ['cat', 'dog', 'bat'];
console.log(pets.includes('cat'));
console.log(pets.includes('at'));

//index of
let ind=[1,2,3,"q",5];
console.log(ind.indexOf("q"));

//join
let ele=["R","Karthi","gasun"];
console.log(ele.join(""));

//keys
let ke = ["a", "b", "c"],keys;
keys = ke.keys();
console.log(keys);
for (let key of keys) {
  console.log(key);
}

//lastindexof
let lind=[10,10,2,4,10];
console.log(lind.lastIndexOf(10));

//map
let map = [1, 4, 9, 16],map1;
map1 = map.map(x => x * 2);
console.log(map1);


