//Skeleton
function generateLaceDetails(inventory) {
	// create output array
	let outputArr = [];
	// iterate through inventory array
	for (var i = 0; i < inventory.length; i++) {
		// create variable aliases
		let designerObj = inventory[i];
		let shoesArray = designerObj.shoes;
		// iterate through shoe array to retrieve eligible shoes
		for (var j = 0; j < shoesArray.length; j++) {
			let outputObj = {
				// 'nameWords': '',
				// 'targetWordIndex': ''
			};
			let shoe = shoesArray[j];
			let check = shoeNameHasLace(shoe);
			if (check) {
				// Stringify shoe into string, for splitting purposes
				let shoeString = JSON.stringify(shoe.name);
				// add words to output object's nested array
				outputObj.nameWords = stringToArraySlice(shoeString);
				// add target word index to output object via helper function
				outputObj.targetWordIndex = textSearchArrayElements(outputObj.nameWords);
				outputArr.push(outputObj);
			};
		};
	};
	//return output array
	return outputArr;
};


//helperFunctions
function shoeNameHasLace(shoeObject) {
	let nameHasLaceInIt = false;
	if (shoeObject.name.includes('lace')) {
		nameHasLaceInIt = true;
	};
	return nameHasLaceInIt;
};

function stringToArraySlice(string) {
	//create input array
	let strArr = [];
	//remove leading and trailing quotes from JSONified string
	let charSlice = string.slice(1, -1);
	//split clean string to separate individual words
	let inputSplit = charSlice.split(' ');
	for (var k = 0; k < inputSplit.length; k++) {
		strArr.push(inputSplit[k]);
	};
	//return output array
	return strArr;
};
		
// let testStr = '"tasselled,black,low-top,lace-up"';
// let testSlice = stringToArraySlice(testStr);
// console.log(testSlice);

function textSearchArrayElements(array) {
	let searchIndex = -1;
	for (var l = 0; l < array.length; l++) {
		let currentEval = array[l].toString();
		if (currentEval.includes('lace')) {
			searchIndex = l;
			break;
		};
	};
	return searchIndex;
};

// let testSearchArr = [ 'red', 'leather', 'laced', 'sneakers' ];
// console.log(testSearchArr.indexOf('lace-up'));
// console.log(textSearchArrayElements(testSearchArr));


var currentInventory = [
  {
    name: 'Brunello Cucinelli',
    shoes: [
      {name: 'tasselled black low-top lace-up', price: 1000},
      {name: 'tasselled green low-top lace-up', price: 1100},
      {name: 'plain beige suede moccasin', price: 950},
      {name: 'plain olive suede moccasin', price: 1050}
    ]
  },
  {
    name: 'Gucci',
    shoes: [
      {name: 'red leather laced sneakers', price: 800},
      {name: 'black leather laced sneakers', price: 900}
    ]
  }
];

var actualOutput = generateLaceDetails(currentInventory);
console.log(actualOutput);

var expectedResult = [
  {
    "nameWords": [
      "tasselled",
      "black",
      "low-top",
      "lace-up"
    ],
    "targetWordIndex": 3
  },
  {
    "nameWords": [
      "tasselled",
      "green",
      "low-top",
      "lace-up"
    ],
    "targetWordIndex": 3
  },
  {
    "nameWords": [
      "red",
      "leather",
      "laced",
      "sneakers"
    ],
    "targetWordIndex": 2
  },
  {
    "nameWords": [
      "black",
      "leather",
      "laced",
      "sneakers"
    ],
    "targetWordIndex": 2
  }
];

//testSuite
function assertObjectsEqual(actual, expected, testName) {
	actual = JSON.stringify(actual);
	expected = JSON.stringify(expected);
	let success = `passed [${testName}], \n expected \n "${expected}", \n and got \n "${actual}"`;
	let failure = `failed [${testName}], \n expected \n "${expected}", \n but got \n "${actual}"`;
	if (actual === expected) {
		console.log(success);
	} else {
		console.log(failure);
	};
};

//generateLaceDetails
let testCase = 'inventory output is rendered correctly';
console.log(assertObjectsEqual(actualOutput, expectedResult, testCase));





// //Skeleton
// function listAllBlackShoes(inventory) {
// 	// create string object
// 	let resultString = '';
// 	// iterate over inventory
// 	for (var i = 0; i < inventory.length; i++) {
// 		// create variable aliases
// 		let designerObject = inventory[i];
// 		let designerName = designerObject.name;
// 		let shoes = designerObject.shoes;
// 		// iterate through shoe array
// 		for (var j = 0; j < shoes.length; j++) {
// 			let shoe = shoes[j];
// 			let shoeName = shoe.name;
// 			let designerString = '';
// 			// return shoes with black in the name
// 			if (shoeName.includes('black')) {
// 				// retrieve price of shoe if black
// 				let shoePrice = shoe.price;
// 				designerString = `${designerName}, ${shoeName}, ${shoePrice}`;
// 				resultString += designerString + '\n';
// 			} else {
// 				designerString = '';
// 			};
// 		};
// 	};
// 	// return resultString
// 	return resultString;
// };

