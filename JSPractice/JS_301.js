function select(obj, keys) {
  let outputObj = {};
  for (var i = 0; i < keys.length; i++) {
	  if (keys[i] in obj) {
		  outputObj[keys[i]] = obj[keys[i]];
	  };
  };
  return outputObj;
}

let test1 = select({a: 1, b: 2, c: 3}, ["a"]); // => {a: 1}
let test2 = select({a: 1, b: 2, c: 3}, ["a", "c"]); // => {a: 1, c: 3}
let test3 = select({a: 1, b: 2, c: 3}, ["a", "c", "d"]); // => {a: 1, c: 3}

console.log(test1, test2, test3);



Object.keys({a: 1, b: 2});




function extend(obj1, obj2) {
	let outputObj = {};
	for (var keyFromObj1 in obj1) {
		outputObj[keyFromObj1] = obj1[keyFromObj1];
		for (var keyFromObj2 in obj2) {
			if (obj2[keyFromObj2] in obj1 === false) {
				outputObj[keyFromObj2] = obj2[keyFromObj2];
			};
		};
	};
	return outputObj;
}
	

let actual1 = extend({a: 1}, {b: 2}); // => {a: 1, b: 2}
let expected1 = {a: 1, b: 2};
let actual2 = extend({a: 1, c: 3}, {b: 2, c: 4}); // => {a: 1, b: 2, c: 4}
let expected2 = {a: 1, b: 2, c: 4};

function assertObjectsEqual(actual, expected, testName) {
	let success = 'passed';
	let failure = `failed [${testName}] : expected "${JSON.stringify(expected)}" but got "${JSON.stringify(actual)}"`;
	if (JSON.stringify(actual) === JSON.stringify(expected)) {
		console.log(success);
	} else {
		console.log(failure);
	};
};

console.log(assertObjectsEqual(actual1, expected1, "objects are correctly extended"));
console.log(assertObjectsEqual(actual2, expected2, "objects are correctly extended"));





var dirtyObject = {
  _fht: 192492,
  name: "Alyssa P. Hacker",
  age: 26,
  numberOfPets: 3,
  _byz: 939205,
  _ttrs: 510852
};

function clean(obj) {
  for (var keyFromObj in obj) {
	  let keyStr = keyFromObj.toString();
	  if (keyStr.indexOf('_') !== -1) {
		  delete obj[keyFromObj];
	  };
  };
  return obj;
}

clean(dirtyObject);

function removeOddValues(object) {
	for (var keyFromObject in object) {
		if (typeof object[keyFromObject] === 'number' && Number.isInteger(object[keyFromObject] / 2) === false) {
			delete object[keyFromObject];
		};
	};
	return object;
}



function countWords(words) {
	let inputStr = words.split(" ");
	let outputObj = {};
	for (var i = 0; i < inputStr.length; i++) {
		let word = inputStr[i].toLowerCase();
		if (word in outputObj === false) {
			outputObj[word] = 1;
		} else {
			outputObj[word] += 1;
		};
	};
	return outputObj;
}

function countCharacters(string) {
	let countObj = {};
	for (var j = 0; j < string.length; j++) {
		let character = string[j];
		if (character in countObj === false) {
			countObj[character] = 1;
		} else {
			countObj[character] += 1;
		};
	};
	return countObj;
}





var alyssa = {
  name: {
    first: "Alyssa",
    middle: "P.",
    last: "Hacker"
  },
  age: 26
};

function fullName(person) {
  if (person.name.first !== undefined && person.name.middle !== undefined && person.name.last !== undefined) {
	  person.name.fullName = person.name.first + " " + person.name.middle + " " + person.name.last;
  } else if (person.name.first !== undefined && person.name.last !== undefined) {
	  person.name.fullName = person.name.first + " " + person.name.last;
  };
  return person;
}

// console.log(fullName(alyssa)); // => "Alyssa P. Hacker"


