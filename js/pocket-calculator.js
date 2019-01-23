var display = [];
var decimalActive = false;
var LeftOperand = 0;
var RightOperand = 0;
var GhostNumber =0;
var maxNumber = 999999999;
var maxDecimalPlaces = 3;
var decimalMulitplier = .1;

var Operands = [];
var Operators = [];
var theLastOperator;
var OperatorKeysPressed = false;
var isANewNumber = true;
var tinyNumber = 0.00001;

function numbuttonPress(x){
  var p = document.getElementById("display");
  var ww=p.innerHTML;
  var tmp;
  if (OperatorKeysPressed) {
    OperatorKeysPressed = false;
    GhostNumber = x;
    decimalMulitplier = 0.1;
    isANewNumber = false;
  } else {
    if (!decimalActive) {
      if (isANewNumber) {
        tmp = x;
      } else {
        tmp = GhostNumber*10 + x;
      }

    } else {
      if (OperatorKeysPressed || isANewNumber) {
        decimalMulitplier = 0.1;
        GhostNumber=0;
      }
      tmp = GhostNumber + x * decimalMulitplier;
      decimalMulitplier *= 0.1;
    }
    isANewNumber = false;
    if (tmp <= maxNumber){
      GhostNumber = tmp;
    }
  }

  p.innerHTML = formatForDisplay(GhostNumber);
}

function formatForDisplay (x){
  if (x != 0 && (Math.abs(x)>maxNumber || Math.abs(x)<tinyNumber)) {
    return x.toExponential(maxDecimalPlaces);
  } else
  return x.toLocaleString(undefined, {minimumFractionDigits: 0, maximumFractionDigits: maxDecimalPlaces});
}

function calculateThis(a,b,Operator) {
  switch (Operator) {
    case "P":
      return a+b;
      break;
    case "M":
      return a-b;
      break;
    case "D":
      if (b == 0 ) {
        return "Error!"
      } else {
        return a/b;
      }
      break;
    case "X":
      return a*b;
      break;
    default:
      return NaN;
  }
}

function buttonAction(x){
  var p = document.getElementById("display");
  var ww=p.innerHTML;
  var displayNumber=Number(ww);

  switch (x) {
    case "A":        // AC AllClear
      p.innerHTML=0;
      decimalActive = false;
      decimalMulitplier = 0.1;
      Operands = [];
      Operators = [];
      GhostNumber = 0;
      isANewNumber = true;
      break;
    case ".":
      if (!decimalActive) {
        if (isANewNumber) {
          p.innerHTML= 0 + ".";
          OperatorKeysPressed = false;
        } else {
          p.innerHTML= ww + ".";
        }

        decimalActive = true;
      }
      break;
    case "N":
    decimalActive = false;
      GhostNumber = -1 * GhostNumber;
      p.innerHTML = formatForDisplay(GhostNumber);
      isANewNumber = true;
      break;
    case "%":
      GhostNumber = 0.01 * GhostNumber;
      p.innerHTML = formatForDisplay(GhostNumber);
      decimalActive = false;
      break;
    case "P":
      if (OperatorKeysPressed) {
        Operators.pop();
        Operands.pop();
      }
      if (Operators.length == 0) {
        Operands.push(GhostNumber);
      } else
        if (Operators.length == 1) {
          theLastOperator = Operators.pop();
          RightOperand = GhostNumber;
          LeftOperand = Operands.pop();
          GhostNumber = calculateThis(LeftOperand,RightOperand,theLastOperator);
          Operands.push(GhostNumber);
          p.innerHTML = formatForDisplay(GhostNumber);
        }
      OperatorKeysPressed = true;
      Operators.push("P");
      decimalActive = false;
      isANewNumber = true;
      break;
    case "M":
        if (OperatorKeysPressed) {
          Operators.pop();
          Operands.pop();
        }
      if (Operators.length == 0) {
        Operands.push(GhostNumber);
      } else
        if (Operators.length == 1) {
          theLastOperator = Operators.pop();
          RightOperand = GhostNumber;
          LeftOperand = Operands.pop();
          GhostNumber = calculateThis(LeftOperand,RightOperand,theLastOperator);
          Operands.push(GhostNumber);
          p.innerHTML = formatForDisplay(GhostNumber);
        }
      OperatorKeysPressed = true;
      Operators.push("M");
      decimalActive = false;
      isANewNumber = true;
      break;
    case "X":
      if (OperatorKeysPressed) {
        Operators.pop();
        Operands.pop();
      }
    if (Operators.length == 0) {
      Operands.push(GhostNumber);
    } else
      if (Operators.length == 1) {
        theLastOperator = Operators.pop();
        if (theLastOperator == "P" || theLastOperator == "M") {
          Operators.push(theLastOperator);
          Operands.push(GhostNumber);
        } else {
          RightOperand = GhostNumber;
          LeftOperand = Operands.pop();
          GhostNumber = calculateThis(LeftOperand,RightOperand,theLastOperator);
          Operands.push(GhostNumber);
          p.innerHTML = formatForDisplay(GhostNumber);
        }
      }
    OperatorKeysPressed = true;
    Operators.push("X");
    decimalActive = false;
    isANewNumber = true;
    break;
    case "D":
      if (OperatorKeysPressed) {
        Operators.pop();
        Operands.pop();
      }
      if (Operators.length == 0) {
        Operands.push(GhostNumber);
      } else
        if (Operators.length == 1) {
          theLastOperator = Operators.pop();
          if (theLastOperator == "P" || theLastOperator == "M") {
            Operators.push(theLastOperator);
            Operands.push(GhostNumber);
          } else {
            RightOperand = GhostNumber;
            LeftOperand = Operands.pop();
            GhostNumber = calculateThis(LeftOperand,RightOperand,theLastOperator);
            Operands.push(GhostNumber);
            p.innerHTML = formatForDisplay(GhostNumber);
          }
        }
      OperatorKeysPressed = true;
      Operators.push("D");
      decimalActive = false;
      isANewNumber = true;
      break;


    case "=":
      switch (Operators.length) {
        case 0:

          if (Operands.length == 0) {
            Operands.push(GhostNumber);
          } else {
           LeftOperand = Operands.pop();
           GhostNumber = calculateThis(LeftOperand,RightOperand,theLastOperator);
           Operands.push(GhostNumber);
           p.innerHTML = formatForDisplay(GhostNumber);
          }
          break;
        case 1:
          theLastOperator = Operators.pop();
          RightOperand = GhostNumber;
          LeftOperand = Operands.pop();
          GhostNumber = calculateThis(LeftOperand,RightOperand,theLastOperator);
          Operands.push(GhostNumber);
          p.innerHTML = formatForDisplay(GhostNumber);
          break;
        case 2:
          theLastOperator = Operators.pop();
          RightOperand = GhostNumber;
          LeftOperand = Operands.pop();
          GhostNumber = calculateThis(LeftOperand,RightOperand,theLastOperator);

          theLastOperator = Operators.pop();
          RightOperand = GhostNumber;
          LeftOperand = Operands.pop();
          GhostNumber = calculateThis(LeftOperand,RightOperand,theLastOperator);
          Operands.push(GhostNumber);
          p.innerHTML = formatForDisplay(GhostNumber);
          break;

        }
      OperatorKeysPressed = true;
      decimalActive = false;
      isANewNumber = true;
      break;
  }
}
