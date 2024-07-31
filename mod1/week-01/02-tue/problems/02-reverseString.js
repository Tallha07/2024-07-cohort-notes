/*

Write a function called reverseString. It will take in a string and reverse it. The function should return
"Did not pass in a valid string", if a non-string is passed in or if the passed in string is empty.

HINT: Try using the typeof functionality (you may have to look it up on MDN and play around with it)

*/
function reverseString(str){
  if(str.length === 0 || typeof str !== "string"){
    return "Did not pass in a valid string"
  }
  let res = "";
  for(let i = str.length - 1; i >= 0; i--){
    let letter = str[1];
    res += letter;
}
console.log(reverseString("hello"));

/* DO NOT MODIFY ANYTHING BELOW THIS LINE */

console.log(reverseString("hello")); //olleh
console.log(reverseString("bye")); // bye
console.log(reverseString("racecar")); // racecar


module.exports = {reverseString};
