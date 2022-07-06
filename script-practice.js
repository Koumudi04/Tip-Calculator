const btn = document.querySelector("#btn1");
btn.innerHTML = "<h1>TIP</h1>";

const btnall = document.querySelectorAll("button");
btnall[0].innerHTML = "<p>Div-output</p>";
btnall[1].innerHTML = "<p>Div-input-output</p>";

const div = document.querySelector("#output");
btn.addEventListener("click", function () {
  div.innerText = "ouptut";
  console.log("done div");
});

btnall[1].addEventListener("click", function () {
  const input = document.querySelector("input");
  div.innerText = input.value * 5;
  console.log(input.value);
});