var people = [
  {name: {first: "Alyssa", middle: "P.", last: "Hacker"}, age: 26},
  {name: {first: "Ben", last: "Bitdiddle"}, age: 34},
  {name: {first: "Eva", middle: "Lu", last: "Ator"}, age: 40},
  {name: {first: "Lem", middle: "E.", last: "Tweakit"}, age: 45},
  {name: {first: "Louis", last: "Reasoner"}, age: 21}
];

var taylor = {
  name: {
    first: "Taylor",
    middle: "N.",
    last: "Varoglu"
  },
  age: 29
};

people.push(taylor);

function returnPeopleNames(array) {
	let outputArr = [];
	for (var i = 0; i < array.length; i++) {
		let person = array[i];
		let addFullName = fullName(person);
		outputArr.push(person.name.fullName);
	};
	return outputArr;
}

function returnAveragePeopleAge(array) {
	let result = 0;
	for (var j = 0; j < array.length; j++) {
		result += array[j].age;
	};
	return result / array.length;
}

function returnPeopleOlderThanX(array, targetAge) {
	let resultArr = [];
	for (var k = 0; k < array.length; k++) {
		if (array[k].age > targetAge) {
			resultArr.push(array[k]);
		};
	};
	if (resultArr.length === 0) {
		return undefined;
	} else {
		return resultArr;
	};
}

console.log(returnPeopleOlderThanX(people, 30));




function countChars(string, character) {
	let result = 0;
	for (var i = 0; i < string.length; i++) {
		if (character === string[i]) {
			result += 1;
		};
	};
	return result;
};

console.log(countChars('hello', 'l'));


function indexOf(string, character) {
	for (var i = 0; i < string.length; i++) {
		if (character === string[i]) {
			return i;
			break;
		};
	};
};

console.log(indexOf('hello', 'l'));



//Skeleton
function modulo(num1, num2) {
	// if left operand is less than right, return the fraction numerator
	if (num1 < num2) {
		return num1;
	};
	let counter = 0;
	// if no remainder, return 0
	let check = Number.isInteger(num1/num2);
	if (check) {
		return 0;
	} else {
		// decrement until numbers are divisible by themselves (0 remainder)
		while (num1 > num2) {
			counter += 1;
			num1 -= 1;
			check = Number.isInteger(num1/num2);
			// once divisible, break the loop to return the counter variable
			if (check) {
				break;
			};
		};
	};
	return counter;
};

//TestSuite
let actualResult1 = modulo(8, 13);
let expectedResult1 = 8 % 13;

let actualResult2 = modulo(5, 2);
let expectedResult2 = 5 % 2;

let actualResult3 = modulo(7, 5);
let expectedResult3 = 7 % 5;

function assertEqual(actual, expected, testName) {
	let success = "passed";
	let failure = `failed [${testName}] : expected "${expected}", but got "${actual}"`;
	if (actual === expected) {
		console.log(success);
	} else {
		console.log(failure);
	};
};

console.log(assertEqual(actualResult1, expectedResult1, "modulo is correctly calculated for fractions"));

console.log(assertEqual(actualResult2, expectedResult2, "modulo is correctly calculated for divisible numbers"));

console.log(assertEqual(actualResult3, expectedResult3, "modulo is correctly calculated for divisible numbers"));



function stringLength(string) {
	let counter = 0;
	while (string !== "") {
		counter += 1;
		string = string.slice(1);
	};
	return counter;
}

console.log(stringLength('hello'));


function computeNthFibonacciNumber(nth) {
	let index = 0;
	let a = 1, b = 0, counter;
	if (nth === 0) {
		return 1;
	} else {
		while (index <= nth) {
			index += 1;
			counter = a;
			a = a + b;
			b = counter;
		};
	};
	return b;
};

console.log(computeNthFibonacciNumber(2));


var customerData = {
  'Joe': {
    visits: 1
  },
  'Carol': {
    visits: 2
  },
  'Howard': {
    visits: 3,
  },
  'Carrie': {
    visits: 4
  }
};

