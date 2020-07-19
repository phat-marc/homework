const people = [
  { name: "James", age: 21, occupation: "Office Worker" }, 
  { name: "Ann", age: 32, occupation: "Office Worker" }, 
  { name: "Julie", age: 21, occupation: "Civil Service" }, 
  { name: "Rob", age: 18, occupation: "Industrial Supplier" },
];

// My Solution
const group1 = (items, key) => {
  // your code here 
  let occObj = people.reduce(
    (a, b) => {
      (a[b.occupation] = [...a[b.occupation] || [], b])
      return a;
    }, {}
  );

  let ageObj = people.reduce(
    (a, b) => {
      (a[b.age] = [...a[b.age] || [], b]);
      return a;
    }, {}
  );  
  // returns an obj with two nested objects, age, and occupation
  return {age: ageObj, occupation: occObj};
}
console.log('Attempt 1', group1());

// My Solution 2
const group2 = (items, key) => {
  // your code here 
  let occObj = people.reduce(
    (a, b) => {
      (a[b.occupation] = [...a[b.occupation] || [], b])
      return a;
    }, {}
  );

  let ageObj = people.reduce(
    (a, b) => {
      (a[b.age] = [...a[b.age] || [], b]);
      return a;
    }, {}
  );  
  // returns an array with two objets
  return [ageObj, occObj];
}
console.log('Attempt 2', group2());

// My Solution 3
const group3 = (items, key) => {
  // your code here 
  let result = people.reduce(
    (a, b) => {
      (a[b.occupation] = [...a[b.occupation] || [], b])
      && 
      (a[b.age] = [...a[b.age] || [], b]);
      return a;
    }, {}
  );
  // returns a single object with items from both age and object
  return result;
}
console.log('Attempt 3', group3());
