/*

Write a function called getKeys that takes an object and returns the keys within an array.

Optional Challenge - Can you solve this using a one liner?

*/


// const getKeys = (obj) => Object.keys(obj);



const getKeys = (obj) => {
    const res = [];
    for(let key in obj){
        res.push(key);
    }
    return res;
}






const obj = {
    instructor: "Anthony",
    cohort: "07-15-pt",
    students: 60
}
console.log(getKeys(obj)); // ["instructor", "cohort", "students"]
