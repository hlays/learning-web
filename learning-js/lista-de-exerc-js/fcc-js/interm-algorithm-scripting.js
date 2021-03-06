console.log("-> Sum All Numbers in a Range");
// We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them.
// The lowest number will not always come first.

function sumAll(arr) {
  let max = Math.max(arr[0], arr[1]);
  let min = Math.min(arr[0], arr[1]);

  let resultado = 0;

  for (let i = min; i <= max; i++) {
    resultado += i;
  }

  return resultado;
}

//teste

console.log('sumAll([1, 4]): ', sumAll([1, 4])); // 10

// -------------------------------------------------------------------

console.log('-> Diff Two Arrays');
// Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

function diffArray(arr1, arr2) {
  return arr1.filter(element => !arr2.includes(element)).concat(arr2.filter(element => !arr1.includes(element)))
}

// teste
console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));

// -------------------------------------------------------------------

console.log('-> Seek and Destroy');
// You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

function destroyer(arr, ...args) {
  // Remove all the values
  let result = arr.filter((elem) => !args.includes(elem));
  return result;
}

console.log('destroyer([1, 2, 3, 1, 2, 3], 2, 3): ', destroyer([1, 2, 3, 1, 2, 3], 2, 3));

// -------------------------------------------------------------------


console.log('-> Wherefore art thou');

// Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching name and value pairs (second argument). Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.

// For example, if the first argument is [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], and the second argument is { last: "Capulet" }, then you must return the third object from the array (the first argument), because it contains the name and its value, that was passed on as the second argument.

function whatIsInAName(collection, source) {
  // What's in a name?
  let sourceKeys = Object.keys(source);
  // Only change code below this line
  return collection.filter(obj => {
    for (let key in sourceKeys) {
      if (!obj.hasOwnProperty(sourceKeys[key]) || obj[sourceKeys[key]] !== source[sourceKeys[key]]) {
        return false;
      }
    }
    return true;
  });
}

// teste
console.log('whatIsInAName', whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));

// -------------------------------------------------------------------

console.log('-> Spinal Tap Case');
// Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

function spinalCase(str) {
  // Create a variable for the white space and underscores.
  var regex = /\s+|_+/g;

  // Replace low-upper case to low-space-uppercase
  str = str.replace(/([a-z])([A-Z])/g, '$1 $2');

  // Replace space and underscore with -
  return str.replace(regex, '-').toLowerCase();
}


console.log('spinalCase("This Is Spinal Tap"): ', spinalCase('This Is Spinal Tap'))
console.log('spinalCase("thisIsSpinal_Tap"): ', spinalCase("thisIsSpinal_Tap"))



// -------------------------------------------------------------------

console.log('-> Pig Latin');

// Translate the provided string to pig latin.

// Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".

// If a word begins with a vowel you just add "way" to the end.

// Input strings are guaranteed to be English words in all lowercase.

function translatePigLatin(str) {
  let vowel = /[aeiou]/gi;
  let pigLatin;

  if (str[0].match(vowel)) {
    pigLatin = str + 'way';
  } else if (str.match(vowel) === null) {
    pigLatin = str + 'ay';
  } else {
    let firstVowel = str.indexOf(str.match(vowel)[0])
    pigLatin = str.substr(firstVowel) + str.substr(0, firstVowel) + 'ay';
  }
  return pigLatin;
}

// testes
console.log('translatePigLatin("consonant"): ', translatePigLatin("consonant"));
console.log('translatePigLatin("glove"):', translatePigLatin("glove")); // "oveglay"


// -------------------------------------------------------------------

console.log('-> Search and Replace');

// Perform a search and replace on the sentence using the arguments provided and return the new sentence.
// First argument is the sentence to perform the search and replace on.
// Second argument is the word that you will be replacing (before).
// Third argument is what you will be replacing the second argument with (after).

function myReplace(str, before, after) {
  let index = str.indexOf(before);

  // verificar se é maiúscula
  if (str[index] === str[index].toUpperCase()) {
    after = after.charAt(0).toUpperCase() + after.slice(1);
  }
  str = str.replace(before, after);

  return str;
}