// //Create helper functions if needed


// var currentInventory = [
//   {
//     name: 'Brunello Cucinelli',
//     shoes: [
//       {name: 'tasselled black low-top lace-up', price: 1000},
//       {name: 'tasselled green low-top lace-up', price: 1100},
//       {name: 'plain beige suede moccasin', price: 950},
//       {name: 'plain olive suede moccasin', price: 1050}
//     ]
//   },
//   {
//     name: 'Gucci',
//     shoes: [
//       {name: 'red leather laced sneakers', price: 800},
//       {name: 'black leather laced sneakers', price: 900}
//     ]
//   }
// ];

// // var flatList = "First line\nSecond Line\nThird Line\n";
// // console.log(flatList);

// function assertEqual(actual, expected, testName) {
// 	let success = `passed [${testName}], expected "${expected}" and got "${actual}"`;
// 	let failure = `FAILED [${testName}], expected "${expected}", but got "${actual}"`;
// 	if (actual === expected) {
// 		console.log(success);
// 	} else {
// 		console.log(failure);
// 	};
// };

// var testListAllBlackShoes = 'Function correctly returns inventory output of only black shoes for each designer';
// var expectedOutput = "Brunello Cucinelli, tasselled black low-top lace-up, 1000\nGucci, black leather laced sneakers, 900\n";
// console.log(expectedOutput);
// var actualOutput = listAllBlackShoes(currentInventory);
// console.log(actualOutput);
// console.log(assertEqual(actualOutput, expectedOutput, testListAllBlackShoes));





// //Skeleton
// function calculateAveragePricePerDesigner(inventory) {
// 	//iterate over inventory for output
// 	let inventoryOutput = {};
// 	let designerArr = [];
// 	for (var i = 0; i < inventory.length; i++) {
// 		//collect designer name
// 		let designerName = inventory[i].name;
// 		let designerOutput = {};
// 		//iterate through shoes to collect prices
// 		let shoes = inventory[i].shoes;
// 		let total = 0;
// 		for (var j = 0; j < shoes.length; j++) {
// 			//average the shoe prices into a variable
// 			let price = shoes[j].price;
// 			total += price;
// 			designerOutput.name = designerName;
// 			designerOutput.averagePrice = total/shoes.length;
// 		};
// 		//add final designerOutput object to output Array
// 		designerArr.push(designerOutput);
// 	};
// 	inventoryOutput.designers = designerArr;
// 	return inventoryOutput;
// };

// //helper functions
// // function averageNumbers (numbers) {
// // 	let result = 0;
// // 	for (var k = 0; k < numbers.length; k++) {
// // 		result += numbers[k];
// // 	};
// // 	return result/numbers.length;
// // };

// var currentInventory = [
//   {
//     name: 'Brunello Cucinelli',
//     shoes: [
//       {name: 'tasselled black low-top lace-up', price: 1000},
//       {name: 'tasselled green low-top lace-up', price: 1100},
//       {name: 'plain beige suede moccasin', price: 950},
//       {name: 'plain olive suede moccasin', price: 1050}
//     ]
//   },
//   {
//     name: 'Gucci',
//     shoes: [
//       {name: 'red leather laced sneakers', price: 800},
//       {name: 'black leather laced sneakers', price: 900}
//     ]
//   }
// ];


// //Test Cases
// function assertObjectsEqual(actual, expected, testName) {
// 	let success = `passed "${testName}"`;
// 	let failure = `FAILED [${testName}] : expected "${expected}" but got "${actual}"`;
// 	actual = JSON.stringify(actual);
// 	expected = JSON.stringify(expected);
// 	if (actual === expected) {
// 		console.log(success);
// 	} else {
// 		console.log(failure);
// 	};
// }

// let designerAvgCostTest = 'Designer shoe costs are averaged in proper format';
// var expected = {
//   designers: [
//     {
//       name: 'Brunello Cucinelli',
//       averagePrice: 1025
//     },
//     {
//       name: 'Gucci',
//       averagePrice: 850
//     }
//   ]
// };
// let actualTest = calculateAveragePricePerDesigner(currentInventory);
// // console.log(actualTest);
// // console.log(expected);
// let finalTest = assertObjectsEqual(actualTest, expected, designerAvgCostTest);
// console.log(finalTest);





// Skeleton
// function renderInventory(inventory) {
// 	//loop through inventory array for output
// 	let outputArr = [];
// 	for (var i = 0; i < inventory.length; i++) {
// 		let productCategory = inventory[i];
// 		//collect brand name and shoe names from category
// 		for (var shoes in productCategory) {
// 			let designerName = productCategory.name;
// 			let shoeCategory = productCategory.shoes;
// 			//loop through each shoe category for each shoe
// 			for (var j = 0; j < shoeCategory.length; j++) {
// 				let specificShoe = shoeCategory[j];
// 				//collect individual shoe attributes
// 				for (var valuesFromShoe in specificShoe) {
// 					let shoeName = specificShoe.name;
// 					let shoePrice = specificShoe.price;
// 					let fullOutput = designerName + ', ' + shoeName + ', ' + shoePrice;
// 					if (outputArr.includes(fullOutput) === false) {
// 						outputArr.push(fullOutput);
// 					};
// 				};
// 			};
// 		};
// 	};
// 	//use helper function to format each element from output array into line break strings
// 	return parseArrayIntoStringOutput(outputArr);
// }

