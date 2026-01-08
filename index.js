// Problem 1: Reverse a String
function reverseString(string) {
  return string.split("").reverse().join("");
}

const reversed = reverseString("Arman");
console.log(reversed);

// ---------------------------------------

// Problem 2: Count Vowels in a String
function countVowels(string) {
  let count = 0;
  const vowels = "aeiou";

  for (let character of string.toLowerCase()) {
    if (vowels.includes(character)) {
      count++;
    }
  }
  return count;
}

const totalVowels = countVowels("Arman");
console.log(totalVowels);

// ---------------------------------------

// Problem 3: Check for Palindrome
function checkPalindrome(string) {
  const reversed = string.split("").reverse().join("");
  return string === reversed;
}

const palindrome = checkPalindrome("Arman");
console.log(palindrome);

// ---------------------------------------

// Problem 4: Find the Maximum Number
function findMax(array) {
  return Math.max(...array);
}

const maxNumber = findMax([3, 5, 7, 2, 8]);
console.log(maxNumber);

// ---------------------------------------


// Problem 5: Remove Duplicates from an Array
function removeDuplicates(array) {
  return [...new Set(array)];
}

const uniqueArray = removeDuplicates([1, 2, 2, 3, 4, 4, 5]);
console.log(uniqueArray);

// ---------------------------------------

// Problem 6: Sum of All Numbers in an Array
function sumArray(array) {
  return array.reduce((sum, num) => sum + num, 0);
}

const totalSum = sumArray([1, 2, 3, 4, 5]);
console.log(totalSum);

// ---------------------------------------


// Problem 7: Find Even Numbers in an Array
function findEvenNumbers(array) {
  return array.filter(num => num % 2 === 0);
}

const evenNumbers = findEvenNumbers([1, 2, 3, 4, 5, 6]);
console.log(evenNumbers);

// ---------------------------------------


// Problem 8: Capitalize First Letter of Each Word
function capitalizeWords(string) {
  return string
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

const capitalized = capitalizeWords("hello world from javascript");
console.log(capitalized);

// ---------------------------------------


// Problem 9: Find the Factorial of a Number
function factorial(num) {
  if (num === 0 || num === 1) return 1;
  return num * factorial(num - 1);
}

const fact = factorial(5);
console.log(fact);

// ---------------------------------------


// Problem 10: PingPong Challenge
function pingPong() {
  for (let i = 1; i <= 20; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("PingPong");
    } else if (i % 3 === 0) {
      console.log("Ping");
    } else if (i % 5 === 0) {
      console.log("Pong");
    } else {
      console.log(i);
    }
  }
}

pingPong();