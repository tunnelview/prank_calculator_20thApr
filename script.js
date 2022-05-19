const buttons = document.querySelectorAll(".btn-area > div");

const buttonsArg = Array.from(buttons);

const display = document.querySelector(".display");

let strToDisplay = ""; //

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
      return total();
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
};
