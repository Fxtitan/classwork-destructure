/*You will probably not have to take destructuring to such a level as this but this is for you to really wrap your brains around the mechanics.
EVERY EXERCISE SHOULD USE DESTRUCTURING*/

/*1.*/ 
let arr = [
  ['name', 'jon'],
  ['age', 20],
  ['eyes', 'blue'],
];
 //Create an object out of the arr above then using destructuring, declare variables using the object keys.
let interesting = Object.fromEntries(arr)
console.log(interesting)

const { name, age, eyes} = interesting;
console.log(name)
console.log(age)
console.log(eyes)
console.log(`I am ${name}, I'm ${age} years old and my eyes are ${eyes}.`);


// 2. 
let arr2 = [1,2,3,4,5,6]
  //a. Set 3 variables names: the third index should be called 'three', the fourth item 'four' and the rest of the items thereafter 'rest'
  //b. Swap the third and fourth item variable values


let [one, two, three, four, ...rest] = arr2;
[three,four] = [four,three]
console.log(three);
console.log(four);

