var idVar = setInterval(() => {
  setBGColor()
}, 3000);

function setBGColor() {
  const randomColor = Math.floor(Math.random()*16777215).toString(16);
  document.body.style.backgroundColor = "#" + randomColor;
  color.innerHTML = "#" + randomColor;
}

document.getElementById("stop").addEventListener("click", stopFunc);

function stopFunc() {
  clearInterval(idVar);
}
