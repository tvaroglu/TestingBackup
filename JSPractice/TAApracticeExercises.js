/*
Given a list of non-negative integers and a target sum, find a pair of numbers that sums to the target sum.

Example:

var pair = findPairForSum([3, 34, 4, 12, 5, 2], 9);
console.log(pair); // --> [4, 5]
*/

//Skeleton
function findPairForSum(arrayOfNums, targetSum) {
	//create result array and shell object
	let resultArr = [];
	let shellObj = {};
	//iterate through input array of nums
	for (var j = 0; j < arrayOfNums.length; j++) {
		let currentNum = arrayOfNums[j];
		//add each num as a key to a shell object
		shellObj[currentNum] = currentNum;
		//add nums array as a value to each num key
		shellObj[currentNum] = arrayOfNums;
	};
	//iterate through the shell object keys
	for (var valueFromShellObj in shellObj) {
		//create variable aliases
		let numKey = valueFromShellObj;
		let numsKeyNumsArray = shellObj[valueFromShellObj];
		//iterate through each key's numsArray value
		for (var l = 0; l < numsKeyNumsArray.length; l++) {
			let currentNumsArrayElem = numsKeyNumsArray[l];
			let result = Number(numKey) + currentNumsArrayElem;
			//if current key + current nums array element = targetSum
			if (result === targetSum) {
				//push current key and current nums array element to result array
				if (resultArr.indexOf(Number(numKey)) === -1 && resultArr.indexOf(currentNumsArrayElem === -1)) {
					resultArr.push(Number(numKey));
					resultArr.push(currentNumsArrayElem);
					//break
					break;
				};
			};
		};
	};
	//if result array < 2 values (no matching sum pair found)
	if (resultArr.length < 2) {
		//push error message into result array
		resultArr.push('No matching pair for target sum found')
	};
	//return result array
	return resultArr;
};


//TestSuite
function assertArraysEqual(actual, expected, testName) {
	let success = `passed [${testName}]: expected "${expected}", and got "${actual}"`;
	let failure = `FAILED [${testName}]: expected "${expected}", but got "${actual}"`;
	let hasSameLengths = true;
	let hasSameValues = true;
	if (expected.length !== actual.length) {
		hasSameLengths = false;
	};
	for (var i = 0; i < expected.length; i++) {
		if (expected[i] !== actual[i]) {
			hasSameValues = false;
			break;
		};
	};
	if (hasSameLengths && hasSameValues) {
		return success;
	} else {
		return failure;
	};
};

let actualResult1 = findPairForSum([3, 34, 4, 12, 5, 2], 9);
let expectedResult1 = [4, 5];
let testName1 = 'It correctly returns pair for sum with no duplicate values in input array';
console.log(assertArraysEqual(actualResult1, expectedResult1, testName1));

let actualResult2 = findPairForSum([4, 34, 4, 12, 5, 2], 8);
let expectedResult2 = [4, 4];
let testName2 = 'It correctly returns pair for sum with duplicate values in input array';
console.log(assertArraysEqual(actualResult2, expectedResult2, testName2));

let actualResult3 = findPairForSum([3, 34, 4, 12, 5, 2], 999);
let expectedResult3 = ['No matching pair for target sum found'];
let testName3 = 'It correctly returns error message if no matching pairs are found';
console.log(assertArraysEqual(actualResult3, expectedResult3, testName3));





/*
You will be given an array that contains two strings. Your job is to create a function that will take those two strings and transpose them, so that the strings go from top to bottom instead of left to right.

e.g. transposeTwoStrings(['Hello','World']);

should return:
H W  
e o  
l r  
l l  
o d
*/

//Skeleton
function transposeTwoStrings(stringArray) {
	// create variable aliases
	let outputStr = '';
	let str1 = stringArray[0];
	let str2 = stringArray[1];
	let strToEval = str2;
	if (str1.length > str2.length) {
		strToEval = str1;
	};
	// iterate over the stringArray element strings
	for (var i = 0; i < strToEval.length; i++) {
		// add each character from the first string with a space and the corresponding character index from the second string with a \n
		let str1CharToAdd = str1[i];
		let str2CharToAdd = str2[i];
		if (str1[i] === undefined) {
			str1CharToAdd = ' ';
		} else if (str2[i] === undefined) {
			str2CharToAdd = ' ';
		};
		outputStr += str1CharToAdd + ' ' + str2CharToAdd + '\n';
	};
	// return output string
	return outputStr;
};


