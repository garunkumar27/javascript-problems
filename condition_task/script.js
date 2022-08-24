
// Question
// Ask user to enter age, sex (M or F), marital status (Y or N) and then using following rules print their place of service.
//  if employee is female, then she will work only in urban areas. if employee is a male and age is in between 20 to 40 
// then he may work in anywhere if employee is male and age is in between 40 to 60 then he will work in urban areas only.
//  And any other input of age should print "ERROR".
let age=parseInt(prompt("Enter the AGE"));
let gen=prompt("Enter male or female");
let mrg=prompt("Married Or Unmarried");
if(gen=="female"){
	console.log("She can only work in Urban Areas");
}
else if(gen=="male" ){
	if(age>=20 && age<=40){
		console.log("He can work in anywhere");
	}
	else if(age>40 && age<=60){
		console.log("He can only work in urban Areas");
	}
	else {
		console.log("Error");
	}
}  