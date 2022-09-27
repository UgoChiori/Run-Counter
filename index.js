//Start train station counter

let countEl = document.getElementById("count-el"); // pass in argument
let saveEl = document.getElementById("save-el");

let count = 0;

function increment() {
  count += 1;
  countEl.textContent = count;
}

// 1. Create a function, save(), which logs out the count when it's called

function save() {
    let countStr = count + " - ";
  saveEl.textContent += countStr
  countEl.textContent = 0
  count = 0
}

// 2. Create a function, reset() which resets counter when it is called
function reset() {
  count = 0;
  saveEl.textContent = "Previous entries: " + count;
}

// End train station counter