//TestSuite
function assertEqual(actual, expected, testName) {
	let success = `passed [${testName}] : expected "\n${expected}", and got "\n${actual}"`;
	let failure = `FAILED [${testName}] : expected "\n${expected}", but got "\n${actual}"`;
	if (actual === expected) {
		return success;
	} else {
		return failure;
	};
};

let actual1 = transposeTwoStrings(['Hello','World']);
let expected1 = 'H W\ne o\nl r\nl l\no d\n';
let testName1 = 'it correctly transposes both strings of equal length';
console.log(assertEqual(actual1, expected1, testName1));

let actual2 = transposeTwoStrings(['Hell','World']);
let expected2 = 'H W\ne o\nl r\nl l\n  d\n';
let testName2 = 'it correctly transposes both strings with a shorter length for string 1';
console.log(assertEqual(actual2, expected2, testName2));

let actual3 = transposeTwoStrings(['Hello','Worl']);
let expected3 = 'H W\ne o\nl r\nl l\no  \n';
let testName3 = 'it correctly transposes both strings with a shorter length for string 2';
console.log(assertEqual(actual3, expected3, testName3));





/*
Given a string of even and odd numbers, find which is the sole even number or the sole odd number.

The return value should be 1-indexed, not 0-indexed.

Examples :
detectOutlierValue("2 4 7 8 10"); // => 3 - Third number is odd, while the rest of the numbers are even
detectOutlierValue("1 10 1 1");  //=> 2 - Second number is even, while the rest of the numbers are odd
*/

//Skeleton
function detectOutlierValue (stringOfIntegers) {
	// split string of integers on space
	let stringOfIntegersSplit = stringOfIntegers.split(' ');
	// iterate over split string of integers (array)
	// set variable aliases
	let evenCount = 0;
	let indexOfEvenOutlier = -1;
	let oddCount = 0;
	let indexOfOddOutlier = -1;
	for (var i = 0; i < stringOfIntegersSplit.length; i++) {
		let currentInteger = stringOfIntegersSplit[i];
		// use helper function to detect even vs odd integer
		let currentIntegerEval = evenVsOdd(currentInteger);
		// set counters to evaluate even vs odd as outlier to return
		if (currentIntegerEval === true) {
			evenCount += 1;
			indexOfEvenOutlier = i + 1;
		} else if (currentIntegerEval === false) {
			oddCount += 1;
			indexOfOddOutlier = i + 1;
		};
	};
	// return index of outlier value based on even vs odd counts
	if (evenCount > oddCount && oddCount !== 0) {
		return indexOfOddOutlier;
	} else if (evenCount < oddCount && evenCount !== 0) {
		return indexOfEvenOutlier;
	} else {
		return 'No outliers detected, please check your input string!';
	};
};

function evenVsOdd (integer) {
	let inputToCheck = Number(integer/2);
	if (Number.isInteger(inputToCheck) === true) {
		return true;
	} else {
		return false;
	};
};


//TestSuite
function assertEqual(actual, expected, testName) {
	let success = `passed [${testName}]: expected "${expected}", and got "${actual}"`;
	let failure = `FAILED [${testName}]: expected "${expected}", but got "${actual}"`;
	if (actual === expected) {
		return success;
	} else {
		return failure;
	};
};

let actual1 = detectOutlierValue("2 4 7 8 10");
let expected1 = 3;
let testName1 = 'it correctly returns the index of the odd outlier value';
console.log(assertEqual(actual1, expected1, testName1));

let actual2 = detectOutlierValue("1 10 1 1");
let expected2 = 2;
let testName2 = 'it correctly returns the index of the even outlier value';
console.log(assertEqual(actual2, expected2, testName2));

let actual3 = detectOutlierValue("2 2 4 4");
let expected3 = 'No outliers detected, please check your input string!';
let testName3 = 'it correctly returns the error message if no outliers are found';
console.log(assertEqual(actual3, expected3, testName3));





