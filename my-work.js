// This is an array with nested objects
// array is called people
// nested objects are called person

const people = [
  { name: "James", age: 21, occupation: "Office Worker" }, 
  { name: "Ann", age: 32, occupation: "Office Worker" }, 
  { name: "Julie", age: 21, occupation: "Civil Service" }, 
  { name: "Rob", age: 18, occupation: "Industrial Supplier" },
];

  // array[
  //   obj 0 {key: val, key: val},
  //   obj 1 {key: val, key: val},
  //   obj 2 {key: val, key: val},
  //   obj 3 {key: val, key: val}
  // ]

// why do this:
// Group gives back an object called group
// with a nested array that hold the objects 

  // object{
  //   array[
  //     obj 0 {key: val, key: val},
  //     obj 1 {key: val, key: val},
  //     obj 2 {key: val, key: val},
  //     obj 3 {key: val, key: val}
  //   ]
  // }
    

// Answer
// const group = (items, key) => {
//   const groupings = people.reduce((total, currentValue) => {
//     console.log('hello', !total[currentValue[key]]);
    // currentValue[key]
    // this is the object key of the current value, i.e:
    // civil worker, office worker,...,18, 21...
    
    // putting the exclamation ! in front makes it return true or false
    // !currentValue[key]
    // returns true x4 - ob vi us

    // adding total[...]
    // returns one undefined and then three arrays all exactly the same

    // adding !total[...]
    // returns one true and then 3 x false

    // in conclusion: return true if the array returned is unique / or perhaps empty

    // if total is true then return an empty array (reset it to '0')
    // and then push in the currentvalue (for this loop)

//     if (!total[currentValue[key]]) {
//       total[currentValue[key]]  = []
//     }
//     total[currentValue[key]].push(currentValue);
//     return total;
//   }, {})
//   return groupings;
// }  
// console.log('Answer', group());

// // Answer
// const group = (items, key) => {
//   const groupings = people.reduce((grouped, person) => {
//     if (!grouped[person[key]]) {
//       grouped[person[key]]  = []
//     }
//     grouped[person[key]].push(person);
//     return grouped;
//   }, {})
//   return groupings;
// }  
// console.log('Answer', group());
// Group gives back an object called group
// with a nested array that hold the objects


// My Solution
// const group1 = (items, key) => {
//   // your code here 
//   let occObj = people.reduce(
//     (a, b) => {
//       (a[b.occupation] = [...a[b.occupation] || [], b])
//       return a;
//     }, {}
//   );

//   let ageObj = people.reduce(
//     (a, b) => {
//       (a[b.age] = [...a[b.age] || [], b]);
//       return a;
//     }, {}
//   );  
  // returns an obj with two nested objects, age, and occupation wich have nested arrays for each grouping
  // return {age: ageObj, occupation: occObj};

    // object{
    //   objAge{
    //     array 18: [
    //       obj 0 {key: val, key: val},
    //       obj 1 {key: val, key: val},
    //     ],
    //     array 21: [
    //       obj 0 {key: val, key: val},
    //       obj 1 {key: val, key: val},
    //     ]
    //   },
    //   objOccu{
    //     array office: [
    //       obj 0 {key: val, key: val},
    //       obj 1 {key: val, key: val},
    //     ],
    //     array service: [
    //       obj 0 {key: val, key: val},
    //       obj 1 {key: val, key: val},
    //     ],
    //   }
    // }
// }
// console.log('Attempt 1', group1());

// // My Solution 2
// const group2 = (items, key) => {
//   // your code here 
//   let occObj = people.reduce(
//     (a, b) => {
//       (a[b.occupation] = [...a[b.occupation] || [], b])
//       return a;
//     }, {}
//   );

//   let ageObj = people.reduce(
//     (a, b) => {
//       (a[b.age] = [...a[b.age] || [], b]);
//       return a;
//     }, {}
//   );  
//   // returns an array with two objets
//   return [ageObj, occObj];
// }
// console.log('Attempt 2', group2());

// // My Solution 3
// const group3 = (items, key) => {
//   // your code here 
//   let result = people.reduce(
//     (a, b) => {
//       (a[b.occupation] = [...a[b.occupation] || [], b])
//       && 
//       (a[b.age] = [...a[b.age] || [], b]);
//       return a;
//     }, {}
//   );
//   // returns a single object with items from both age and object
//   return result;
// }
// console.log('Attempt 3', group3());