// teste
console.log('myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"): ', myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"));



// -------------------------------------------------------------------

console.log('-> DNA Pairing');

// The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.

// Base pairs are a pair of AT and CG. Match the missing element to the provided character.

// Return the provided character as the first element in each array.

// For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]

// The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.


function pairElement(str) {
  let result = [];

  let src = function (char) {
    switch (char) {
      case 'A':
        result.push(['A', 'T']);
        break;
      case 'T':
        result.push(['T', 'A']);
        break;
      case 'C':
        result.push(['C', 'G']);
        break;
      case 'G':
        result.push(['G', 'C']);
        break;
    }
  };

  for (let letter in str) {
    src(str[letter]);
  }
  return result;
}

// teste
console.log('pairElement("GCG"): ', pairElement("GCG"));


// -------------------------------------------------------------------

console.log('-> Missing letters');
// Find the missing letter in the passed letter range and return it.
// If all letters are present in the range, return undefined.
function fearNotLetter(str) {
  let compare = str.charCodeAt(0);
  let missing;

  str.split('').map(function (letter, index) {
    if (str.charCodeAt(index) == compare) {
      ++compare;
    } else {
      missing = String.fromCharCode(compare);
    }
  });

  return missing;
}

// teste
console.log('fearNotLetter("abce"): ', fearNotLetter("abce"));
console.log('fearNotLetter("stvwx"): ', fearNotLetter("stvwx"));


// -------------------------------------------------------------------

console.log('-> Sorted Union');

// Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.
// In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.
// The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.

function uniteUnique(arr1, arr2, arr3) {
  let newArr = [];

  for (let array of arguments) {
    for (let num of array) {
      if (newArr.indexOf(num) < 0) {
        // or if (!newArr.includes(num))
        newArr.push(num);
      }
    }
  }
  return newArr;
}

console.log('uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]): ', uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));



// -------------------------------------------------------------------

console.log('-> Convert HTML Entities');

// Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.

function convertHTML(str) {
  var array = str.split('');

  for (let i in array) {
    switch (array[i]) {
      case '<':
        array[i] = '&lt;';
        break;
      case '&':
        array[i] = '&amp;';
        break;
      case '>':
        array[i] = '&gt;';
        break;
      case '"':
        array[i] = '&quot;';
        break;
      case "'":
        array[i] = "&apos;";
        break;
    }
  }

  array = array.join('');
  return array;
}

// teste
console.log('convertHTML("Dolce & Gabbana"): ', convertHTML("Dolce & Gabbana"));




// -------------------------------------------------------------------

console.log('-> Sum All Odd Fibonacci Numbers');

// Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.
// The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.
// For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.

function sumFibs(num) {
  let prevNum = 0;
  let currNum = 1;
  let result = 0;

  while (currNum <= num) {
    if (currNum % 2 !== 0) {
      result += currNum;
    }

    currNum += prevNum;
    prevNum = currNum - prevNum;
  }

  return result;
}

// teste
console.log('sumFibs(4): ', sumFibs(4));


// -------------------------------------------------------------------

console.log('-> Sum All Primes');

// Sum all the prime numbers up to and including the provided number.

// A prime number is defined as a number greater than one and having only two divisors, one and itself. For example, 2 is a prime number because it's only divisible by one and two.

function sumPrimes(num) {
  function isPrime(val) {
    for (let i = 2; i < val; i++) {
      if (val % i === 0) {
        return false;
      }
    }
    return true;
  }

  let sum = 0;

  for (let j = 2; j <= num; j++) {
    if (isPrime(j)) {
      sum += j;
    }
  }
  return sum;
}

// teste
console.log(sumPrimes(10));



// -------------------------------------------------------------------

console.log('-> Drop it');

// Given the array arr, iterate through and remove each element starting from the first element (the 0 index) until the function func returns true when the iterated element is passed through it.

// Then return the rest of the array once the condition is satisfied, otherwise, arr should be returned as an empty array.

function dropElements(arr, func) {
  // Drop them elements.
  let newArr = arr.filter((n) => func(n));
  return newArr;
}

// teste
console.log(dropElements([1, 2, 3], function (n) { return n < 3; }));
console.log(dropElements([0, 1, 0, 1], function (n) { return n === 1; }));
console.log(dropElements([1, 2, 3, 9, 2], function (n) { return n > 2; }));
console.log(dropElements([1, 2, 3, 4], function (n) { return n > 5; }));

// -------------------------------------------------------------------

console.log('-> Steamroller');

// Flatten a nested array. You must account for varying levels of nesting.

function steamrollArray(arr) {
  // I'm a steamroller, baby
  let newArr = [].concat(...arr);
  return newArr.some(Array.isArray) ? steamrollArray(newArr) : newArr;
}

// teste
console.log(steamrollArray([1, [2], [3, [[4]]]]));

// -------------------------------------------------------------------

