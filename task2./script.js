const button = document.getElementById("btn__element");
const state = document.getElementById("btn__status");
let count = 0;

button.addEventListener("click", () => {
  count++;
  state.innerHTML = count;
});