// //Create helper functions if needed
// function parseArrayIntoStringOutput (array) {
// 	//loop through array to output each element as string item(s)
// 	let outputStr = '';
// 	for (var k = 0; k < array.length; k++) {
// 		let lineItem = array[k];
// 		outputStr += `${lineItem}\n`;
// 	};
// 	return outputStr;
// };


// //TestCases
// function assertEqual(actual, expected, testName) {
// 	let success = `passed "${testName}`;
// 	let failure = `FAILED [${testName}] : expected "${expected}", but got "${actual}"`;
// 	if (actual === expected) {
// 		console.log(success);
// 	} else {
// 		console.log(failure);
// 	};
// };

// //helper Function - parse array into output string
// let testArr = ['First line', 'Second Line', 'Third Line'];
// let actual1 = parseArrayIntoStringOutput(testArr);
// let expected1 = "First line\nSecond Line\nThird Line\n";
// console.log(assertEqual(actual1, expected1, "output string is correctly parsed into individual lines"));
// //inventory Flatlist function
// var currentInventory = [
//   {
//     name: 'Brunello Cucinelli',
//     shoes: [
//       {name: 'tasselled black low-top lace-up', price: 1000},
//       {name: 'tasselled green low-top lace-up', price: 1100},
//       {name: 'plain beige suede moccasin', price: 950},
//       {name: 'plain olive suede moccasin', price: 1050}
//     ]
//   },
//   {
//     name: 'Gucci',
//     shoes: [
//       {name: 'red leather laced sneakers', price: 800},
//       {name: 'black leather laced sneakers', price: 900}
//     ]
//   }
// ];
// let actual2 = renderInventory(currentInventory);
// let expected2 = "Brunello Cucinelli, tasselled black low-top lace-up, 1000\nBrunello Cucinelli, tasselled green low-top lace-up, 1100\nBrunello Cucinelli, plain beige suede moccasin, 950\nBrunello Cucinelli, plain olive suede moccasin, 1050\nGucci, red leather laced sneakers, 800\nGucci, black leather laced sneakers, 900\n";
// console.log(assertEqual(actual2, expected2, "inventory is output into individual line-broken strings"));




// // Skeleton

// // FUNCTION DEFINITION(S)
// function findLongestPalindrome(sentence) {
//   // split sentence into words
//   let words = sentence.toString().split(" ");
//   // iterate words and collect the palindromes
//   let palinArr = [];
//   for (var j = 0; j < words.length; j++) {
// 	  let word = words[j];
// 	  let check = isPalindrome(word);
// 	  if (check === true) {
// 		  palinArr.push(word);
// 	  };
//   };
//   // sort the list of palindromes by word length
//   palinArr.sort(sortAscendingByLength);
//   // return the largest item in the sorted list
//   return palinArr.pop();
// };


// function reverseString(string) {
// 	let reverseArr = [];
// 	let downCase = string.toString().toLowerCase();
// 	for (var i = 0; i < downCase.length; i++) {
// 		reverseArr.push(downCase[i]);
// 	};
// 	let reverse = reverseArr.reverse().toString();
// 	let regex = /,/gi;
// 	let output = reverse.replace(regex,'');
// 	return output;
// };

// function isPalindrome(word) {
// 	let isPalin = '';
// 	let revStr = reverseString(word);
// 	if (revStr === word.toLowerCase()) {
// 		isPalin = true;
// 	} else {
// 		isPalin = false;
// 	};
// 	return isPalin;
// };

// function sortAscendingByLength(a, b) {
//   if (a.length > b.length) {
//     return 1;
//   } else if (a.length < b.length) {
//     return -1;
//   }
//   return 0;
// }

// // ASSERTION FUNCTION(S) TO BE USED
// function assertEqual(actual, expected, testName) {
// 	let success = `passed "${testName}""`;
// 	let failure = `FAILED [${testName}] : expected "${expected}", but got "${actual}"`;
// 	if (actual === expected) {
// 		console.log(success);
// 	} else {
// 		console.log(failure);
// 	};
// };

