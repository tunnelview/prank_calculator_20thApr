document.querySelectorAll(".btn-area > div");
console.log(buttons);

buttons.map((btn, i) => {
  btn.addEventListener("click", () => {
    const val = btn.innerText;

    //   const val = btn.innerText; to see the inner text of each button on console
    console.log(btn);
  });
});