console.log('-> Binary Agents');

// Return an English translated sentence of the passed binary string.

// The binary string will be space separated.

function binaryAgent(str) {
  let arr = str.split(" ");
  let result = [];

  arr.map((item) => result.push(String.fromCharCode(parseInt(item, 2))))
  return result.join("");
}

// radix (parseInt(item, 2))

// usada para especificar qual o sistema de numeração que deseja converter a string. Podendo receber valores de 2 a 36, dentre os mais utilizados podemos destacar 10 (decimal), 2 (binário), 16 (hexadecimal) e 8 (octal). É opcional ! É justamente no fato do paramento base ser opcional é que mora o perigo. Pois, caso o mesmo não seja informado, o interpretador javascript irá se comportar das seguintes formas:

// Começando com caractere que não pode ser convertido para um número, retorna NaN (not a number)
// Quando um string começa com “0x” é analisada implicitamente com base 16 (hexadecimal)
// Quando uma string começa com “0″, é analisada implicitamente com base 8  (octal)
// Quando uma string começa com qualquer outro valor, é base 10 (decimal)

// teste
console.log(binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"));


// -------------------------------------------------------------------

console.log('-> Everything Be True');

// Check if the predicate (second argument) is truthy on all elements of a collection (first argument).
// In other words, you are given an array collection of objects. The predicate pre will be an object property and you need to return true if its value is truthy. Otherwise, return false.
// In JavaScript, truthy values are values that translate to true when evaluated in a Boolean context.
// Remember, you can access object properties through either dot notation or [] notation.

function truthCheck(collection, pre) {
  // Is everyone being true?
  return collection.every((obj) => obj[pre]);
}

// teste
console.log(truthCheck([{ "user": "Tinky-Winky", "sex": "male" }, { "user": "Dipsy", "sex": "male" }, { "user": "Laa-Laa", "sex": "female" }, { "user": "Po", "sex": "female" }], "sex"));


// -------------------------------------------------------------------

console.log('-> Arguments Optional');

// Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.
// For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.
// Calling this returned function with a single argument will then return the sum:
// var sumTwoAnd = addTogether(2);
// sumTwoAnd(3) returns 5.
// If either argument isn't a valid number, return undefined.

// function addTogether() {
//   let args = Array.from(arguments);
//   let result;

//   if (args.some(num => typeof num !== 'number')) {
//     result = undefined;
//   } else if (args.length > 1) {
//     result = args.reduce((sum, atual) => sum += atual, 0);
//   } else {
//     result = num + args;
//   }

// }

// // teste
// console.log(addTogether(2, 3));


// -------------------------------------------------------------------

console.log('-> Make a Person');
// Fill in the object constructor with the following methods below:
// getFirstName() getLastName() getFullName() setFirstName(first) setLastName(last) setFullName(firstAndLast)
// Run the tests to see the expected output for each method.
// The methods that take an argument must accept only one argument and it has to be a string.
// These methods must be the only available means of interacting with the object.

var Person = function(firstAndLast) {
  // Complete the method below and implement the others similarly
  var fullName = firstAndLast;

  this.getFirstName = function() {
    return fullName.split(" ")[0];
  };

  this.getLastName = function() {
    return fullName.split(" ")[1];
  };

  this.getFullName = function() {
    return fullName;
  };

  this.setFirstName = function(name) {
    fullName = name + " " + fullName.split(" ")[1];
  };

  this.setLastName = function(name) {
    fullName = fullName.split(" ")[0] + " " + name;
  };

  this.setFullName = function(name) {
    fullName = name;
  };
};


// teste
var bob = new Person('Bob Ross');
console.log('bob.getFullName(): ', bob.getFullName());


// -------------------------------------------------------------------

console.log('-> Map the Debris');

// Return a new array that transforms the elements' average altitude into their orbital periods (in seconds).
// The array will contain objects in the format {name: 'name', avgAlt: avgAlt}.
// You can read about orbital periods on Wikipedia.
// The values should be rounded to the nearest whole number. The body being orbited is Earth.
// The radius of the earth is 6367.4447 kilometers, and the GM value of earth is 398600.4418 km3s-2.


function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;

  arr.forEach(function(item) {
    var calc = Math.round(2 * Math.PI * Math.sqrt(Math.pow(earthRadius + item.avgAlt, 3) / GM));
    delete item.avgAlt;
    item.orbitalPeriod = calc;
  });
  return arr;
}

// teste
console.log('orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]): ', orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]));