// // TESTS CASES
// //reverseStringTrue
// let actual1 = reverseString('YO');
// let expected1True = 'oy';
// let testCase1 = 'string is correctly reversed';
// console.log(assertEqual(actual1, expected1True, testCase1));
// //reverseStringFalse
// let expected1False = 'yo';
// console.log(assertEqual(actual1, expected1False, testCase1));
// //isPalindromeTrue
// let actual2True = isPalindrome('kaYak');
// let expected2True = true
// let testCase2 = 'string is a palindrome';
// console.log(assertEqual(actual2True, expected2True, testCase2));
// //isPalindromeFalse
// let actual2False = isPalindrome('racecars');
// let expected2False = true;
// console.log(assertEqual(actual2False, expected2False, testCase2));
// //findLongestPalindrome - two equal length palindromes
// let actual3 = findLongestPalindrome('Bob was not any sort of dud');
// let expected3 = 'dud';
// let testCase3 = 'longest palindrome correctly detected';
// console.log(assertEqual(actual3, expected3, testCase3));
// //findLongestPalindrome - one palindrome
// let actual4 = findLongestPalindrome('yay racecars');
// let expected4 = 'yay';
// console.log(assertEqual(actual4, expected4, testCase3));
// //findLongestPalindrome - no palindromes
// let actual5 = findLongestPalindrome('hi there');
// let expected5 = undefined;
// let testCase4 = 'no palindromes detected'
// console.log(assertEqual(actual5, expected5, testCase4));



// // Skeleton
// // FUNCTION DEFINITION(S)
// function PhoneNumberFormatter(numbers) {
//   this.numbers = numbers;
// }

// PhoneNumberFormatter.prototype.render = function() {
//   var areaCode = this.parenthesize(this.getAreaCode());
//   var string = `${areaCode} ${this.getExchangeCode()}-${this.getLineNumber()}`;
//   return string;
// };

// PhoneNumberFormatter.prototype.getAreaCode = function() {
//   // let areaCode = this.slice(0,3);
//   return this.areaCode = this.slice(0,3);
//   // return this.areaCode = this.parenthesize(areaCode);
// };

// PhoneNumberFormatter.prototype.getExchangeCode = function() {
//   return this.exchangeCode = this.slice(3,6);
// };

// PhoneNumberFormatter.prototype.getLineNumber = function() {
//   return this.lineNumber = this.slice(6,10);
// };

// PhoneNumberFormatter.prototype.parenthesize = function(string) {
//   return '(' + string + ')';
// };

// PhoneNumberFormatter.prototype.slice = function(start, end) {
//   return this.numbers.slice(start, end).join('');
// };


// // ASSERTION FUNCTION(S) TO BE USED
// function assertEqual(actual, expected, testName) {
//   let success = "passed";
//   let failure = `FAILED [${testName}] : expected "${expected}", but got "${actual}"`;
//   if (actual === expected) {
//     console.log(success);
//   } else {
//     console.log(failure);
//   };
// };


// // TESTS CASES
// let nums = [6, 5, 0, 8, 3, 5, 9, 1, 7, 2];
// let formatter = new PhoneNumberFormatter(nums);
// let actual1 = formatter.render();
// let expected1 = '(650) 835-9172';
// console.log(assertEqual(actual1, expected1, "phone number is formatted correctly"));



// // Skeleton
// // FUNCTION DEFINITION(S)
// function findMaxRepeatCountInWord(word) {
//   // Break up individual word into individual letters.
//   let downCase = word.toLowerCase();
//   let input = downCase.split("");
//   if (input.length === 0) {
//     return 0;
//   } else {
//   // Count the instances of each letter
//   let counterObj = {};
//   let counter = 1;
//   for (var i = 0; i < input.length; i++) {
//     let char = input[i];
//     if (char in counterObj) {
//       counterObj[char] += counter;
//     } else {
//       counterObj[char] = counter;
//     };
//   };
//   // Iterate all the counts and find the highest
//   let counterArr = [];
//   for (var valueFromCounterObj in counterObj) {
//     let count = counterObj[valueFromCounterObj];
//     counterArr.push(count);
//   };
//   // Return this word's max repeat count
//   let max = Math.max(...counterArr);
//   return max;
//   };
// };

// function findFirstWordWithMostRepeatedChars(text) {
//   var maxRepeatCountOverall = 0;
//   var wordWithMaxRepeatCount = '';
//   // Break up input text into words (space-delimited).
//   // For each word...
//   let checkInput = text.split(" ");
//   let outputObj = {};
//   let outputArr = [];
//   for (var j = 0; j < checkInput.length; j++) {
//     let checkWord = checkInput[j];
//     var repeatCountForWord = findMaxRepeatCountInWord(checkWord);
//     outputObj[checkWord] = repeatCountForWord;
//     outputArr.push(repeatCountForWord);
//   };
//   let maxRepeatCount = Math.max(...outputArr);
//   for (var valueFromOutputObj in outputObj) {
//     // If that max repeat count is higher than the overall max repeat count, then
//     if (outputObj[valueFromOutputObj] === maxRepeatCount) {
//       // update maxRepeatCountOverall
//       maxRepeatCountOverall = maxRepeatCount;
//       // update wordWithMaxRepeatCount
//       wordWithMaxRepeatCount = valueFromOutputObj;
//       break;
//     };
//   }; 
//   // return wordWithMaxRepeatCount;
//   return wordWithMaxRepeatCount;
// };

// // ASSERTION FUNCTION(S) TO BE USED
// function assertEqual(actual, expected, testName) {
//   let success = 'passed';
//   let failure = `FAILED [${testName}] : expected "${expected}", but got "${actual}".`;
//   if (actual === expected) {
//     console.log(success);
//   } else {
//     console.log(failure);
//   };
// };


