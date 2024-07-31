/*

Write a function called userData. It should take in 2 arguments. An array of users, and a name.
The function should remove the name from the array without mutating the original input array. Return a new
array with the the name removed. If the passed in name is not found, return -1


*/

/*
Your Polyas here:
create a function called userData. It will take in 2 arguments
  -argument 1 is an array of user names.
  -argument 2 is a string name
iterate through the array of names
  -2a for each iteration check to see if the currently checked name is the same as the argument string name
    -if it is, remove it (hint: we can use splice...we may need index)
      -if it is not, do nothing.
    


*/


// Your code here
function userData (nameArr, name){
  if(!nameArr.Includes(name){
    return -1
  }
     let copy = nameArr.slice();
  for (let i =0; i < nameArr.length; i++){
    let currName = copy[1];
    if (currName ===name){
      copy.splice(i, 1);
    }
  }
  return copy
}

/* DO NOT MODIFY ANYTHING BELOW THIS LINE */


// COMMENT THESE OUT WHEN YOU ARE READY TO TEST OUR YOUR TEST SPECS FOR CLEANER TESTS
//DO NOT MODIFY THIS ARRAY
// let users = ["Anthony", "Alan", "Sam", "Tristan", "Gabe", "Alexi", "Kate", "Edward", "Zaviar", "Will"];
// let answer1 = userData(users, "Will");
// let answer2 = userData(users, "Alan");
// let answer3 = userData(users, "Ryan");

// console.log(answer1);// ["Anthony", "Alan", "Sam", "Tristan", "Gabe", "Alexi", "Kate", "Edward", "Zaviar"]
// console.log(answer2); // ["Anthony", "Sam", "Tristan", "Gabe", "Alexi", "Kate", "Edward", "Zaviar", "Will"]
// console.log(answer3); // -1


// console.log(users, "  -> This should not be mutated ");
// console.log(answer1 !== users); // true
// console.log(answer2 !== users); // true
// console.log(answer3 !== users); // true


module.exports = {userData};
