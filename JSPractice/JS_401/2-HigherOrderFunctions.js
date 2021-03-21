// Higher Order Functions
//map
function map(array, callbackFunction) {
    let outputArr = [];
    for (let i = 0; i < array.length; i++) {
        let currentElement = array[i];
        outputArr.push(callbackFunction(currentElement));
    };
    return outputArr;
  };
  
  function plusOne(value) {
      return value + 1;
  };
  
  
  //filter
  function filter(array, callbackFunction) {
    let outputArr = [];
    for (let i = 0; i < array.length; i++) {
        if (callbackFunction(array[i]) === true) {
            outputArr.push(array[i]);
        };
    };
    return outputArr;
  };
  
  function isEven(number) {
      let check = Number.isInteger(number / 2);
      return check;
  };
  
  function isMultipleOfThree(number) {
      if (number % 3 === 0) {
          return true;
      } else {
          return false;
      };
  };
  
  function isPositive(number) {
      if (number > 0) {
          return true;
      } else {
          return false;
      };
  };
  
  function isNegative(number) {
      if (number < 0) {
          return true;
      } else {
          return false;
      };
  };
  
  function isLargerThanSix(number) {
      if (number > 6) {
          return true;
      } else {
          return false;
      };
  };
  
  function isEvenLength(string) {
      if (string.length % 2 === 0) {
          return true;
      } else {
          return false;
      };
  };
  
  
  //reduce
  function reduce(array, callbackFunction, startingValue) {
    let output = startingValue;
    for (let i = 0; i < array.length; i++) {
      output = callbackFunction(output, array[i]);
    };
    return output;
  };
  
  function sum(a, b) {
      return a + b;
  };
  
  function multiply(a, b) {
      return a * b;
  };
  
  
  
  //TestSuite
  function assertArraysEqual(actual, expected, testName) {
      let hasSameLengths = true;
      let hasSameValues = true;
      let success = `passed [${testName}] : expected "${expected}", \n and got "${actual}"`;
      let failure = `failed [${testName}] : expected "${expected}", \n but got "${actual}"`;
      if (actual.length !== expected.length) {
          hasSameLengths = false;
      };
      for (let a = 0; a < actual.length; a++) {
          if (actual[a] !== expected[a]) {
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
  
  function assertEquals(actual, expected, testName) {
      let success = `passed [${testName}] : expected "${expected}", \n and got "${actual}"`;
      let failure = `failed [${testName}] : expected "${expected}", \n but got "${actual}"`;
      if (actual === expected) {
          return success;
      } else {
          return failure;
      };
  };
  
  let hofTestArr = [1, 2, 3, 4];
  let hofTestArr2 = [-10,-9,-8,-7,-6,-5,-4,-3,-2,-1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  
  //Map
  let actualMapOutput = map(hofTestArr, plusOne);
  let expectedMapOutput = [2, 3, 4, 5];
  // console.log(assertArraysEqual(actualMapOutput, expectedMapOutput, 'it correctly maps the provided input array like the built in array method does'));
  
  
  //Filter
  let actualFilterOutput = filter(hofTestArr, isEven);
  let expectedFilterOutput = [2, 4];
  // console.log(assertArraysEqual(actualFilterOutput, expectedFilterOutput, 'it correctly filters the provided input array like the built in array method does'));
  
  // console.log(filter(hofTestArr, function(number) {
  // 	if (number > 0) {
  // 		return true;
  // 	};
  // }));
  
  let testFunctionArr = [
      isPositive,
      isNegative,
      isMultipleOfThree,
      isLargerThanSix
  ];
  
  // for (let element of testFunctionArr) {
  // 	console.log(filter(hofTestArr2, element));
  // };
  
  
  //Reduce
  let testReduce = 'it correctly reduces the provided input array like the built in array method does';
  
  let actualReduceSum = reduce(hofTestArr, sum, 0); 
  let expectedReduceSum = 10;
  // console.log(assertEquals(actualReduceSum, expectedReduceSum, testReduce));
  
  let actualReduceProduct = reduce(hofTestArr, multiply, 1);
  let expectedReduceProduct = 24;
  // console.log(assertEquals(actualReduceProduct, expectedReduceProduct, testReduce));
  
  
  
  //each (DECLARATIVE Code)
  function each(array, func) {
    for (var i = 0; i < array.length; i++) {
       func(array[i]);
    };
  };
  
  numsTestArr = [1, 2, 3];
  
  
  // IMPERATIVE Code (via use of anonymous functions!)
  function sumSquares(numbers) {
      let total = 0;
      
      each(numbers, function(number) {
          total += number * number;
      });
  
      return total;
  };
  
  // console.log(sumSquares(numsTestArr));
  
  
  function sumCubesFuncExpression(numbers) {
    let total = 0;
    
    each(numbers, function(number) {
        total += number * number * number;
    });
  
    return total;
  };
  
  // console.log(sumCubesFuncExpression(numsTestArr));
  
  
  function product(numbers) {
      let result = 1;
  
      each(numbers, function(number) {
          result *= number;
      });
  
      return result;
  };
  
  // console.log(product(numsTestArr));
  
  
  function cubeAll(numbers) {
      let outputArr = [];
  
      each(numbers, function(number) {
          outputArr.push(number * number * number);
      });
  
      return outputArr;
  };
  
  // console.log(cubeAll(numsTestArr));
  
  
  function filterOdds(numbers) {
      let outputArr = [];
  
      each(numbers, function(number) {
          let check = Number.isInteger(number/2);
          if (check === false) {
              outputArr.push(number);
          };
      });
  
      return outputArr;
  };
  
  // console.log(filterOdds(numsTestArr));
  
  
  
  function sumBy4x (arrayOfNums) {
      let result = 0;
  
      each (arrayOfNums, function(num) {
          result += num * 4;
      });
      
      return result;
  };
  
  // console.log(sumBy4x(numsTestArr));
  
  
  function sumBy (numbers, callbackFunction) {
      let result = 0;
  
      for (let i = 0; i < numbers.length; i++) {
          result += callbackFunction(numbers[i]);
      };
  
      return result;
  };
  
  // //sumBy squares
  // console.log(sumBy(numsTestArr, (a) => a * a));
  // //sumBy cubes
  // console.log(sumBy(numsTestArr, (a) => a * a * a));
  // //sumBy 4x
  // console.log(sumBy(numsTestArr, (a) => a * 4));
  // //sumBy array sum
  // console.log(sumBy(numsTestArr, (a) => a));
  
  
  function productBy (numbers, callbackFunction) {
      let result = 1;
  
      for (let i = 0; i < numbers.length; i++) {
          result *= callbackFunction(numbers[i]);
      };
  
      return result;
  };
  
  // //productBy squares
  // console.log(productBy(numsTestArr, (a) => a * a));
  // //productBy cubes
  // console.log(productBy(numsTestArr, (a) => a * a * a));
  // //productBy 4x
  // console.log(productBy(numsTestArr, (a) => a * 4));
  // //productBy array sum
  // console.log(productBy(numsTestArr, (a) => a));
  
  
  
  function doubleAll(numbers) {
      let outputArr = [];
      for (let element of numbers) {
          outputArr.push(element * 2);
      };
      return outputArr;
  };
  
  // console.log(doubleAll([1, 3, 10, 4, 7]));
  
  
  function halveAll(numbers) {
      let outputArr = [];
      for (let element of numbers) {
          outputArr.push(element / 2);
      };
      return outputArr;
  };
  
  // console.log(halveAll([1, 3, 10, 4, 7]));
  
  
  function uppercaseAll(arrayOfStrings) {
      let outputArr = [];
      for (let element of arrayOfStrings) {
          outputArr.push(element.toUpperCase());
      };
      return outputArr;
  };
  
  let stringTestArr = ['HelLo', 'WorLD'];
  // console.log(uppercaseAll(stringTestArr));
  console.log(map(stringTestArr, (a) => a.toUpperCase()));
  // console.log(map(stringTestArr, (a) => a.toLowerCase()));
  // console.log(map(["the", "quick", "brown", "fox", "jumped"], (a) => a.length));
  
  var people = [
    {name: "Alyssa P. Hacker", age: 26},
    {name: "Ben Bitdiddle", age: 34},
    {name: "Eva Lu Ator", age: 19},
    {name: "Lem E. Tweakit", age: 40}
  ];
  
  // console.log(map(people, (a) => a['name']));
  // console.log(map(people, (a) => a['name'].toString() + ' is ' + a['age'].toString()));
  
  
  // console.log(filter(stringTestArr, isEvenLength));
  
  function startsWithChar(strings, character) {
      let input = strings.split(" ");
      let output = filter(input, function(string) {
          if (string.toString().startsWith(character.toString()) === true) {
              return true;
          } else {
              return false;
          };
      });
      return output;
  };
  
  let testChars = 'abcdefghijklmnopqrstuvwxyz'.split("");
  let testWords = 'the quick brown fox jumps over the lazy dog';
  
  // for (let element of testChars) {
  // 	let functionResult = startsWithChar(testWords, element);
  // 	if (functionResult.length > 0) {
  // 		console.log(functionResult);
  // 	};
  // };
  
  
  
  
  
  //Hoisting
  let cube = function (x) {
      return x * x * x;
  };
  
  // console.log(cube(2));
  
  
  let fullName = function (first, last) {
      return `${first} ${last}`;
  };
  
  console.log(fullName('Taylor', 'Varoglu'));
  
  
  let power = function (base, exp) {
      if (exp === 0) {
          return 1;
      } else {
          return base * power(base, exp - 1);
      };
  };
  
  // console.log(power(2,4));
  
  
  let sumCubes = function (numbers) {
      let total = 0;
      for (let i = 0; i < numbers.length; i++) {
          total = total + cube(numbers[i]);
      };
      return total;
  };
  
  // console.log(sumCubes([1, 2, 3]));
  
  
  
  // let values = [10, 20, 30];
  
  // for (var i = 0; i < values.length; i++){
  //   console.log(values[i]);
  // };
  
  
  
  function welcome(first, last) {
    return `Welcome, ${first} ${last}! You last logged in on ${lastLogin}.`
  };
  
  var lastLogin = '1/1/1970';
  
  // console.log(welcome('Charlie', 'Munger'));
  
  
  
  
  
  function cbFunction(x, y, z) {
    return x + y + z
  };
  
  function caller(x, y, z, cbFunction) {
    console.log('In caller function!')
  
    return cbFunction(x, y, z);
  };
  
  let x = caller(1, 2, 3, cbFunction);
  // console.log(x);
  
  
  
  
  
  function constructPerson (name = 'Anonymous', age = 0, hobbies = []) {
    const person = {
      name: name,
      age: age,
      hobbies: hobbies
    };
    return person
  };
  
  // console.log(constructPerson('Taylor', 29, ['Snowboarding', 'Biking']));
  
  
  function constructPersonObjectSH (name='Anonymous', age=0, hobbies=[]) {
    const result = {
      name,
      age,
      hobbies
    };
    return result;
  };
  
  console.log(constructPersonObjectSH('Taylor', 29, ['Snowboarding', 'Biking']));
  
  
  
  
  
  function greet (name, greeting) {
    return `${greeting}! My name is ${name}`
  };
  
  function greetNisha () {
    const personAndGreeting = [ 'Nisha', 'Hi there' ]
  //   return greet(personAndGreeting[0], personAndGreeting[1]) // this is the line to change
    return greet(...personAndGreeting) // using spread operator!
  };
  
  // console.log(greet('Nisha', greetNisha()));
  
  
  
  // Rest, as in all the rest!
  const colors = [ 'orange', 'pink', 'aqua' ]
  const [ primary, ...others ] = colors
  
  // console.log(primary, others)
  // In this case, we will log out 'orange' and an array of all other colors
  
  function multiply(...args) {
      let result = 0;
      if (args.length === 0) {
          return result;
      } else if (args.length >= 1) {
          result = 1;
          for (let i = 0 ; i < args.length; i++) {
              result *= args[i];
          };
      return result;
      };
  };
  
  // console.log(assertEquals(multiply(), 0, 'it correctly returns 0 if passed no arguments'));
  // console.log(assertEquals(multiply(1), 1, 'it correctly returns the single passed in argument if passed one argument'));
  
  let multipleArgTest = 'it correctly returns the product of all arguments when multiple arguments are passed in';
  // console.log(assertEquals(multiply(1, 2), 2, multipleArgTest));
  // console.log(assertEquals(multiply(1, 2, 3), 6, multipleArgTest));
  // console.log(assertEquals(multiply(1, 2, 3, 4), 24, multipleArgTest));
