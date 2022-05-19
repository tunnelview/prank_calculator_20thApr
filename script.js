const buttons = document.querySelectorAll(".btn-area > div");

const buttonsArg = Array.from(buttons);

let strToDisplay = ""; //

buttonsArg.map((btn) => {
  btn.addEventListener("click", () => {
    const val = btn.innerText;

    console.log(val);

    strToDisplay += val;
    console.log(strToDisplay);
  });
});
