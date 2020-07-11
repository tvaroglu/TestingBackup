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
}

function dec(x) {
  return x - 1;
}

function add(num1, num2) {
  var x = num1;
  var y = num2;
  if(x > y) {
	  var y = num1;
	  var x = num2;
  };
  while (x == y) {
    let y = dec(x);
    lowerRange.push(y);
  };
  return lowerRange;
};

console.log(add(7,5));


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

console.log(retArr(animals,1));


function conj(element, arr) {
	let check = arr.indexOf(element);
	if(check == -1) {
		arr.unshift(element);
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

var nums = [1,2,3];
console.log(modifyArr(nums, [3, 4, 5]));


//Write a function sum that computes the sum of the numbers in an array.
function sumArr(arr) {
  var result = 0;
  for(i = 0; i < arr.length; i++) {
    result += arr[i];
  };
  return result;
};

console.log(sumArr(nums));


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

console.log(oddVsEven(5));



function rest (arr) {
  let result = arr.slice(1);
  return result;
};

var numbers = [3, 2, 7, 5];
// console.log(numbers.slice(1));
console.log(rest(numbers));


function nth (arr, index) {
  let result = arr[index];
  return result;
};

var numbers = [3, 2, 7, 5];
console.log(nth(numbers,3));

function squareOdd (arr) {
  let oddArr = [];
  let evenArr = [];
  for(i = 0; i < arr.length; i++) {
		let number = arr[i];
    let checkNum = number/2;
    let check = Number.isInteger(checkNum);
    if(check == false) {
      let result = number*number;
      oddArr.push(result);
    } else {
      evenArr.push(number);
    };
  };
  return oddArr;
};

console.log(numbers);
console.log(squareOdd(numbers));

var arr = [];
arr[7] = "Hello.";
console.log(arr);


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

