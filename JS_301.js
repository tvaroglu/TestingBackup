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

console.log(sumRange(2,7));


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

function add(x,y) {
	var counter = 1;
	var num1 = x;
	var num2 = y;
	lowerRange = [];
	if(num2 < num1) {
		var num1 = y;
		var num2 = x;
	};
	// console.log(num1);
	// console.log(num2);
};

// console.log(inc(5));
console.log(add(2,5));


//repeatString that takes two parameters: a string str, which is the string to be repeated, and count -- a number representing how many times the string s should be repeated, e.g.
function repeatString(str, count) {
  var counter = 0;
  while(counter < count) {
	  console.log(str);
	  counter += 1;
  };
  
};

// repeatString('dog', 0); // => ''
// repeatString('dog', 1); // => 'dog'
// repeatString('dog', 2); // => 'dogdog'
// repeatString('dog', 3); // => 'dogdogdog'

// console.log(repeatString('Hello', 5));



var groupedIngredients = [];
var allIngredients = [];
var index = 0;
while(index < groupedIngredients.length) {
	var shortList = groupedIngredients[index];
	allIngredients = allIngredients.concat(shortList);
	index++;
};

allIngredients = [];
for(var i = 0; i < groupedIngredients.length; i++) {
	var shortlist = groupedIngredients[i];
	for(var j = 0; j < shortList.length; j++) {
		var ingredient = shortList[j];
		if(allIngredients.indexOf(ingredient) == -1) {
			allIngredients.push(ingredient)
		};
	};
};



var animals = ["cat", "fox", "dog", "monkey"];
// console.log(animals.indexOf('cat'));
// console.log(animals[0]);
// console.log(animals[3]);



//Write a function sum that computes the sum of the numbers in an array.
function sumArr(arr) {
  var result = 0;
  for(i = 0; i < arr.length; i++) {
    result += arr[i];
  };
  return result;
};

var arr = [1,2,3];
// console.log(sumArr(arr));



var tvShow = 'Narcos';
let nameOutside = 'Taylor';

// Taylor
// var morningRoutine = {
//   coffee: 'cold brew',
//   meditate: true,
//   exercises: ['weights', 'jogging'],
//   checkEmails: true,
//   tvShow: 'Ozark'
// };
// console.log(`Hi, my name is ${nameOutside}, and my morning routine involves ${morningRoutine.coffee} and ${morningRoutine.exercises} before work, but I'd rather just watch ${tvShow} instead!`);

// for (var item in morningRoutine) {
	// console.log(morningRoutine[item]);
	// };
