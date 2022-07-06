const button = document.querySelector("button");
const tip_div = document.querySelector("#output");

button.addEventListener("click", function () {
  const cost_input = document.querySelector("input");
  console.log("input:", cost_input.value);
  let tip = cost_input.value * 0.2;
  console.log("tip:", tip);
  const temp = `<h1>Tip $${tip} for cost $${cost_input.value}`;
  tip_div.innerHTML = temp;
});
