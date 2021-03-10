function convertChar(character, numChars) {
	let alphabet = 'abcdefghijklmnopqrstuvwxyz';
	let convertedChar = ' ';
	if (character === ' ') {
		return convertedChar;
	};
	let startIndex = alphabet.indexOf(character);
	let endIndex = startIndex - numChars;
	if (endIndex >= 0) {
		convertedChar = alphabet[endIndex];
	} else {
		let delta = 26 - numChars;
		endIndex = startIndex + delta;
		convertedChar = alphabet[endIndex];
	};
	return convertedChar;
};


let charactersToConvert = 'hushdearbabyheartherainhushandsleepbecalmagain';

let charactersToMove = [
	23, 20, 20, 22, 3, 22, 14, 9, 9, 8, 3, 10, 13, 15, 15, 13, 19, 15, 0, 19, 0, 17, 22, 19, 24, 8, 3, 2, 5, 11, 0, 17, 18, 18, 11, 10, 11, 20, 14, 7, 5, 22, 21, 11, 22, 9
];


let outputStr = '';
for (let i = 0; i < charactersToConvert.length; i++) {
	let currentChar = charactersToConvert[i];
	if (currentChar === ' ') {
		continue;
	} else {
		let conversion = convertChar(currentChar, charactersToMove[i]);
		outputStr += conversion;
	};
};

console.log(outputStr);



// Skeleton
function highestScoringWord(string) {
	//create variable aliases
	let outputStr = '';
	let shellObj = {};
	let scoreArr = [];
	let alphabet = 'abcdefghijklmnopqrstuvwxyz';
	//split input string on space
	let cleanInput = string.toString();
	let stringSplit = cleanInput.split(' ');
	//iterate through split input string array
	for (let i = 0; i < stringSplit.length; i++) {
		//iterate through each word to assign score
		let currentWord = stringSplit[i];
		let wordScore = 0;
		for (let j = 0; j < currentWord.length; j++) {
			let currentLetter = currentWord[j].toLowerCase();
			let letterScore = alphabet.indexOf(currentLetter) + 1;
			wordScore += letterScore;
			//add word and score to placeholder object
			shellObj[currentWord] = {
				'word': currentWord,
				'score': wordScore
				};
		};
	scoreArr.push(wordScore);
	};
	let max = Math.max(...scoreArr);
	//iterate through placeholder object for final scoring
	for (let key in shellObj) {
		if (shellObj[key].score === max && max !== 0) {
			//assign highest scoring (or first if tie) to output string
			outputStr = shellObj[key].word.toLowerCase();
			break;
		};
	};
	//return output string
	return outputStr;
};

// TestSuite
function assertEqual(actual, expected, testName) {
	let success = `passed [${testName}]: expected \n "${expected}", and got \n "${actual}"`;
	let failure = `failed [${testName}]: expected \n "${expected}", but got \n "${actual}"`;
	if (actual === expected) {
		console.log(success);
	} else {
		console.log(failure);
	};
};

let actualSingleHighScore = highestScoringWord('Hello World');
let expectedSingleHighScore = 'world';
let testNameSingleHighScore = 'it correctly returns the highest scoring word when no ties for high score';
console.log(assertEqual(actualSingleHighScore, expectedSingleHighScore, testNameSingleHighScore));

let actualTiedHighScore = highestScoringWord('Hello ohell');
let expectedTiedHighScore = 'hello';
let testNameTiedHighScore = 'it correctly returns the first highest scoring word when there are ties for high score';
console.log(assertEqual(actualTiedHighScore, expectedTiedHighScore, testNameTiedHighScore));

let actualNoHighScore = highestScoringWord(' ');
let expectedNoHighScore = '';
let testNameNoHighScore = 'it correctly returns an empty string when there are no words to score';
console.log(assertEqual(actualNoHighScore, expectedNoHighScore, testNameNoHighScore));