// // TESTS CASES
// // findMaxRepeatCountInWord
// // expectedTrue
// let actualTrue1 = findMaxRepeatCountInWord('hello');
// let expectedTrue1 = 2;
// let testCase1 = 'max repeat count in word is correct';
// console.log(assertEqual(actualTrue1, expectedTrue1, testCase1));
// // expectedFalse
// let expectedFalse1 = 3;
// console.log(assertEqual(actualTrue1, expectedFalse1, testCase1));
// // findWordWithMaxRepeatCount
// // single word with max repeat count
// let actualTrue2 = findFirstWordWithMostRepeatedChars('hi  there');
// let expectedTrue2 = 'there';
// console.log(assertEqual(actualTrue2, expectedTrue2, 'determined the first word with the longest repeat count'));
// // multiple words with same max repeat count
// let actualTrue3 = findFirstWordWithMostRepeatedChars('hello there friend');
// let expectedTrue3 = 'hello';
// console.log(assertEqual(actualTrue3, expectedTrue3, 'determined the first word with the longest repeat count'));



// // Skeleton

// // FUNCTION DEFINITION(S)
// function isIsogram(text) {
//   let isIso = true;
//   // add each char to a set
//   // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
//   let output = new Set();
//   // downcase str
//   let input = text.toLowerCase();
//   for (var i = 0; i<input.length; i++) {
//     output.add(input[i]);
//   };
//   // note: a set drops dup values
//   // thus, to see if all the chars were unique,
//   // check length of text and the size of the set
//   if (input.length != output.size) {
//     isIso = false;
//   };
//   return isIso;
// };

// // ASSERTION FUNCTION(S) TO BE USED
// function assertEqual(actual, expected, testName) {
//   // convert Set objects to an Array object, with Array.from
//   let actualArr = Array.from(actual);
//   let expectedArr = Array.from(expected);
//   // actual and expected have same length
//   let hasSameLength = true;
//   let hasSameValues = true;
//   if (actual.length === expected.length) {
//     // actual and expected have same values
//     for (var i = 0; i < actual.length; i++) {
//       if (actual[i] != expected[i]) {
//         break;
//         hasSameValues = false;
//       };
//     };
//   } else {
//     hasSameValues = false;
//   };
//   if (hasSameLength && hasSameValues) {
//     console.log('passed');
//   } else {
//     console.log(`failed [${testName}] : expected "${expected}", but got "${actual}"`);
//   };
// };

// // TESTS CASES
// // isIsogram string true
// let strTrue = 'abcd';
// console.log(isIsogram(strTrue));
// // isIsogram string false
// let strFalse = 'abcda';
// console.log(isIsogram(strFalse));
// // isIsogram string empty
// let strEmpty = '';
// console.log(isIsogram(strEmpty));

// // AssertEqual
// // string true
// let strActualTrue = 'ABCD';
// let strExpectedTrue = 'abcd';
// console.log(assertEqual(strActualTrue, strExpectedTrue, 'str is an Isogram'));
// // string false
// let strActualFalse = 'abcda';
// console.log(assertEqual(strActualFalse, strExpectedTrue, 'str is an Isogram'));
// // string empty
// let strEmptyActualTrue = '';
// let strEmptyExpectedTrue = '';
// console.log(assertEqual(strEmptyActualTrue, strEmptyExpectedTrue, 'empty str is an Isogram'));



// // FUNCTION DEFINITION(S)

// // USE THIS FUNCTION TO GENERATE A RANDOM NUMBER
// function getRandomIntInclusive(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// };

// function decorateClassListWithAges(classList) {
//   // creates an object for each string in the input array, with an age of 10 or 11
//   let outputArr = [];
//   // iterate over the array
//   for (var i = 0; i < classList.length; i++) {
// 	// create outputObj for each array value
// 	let outputObj = {};
// 	// assign random number to each array value using helper
// 	let age = getRandomIntInclusive(10, 11);
// 	let studentName = classList[i];
// 	// assign array 'name' value to outputObj name value
// 	outputObj['name'] = studentName;
// 	// assign array 'age' value to outputObj age value
// 	outputObj['age'] = age;
// 	// add each object into output array
// 	outputArr.push(outputObj);
//   };
//   // returns an array of these objects
//   return outputArr;
// };

// // ASSERTION FUNCTION(S) TO BE USED
// function assertArraysEqual(actual, expected, testName) {
// 	let hasSameLength = true;
// 	let hasCorrectValues = true;
// 	if (actual.length === expected.length) {
// 		for (var i = 0; i < actual.length; i++) {
// 			if (actual[i]['name'] !== expected[i]['name']) {
// 				hasCorrectValues = false;
// 				console.log('failed at index: ' + i);
// 				break;
// 			} else if (actual[i]['age'] > 11 || actual[i]['age'] < 10) {
// 				hasCorrectValues = false;
// 				console.log('failed at index: ' + i);
// 				break;
// 			};
// 		};
// 	};
// 	if (hasSameLength && hasCorrectValues) {
// 		console.log('passed');
// 		console.log(actual);
// 	};
// };

