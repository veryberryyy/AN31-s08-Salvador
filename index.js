
//if whatever condition you are checking returns true then the the next block of code will run.

console.log("if else statement")

const candies = 100;

if (candies >= 100){
	console.log("You got cavity");
}
else if (candies >= 95){
	console.log("You almost got a cavity")
}
else if (candies >= 75){
	console.log("You should eat less candy")
}
else{
	console.log("You did not get a cavity");
}

console.log("");

//Tenary Operator is the shorthance to represent a condition that returns value that can use to assign a variable


console.log("tenary operator");

const number = 25;

const isEven = (number % 2 == 0) ? "Yes" : "No";

console.log("is " + number + " a even number? " + isEven)