let actualNotStringScore = highestScoringWord(123);
let expectedNotStringScore = '';
let testNameNotStringScore = 'it correctly returns an empty string when a non-string is passed as input';
console.log(assertEqual(actualNotStringScore, expectedNotStringScore, testNameNotStringScore));





// Skeleton
function getDomain(url) {
  //create variable aliases
  let outputStr = '';
  let inputStr = url.toString();
  let urlSplitLeft;
  let urlSplitRight;
  //split url left on "http://" or "www." as applicable
  if (inputStr.indexOf('://www.') !== -1) {
	  urlSplitLeft = inputStr.split('://www.');
  } else if (inputStr.indexOf('://') !== -1) {
	  urlSplitLeft = inputStr.split('://');
  } else if (inputStr.indexOf('www.') !== -1) {
	  urlSplitLeft = inputStr.split('www.');
  };
  urlSplitRight = urlSplitLeft[1].split('.');
  outputStr = urlSplitRight[0];
  //return output string
  return outputStr;
};


// TestSuite
function assertEqual(actual, expected, testName) {
	let success = `passed [${testName}]: expected \n "${expected}", and got \n "${actual}"`;
	let failure = `failed [${testName}]: expected \n "${expected}", but got \n "${actual}"`;
	if (actual === expected) {
		console.log(success);
	} else {
		console.log(failure);
	};
};

let testAllDomains = 'It correctly extracts the domain name from the input url';

let actualDomain1 = getDomain('http://github.com/carbonfive/raygun');
let expectedDomain1 = 'github';
console.log(assertEqual(actualDomain1, expectedDomain1, testAllDomains));

let actualDomain2 = getDomain('http://www.zombie-bites.com');
let expectedDomain2 = 'zombie-bites';
console.log(assertEqual(actualDomain2, expectedDomain2, testAllDomains));

let actualDomain3 = getDomain('https://www.facebook.com');
let expectedDomain3 = 'facebook';
console.log(assertEqual(actualDomain3, expectedDomain3, testAllDomains));

let actualDomain4 = getDomain('https://cnet.com');
let expectedDomain4 = 'cnet';
console.log(assertEqual(actualDomain4, expectedDomain4, testAllDomains));

let actualDomain5 = getDomain('www.google.co');
let expectedDomain5 = 'google';
console.log(assertEqual(actualDomain5, expectedDomain5, testAllDomains));

  
  
  
    
  // Skeleton
  function splitPairs(input) {
    //create output array
    let outputArr = [];
    //if empty string
    if (input.length === 0 || input === undefined || input === '') {
  	//return output array
  	return outputArr;
    };
    //check even vs odd length string
    let strLen = '';
    let check = Number.isInteger(input.length / 2);
    if (check) {
  	  strLen = 'even';
    } else {
  	  strLen = 'odd';
    };
    //iterate over input string, step two
    for (let j = 0; j < input.length; j+=2) {
  	  //create variable aliases
  	  let currentChar = input[j];
  	  let nextChar = input[j+1];
  	  if (nextChar === undefined) {
  		  nextChar = '_';
  	  };
  	  //push applicable character pairs to output array
  	  let charPair = currentChar + nextChar;
  	  outputArr.push(charPair);
    };
    //return output array
    return outputArr;
  }
  
  // TestSuite
  function assertArraysEqual(actual, expected, testName) {
  	let success = `passed [${testName}]: expected \n "${expected}", and got \n "${actual}"`;
  	let failure = `failed [${testName}]: expected \n "${expected}", but got \n "${actual}"`;
  	let hasSameLengths = true;
  	let hasSameValues = true;
  	if (actual.length !== expected.length) {
  		hasSameLengths = false;
  	};
  	for (let i = 0; i < actual.length; i++) {
  		if (actual[i] !== expected[i]) {
  			hasSameValues = false;
  			break;
  		};
  	};
  	if (hasSameLengths && hasSameValues) {
  		console.log(success);
  	} else {
  		console.log(failure);
  	};
  };
  
  let actualEvenLenStr = splitPairs('HelloWorld');
  let expectedEvenLenStr = ['He', 'll', 'oW', 'or', 'ld'];
  let testNameEvenLenStr = 'it correctly splits an even length string into character pairs';
  console.log(assertArraysEqual(actualEvenLenStr, expectedEvenLenStr, testNameEvenLenStr));
  
  let actualOddLenStr = splitPairs('Hello World');
  let expectedOddLenStr = ['He', 'll', 'o ', 'Wo', 'rl', 'd_'];
  let testNameOddLenStr = 'it correctly splits an odd length string into character pairs';
  console.log(assertArraysEqual(actualOddLenStr, expectedOddLenStr, testNameOddLenStr));
  
  let actualEmptyStr = splitPairs('');
  let expectedEmptyStr = [];
  let testNameEmptyStr = 'it correctly returns an empty array for an empty string';
  console.log(assertArraysEqual(actualEmptyStr, expectedEmptyStr, testNameEmptyStr));





