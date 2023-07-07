document.getElementById("lefteye").style.backgroundColor = "black";
document.getElementById("head").style.transform = "rotate(15deg)";
document.getElementById("body").style.border = "2px blacksolid";
document.getElementById("mouth").style.borderRadius = "4px";
document.getElementById("mouth").style.backgroundColor = "brown";
document.getElementById("righteye").style.border = "4px red dotted";
document.getElementById("leftarm").style.backgroundColor = "red";
document.getElementById("body").style.color = "green";
document.getElementById("head").style.borderTop = "5px black solid";
let rightEye = document.getElementById("righteye");
let leftEye = document.getElementById("lefteye");
let headMove = document.getElementById("head");
headMove.addEventListener("click",headMovement)
leftEye.addEventListener("click", moveUpDown);
rightEye.addEventListener("click", moveUpDown);

let leftArm = document.getElementById("leftarm");
leftArm.addEventListener("click", moveRightLeft);

function moveRightLeft(e) {
  let robotPart = e.target;
  let l = 0;
  let animation = setInterval(frame, 50);
  function frame() {
    robotPart.style.left = l + "%";
    l++;
    if (l === 70) {
      clearInterval(animation);
    }
  }
}

function moveUpDown(e) {
  let robotPart = e.target;
  let t = 0;
  let animation = setInterval(frame, 50);
  function frame() {
    robotPart.style.top = t + "%";
    t++;
    if (t === 20) {
      clearInterval(animation);
    }
  }
}

function headMovement(e) {
    let robotPart = e.target;
    let n = 0;
    let animation = setInterval(frame, 50);
    function frame() {
      robotPart.style.top = n + "%";
      n++;
      if (n === 20) {
        clearInterval(animation);
      }
    }
  }
  