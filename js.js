// for (let i = 0; i <= 10; i++) {
//     console.log(i);
// }
// ---------------------------------------------------------------------

// Let’s start with a conversion from kilometers to miles. The function should include the input in kilometers and return the answer in miles.

// function converter(num) {
//     return num * 0.62137119
// }
// console.log(converter(1));
// ---------------------------------------------------------------------
const numbers = [2, 2, 2];
// let sum = 0;
// for (let i = 0; i < numbers.length; i++) {
//     sum = numbers[i] + sum
//     console.log(sum);
// }
// let total = 0;
// numbers.forEach(n => {
//     total = n + total;
//     console.log(total);
// })
// ---------------------------------------------------------------------

// function reverseArray(arr) {
//     arr.reverse()
//     return arr
// }
// const demoArray = [1,2,3,4,5]
// console.log(reverseArray(demoArray));
// ---------------------------------------------------------------------

// function removeNegativeNumber(arr) {
//     const onlyPositiveValues = arr.filter(n=> n > 0)
//     return onlyPositiveValues
// }

// console.log(removeNegativeNumber([2,-2,4]));
// ----------------------------------------------------------------
// function sortArray(arr) {
//     return arr.sort((a,b)=> a - b)
// }
// const demoArray = [2,5,3,4,1]
// console.log(sortArray(demoArray));

// -----------------------------------------------------------------
// const demoString = 'hello world'
// console.log(demoString.replace('l', 'kk'));

// function isDivisibleBy10(num) {
//     return num % 10 == 0
// }
// console.log(isDivisibleBy10(30));
// console.log(isDivisibleBy10(66));
// ---------------------------------------------------
// const demoString = "hello world";
// const vowels = ['a', 'e', 'i', 'o', 'u']
// let count = 0;
// total includes vowel characters
// vowels.filter(v =>  {
//     if (demoString.includes(v)) {
//         count++
//     }
// })
// or we can do
// demoString.split('').map(c=> vowels.find(v=> {
//     if (v === c) {
//         count++
//     }
// }))
// console.log(count);
// total vowels in sentence
// for (let i = 0; i < demoString.length; i++) {
//   if (
//     demoString[i].toLocaleLowerCase() === "a" ||
//     demoString[i].toLocaleLowerCase() === "e" ||
//     demoString[i].toLocaleLowerCase() === "i" ||
//     demoString[i].toLocaleLowerCase() === "o" ||
//     demoString[i].toLocaleLowerCase() === "u"
//   ) {
//     count++
//   }
// }
// --------------------------------------------------------------

// const st = 'jsIsAwesome'
// let reverseString = ''
// for (let i = st.length -1 ; i > 0; i--) {
//     console.log(st[i]);
//     reverseString += st[i]
// }
// console.log(reverseString);

// --------------------------------------------------------------
// Write a JavaScript program to display the current day and time in the following format:
// Today is Monday, the current time is 10 PM : 30m : 38s.
// const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
// const currentDate = new Date();
// console.log(
//   `Today is ${days[currentDate.getDay()]}, the current time is ${
//     currentDate.getHours() > 12
//       ? currentDate.getHours() - 12 + " PM"
//       : currentDate.getHours() + " AM"
//   } : ${currentDate.getMinutes()}m : ${currentDate.getSeconds()}s `
// );

// --------------------------------------------------------------------

// const currentDate = new Date();
// const CurrentFullYear = currentDate.getFullYear()
// const CurrentDay = currentDate.getDay()
// const CurrentHour = currentDate.getHours()
// const CurrentMin = currentDate.getMinutes()
// const CurrentSec = currentDate.getSeconds()

// const targetDate = currentDate.getFullYear(), 1,5
// console.log(CurrentFullYear);
// console.log();

// ----------------------------------------------------------

// Write a code on how to calculate the number of vowels and consonants in a string?(Use Javascript only)

const vowels = ["a", "e", "i", "o", "u"];

const calculateVowelsAndConstants = (string) => {
  let vowelsCount = 0;
  let consonantsCount = 0;

  const splitString = string.split("");
  for (const word of splitString) {
    if (vowels.includes(word)) {
      vowelsCount++;
    } 
    if(!vowels.includes(word) && word !== ' '){
      consonantsCount++;
    }
  }
  return [vowelsCount, consonantsCount];
};

console.log(calculateVowelsAndConstants("hello khalid"));











// Write a code to calculate if the string is palindrome ? (Use javascript only)
function isPalindrome(string) {
    const reversedString = string.split("").reverse().join("");
    if (string === reversedString) {
        return true
    }else{
        return false
    }
}
console.log(isPalindrome('eve'));
















// -------------------------------------------------
// Explain what a callback function is and provide a simple example?
