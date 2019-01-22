var display = 0;
var numberpast = 0;
var number = [0];
let numbercount = 0;
var sign = "";
var firstdigit = true;
var q = 0;
  var z = 0;

  var p = document.getElementById("display");
  if(p.length==9){
    alert("ss")
  }


function numbuttonPress(x){
  var p = document.getElementById("display");
  if (firstdigit){
    p.innerHTML = x;
   firstdigit = false;
  }
  else if (sign != "" && q == 0){
    p.innerHTML = x;
    q++;
  }

else {
  p.innerHTML += x;
  }
}

function functionadd(){
var p = document.getElementById("display");
z = 0;
numberpast = p.innerHTML;
p.innerHTML = 0;
  sign = "+";
  q = 0;
}

function functionsub(){
var p = document.getElementById("display");
numberpast = p.innerHTML;
p.innerHTML = 0;
  sign = "-";
  q = 0;
}

function functionmult(){
var p = document.getElementById("display");
numberpast = p.innerHTML;
p.innerHTML = 0;
  sign = "x";
  q = 0;
}
function functiondivide(){
  var p = document.getElementById("display");
  numberpast = p.innerHTML;
  p.innerHTML = 0;
    sign = "÷";
    q = 0;
}
function functionnegative(){
  var p = document.getElementById("display");
p.innerHTML = p.innerHTML * -1;
}
function functionpercent(){
  var p = document.getElementById("display");
p.innerHTML = p.innerHTML * 0.01;
}
function functionclear(){
  var firstnum;
  var secondnum;
  var p = document.getElementById("display");
  p.innerHTML = 0;
  firstnum = 0;
  secondnum = 0;
firstdigit = true;
}

function functiondecimal(){
  var p = document.getElementById("display");
//////can only use one decimal one refresh.
  if (z == 0){
    p.innerHTML += ".";
z = 1;
  }
}

function functionequal(){
  var p = document.getElementById("display");
  var secondnum = Number(p.innerHTML);
  var firstnum = Number(numberpast);

  if(sign == "+"){
    p.innerHTML = firstnum+secondnum;
    console.log(secondnum);
    console.log("0");
    console.log(firstnum);
  }
  if(sign == "-"){
    p.innerHTML = firstnum - secondnum;
  }
  if(sign == "x"){
    p.innerHTML = firstnum*secondnum;
  }
  if(sign == "÷"){
    p.innerHTML = firstnum/secondnum;
  }
    q = 0;
    z = 0;
 ////decimal

 }
