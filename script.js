const buttons = document.querySelectorAll(".btn-area > div");

const buttonsArg = Array.from(buttons);

const display = document.querySelector(".display");

let strToDisplay = ""; //empty string

const operators = ["+", "-", "/", "*"];
let lastOperator = "";

buttonsArg.map((btn) => {
  btn.addEventListener("click", () => {
    const val = btn.innerText;

    console.log(val);

    if (val === "AC") {
      strToDisplay = "";
      display();
      return;
    }

    if (val === "=") {
      const lastChar = strToDisplay[strToDisplay.length - 1];
      if (operators.includes(lastChar)) {
        strToDisplay = strToDisplay.slice(0, -1);
      }

      return total();
    }

    if (val === "C") {
      const strToDisplay = strToDisplay.slice(0, -1); // slice takes two argument
      return display(strToDisplay);
    }

    if (operators.includes(val)) {
      alert("You Cliecked an Operator");
      const lastChar = strToDisplay[strToDisplay.length - 1];
      if (operators.includes(lastChar)) {
        strToDisplay = strToDisplay.slice(0, -1);
        strToDisplay += val;

        return display(strToDisplay);
      }
    }

    if (val === ".") {
      if (lastOperator) {
        const operatorIndex = strToDisplay.lastIndexOf(lastOperator);
        const lastNumberSet = strToDisplay.slice(operatorIndex + 1);
        console.log(strToDisplay, lastNumberSet);
      }
    }

    strToDisplay += val;

    display(strToDisplay);
    console.log(strToDisplay);
  });
});

const display = (str) => {
  displayElm.innerText = str;
};

const display = (str) => {
  displayElm.innerText = str || "0.00";
};

const total = () => {
  const ttl = eval(strToDisplay);
  display(ttl);
  strToDisplay = "";
};
