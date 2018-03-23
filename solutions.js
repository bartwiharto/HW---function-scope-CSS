//Verbal question:
//2. The difference between parameter and argument is: 
//		Parameter is variable in the declaration of function. Argument is the actual value of this variable that gets passed to function.
//3. Within a function, return is will return the result of a function so that it can be use for something else. 
// Console.log will display the result of a function inside the console.

// const checkPalindrome = (checkWord) => {
// 		if (checkWord === checkWord.split('').reverse().join('')) {
// 				return(true);
// 		} else {
// 				return(false);
// 		}
// }

// checkPalindrome("boolean");

//Digit Sum: (Can only do up to 2 digits)

// const sumDigits = (number) => {
// 		let i = number.toString().split('');
// 		let sum = 0;
		
// 		for(let x = 0; x < i.length; x++) {
		
// 		sum += parseInt(i[x]);
// }
// 		return(sum);
// }

// sumDigits(1234);


//Pythagoras:

// const calculateSide = (sideA, sideB) => {
// 	console.log("Side C is: " + Math.sqrt((Math.pow(sideA, 2) + Math.pow(sideB, 2))));

// }

// calculateSide(5,21);

// Sum Array:

const sumArray = [1, 2, 3, 4, 5, 6];
let sum = 0;

for (i = 0; i < sumArray.length; i++) {
	sum += parseInt(sumArray[i]);
}
  console.log(sum);
























