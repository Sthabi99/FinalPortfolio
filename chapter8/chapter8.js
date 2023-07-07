// distance = 3000;
// distance = 800 * 4;
// doTheMath = 7 + 8 + 36 + 18 + 12;
// countrySong = "mama" + "truck" + "train" + "rain";
// console.log(typeof "the cat's favorite toy");
// console.log(typeof doTheMath);
// console.log(typeof automobile);

let dreamCar = {
  make: "Oldsmobile",
  model: "98",
  color: "brown",
  year: 1983,
  bodyStyle: "Luxury Car",
  price: 4500,
};
alert("The type of dreamCar is: " + typeof dreamCar);

document.getElementById("pricetag").innerHTML = dreamCar.price;
document.getElementById("modelyear").innerHTML = dreamCar.year;
document.getElementById("body").style.backgroundColor = dreamCar.color;
document.getElementById("body").innerHTML =
  dreamCar.make + " " + dreamCar.model;
document.getElementById("body").innerHTML =
  dreamCar.make + " " + dreamCar.model;

// console.log(dreamCar[0[0]])
