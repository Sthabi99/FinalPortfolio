// while (money > 0) {
//     buyThings();
//     saveMoney();
//     payTaxes();
//     }

// let i = 0;
// while (i < 500) {
// console.log(i + ": Hello, JavaScript!");
// i++;
// }

// let count = 10;
// while (count > 0) {
// alert(count);
// count--;
// }
// alert("Blast Off!");

// let people = ["Deborah","Carla","Mary","Suzen"];
// let i = 0;
// while (people[i]) {
// alert(people[i]);
// i++;
// }

/*
buys specified number of sandwiches per day at current
prices
*/

// declare globals
let money = 20;
let lunches = 0;

//display lunch budget
document.getElementById("money").innerHTML = money;


document.getElementById("placeOrder").addEventListener("click", buyLunches);


function buyLunches() {
  resetForm();
  let day = 0;

  while (money > 0) {
    day++;
    let priceToday = getSandwichPrice();
    let numberOfSandwiches = document.getElementById("numSandwiches").value;
    let totalPrice = priceToday * numberOfSandwiches;
    if (money >= totalPrice) {
      money = money - totalPrice;
      lunches++;
      document.getElementById("receipt").innerHTML +=
        "<p>On day " +
        day +
        ", sandwiches are: $" +
        priceToday +
        ". You have $" +
        money.toFixed(2) +
        " left.</p>";
    } else {
      document.getElementById("receipt").innerHTML +=
        "<p>Today,sandwiches are: $" +
        priceToday +
        ". You don't havenough money. Maybe your sister will give you someof her sandwich.</p>";
      money = 0;
    }
  }
}
// money = 100;
// lunches = 60;
document.getElementById("receipt").innerHTML = "";

function getSandwichPrice() {
  let sandwichPrice = (Math.random() * (5 - 1) + 1).toFixed(2);
  return sandwichPrice;
}

document.getElementById("receipt").innerHTML +=
  "<p>You bought " + lunches + " lunches this week.</p>";

  function resetForm(){money=20
  lunches = 0
document.getElementById("receipt").innerHTML=""}