let display = document.getElementById("display");

function append(char) {
  if(display.value == "Error" || display.value == "Infinity"){
  display.value = "";
  }
  display.value += char;
}

function clearDisplay() {
  display.value = "";
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch (e) {
    display.value = "Error";
  }
}
