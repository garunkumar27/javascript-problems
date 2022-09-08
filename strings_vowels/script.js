let a=prompt("Enter the String"),
b=prompt("Enter the String"),
ab=0,ba=0,c=["a","e","i","o","u","A","E","I","O","U"];
for(i=0;i<a.length;i++){
	for(j=0;j<c.length;j++){
		if(a[i]==c[j]){
			ab++;
		}
	}
}
console.log(ab);

for(i=0;i<b.length;i++){
	for(j=0;j<c.length;j++){
		if(b[i]==c[j]){
			ba++;
		}
	}
}
console.log(ba);
if(ab==ba){
	console.log("Both has same number of vowels")
}
else if(ab>ba){
	console.log(a,"Has More Vowels")
}
else{
	console.log(b,"Has More Vowels")
}