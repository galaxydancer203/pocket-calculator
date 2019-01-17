var display = [0];
var numberpast = [];
var number = [0];
let numbercount = 0;
var sign = [];

function numbuttonPress(x){
  var p = document.getElementById("display");


  p.innerHTML += x;
  number.push(x);
  display.push(x);
  numbercount = numbercount + 1;
  String(number);
console.log(typeof number);
console.log(number)

if (number[0] == 0){
  number.shift();
  p.innerHTML = x;

}

  console.log(numbercount);
// number=number.toLocaleString('en');
}
function functionbutton(x){
  // alert("sjsjjsdjsjsjks")
  // JSON.stringify(number)
  console.log(number)
  console.log(typeof number);
}




if (numbercount%3==0){
  var p = document.getElementById("display");
  // p.innerHTML += 1;
}