// // TESTS CASES
// // decorateClassList
// var input = ["Joe", "Jack", "John", "Fred", "Frank", "Barry", "Larry", "Mary",
// "Harry", "Farrell", "Susan", "Monica", "Keira", "Caroline", "Harriet", "Erica",
// "Luann", "Cheryl", "Beth", "Rupa", "Linda", "Allison", "Nancy", "Dora"];
// var expectedOutput = [
//   { name: 'Joe', age: 10 },
//   { name: 'Jack', age: 10 },
//   { name: 'John', age: 11 },
//   { name: 'Fred', age: 11 },
//   { name: 'Frank', age: 11 },
//   { name: 'Barry', age: 10 },
//   { name: 'Larry', age: 10 },
//   { name: 'Mary', age: 11 },
//   { name: 'Harry', age: 10 },
//   { name: 'Farrell', age: 10 },
//   { name: 'Susan', age: 11 },
//   { name: 'Monica', age: 10 },
//   { name: 'Keira', age: 11 },
//   { name: 'Caroline', age: 11 },
//   { name: 'Harriet', age: 10 },
//   { name: 'Erica', age: 11 },
//   { name: 'Luann', age: 10 },
//   { name: 'Cheryl', age: 11 },
//   { name: 'Beth', age: 11 },
//   { name: 'Rupa', age: 10 },
//   { name: 'Linda', age: 11 },
//   { name: 'Allison', age: 10 },
//   { name: 'Nancy', age: 10 },
//   { name: 'Dora', age: 10 }
// ];

// console.log(assertArraysEqual(decorateClassListWithAges(input),expectedOutput,'function correctly assigns each array value to an object, with a random age between 10 and 11'));



// // Skeleton

// // FUNCTION DEFINITION(S)
// function average(numbers) {
//   let denom = numbers.length;
//   let output = sum(numbers) / denom;
//   return output;
// };

// function sum(numbers) {
//   let result = 0;
//   if (Array.isArray(numbers) === false) {
// 	  return result;
//   } else {
// 	  for (var i = 0; i < numbers.length; i++) {
// 		  result += numbers[i];
// 	  };
//   };
//   return result;
// };

// // ASSERTION FUNCTION(S) TO BE USED
// function assertEqual(actual, expected, testName) {
// 	if (actual === expected) {
// 		console.log('passed');
// 	} else {
// 		console.log(`failed [${testName} : expected "${expected}" but got "${actual}"`);
// 	};
// };

// // TESTS CASES
// // sum function
// let test1 = [1, 2, 3];
// let result1 = 6;
// console.log(assertEqual(sum(test1), result1, 'function correctly sums an array'));
// // average function
// let test2 = [1, 2, 3];
// let result2 = 2;
// console.log(assertEqual(average(test2), result2, 'function correctly averages an array'));



// // write both functions from scratch in function declaration style (all functions in this placement challenge are written in function declaration style)

// var users = [
//   {
//     "id": 1,
//     "name": "Leanne Graham",
//     "username": "Bret",
//     "email": "Sincere@april.biz",
//     "address": {
//       "street": "Kulas Light",
//       "suite": "Apt. 556",
//       "city": "Gwenborough",
//       "zipcode": "92998-3874",
//       "geo": {
//         "lat": "-37.3159",
//         "lng": "81.1496"
//       }
//     },
//     "phone": "1-770-736-8031 x56442",
//     "website": "hildegard.org",
//     "company": {
//       "name": "Romaguera-Crona",
//       "catchPhrase": "Multi-layered client-server neural-net",
//       "bs": "harness real-time e-markets"
//     }
//   },
//   {
//     "id": 2,
//     "name": "Ervin Howell",
//     "username": "Antonette",
//     "email": "Shanna@melissa.tv",
//     "address": {
//       "street": "Victor Plains",
//       "suite": "Suite 879",
//       "city": "Wisokyburgh",
//       "zipcode": "90566-7771",
//       "geo": {
//         "lat": "-43.9509",
//         "lng": "-34.4618"
//       }
//     },
//     "phone": "010-692-6593 x09125",
//     "website": "anastasia.net",
//     "company": {
//       "name": "Deckow-Crist",
//       "catchPhrase": "Proactive didactic contingency",
//       "bs": "synergize scalable supply-chains"
//     }
//   }
// ];

// // generateSampleView
// function generateSampleView(array) {
// 	let outputArr = [];
// 	for (var i = 0; i < array.length; i++) {
// 		let id = array[i]['id'];
// 		let checkEven = Number.isInteger(id/2);
// 		if (checkEven === true) {
// 			let userStreet = array[i]['address']['street'];
// 			let userSuite = array[i]['address']['suite'];
// 			let userCity = array[i]['address']['city'];
// 			let userZipCode = array[i]['address']['zipcode'];
// 			let userFullAddress = `${userStreet}, ${userSuite}, ${userCity}, ${userZipCode}`
// 			outputArr.push(userFullAddress);
// 		} else {
// 			let userEmail = array[i]['email'];
// 			outputArr.push(userEmail);
// 		};
// 	};
// 	return outputArr;
// };

