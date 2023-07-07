// let dresser = ["socks", "shirts", "pants"];
// dresser[2];
// let favoriteFoods = [];
// let favoriteFoods = ["broccoli", "eggplant", "tacos", "mushrooms"];
// let myArray = [5, "Hi there", true];
// let firstName = "Neil";
// let middleName = "deGrasse";
// let lastName = "Tyson";
// let Scientist = [firstName, middleName, lastName];
// let Scientist = ["Neil", "deGrasse", "Tyson"];

// let people = ["Teddy", "Cathy", "Bobby"];
// console.log(people);
// people[0] = "Georgie";
// console.log(people);

// concat() A new array made up of the current array, joined with
// other array(s) and/or value(s).
// indexOf() Returns the first occurrence of the specified value
// within the array. Returns –1 if the value is not found.
// join() Joins all the elements of an array into a string.
// lastIndexOf() Returns the last occurrence of the specified value within
// the array. Returns –1 if the value is not found.
// pop() Removes the last element in an array.
// push() Adds new items to the end of an array.
// reverse() Reverses the order of elements in an array.
// shift() Removes the first element from an array and returns
// that element, resulting in a change in length of an array.
// slice() Selects a portion of an array and returns it as a new
// array.
// sort() Returns an array after the elements in an array are
// sorted. (The default sort order is alphabetical and
// ascending.)
// splice() Returns a new array comprised of elements that were
// added to or removed from a given array.
// tostring() Converts an array to a string.
// unshift() Returns a new array with a new length by the addition
// of one or more elements.

let people = [
  "Kareem",
  "Fatma",
  "Sumaya",
  "Mr. Hobson",
  "Ms. Young",
  "Mrs. O' Doherty",
];
let otherPeople = ["Emilie", "Mommy", "Dad", "Kathy"];

document.getElementById("peopleIKnow").innerHTML = people.valueOf();

// document.getElementById("peopleIKnow").innerHTML = people.toString();
// people = people.concat(otherPeople);
// document.getElementById("peopleIKnow").innerHTML = people.toString();

// people = people.indexOf("Sumaya");
document.getElementById("peopleIKnow").innerHTML = people.valueOf();
// people = people.join(" # ");
document.getElementById("peopleIKnow").innerHTML = people.valueOf();
// people = people.lastIndexOf("Ms. Young");
document.getElementById("peopleIKnow").innerHTML = people.valueOf();
// people = people.pop();
document.getElementById("peopleIKnow").innerHTML = people.valueOf();
// people.pop();
document.getElementById("peopleIKnow").innerHTML = people.valueOf();
// people = people.push("Teddy");
document.getElementById("peopleIKnow").innerHTML = people.valueOf();
people.push("Teddy");
document.getElementById("peopleIKnow").innerHTML = people.valueOf();
people = people.reverse();
document.getElementById("peopleIKnow").innerHTML = people.valueOf();
people.shift();
document.getElementById("peopleIKnow").innerHTML = people.valueOf();
people.unshift("Micheal");
document.getElementById("peopleIKnow").innerHTML = people.valueOf();
// people = people.slice(0,3);
document.getElementById("peopleIKnow").innerHTML = people.valueOf();
people = people.sort();
document.getElementById("peopleIKnow").innerHTML = people.valueOf();
people.splice(1, 0, "Cathy");
document.getElementById("peopleIKnow").innerHTML = people.valueOf();

document.getElementById("peopleIKnow").innerHTML = people.valueOf();



document.getElementById("peopleIKnow").innerHTML = people.valueOf();

document.getElementById("peopleIKnow").innerHTML = people.valueOf();

document.getElementById("peopleIKnow").innerHTML = people.valueOf();