// Skeleton
function solution(arrayOfIntegers) {
	//create output array
	let outputArr = [];
	//iterate over the integers array
	for (let i = 0; i < arrayOfIntegers.length; i++) {
		//create variable aliases
		let currInt = arrayOfIntegers[i];
		let nextInt = arrayOfIntegers[i+1];
		let nextNextInt = arrayOfIntegers[i+2];
		let prevInt = arrayOfIntegers[i-1];
		let currDelta = nextInt - currInt;
		let nextDelta = nextNextInt - nextInt;
		let prevDelta = currInt - prevInt;
		//if non-consecutive integers (more than 1 in between current and next, and not already within a streak)
		if (currDelta !== 1 && prevDelta !== 1) {
			outputArr.push(currInt.toString());
		//if non-consecutive integers (1 in between current and next, but not within a streak)
		} else if (currDelta === 1 && prevDelta !== 1 && nextDelta !== 1) {
			outputArr.push(currInt.toString());
		} else {
			//we're on a streak
			if (prevDelta !== 1 && currDelta === 1) {
				//assign start of range
				let rangeStart = currInt.toString();
				outputArr.push(rangeStart + '-');
			};
			if (currDelta > 1 || nextInt === undefined) {
				//assign end of range
				let rangeEnd = currInt.toString();
				outputArr.push(rangeEnd);
			};
		};
	};
	//clean output array to remove extra commas
	let outputArrJoined = outputArr.join(',');
	let outputStr = outputArrJoined[0].toString();
	for (let j = 0; j < outputArrJoined.length; j++) {
		let currentChar = outputArrJoined[j];
		let nextChar = outputArrJoined[j+1];
		if (currentChar === '-' && nextChar === ',') {
			continue;
		} else {
			if (nextChar !== undefined) {
				outputStr += nextChar;
			};
		};
	};
	return outputStr;
};

// TestSuite
function assertEquals(actual, expected, testName) {
	let success = `passed [${testName}] : expected \n "${expected}", and got \n "${actual}"`;
	let failure = `failed [${testName}] : expected \n "${expected}", but got \n "${actual}"`;
	if (actual === expected) {
		console.log(success);
	} else {
		console.log(failure);
	};
};

let testAllSolution = 'It correctly returns a formatted integer string based on the provided integer input array';
let actualSolution1 = solution([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]);
let expectedSolution1 = "-6,-3-1,3-5,7-11,14,15,17-20";
let actualSolution2 = solution([-4, -3, -2, -1, 2, 3, 5, 6, 12, 13, 14, 15, 17]);
let expectedSolution2 = "-4--1,2,3,5,6,12-15,17";
console.log(assertEquals(actualSolution1, expectedSolution1, testAllSolution));
console.log(assertEquals(actualSolution2, expectedSolution2, testAllSolution));





