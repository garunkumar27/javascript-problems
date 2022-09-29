let arr="235781",sum=0,res,sums=0,result,
od=arr.replace(/[^13579]/g,"");
console.log(od);
document.write(od);
let eve=arr.replace(/[^24680]/g,"");
console.log(eve);
document.write(eve);
let spl=od.split("");
for(i=0;i<spl.length;i++){
	spl[i]=parseInt(spl[i]);
	res=sum+spl[i];
	sum=res;
}
document.write(sum);
console.log(sum);
let sp=eve.split("");
for(j=0;j<sp.length;j++){
	sp[j]=parseInt(sp[j]);
	result=sums+sp[j];
	sums=result;
}
document.write(sums);
console.log(sums);