// // assertArraysEqual
// function assertArraysEqual(actual, expected, testName) {
// 	let hasSameLength = true;
// 	let hasSameValues = true;
// 	let success = 'passed';
// 	let failure = `failed [${testName}] : expected "${expected}" but got "${actual}"`;
// 	if (actual.length === expected.length) {
// 		for (var i = 0; i<actual.length; i++) {
// 			if (actual[i] !== expected[i]) {
// 				hasSameValues = false;
// 				break;
// 			};
// 		};
// 	} else {
// 		hasSameValues = false;
// 	} if (hasSameLength && hasSameValues) {
// 		console.log(success);
// 	} else {
// 		console.log(failure);
// 	};
// };

// // TEST CASES
// // generateSampleView
// let expectedOutput = ["Sincere@april.biz", "Victor Plains, Suite 879, Wisokyburgh, 90566-7771"];
// let input = generateSampleView(users);
// console.log(assertArraysEqual(input, expectedOutput, 'generateSampleView provides the correct output'));



// // FUNCTION DEFINITION(S)
// function addOne(val) {
//   return val + 1;
// }

// // ASSERTION FUNCTION(S) TO BE USED
// function assert(condition, testName) {
//   if (condition) {
//     console.log('passed');
//   } else {
//     console.log('FAILED [' + testName + ']');
//   }
// }

// // TESTS FOR isOne
// var result1 = addOne(1);
// assert(result1 === 2, 'should return result of a positive input number added to 1');

// var result2 = addOne(-2);
// assert(result2 === 1, 'should return result of a negative input number added to 1');


// // FUNCTION DEFINITIONS)
// function addFullNameProp(obj) {
//   var firstName = obj.firstName;
//   var lastName = obj.lastName;

//   if (firstName && lastName) {
//     obj['fullName'] = firstName + ' ' + lastName;
//   }

//   return obj;
// }

// // ASSERTION FUNCTION(S) TO BE USED
// function assertObjectsEqual(actual, expected, testCase) {
// 	let success = 'passed';
// 	let failure = `FAILED [${testCase}] : expected "${expected}" but got "${actual}"`;
// 	let objectsAreEqual = true;
// 	for (var keyFromObj in expected) {
// 		if (expected[keyFromObj] !== actual[keyFromObj]) {
// 			objectsAreEqual = false;
// 			break;
// 		};
// 	};
// 	if (objectsAreEqual) {
// 		console.log(success);
// 	} else {
// 		console.log(failure);
// 	};
// };

// // TESTS CASES
// //addFullNameProp Function
// let expectedObj = {firstName: 'Taylor', lastName: 'Varoglu', hair: 'brown', fullName: 'Taylor Varoglu'};
// let testObj = {firstName: 'Taylor', lastName: 'Varoglu', hair: 'brown'};
// let test = addFullNameProp(testObj);
// console.log(test);
// console.log(assertObjectsEqual(test, expectedObj, "Full name property is added to object"));


// // FUNCTION DEFINITION(S)
// function map(array, callbackFunction) {
//   var newArray = [];

//   for (var i = 0; i < array.length; i++) {
//     newArray.push(callbackFunction(array[i]));
//   }

//   return newArray;
// }

// function cubeAll(numbers) {
//   return map(numbers, function(n) {
//     return n * n * n;
//   });
// };

// function add1(numbers) {
//   return map(numbers, function(n) {
//     return n + 1;
//   });
// };


// // ASSERTION FUNCTION(S) TO BE USED
// function assertArraysEqual (actual, expected, testCase) {
// 	let success = 'passed';
// 	let failure = `FAILED [${testCase}] : expected "${expected}" but got "${actual}"`;
// 	let hasSameValues = true;
// 	let hasSameLength = true;
// 	if (actual.length === expected.length) {
// 		for (var i = 0; i < actual.length; i++) {
// 			if (actual[i] !== expected[i]) {
// 				hasSameValues = false;
// 				break;
// 			};
// 		};
// 	} else {
// 		hasSameLength = false;
// 	};
// 	if (hasSameValues && hasSameLength) {
// 		console.log(success);
// 	} else {
// 		console.log(failure);
// 	};
// };
		


// // TESTS CASES
// // CubeAll
// let test1 = [1, 3, 4];
// let result1 = [1, 27, 64];
// console.log(assertArraysEqual(cubeAll(test1), result1, "all numbers are correctly cubed"));
// // add1
// let test2 = [2, 4, 5];
// let result2 = [3, 5, 6];
// console.log(assertArraysEqual(add1(test2), result2, "all numbers have 1 added"));



// // Note: This is a simple, albeit temporarily incorrect implementation of the standard Array method "every()":
// // https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/every

// // FUNCTION DEFINITION(S)
// function every(array, callbackFunction) {
//   var doesEveryElementMatch = true;

//   for (var i = 0; i < array.length; i++) {
//     doesEveryElementMatch = callbackFunction(array[i]);
// 	if (doesEveryElementMatch === false) {
// 		break;
// 	};
//   };
//   return doesEveryElementMatch;
// }