// Skeleton
function generateSampleView (arrayOfUserObjects) {
	//create output array
	let outputArr = [];
	//iterate through the user objects array
	for (var j = 0; j < arrayOfUserObjects.length; j++) {
		//create variable aliases for user object
		let user = arrayOfUserObjects[j];
		let userID = user['id'];
		let userEmail = user['email'];
		let userStreet = user['address']['street'];
		let userSuite = user['address']['suite'];
		let userCity = user['address']['city'];
		let userZip = user['address']['zipcode'];
		//check userID even vs odd
		let check = Number.isInteger(userID / 2);
		//if even:
		if (check) {
			//create empty string
			let outputStr = ''
			//add "street, suite, city, zip" to string and output array
			outputStr += `${userStreet}, ${userSuite}, ${userCity}, ${userZip}`;
			outputArr.push(outputStr);
		//otherwise:
		} else {
			//add user email to output array
			outputArr.push(userEmail);
		};
	};
	//return output array
	return outputArr;
};

var users = [
  {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
    }
  },
  {
    "id": 2,
    "name": "Ervin Howell",
    "username": "Antonette",
    "email": "Shanna@melissa.tv",
    "address": {
      "street": "Victor Plains",
      "suite": "Suite 879",
      "city": "Wisokyburgh",
      "zipcode": "90566-7771",
      "geo": {
        "lat": "-43.9509",
        "lng": "-34.4618"
      }
    },
    "phone": "010-692-6593 x09125",
    "website": "anastasia.net",
    "company": {
      "name": "Deckow-Crist",
      "catchPhrase": "Proactive didactic contingency",
      "bs": "synergize scalable supply-chains"
    }
  }
];

// testSuite
function assertArraysEqual (actual, expected, testName) {
	let success = `passed [${testName}] : \n expected "${expected}", \n and got "${actual}"`;
	let failure = `failed [${testName}] : \n expected "${expected}", \n but got "${actual}"`;
	let hasSameLengths = true;
	let hasSameValues = true;
	if (actual.length !== expected.length || actual.length === undefined) {
		hasSameLengths = false;
	};
	for (var i = 0; i < actual.length; i++) {
		if (actual[i] !== expected[i]) {
			hasSameValues = false;
			break;
		};
	};
	if (hasSameLengths && hasSameValues) {
		console.log(success);
	} else {
		console.log(failure);
	};
};

let actualOutput = generateSampleView(users);
let expectedOutput = ["Sincere@april.biz", "Victor Plains, Suite 879, Wisokyburgh, 90566-7771"];
console.log(assertArraysEqual(actualOutput, expectedOutput, 'It correctly renders the sample view based on the provided user data'));





/*
Write a function called 'checkWinner'. This function will take an array with a length of 7. Each element of the array will be either; 'red', 'black', or 0. We can assume that no violation of either of these is possible (i.e. input will always be of length 7, and elements will only be 'red', 'black', or 0).

Your function should accept this array as its only parameter.

If there are 4 'red' elements consecutively in a row, 'checkWinner' should return the string: 'Red Wins!'. Similarly, if there are 4 'black' elements consecutively in a row, 'checkWinner' should return the string: 'Black Wins!'. If neither of these is the case, 'checkWinner' should return 'Draw!'.

Here are some examples of your code running, assuming you have successfully created the described function. Please be sure to name the function "checkWinner".
*/

