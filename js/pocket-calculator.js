var display = [0];
var numberpast = [];
var number = [0];
let numbercount = 0
var sign = [];

function numbuttonPress(x){
  var p = document.getElementById("display");
  p.innerHTML += x;
  number.push(x);
  display.push(x);
  console.log(number);
  numbercount = numbercount + 1;
console.log(numbercount);

    if (number[0] == 0){
      p.innerHTML = x;
      number.shift();
  }
}
function functionbutton(x){
  alert("sjsjjsdjsjsjks")
}
if (numbercount%3==0){
  var o = document.getElementById("display");
  o.innerHTML += 1;
}