/*
Flip every chunk of n characters in a string, where n is any positive integer greater than 1.

Note that this is intentionally very similar to the previous problem.

Please focus on getting a working solution with the tools you know well.

Practice the interactive/collaborative interview style that's described in the documentation.

Example:
var input = 'a short example';
var output = flipEveryNChars(input, 5);
console.log(output); // --> ohs axe trelpma

Breaking this example down piece by piece:
'a sho' -> 'ohs a'
'rt ex' -> 'xe tr'
'ample' -> 'elpma'

-> 'ohs axe trelpma'
*/

//Skeleton
function flipEveryNChars(inputString, n) {
	//create variable aliases
	let outputStr = '';
	//iterate over the input string
	for (var i = 0; i < inputString.length; i+=n) {
		//split string into N chunks
		let slice = inputString.slice(i,i+n);
		//use helper function to reverse string
		let flipper = reverseString(slice);
		//add reversed string slice to output string
		outputStr += flipper;
	};
	return outputStr;
	// return outputStr;
};

//Helper function
function reverseString(stringToReverse) {
	let reverseString = '';
	for (var j = stringToReverse.length - 1; j >= 0; j--) {
		reverseString += stringToReverse[j];
	};
	return reverseString;
};


//TestSuite
function assertEqual(actual, expected, testName) {
	let success = `passed [${testName}] : expected "${expected}", and got "${actual}"`;
	let failure = `FAILED [${testName}] : expected "${expected}", but got "${actual}"`;
	if (actual === expected) {
		return success;
	} else {
		return failure;
	};
};

let input1 = 'a short example';
let actual1 = flipEveryNChars(input1, 5);
let expected1 = 'ohs axe trelpma';
let testName1 = 'it correctly flips every 5th character chunk from the input string';
console.log(assertEqual(actual1, expected1, testName1));




/*

Flip every pair of characters in a string.


Example:
var input = 'check out how interesting this problem is, it\'s insanely interesting!';
var output = flipPairs(input);
console.log(output); // --> hcce kuo toh wnietertsni ghtsip orlbmei ,si 't sniasenyli tnreseitgn!

*/


//Skeleton
function flipPairs(string) {
	//create outputString variable
	let outputStr = '';
	//iterate over the input string
	for (var i = 0; i < string.length; i++) {
		//create variable aliases
		let character = string[i];
		let character1 = '';
		let character2 = '';
		let pair = '';
		//if character index is an even number, assign it as the 2nd pair value
		if (Number.isInteger(i/2) === true) {
			character2 = character;
			//assign 1st pair value from the odd-numbered character index
			character1 = string[i+1];
		};
		//if beyond the length of the string, leave character1 out of the pair
		if (character1 === undefined) {
			pair = character2;
		} else {
			//pair is equal to both re-assigned characters
			pair = character1 + character2;
		};
		//add each pair to outputString
		outputStr += pair;
		// console.log(outputStr);
	};
	//return outputString variable
	return outputStr;
};


//TestSuite
function assertEquals(actual, expected, testName) {
	let success = `passed [${testName}] : expected "${expected}", and got "${actual}"`;
	let failure = `FAILED [${testName}] : expected "${expected}", but got "${actual}"`;
	if (actual === expected) {
		return success;
	} else {
		return failure;
	};
};

var input1 = 'abcd';
var actual1 = flipPairs(input1);
var expected1 = 'badc';
var test1 = 'it flips pairs for a short word with an even number of characters';

var input2 = 'abcde';
var actual2 = flipPairs(input2);
var expected2 = 'badce';
var test2 = 'it flips pairs for a short word with an odd number of characters';

var input3 = 'check out how interesting this problem is, it\'s insanely interesting!';
var actual3 = flipPairs(input3);
var expected3 = "hcce kuo toh wnietertsni ghtsip orlbmei ,si 't sniasenyli tnreseitgn!";
var test3 = 'it flips pairs for a series of words with mixed characters';

console.log(assertEquals(actual1, expected1, test1));
console.log(assertEquals(actual2, expected2, test2));
console.log(assertEquals(actual3, expected3, test3));
