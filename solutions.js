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

const sumDigits = (number) => {
		let i = number.toString().split('');
		return (parseInt(i[0]) + parseInt(i[1]));
}

sumDigits(49);


//Pythagoras:

// let sideC;

// const calculateSide = (sideA, sideB) => {

// }







