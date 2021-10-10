const count = document.querySelector(".count");
const buttons = document.querySelector(".buttons")

// VARIABLE FOR MULTIPLE EVENT LISTENERS
// const subtract = document.querySelector(".subtract");
// const reset = document.querySelector(".reset");
// const add = document.querySelector(".add");

// subtract.addEventListener("click", function() {
//   count.innerHTML--;
// })
// reset.addEventListener("click", function() {
//   count.innerHTML = 0;
// })
// add.addEventListener("click", function() {
//   count.innerHTML++;
// })


// SINGLE EVENT LISTENER ON PARENT ELEMENT
buttons.addEventListener("click", function(e) {
  if (e.target.classList.contains("subtract")) {
    count.innerHTML--;
    setColor();
  }
  else if (e.target.classList.contains("reset")) {
    count.innerHTML = 0;
    setColor();
  }
  else if (e.target.classList.contains("add")) {
    count.innerHTML++;
    setColor();
    
  }
})

function setColor() {
  if (count.innerHTML > 0) {
    count.style.borderColor = "greenyellow";
  }
  else if (count.innerHTML < 0) {
    count.style.borderColor = "orangered";
  }
  else {
    count.style.borderColor = "black";
  }
}