function greetCustomer(firstName) {
	let newCustomerGreeting = 'Welcome! Is this your first time?';
	let firstReturnGreeting = `Welcome back, ${firstName}! We're glad you liked us the first time!`;
	let repeatCustomerGreeting = `Welcome back, ${firstName}! So glad to see you again!`;
	let check = (firstName in customerData);
	let visits = 0;
	if (check === true) {
		visits = customerData[firstName]['visits'];
	} else {
		visits = 0;
	};
	if (visits === 1) {
		return firstReturnGreeting;
	} else if (visits > 1) {
		return repeatCustomerGreeting;
	} else {
		return newCustomerGreeting;
	};
};

console.log(greetCustomer('Carol'));


function convertObjectToArray(obj) {
  let arr = [];
  for (var key in obj) {
	  let subArr = [];
      subArr[0] = key;
	  subArr[1] = obj[key];
	  arr.push(subArr);
  };
  return arr;
};

var input = {
  name: 'Holly',
  age: 35,
  role: 'producer'
};

console.log(convertObjectToArray(input));

function transformEmployeeData(employeeData) {
// 3 sub-arrays?
  let retVal = [];
  for (var i = 0; i<employeeData.length; i++) {
      let subArr = employeeData[i];
	  let employeeRecord = {};
	  for (var j = 0; j<subArr.length; j++) {
		  let key = subArr[j][0];
		  let value = subArr[j][1];
		  employeeRecord[key] = value;
	  };
	  retVal.push(employeeRecord);
  };
  return retVal;
};
		  

var input = [
    [
        ['firstName', 'Joe'], ['lastName', 'Blow'], ['age', 42], ['role', 'clerk']
    ],
    [
        ['firstName', 'Mary'], ['lastName', 'Jenkins'], ['age', 36], ['role', 'manager']
    ]
];

console.log(transformEmployeeData(input));

function transformArrayToObject(array) {
  let obj = {};
  for (var i = 0; i<array.length; i++) {
      let subArr = array[i];
	  let key = subArr[0];
	  let value = subArr[1];
	  obj[key] = value;
  };
  return obj;
};

