const head = document.createElement("h1");
const para = document.createElement("p");
const div = document.createElement("div");
const div1 = document.createElement("div");
const btn1 = document.createElement("input");
const btn2 = document.createElement("button");
const btn3 = document.createElement("button");
const btn4 = document.createElement("button");
const btn5 = document.createElement("button");
const btn6 = document.createElement("button");
const btn7 = document.createElement("button");
const btn8 = document.createElement("button");
const btn9 = document.createElement("button");
const btn10 = document.createElement("button");
const btn11 = document.createElement("button");
const btn12 = document.createElement("button");
const btn13 = document.createElement("button");
const btn14 = document.createElement("button");
const btn15 = document.createElement("button");
const btn16 = document.createElement("button");
const btn17 = document.createElement("button");
const btn18 = document.createElement("button");
const btn19 = document.createElement("button");
const btn20 = document.createElement("button");

head.setAttribute("id", "title");
para.setAttribute("id", "description");
div.setAttribute("id", "container");
div1.setAttribute("id", "calculator");

btn1.type = "text";
btn1.id = "result";
btn1.setAttribute("placeholder", "0");
btn2.id = "clear";
btn3.id = "back";
btn4.id = ".";
btn5.id = "multiple";
btn6.id = "7";
btn7.id = "8";
btn8.id = "9";
btn9.id = "div";
btn10.id = "4";
btn11.id = "5";
btn12.id = "6";
btn13.id = "subtract";
btn14.id = "1";
btn15.id = "2";
btn16.id = "3";
btn17.id = "add";
btn18.id = "0";
btn19.id = "00";
btn20.id = "equal";

btn2.setAttribute("onclick", "Clear()");
btn3.setAttribute("onclick", "del()");
btn4.setAttribute("onclick", "solve('.')");
btn5.setAttribute("onclick", "solve('*')");
btn6.setAttribute("onclick", "solve('7')");
btn7.setAttribute("onclick", "solve('8')");
btn8.setAttribute("onclick", "solve('9')");
btn9.setAttribute("onclick", "solve('/')");
btn10.setAttribute("onclick", "solve('4')");
btn11.setAttribute("onclick", "solve('5')");
btn12.setAttribute("onclick", "solve('6')");
btn13.setAttribute("onclick", "solve('-')");
btn14.setAttribute("onclick", "solve('1')");
btn15.setAttribute("onclick", "solve('2')");
btn16.setAttribute("onclick", "solve('3')");
btn17.setAttribute("onclick", "solve('+')");
btn18.setAttribute("onclick", "solve('0')");
btn19.setAttribute("onclick", "solve('00')");
btn20.setAttribute("onclick", "equal()");
btn2.setAttribute("onkeydown", "handlekey(event)");
btn3.setAttribute("onkeydown", "handlekey(event)");
btn4.setAttribute("onkeydown", "handlekey(event)");
btn5.setAttribute("onkeydown", "handlekey(event)");
btn9.setAttribute("onkeydown", "handlekey(event)");
btn13.setAttribute("onkeydown", "handlekey(event)");
btn17.setAttribute("onkeydown", "handlekey(event)");
btn20.setAttribute("onkeydown", "handlekey(event)");


head.innerHTML = "Calculator-DOM";
para.innerHTML = "Calculator created by DOM";
btn2.innerHTML = "C";
btn3.innerHTML = "&larr;";
btn4.innerHTML = ".";
btn5.innerHTML = "*";
btn6.innerHTML = "7";
btn7.innerHTML = "8";
btn8.innerHTML = "9";
btn9.innerHTML = "/";
btn10.innerHTML = "4";
btn11.innerHTML = "5";
btn12.innerHTML = "6";
btn13.innerHTML = "-";
btn14.innerHTML = "1";
btn15.innerHTML = "2";
btn16.innerHTML = "3";
btn17.innerHTML = "+";
btn18.innerHTML = "0";
btn19.innerHTML = "00";
btn20.innerHTML = "=";

div.appendChild(div1);
div1.append(
  btn1,
  btn2,
  btn3,
  btn4,
  btn5,
  btn6,
  btn7,
  btn8,
  btn9,
  btn10,
  btn11,
  btn12,
  btn13,
  btn14,
  btn15,
  btn16,
  btn17,
  btn18,
  btn19,
  btn20
);
document.body.append(head, para, div);

var output = document.getElementById("result");

function solve(val) {
  output.value += val;
}

function equal() {
  try {
    output.value = eval(output.value);
  } catch (error) {
    output.value = "Invalid";
    alert("ONLY NUMBERS ARE ALLOWED");
  }
}
function Clear() {
  output.value = "";
}
function del() {
  output.value = output.value.slice(0, -1);
}