/*
Binary search is a technique for very rapidly searching a sorted collection by cutting the search space in half at every pass.

Given a sorted array, such as this:
[1, 3, 16, 22, 31, 33, 34]

You can search for the value 31, as follows:

1) Pick the midpoint: 22.
2) The value is higher than 22, so now consider only the right half of the previous array:
[...31, 33, 34]
3) Pick the midpoint: 33
4) The value is lower than 33, so now consider only the left half of the previous array:
[...31...]
5) Pick the midpoint: 31
6) You've hit the value.
7) Return the index of the value.

Notes:
* If you don't find the value, you can return null.
* If at any point you calculate the index of the midpoint and get a fractional number, just round it down ("floor" it).
*/

//Skeleton
function binarySearchv1(arrayOfIntegers, targetInteger) {
	//create variable alias(es)
	let outputIndex = null;
	let startIndex = 0;
	//evaluate index of targetInteger within input array to find midpoint
	let targetIndex = arrayOfIntegers.indexOf(targetInteger);
	if (targetIndex === -1) {
		return outputIndex;
	} else {
		//round midpoint down (floor it) if fractional value
		let midPoint = Math.floor(arrayOfIntegers.length / 2);
		//iterate through arrayOfIntegers beginning with final midpoint calc
		if (targetIndex > midPoint) {
			startIndex = midPoint;
		};
		for (var i = startIndex; i < arrayOfIntegers.length; i++) {
			//set return variable to targetInteger index once found
			if (arrayOfIntegers[i] === targetInteger) {
				outputIndex = i;
				//break
				break;
			};
		};
	};
	//return targetInteger's index value
	return outputIndex;
};

function binarySearch(arrayOfIntegers, targetInteger) {
	//create variable aliases
	let inputArr = [];
	let outputIndex = null;
	//define initial searchable area from cloned inputArray
	inputArr = arrayOfIntegers;
	//define initial min, max, and midpoint(floor for any fractions)
	let max = inputArr.length - 1;
	let min = inputArr.length - inputArr.length;
	let mp = Math.floor((max+min)/2);
	let retVal = inputArr[mp];
	//remove edge cases
	//if targetInteger is outside input array integer range
	if (targetInteger < inputArr[min] || targetInteger > inputArr[max]) {
		//return null
		return outputIndex;
	//if targetInteger equals the min, max, or midpoint
	} else if (targetInteger === inputArr[min]) {
		outputIndex = min;
	} else if (targetInteger === inputArr[max]) {
		outputIndex = max;
	} else if (targetInteger === retVal) {
		outputIndex = mp;
	//set output index to the corresponding value found above, otherwise
	} else {
		//re-define searchable area based on min, max, and mp
		while (min < max) {
			//check if targetInteger is greater vs less than mp
			if (targetInteger > retVal) {
				min = mp + 1;
				mp = Math.floor((max+min)/2);
				retVal = inputArr[mp];
			} else if (targetInteger < retVal) {
				max = mp - 1;
				mp = Math.floor((max+min)/2);
				retVal = inputArr[mp];
			};
		};
	//if while loop hasn't ended without finding the targetInteger
	if (targetInteger === retVal) {
		//set outputIndex to midpoint index value
		outputIndex = mp;
	};
	};
	//return outputIndex
	return outputIndex;
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

let actualBelowRange = binarySearch([1, 3, 16, 22, 31, 33, 34], 0);
let expectedBelowRange = null;
let testBelowRange = 'It correctly returns null when the target integer is below the input array integer range';
console.log(assertEquals(actualBelowRange, expectedBelowRange, testBelowRange));

let actualAboveRange = binarySearch([1, 3, 16, 22, 31, 33, 34], 35);
let expectedAboveRange = null;
let testAboveRange = 'It correctly returns null when the target integer is above the input array integer range';
console.log(assertEquals(actualAboveRange, expectedAboveRange, testAboveRange));

let actualNull = binarySearch([1, 3, 16, 22, 31, 33, 34], 4);
let expectedNull = null;
let testNull = 'It correctly returns null when the target integer is not found in the input array';
console.log(assertEquals(actualNull, expectedNull, testNull));

let actualMin = binarySearch([1, 3, 16, 22, 31, 33, 34], 1);
let expectedMin = 0;
let testMin = 'It correctly returns the min index value when the target integer is equal to the input array minimum value';
console.log(assertEquals(actualMin, expectedMin, testMin));

let actualMax = binarySearch([1, 3, 16, 22, 31, 33, 34], 34);
let expectedMax = 6;
let testMax = 'It correctly returns the max index value when the target integer is equal to the input array maximum value';
console.log(assertEquals(actualMax, expectedMax, testMax));

let actualMid = binarySearch([1, 3, 16, 22, 31, 33, 34], 22);
let expectedMid = 3;
let testMid = 'It correctly returns the floor midpoint index value when the target integer is equal to the input array midpoint value';
console.log(assertEquals(actualMid, expectedMid, testMid));

let actualRightOfMid = binarySearch([1, 3, 16, 22, 31, 33, 34], 31);
let expectedRightOfMid = 4;
let testRightOfMid = 'It correctly returns the target index value when the target integer is greater than the initial midpoint';
console.log(assertEquals(actualRightOfMid, expectedRightOfMid, testRightOfMid));

let actualLeftOfMid = binarySearch([1, 3, 16, 22, 31, 33, 34], 16);
let expectedLeftOfMid = 2;
let testLeftOfMid = 'It correctly returns the target index value when the target integer is less than the initial midpoint';
console.log(assertEquals(actualLeftOfMid, expectedLeftOfMid, testLeftOfMid));





/*
Is one string a rotated version of another?

For example:
String 1: 'hello world'
String 2: 'orldhello w'

Extra hint: (click the drop down to ROT7 to see hint)

If you double the string, you'll be able to find another string inside the doubled string using familiar String methods.

Doubled string: 'hello worldhello world'
Search w/in it: '       orldhello w    '
*/

//Skeleton
function isRotatedV1(stringOfStrings, subString) {
	//create output boolean
	var rotatedStrBoolean;
	//split input strings on space
	let inputStrSplit = stringOfStrings.split(' ');
	//double each split string element and join indexes 2 and 3
	let outputStr = inputStrSplit[0] + ' ' + inputStrSplit[1] + inputStrSplit[0] + ' ' + inputStrSplit[1];
	//search joined string for substring
	if (outputStr.includes(subString) === true) {
		rotatedStrBoolean = true;
	} else {
		rotatedStrBoolean = false;
	};
	return rotatedStrBoolean;
	//return output boolean
};

function isRotated(str1, str2) {
	//create output boolean
	let outputBoolean = false;
	//iterate through str1
	for (var i = 0; i < str1.length; i++) {
		let currentChar = str1[i];
		let counter = str1.length;
		while (str1 !== str2 && counter !== 0) {
			str1Dummy = str1.split("");
			let newChar = str1Dummy.shift();
			str1Dummy.push(newChar);
			str1 = str1Dummy.join("");
			counter -= 1;
			if (str1 === str2) {
				outputBoolean = true;
				break;
			};
		};
	};
	//return output boolean
	return outputBoolean;
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

let actualTrue = isRotated('hello world', 'orldhello w');
let expectedTrue = true;
let testNameTrue = 'It returns true by finding the rotated versions of the input strings';
console.log(assertEqual(actualTrue, expectedTrue, testNameTrue));

let actualFalse = isRotated('helloworld', 'orldhello w');
let expectedFalse = false;
let testNameFalse = 'It returns false when the rotated versions of the input strings cannot be found';
console.log(assertEqual(actualFalse, expectedFalse, testNameFalse));





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