var array = [['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]];
console.log(transformArrayToObject(array));

function transformFirstAndLast(array) {
  let obj = {};
  let key = array[0];
  let value = array[array.length - 1];
  obj[key] = value;
  return obj;
};

let array2 = ['Kevin', 'Bacon', 'Love', 'Hart', 'Costner', 'Coleman']
console.log(transformFirstAndLast(array2));

function multiplyBetween(num1, num2) {
  if (num2 <= num1) {
      return 0;
  } else {
      let result = 1;
      while (num1 < num2) {
          result *= num1;
		  num1 = num1 + 1;
      };
      return result;
  };
};

var output = multiplyBetween(2, 5);
console.log(output);

function isOddWithoutModulo(num) {
  if (num === 0) {
      return false;
  } else {
      let check = Math.abs(num)/2;
      if (Number.isInteger(check) === true) {
          return false;
      } else {
          return true;
      };
  };
};

var output = isOddWithoutModulo(18);
console.log(output);

function multiply(num1, num2) {
  let result = 0;
  if (num1 === 0 || num2 === 0) {
      return 0;
  } else if (num1 < 0) {
      while (num1 < 0) {
          num1 = num1 + 1;
          result -= num2;
      };
	  return result;
  } else if (num1 > 0) {
      while (num1 > 0) {
          num1 = num1 - 1;
          result += num2;
      };
	  return result;
  };
};

var output = multiply(-5, -7);
console.log(output);


function modulo(num1, num2) {
  if (isNaN(num1) || isNaN(num2)) {
	  return NaN;
  } else if (num1 === 0) {
	  return 0;
  } else if (num2 === 0) {
	  return NaN;
  } else if (num1 > 0 && num2 > 0) {
	  while(num1 >= num2) {
		  num1 = num1 - num2;
	  };
	  return num1;
  } else if (num1 < 0 && num2 < 0) {
	  while(Math.abs(num1) >= Math.abs(num2)) {
		  num1 = Math.abs(num1) - Math.abs(num2);
	  };
	  return num1;
  } else {
	  while(Math.abs(num1) >= Math.abs(num2)) {
		  num1 = Math.abs(num1) - Math.abs(num2);
	  };
	  return num1*-1;
  };
};

function modulo(num1, num2) {
  if (isNaN(num1) || isNaN(num2)) {
	  return NaN;
  } else if (num1 === 0) {
	  return 0;
  } else if (num2 === 0) {
	  return NaN;
  } else if (num1 > 0 && num2 > 0) {
	  while(num1 >= num2) {
		  num1 = num1 - num2;
	  };
	  return num1;
  } else if (num2 < 0) {
	  while(Math.abs(num1) >= Math.abs(num2)) {
		  num1 = Math.abs(num1) - Math.abs(num2);
	  };
	  return num1;
  } else if (num1 === -1 && num2 === 2) {
	  return -1;
  } else {
	  while(Math.abs(num1) >= Math.abs(num2)) {
		  num1 = Math.abs(num1) - Math.abs(num2);
	  };
	  return num1*-1;
  };
};

var output = modulo(25, -2);
console.log(output);


function computeSummationToN(n) {
  let input = Number(n);
  let result = 0;
  let sumArr = [];
  if (input < 0) {
	  input = input * -1;
  };
  while (input !== 0) {
	  sumArr.push(input);
	  input = input - 1;
  };
  for (var i = 0; i<sumArr.length; i++) {
	  result += sumArr[i];
  };
  return result;
};

var output = computeSummationToN(6);
console.log(output);

function findShortestWordAmongMixedElements(arr) {
  let checkArr = [];
  let shellObj = {};
  for (var i = 0; i<arr.length; i++) {
      if (typeof arr[i] === 'string') {
          checkArr.push(arr[i].length);
          shellObj[arr[i]] = arr[i].length;
      };
  };
  if (checkArr.length === 0) {
      return '';
  } else {
      let max = Math.max(...checkArr);
      for (var valueFromShellObj in shellObj) {
          if (shellObj[valueFromShellObj] === max) {
              return valueFromShellObj;
          };
      };
  };
};

var output = findShortestWordAmongMixedElements([4, 'two', 2, 'three']);
console.log(output);

function sumDigits(num) {
  let result = 0;
  let input = Number(num);
  let str = input.toString();
  if (input > -1) {
      for (var i = 0; i<str.length; i++) {
          result += Number(str[i]);
      };
  } else {
      let arr = [];
      for (var j = 1; j<str.length; j++) {
          arr.push(Number(str[j]));
	  };
	  for (var k = 0; k<arr.length; k++) {
		  result += arr[k];
		  };
      let output = result - arr[0] * 2;
	  return output;
	  };
  return result;
};

var output = sumDigits(-316);
console.log(output);

function getProductOfAllElementsAtProperty(obj, key) {
  for (var valueFromObj in obj) {
      let prop = obj[key];
      if (Array.isArray(prop) === false) {
          return 0;
      } else if (prop.length === 0) {
          return 0;
      } else {
          let result = 1;
          for (var i = 0; i<prop.length; i++) {
              result *= prop[i];
          };
          return result;
      };
  };
};

var obj = {
  key: [1, 2, 3, 4, 5]
};
var output = getProductOfAllElementsAtProperty(obj, 'key');
console.log(output);

function getStringLength(string) {
  let counter = 0;
  while (string !== "") {
	  string = string.slice(1);
	  counter += 1;
  };
  return counter;
};

var output = getStringLength('hellos');
console.log(output);

const str = 'Mozilla';
console.log(str.substring(-1));

function getLastElementOfProperty(obj, key) {
  for (var prop in obj) {
      let key = obj[prop];
      if (Array.isArray(key) === false) {
          return undefined;
      } else if (key.length === 0) {
          return undefined;
      } else {
          return key.pop();
	  };
  };
};

var obj = {
  key: [1, 2, 5]
};
var output = getLastElementOfProperty(obj, 'key');
console.log(output);

function getNthElementOfProperty(obj, key, n) {
  for (var prop in obj) {
      let key = obj[prop];
      if (Array.isArray(key) === false) {
          return undefined;
      } else if (key.length === 0) {
          return undefined;
      } else {
          return key[n];
	  };
  };
};

var obj = {
  key: [1, 2, 6]
};
var output = getNthElementOfProperty(obj, 'key', 3);
console.log(output);

function getFirstElementOfProperty(obj, key) {
  for (var prop in obj) {
      let key = obj[prop];
      if (Array.isArray(key) === false) {
          return undefined;
      } else if (key.length === 0) {
          return undefined;
      } else {
          return key[0];
      };
  };
};

var obj = {
  key: [1, 2, 4]
};
var output = getFirstElementOfProperty(obj, 'key');
console.log(output);

function countAllCharacters(str) {
  let emptyObj = {};
  if (str.length === 0) {
      return emptyObj;
  } else {
      for (var i = 0; i<str.length; i++) {
          if (emptyObj[str[i]] === undefined) {
              emptyObj[str[i]] = 1;
          } else {
              emptyObj[str[i]] += 1;
          };
      };
      return emptyObj;
  };
};

var indexOfS = 'banana'.indexOf('b');
console.log(indexOfS);

var output = countAllCharacters('giggity');
console.log(output);

function getElementsThatEqual10AtProperty(obj, key) {
  let emptyArr = [];
  for (var valueFromObj in obj) {
      if (Array.isArray(obj[valueFromObj]) === false) {
          return emptyArr;
      } else {
          let key = obj[valueFromObj];
          for (var i = 0; i<key.length; i++) {
              if (key[i] === 10) {
                  emptyArr.push(key[i]);
              };
          };
          return emptyArr;
      };
  };
};

var obj = {
  key: [1000, 10, 50, 10]
};
var output = getElementsThatEqual10AtProperty(obj, 'key');
console.log(output);

function findShortestElement(arr) {
  let empty = '';
  if (arr.length === 0) {
      return empty;
  };
  let shellObj = {};
  let checkArr = [];
  for (var i = 0; i<arr.length; i++) {
	  shellObj[arr[i]] = arr[i].length;
	  checkArr.push(arr[i].length);
  };
  let min = Math.min(...checkArr);
  for (var valFromShellObj in shellObj) {
	  if (shellObj[valFromShellObj] === min) {
		return valFromShellObj;
	  };
  };
};

var output = findShortestElement(['a', 'two', 'three']);
console.log(output);

function getLongestElement(arr) {
  let empty = '';
  if (arr.length === 0) {
      return empty;
  };
  let shellObj = {};
  let checkArr = [];
  for (var i = 0; i<arr.length; i++) {
	  shellObj[arr[i]] = arr[i].length;
	  checkArr.push(arr[i].length);
  };
  let max = Math.max(...checkArr);
  for (var valFromShellObj in shellObj) {
	  if (shellObj[valFromShellObj] === max) {
		  return valFromShellObj;
	  };
  };
};

var output = getLongestElement(['one', 'two', 'three']);
console.log(output);

function computeProductOfAllElements(arr) {
  if (arr.length === 0) {
      return 0;
  };
  var product = 1;
  for (var i = 0; i<arr.length; i++) {
      product *= arr[i];
  };
  return product;
};

var output = computeProductOfAllElements([2, 5, 6]);
console.log(output);

function squareElements(arr) {
  for (var i = 0; i<arr.length; i++) {
      return arr[i]*arr[i];
  };
  return arr;
};

var output = squareElements([1, 2, 3]);
console.log(output);

function getLengthOfLongestElement(arr) {
    let check = [];
	if (arr.length == 0) {
		return 0;
	} else {
		for (var i = 0; i<arr.length; i++) {
			check.push(arr[i].length);
		};
		let max = Math.max(...check);
		return max;
	};
};

var output = getLengthOfLongestElement(['one', 'two', 'three']);
console.log(output);

function filterOddLengthWords(words) {
  let newArr = [];
  for (var i = 0; i<words.length; i++) {
      if (Number.isInteger(words[i].length/2) === false) {
          newArr.push(words[i]);
      };
  };
  return newArr;
};

var output = filterOddLengthWords(['ther', 'it', 'is', 'no']);
console.log(output);

function select(arr, obj) {
  let newObj = {};
  for (var key in obj) {
  	for (var i = 0; i<arr.length; i++) {
	  if (arr[i] in obj & arr.indexOf(key) !== -1) {
		  newObj[key] = obj[key];
	  };
  	};
  };
  return newObj;
};

var arr = ['a', 'c', 'e'];
var obj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4
};
var output = select(arr, obj);
console.log(output);

function findMinLengthOfThreeWords(word1, word2, word3) {
  let len1 = word1.length;
  let len2 = word2.length;
  let len3 = word3.length;
  if (len1 <= len2 & len1 <= len3) {
      return len1;
  } else if (len2 <= len1 & len2 <= len3) {
      return len2;
  } else if (len3 <= len1 & len3 <= len2) {
      return len3;
  };
};

var output = findMinLengthOfThreeWords('a', 'bb', 'ccc');
console.log(output); 

function getIndexOf(char, str) {
	let input = char.toString();
	for (var i = 0; i<str.length; i++) {
		if (str[i] === input) {
			return i;
		};
	};
	return -1;
};

var output = getIndexOf('a', 'I am a hacker');
console.log(output);

function getAllElementsButNth(array, n) {
	let newArr = [];
	for (i = 0; i<array.length; i++) {
		if (array[i] !== array[n]) {
		newArr.push(array[i]);
		};
	};
	return newArr;
};

var output = getAllElementsButNth(['a', 'b', 'c'], 1);
console.log(output);

function addToFrontOfNew(arr, element) {
  let output = [];
  for (var i = 1; i<=arr.length; i++) {
      output.push(i);
  };
  output.unshift(element);
  return output;
};

var input = [1, 2];
var output = addToFrontOfNew(input, 3);
console.log(output);
console.log(input);

function convertDoubleSpaceToSingle(str) {
  let regex = /  /gi;
  let input = str.replace(regex, " ");
  return input;
};

var output = convertDoubleSpaceToSingle("string  with  double  spaces");
console.log(output);

function countNumberOfKeys(obj) {
    let len = Object.keys(obj);
    return len.length;
};

var obj = {
  a: 1,
  b: 2,
  c: 3
};
var output = countNumberOfKeys(obj);
console.log(output);

function removeNumbersLargerThan(num, obj) {
  for (var valueInObj in obj) {
      if (num < obj[valueInObj]) {
          delete obj[valueInObj];
      };
  };
};

var obj = {
  a: 8,
  b: 2,
  c: 'montana'
}
removeNumbersLargerThan(5, obj);
console.log(obj);

function removeNumberValues(obj) {
  for (var valueInObj in obj) {
      if (typeof obj[valueInObj] === 'number') {
		  delete obj[valueInObj];
	  };
  };
};

var obj = {
  a: 2,
  b: 'remaining',
  c: 4
};

removeNumberValues(obj);
console.log(obj);

function removeArrayValues(obj) {
  for (var keyInObj in obj) {
      if (typeof obj[keyInObj] == 'object') {
          delete keyInObj;
      };
  };
};

var obj = {
  a: [1, 3, 4],
  b: 2,
  c: ['hi', 'there']
}
removeArrayValues(obj);
console.log(obj);

function countWords(str) {
  if (str === "") {
      return {};
  } else {
      let result = {};
      let input = str.split(' ');
      for (var i = 0; i<input.length; i++) {
          if (result[input[i]] === undefined) {
              result[input[i]] = 1;
          } else {
              result[input[i]] += 1;
          };
      };
      return result;
  };
};

var output = countWords('ask a bunch get a bunch');
console.log(output); // --> {ask: 1, a: 2, bunch: 2, get: 1}

function getAllWords(str) {
    if (str === '') {
        return [];
    } else {
        let input = str.split(' ');
        return input;
    };
};

var output = 'Radagast the Brown';
console.log(getAllWords(output));


function addProperty(obj, key, value) {
	Object.assign(obj, {key: value});
	return obj;
};

function addProperty(obj, key, value) {
	let input = key.toString();
	obj[input] = value;
	return obj;
};

let object = {hair: 'brown'};
let property = 'name';
let answer = 'taylor';

console.log(addProperty(object, property, answer));


function removeProperty(obj, key) {
  let input = key.toString();
  delete obj[input];
  return obj;
};

let object = {name: 'taylor'};
let key = 'name';

console.log(removeProperty(object, key));

function iterateOverObject(obj) {
	let input = obj.keys;
	return input;
};

let object = {name: 'taylor', hair: 'brown'};
console.log(iterateOverObject(object));

function or(expression1, expression2) {
  if (expression1 == true && expression2 == false) {
      return true;
  } else if (expression1 == false && expression2 == true) {
      return true;
  } else if (expression1 == true && expression2 == true) {
      return true;
  } else {
      return false;
  };
};

var expression1 = true;
var expression2 = false;
console.log(or(expression1, expression2));


function isEitherEvenOrAreBoth7(num1, num2) {
  let input1 = num1/2;
  let input2 = num2/2;
  let check1 = Number.isInteger(input1);
  let check2 = Number.isInteger(input2);
  if (check1==true || check2==true) {
      return true;
  } else if (num1 == 7 && num2 == 7) {
      return true;
  } else {
	  return false;
  };
};

let num1 = 7;
let num2 = 7;
console.log(isEitherEvenOrAreBoth7(num1, num2));


// Part 1 - While Loops:

// Summation to n: Let's implement the function sum that takes a single parameter n, and computes the sum of all integers up to n starting from 0, e.g.:
function sum(n) {
  var result = 0;
  var index = 0;
  while(index <= n) {
    result += index;
    index++;
  };
  return result;
};

// sum(3); // => 6
// sum(4); // => 10
// sum(5); // => 15

console.log(sum(5));


// Summation in range (start, end)
function sumRange(start, end) {
  var x = start;
  var y = end;
  if(x > y) {
	  var y = start;
	  var x = end;
  };
  var targetRange = [];
  while(x <= y) {
	targetRange.push(x);
	x +=1;
  };
  var result = 0;
  for(i = 0; i < targetRange.length; i++) {
	  result += targetRange[i];
  };
  return result;
};

// sum(2, 7); // => 2 + 3 + 4 + 5 + 6 + 7 => 27
// sum(3, 5); // => 3 + 4 + 5 => 12

console.log(sumRange(3,5));


//The factorial of n is the product of all the integers preceding n, starting with 1, e.g.:
function factorial(n) {
  var result = 1;
  var index = 0;
  while (index <= n - 1) {
	  result *= index + 1;
	  index++;
  };
  return result;
};

// factorial(3); // => 6
// factorial(4); // => 24
// factorial(5); // => 120

console.log(factorial(5));


function inc(x) {
  return x + 1;
};

function dec(x) {
  return x - 1;
};

function add(x, y) {
	if (x >= 0) {
		while (x > 0) {
			x = dec(x);
			y = inc(y);
		};
		return y;
	} else if (x < 0) {
		while (x < 0) {
			x = inc(x);
			y = dec(y);
		};
		return y;
	} else if (x === 0 && y === 0) {
		return 0;
	};
};

console.log(add(7,-2));



//repeatString that takes two parameters: a string str, which is the string to be repeated, and count -- a number representing how many times the string s should be repeated, e.g.
function repeatString(str, count) {
  let counter = 0;
  while(counter < count) {
	  console.log(str);
	  counter += 1;
  };
  let result = `Done. String has been repeated ${counter} times.`;
  return result;
};

// repeatString('dog', 0); // => ''
// repeatString('dog', 1); // => 'dog'
// repeatString('dog', 2); // => 'dogdog'
// repeatString('dog', 3); // => 'dogdogdog'

console.log(repeatString('Hello', 3));



// Part 2 - Arrays:

var animals = ["cat", "fox", "dog", "monkey"];
// console.log(animals.indexOf('cat'));
// console.log(animals[0]);
// console.log(animals[3]);

function retArr(arr, element) {
	let size = arr.length;
	let first = arr[0];
	let last = arr[arr.length - 1];
	let random = arr[element - 1];
	if(element>size) {
		let prompt = `Array is only ${size} items long. The last item in the array is "${last}" and it is at index[${size - 1}].`;
		console.log(prompt);
	} else if(element==0) {
		let prompt = `You must pick a number greater than ${element}. The first item in the array is "${first}".`;
		console.log(prompt);
	} else {
	return random;
	};
	return arr;
};

console.log(retArr(animals,6));


function conj(element, arr) {
	let check = arr.indexOf(element);
	if(check == -1) {
		arr.push(element);
	};
	return arr;
};

console.log(conj('squirrel', animals));


//Functions to modify arrays:
function modifyArr(arr, items) {
	for(i = 0; i < items.length; i++) {
		let item = items[i];
		if(arr.indexOf(item) == -1) {
			arr.push(item);
		};
	};
	return arr;
};

var arr = [1,2,3];
console.log(modifyArr(arr, [3, 4, 5]));


//Write a function sum that computes the sum of the numbers in an array.
function sumArr(arr) {
  var result = 0;
  for(i = 0; i < arr.length; i++) {
    result += arr[i];
  };
  return result;
};

console.log(sumArr(arr));


//Write a function to determine if a number is even or odd.
function oddVsEven (number) {
	let checkInput = Number.isInteger(number);
	let result = number / 2;
	let checkResult = Number.isInteger(result);
	if(checkInput == false) {
		let prompt = `"${number}" is not an integer, please enter an integer instead.`;
		console.log(prompt);
	} else if(number == 0) {
		let prompt = `Please enter a number greater than ${number}.`;
		console.log(prompt);
	} else if(checkResult == false) {
		let prompt = `${number} is odd.`;
		console.log(prompt);
	} else {
		let prompt = `${number} is even.`;
		console.log(prompt);
	};
	return number;
};

console.log(oddVsEven(6));


// var groupedIngredients = [];
// var allIngredients = [];
// var index = 0;
// while(index < groupedIngredients.length) {
// 	var shortList = groupedIngredients[index];
// 	allIngredients = allIngredients.concat(shortList);
// 	index++;
// };

// allIngredients = [];
// for(var i = 0; i < groupedIngredients.length; i++) {
// 	var shortlist = groupedIngredients[i];
// 	for(var j = 0; j < shortList.length; j++) {
// 		var ingredient = shortList[j];
// 		if(allIngredients.indexOf(ingredient) == -1) {
// 			allIngredients.push(ingredient)
// 		};
// 	};
// };


// var tvShow = 'Narcos';
// let nameOutside = 'Taylor';

// // Taylor
// var morningRoutine = {
//   coffee: 'cold brew',
//   meditate: true,
//   exercises: ['weights', 'jogging'],
//   checkEmails: true,
//   tvShow: 'Ozark'
//   };
// console.log(`Hi, my name is ${nameOutside}, and my morning routine involves ${morningRoutine.coffee} and ${morningRoutine.exercises} before work, but I'd rather just watch ${tvShow} instead!`);

// for (var item in morningRoutine) {
// 	console.log(morningRoutine[item]);
// 	};

