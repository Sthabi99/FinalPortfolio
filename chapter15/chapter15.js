// let favDay = prompt("Which day of the week is your favourite ? ").toLowerCase();
// let theResponse;
// switch (favDay) {
//   case "monday":
//     theResponse = "weirdo!, no one likes monday";
//     break;
//   case "tuesday":
//     theResponse = "Get a Pizza !!";
//     break;
//   case "wednesday":
//     theResponse = "Eat Pie!";
//     break;
//   case "thursday":
//     theResponse = "Cook nice food";
//     break;
//   case "friday":
//     theResponse = "Take away day";
//     break;
//   case "saturday":
//     theResponse = "What a day!";
//     break;
//   case "sunday":
//     theResponse = "Nice , Family day!";
//     break;
//   default:
//     theResponse = "Uhh I dont know this day!";
//     break;
// }
// alert(theResponse);

// let myDate = new Date();
// console.log(myDate)
// console.log(myDate.getDate)
// console.log(myDate.getTime)
// console.log(myDate.getDay)
// myDate.setDate(15);
// console.log(myDate)

let todayDate = document.getElementById("todaysdate");
let todoButton = document.getElementById("whattodo");
let dayOfWeek;
let youShould;

// add a listener to the whattodo button
todoButton.addEventListener("click", displayActivity);

// create a new Date object
let d = new Date();
// d.setDate(prompt("enter day"))
// call the displayDate() function
displayDate();

function displayDate() {
  // todo: display the current date in the todaysdate div
  
  todayDate.innerHTML = d;
}

function displayActivity() {
  let dayOfWeek = d.getDay();
  // todo: find out the day of the week.

  /* todo: set a variable, called youShould, with a different
       string based on what day of the week it is. */
  let youShould;
  switch (dayOfWeek) {
    case 0:
      thingtoDo = "Go to church";
      break;
    case 1:
      youShould = "you have school today";
      break;
    case 2:
      youShould = "You have soccer game today";
      break;
    case 3:
      youShould = "You have rugby practice";
      break;
    case 4:
      youShould = "You have a movie night";
      break;
    case 5:
      youShould = "Today it's guys night out";
      break;
    case 6:
      youShould = "We rest";
      break;
    default:
      youShould = "You have nothing to do";
      break;
  }

  // todo: output the value of youShould into the thingToDo div

  document.getElementById("thingToDo").innerHTML = youShould;
}

//   document.getElementById("thingToDo").innerHTML = youShould;