//Skeleton
function checkWinner(arrayOfGameValues) {
	//create result variable
	let gameResult = '';
	//check length of arrayOfGameValues
	//if !== 7, return error message
	if (arrayOfGameValues.length !== 7) {
		return 'Error, number of turns in game does not match based on the rules of the game, please check your input';
	} else {	
		//otherwise, iterate over arrayOfGameValues
		//create variable aliases for red vs black counters
		let blackCounter = 1;
		let redCounter = 1;
		for (var i = 0; i < arrayOfGameValues.length; i++) {
			let currentTurn = arrayOfGameValues[i];
			//sum consecutive color counters
			if (currentTurn === 'black' && arrayOfGameValues[i+1] === 'black') {
				//set winning color as return value based on counters
				blackCounter += 1;
			} else if (currentTurn === 'red' && arrayOfGameValues[i+1] === 'red') {
				redCounter += 1;
			};
		};
	//return result variable as applicable
	if (blackCounter >= 4) {
		return 'Black Wins!';
	} else if (redCounter >= 4) {
		return 'Red Wins!';
	} else {
		return 'Draw!';
	};
	};
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

function testAll(testArray, expectedValuesArray, testCase) {
	for (var j = 0; j < testArray.length; j++) {
		let currentTest = testArray[j];
		console.log(assertEqual(currentTest, expectedValuesArray[j], testCase));
	};
};


let testNameAllGames = 'It correctly calculates the winner of the provided Connect4 game values based on the provided input array';

let actualGameResults = [
	//blackWinner
	checkWinner(['black', 'red', 'black', 'black', 'black', 'black', 'red']),
	//redWinner
	checkWinner([0,0,0, 'red', 'red', 'red', 'red']),
	//draw
	checkWinner(['red', 'red', 'red', 'black', 'red', 'black', 0])
];

let expectedGameResults = [
	'Black Wins!',
	'Red Wins!',
	'Draw!'
];

console.log(testAll(actualGameResults, expectedGameResults, testNameAllGames));




/*
Please write a function that takes an array of integer altitudes along a hiking trail, as well as two indexes into that array. The two indexes represent the start and end of a segment in the array. We can assume that the array will only contain integers, and that the two indexes will be valid (i.e. they will exist in the input array, and will make sense compared to each other - start is before end).

Your function should return the "sum of the changes for a walk within that segment" (i.e., beginning at the start index and ending at the end index). Each integer in the array represents another height on the trail, so "walking" will mean accumulating each change in height into a "sum of the changes".

Note that increases in height count double.

Here are some examples of your code running, assuming you have successfully created the described function. Please be sure to name the function "sumAltitudeDeltas".
*/

//Skeleton
function sumAltitudeDeltas(arrayOfIntegers, startIndex, endIndex) {
	//slice inputArray based on start and end indexes
	let slicedArr = arrayOfIntegers.slice(startIndex, endIndex + 1);
	//create variable aliases for return value
	let netAltitudeChange = 0;
	//iterate through sliced array
	for (var i = 0; i < slicedArr.length - 1; i++) {
		let currentHeight = slicedArr[i];
		//sum net height changes into output value
		let rawHeightDelta = slicedArr[i+1] - currentHeight;
		if (rawHeightDelta === NaN || rawHeightDelta === 0) {
			netHeightDelta = 0;
		} else if (rawHeightDelta > 0) {
			netHeightDelta = rawHeightDelta * 2;
		} else if (rawHeightDelta < 0) {
			netHeightDelta = rawHeightDelta * -1;
		};
		netAltitudeChange += netHeightDelta;
	};
	//return output value
	return netAltitudeChange;
};


//TestSuite
let testNameAllAltitudes = 'It correctly calculates the sum of altitude changes along the integer array of hiking altitude values';

let actualAltitudeOutputs = [
	sumAltitudeDeltas([1, 2, 3, 1], 0, 3),
	sumAltitudeDeltas([5, 3, 6, 7, 2], 2, 4),
	sumAltitudeDeltas([5, 3, 6, 7, 2], 0, 1),
	sumAltitudeDeltas([5, 3, 6, 7, 2], 0, 4),
	sumAltitudeDeltas([4, 1, 4, 0, 20, 13], 1, 4)
];

let expectedAltitudeValues = [
	6,
	7,
	2,
	15,
	50
];

console.log(testAll(actualAltitudeOutputs, expectedAltitudeValues, testNameAllAltitudes));





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

// //Skeleton
// function binarySearchv1(arrayOfIntegers, targetInteger) {
// 	//create variable alias(es)
// 	let outputIndex = null;
// 	let startIndex = 0;
// 	//evaluate index of targetInteger within input array to find midpoint
// 	let targetIndex = arrayOfIntegers.indexOf(targetInteger);
// 	if (targetIndex === -1) {
// 		return outputIndex;
// 	} else {
// 		//round midpoint down (floor it) if fractional value
// 		let midPoint = Math.floor(arrayOfIntegers.length / 2);
// 		//iterate through arrayOfIntegers beginning with final midpoint calc
// 		if (targetIndex > midPoint) {
// 			startIndex = midPoint;
// 		};
// 		for (var i = startIndex; i < arrayOfIntegers.length; i++) {
// 			//set return variable to targetInteger index once found
// 			if (arrayOfIntegers[i] === targetInteger) {
// 				outputIndex = i;
// 				//break
// 				break;
// 			};
// 		};
// 	};
// 	//return targetInteger's index value
// 	return outputIndex;
// };

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

// //Skeleton
// function isRotatedV1(stringOfStrings, subString) {
// 	//create output boolean
// 	var rotatedStrBoolean;
// 	//split input strings on space
// 	let inputStrSplit = stringOfStrings.split(' ');
// 	//double each split string element and join indexes 2 and 3
// 	let outputStr = inputStrSplit[0] + ' ' + inputStrSplit[1] + inputStrSplit[0] + ' ' + inputStrSplit[1];
// 	//search joined string for substring
// 	if (outputStr.includes(subString) === true) {
// 		rotatedStrBoolean = true;
// 	} else {
// 		rotatedStrBoolean = false;
// 	};
// 	return rotatedStrBoolean;
// 	//return output boolean
// };

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

let actualEqualStrings = transposeTwoStrings(['Hello','World']);
let expectedEqualStrings = 'H W\ne o\nl r\nl l\no d\n';
let testNameEqualStrings = 'it correctly transposes both strings of equal length';
console.log(assertEqual(actualEqualStrings, expectedEqualStrings, testNameEqualStrings));

let actualShorterString1 = transposeTwoStrings(['Hell','World']);
let expectedShorterString1 = 'H W\ne o\nl r\nl l\n  d\n';
let testNameShorterString1 = 'it correctly transposes both strings with a shorter length for string 1';
console.log(assertEqual(actualShorterString1, expectedShorterString1, testNameShorterString1));

let actualShorterString2 = transposeTwoStrings(['Hello','Worl']);
let expectedShorterString2 = 'H W\ne o\nl r\nl l\no  \n';
let testNameShorterString2 = 'it correctly transposes both strings with a shorter length for string 2';
console.log(assertEqual(actualShorterString2, expectedShorterString2, testNameShorterString2));





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

let actualOddOutlier = detectOutlierValue("2 4 7 8 10");
let expectedOddOutlier = 3;
let testNameOddOutlier = 'it correctly returns the index of the odd outlier value';
console.log(assertEqual(actualOddOutlier, expectedOddOutlier, testNameOddOutlier));

let actualEvenOutlier = detectOutlierValue("1 10 1 1");
let expectedEvenOutlier = 2;
let testNameEvenOutlier = 'it correctly returns the index of the even outlier value';
console.log(assertEqual(actualEvenOutlier, expectedEvenOutlier, testNameEvenOutlier));

let actualNoOutlier = detectOutlierValue("2 2 4 4");
let expectedNoOutlier = 'No outliers detected, please check your input string!';
let testNameNoOutlier = 'it correctly returns the error message if no outliers are found';
console.log(assertEqual(actualNoOutlier, expectedNoOutlier, testNameNoOutlier));





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

let actualShortExample = flipEveryNChars('a short example', 5);
let expectedShortExample = 'ohs axe trelpma';
let testNameShortExample = 'it correctly flips every 5th character chunk from the input string';
console.log(assertEqual(actualShortExample, expectedShortExample, testNameShortExample));





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
