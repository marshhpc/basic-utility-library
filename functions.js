// Add two numbers with javascript
function add(input1, input2) {
   // A1: any JavaScript value
   // A2: any JavaScript value
   // R: a single JavaScript value
   return input1 + input2;
}
// subtract two numbers with javascript
function subtract(input1, input2) {
   // A1: any JavaScript value
   // A2: any JavaScript value
   // R: a single JavaScript value
   return input1 - input2;
}
// multiply two numbers with javascript
function multiply(input1, input2) {
   // A1: any JavaScript value
   // A2: any JavaScript value
   // R: a single JavaScript value
   return input1 * input2;
}
// divide two numbers with javascript
function divide(input1, input2) {
   // A1: any JavaScript value
   // A2: any JavaScript value
   // R: a single JavaScript value
   return input1 / input2;
}
// increment a number with javascript
function increment(input1) {
   // increments input by 1
   input1++;
   return input1;
}
// decrement a number with javascript
function decrement(input1) {
   // decrements input by 1
   input1--;
   return input1;
}
// concatenating strings with plus operator
function concatenate(input1, input2) {
   //concatenates input1 and input2
   input1 = input1;
   input1 + input2;
   // return input1 + input2;
   return input1 + "" + input2;
}
// concatenating strings with plus equals operator
function concatenatePlusEquals(input1, input2) {
   // concatenates input1 and input2
   input1 = input1;
   input1 += input2;
   // return input1 + input2;
   return input1;
}
// concatenatig strings with variables ** not sure about this one
function concatenateVariables(input1, input2, input3) {
   // concatenates input1 and input2
   return input1 + "" + input2 + input3;
}
// Find the length of a string
function findLength(input) {
   // finds the length of a string
   return input.length;
}
// Use Bracket Notation to Find the First Character in a String
function findFirstLetterOfString(input) {
   return input[0];
}
// Use Bracket Notation to find the nth Character in a String (remeber computers start count at 0)
function findNthLetterOfString(input1, input2) {
   // A1: a string
   // A2: a number
   // R: the nth letter from the beginning of a string
   var nthLetter = input2;
   nthLetter--;
   var string = input1;
   returnLetter = string[nthLetter];
   return returnLetter;
}
// Use Bracket Notation to Find the Last Character in a String
function getLastLetterOfString(string) {
   return string[string.length - 1];
}
// Use Bracket Notation to Find the Nth-to-Last Character in a String
function getNthToLastLetterOfString(string, n) {
   return string[string.length - n];
}
// Manipulate Arrays With push()
function push(array, newItem) {
   array.push(newItem);
   console.log(array);
   return array;
}
// fcc example
// var arr1 = [1,2,3];
// arr1.push(4);
// arr1 is now [1,2,3,4]

// var arr2 = ["Stimpson", "J", "cat"];
// arr2.push(["happy", "joy"]);
// arr2 now equals ["Stimpson", "J", "cat", ["happy", "joy"]]

// Manipulate Arrays with Pop ()
function pop(array) {
   // removes(pops) the last element of an array and returns what's left
   array.pop();
   return array;
}
// fcc example
// var threeArr = [1, 4, 6];
// var oneDown = threeArr.pop();
// console.log(oneDown); // Returns 6
// console.log(threeArr); // Returns [1, 4]

// Manipulate Arrays with shift()
function shift(array) {
   // removes(shifts) the first element of an array and returns what is left
   array.shift();
   return array;
}
//fcc example
// var ourArray = ["Stimpson", "J", ["cat"]];
// var removedFromOurArray = ourArray.shift();
// // removedFromOurArray now equals "Stimpson" and ourArray now equals ["J", ["cat"]].

// Manipulate Arrays with unshift ()
function unshift(array, newItem) {
   array.unshift(newItem);
   return array;
}
