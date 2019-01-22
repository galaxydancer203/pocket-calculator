var display = 0;
var numberpast = 0;
var number = [0];
let numbercount = 0;
var sign = "";
var firstdigit = true;
var q = 0;
  var z = 0;
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
numberpast = p.innerHTML;
console.log(numberpast);
  sign = "+";
  console.log(sign);
  q = 0;
}

function functionsub(){
var p = document.getElementById("display");
numberpast = p.innerHTML;
console.log(numberpast);
  sign = "-";
    console.log(sign);
  q = 0;
}

function functionmult(){
var p = document.getElementById("display");
numberpast = p.innerHTML;
console.log(numberpast);
  sign = "x";
    console.log(sign);
  q = 0;
}
function functiondivide(){
  var p = document.getElementById("display");
  numberpast = p.innerHTML;
  console.log(numberpast);
    sign = "÷";
      console.log(sign);
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
  var firstnum = Number(numberpast);
  var secondnum = Number(p.innerHTML);
  
  if(sign == "+"){
    p.innerHTML = firstnum + secondnum;
    numberpast = p.innerHTML;
  }
  if(sign == "-"){
    p.innerHTML = firstnum - secondnum;
    numberpast = p.innerHTML;
  }
  if(sign == "x"){
    p.innerHTML = firstnum*secondnum;
    numberpast = p.innerHTML;
  }
  if(sign == "÷"){
    p.innerHTML = firstnum/secondnum;
    numberpast = p.innerHTML;
  }
    q = 0;
    z = 0;

}