// // ASSERTION FUNCTION(S) TO BE USED
// function assertEqual(actual, expected, testCase) {
//     if (actual === expected) {
//         console.log('passed');
//     } else {
//         console.log(`FAILED [${testCase}] : expected "${expected}" but got "${actual}"`);
//     };
// };

// // TESTS CASES
// function isBelowThreshold(value) {
// 	return value < 10;
// };
// // All array values are less than 10
// // Array true
// let arrayTrue = [1, 2, 3, 4, 5, 6];
// console.log(assertEqual(every(arrayTrue, isBelowThreshold),true,"all array values are less than 10"));
// // Array false
// let arrayFalse = [1, 13, 9, 8, 7, 6];
// console.log(assertEqual(every(arrayFalse, isBelowThreshold),false,"all array values are less than 10"));


// // FUNCTION DEFINITIONS
// function square(n) {
//   return n * n;
// }

// // ASSERTION FUNCTION(S) TO BE USED
// function assertEqual(actual, expected, testCase) {
//     if (actual === expected) {
//         console.log(`passed [${testCase}] : expected "${expected}" and got "${actual}"`);
//     } else {
//         console.log(`FAILED [${testCase}] : expected "${expected}" but got "${actual}"`);
//     };
// };

// // TESTS CASES
// // Positive integer
// let result1 = assertEqual(square(2), 4, 'returns the square of a positive integer');
// // Negative integer
// let result2 = assertEqual(square(-3), 9, 'returns the square of a negative integer');
// // Zero
// let result3 = assertEqual(square(0), 0, 'returns zero');
// // Decimal
// let result4 = assertEqual(square(0.5), 0.25, 'returns the square of a decimal');


// function assertWithinRange(low, high, actual, testName) {
//   let success = 'passed';
//   let failure = `FAIL [${testName}] "${actual}" not within range ${low} to ${high}`;
//   if (actual >= low && actual <= high) {
// 	  console.log(success);
//   } else {
// 	  console.log(failure);
//   };
// };

// var blackjackScore = 21;
// var testNameOne = 'blackjack score should be between 4 and 21';
// console.log(assertWithinRange(4, 21, blackjackScore, testNameOne));

// var dieRoll = 1;
// var testNameTwo = 'die roll should be between 1 and 6';
// console.log(assertWithinRange(1, 6, dieRoll, testNameTwo));

// var price = 101;
// var testNameThree = 'price should be between 1 and 100';
// console.log(assertWithinRange(1, 100, price, testNameThree));


// function assertObjectsEqual(person, expected, testName) {
// 	let actual = JSON.stringify(person);
// 	let output = JSON.stringify(expected);
// 	let success = `passed [${testName}]`;
// 	let failure = `FAILED [${testName}] Expected ${output}, but got ${actual}`;
// 	if (actual === output) {
// 		console.log(success);
// 	} else {
// 		console.log(failure);
// 	};
// };

// function updateObject(object, key, value) {
// 	if (key === 'firstName') {
// 		object[key] = value;
// 		return object;
// 	} else {
// 		return object;
// 	};
// };

// // var person = {
// //   firstName: 'Cassidy',
// //   lastName: 'Jacobs'
// // };
// // updateObject(person, 'firstName', 'Jack');
// // var expected = {
// //   firstName: 'Jack',
// //   lastName: 'Jacobs'
// // };
// // var testNameOne = "updates person's existing first name field";
// // assertObjectsEqual(person, expected, testNameOne);

// var person = {
//   firstName: 'Joe',
//   lastName: 'Blow'
// };
// updateObject(person, 'age', 35);
// var expected = {
//   firstName: 'Joe',
//   lastName: 'Blow',
//   age: 35
// };
// var testNameTwo = "adds person's non-existing age field";
// assertObjectsEqual(person, expected, testNameTwo);


// function assertArraysEqual(actual, expected, testName) {
//   let success = 'passed';
//   let failure = `FAILED [${testName}] Expected "${expected}", but got "${actual}"`;
//   let testArr = [];
//   if (actual.length === expected.length) {
//       for (var i = 0; i<actual.length; i++) {
//           if (actual[i] === expected[i]) {
//               testArr.push(actual[i]);
// 		  };
//       };
//   };
//   if (testArr.length === expected.length) {
// 	  console.log(success);
//   } else {
// 	  console.log(failure);
//   };
//   console.log('test completed');
// };

// var expected = ['b', 'r', 'o', 'k', 'e', 'n'];
// var actual = 'broken'.split('');
// var testName = 'splits string into array of characters';

// console.log(assertArraysEqual(actual, expected, testName));


// function assertEqual(actual, expected, testName) {
// 	let failure = `FAILED [${testName}] Expected "${expected}", but got "${actual}"`;
// 	let success = 'passed';
// 	if (actual === expected) {
// 		return success;
// 	} else {
// 		return failure;
// 	};
// };


// function multiplyByTwo(n) {
//   return n * 2;
// };
// var output = multiplyByTwo(2);
// var expected = 4;
// var testName = 'it doubles 2 to 4';


// console.log(assertEqual(output, expected, testName));
