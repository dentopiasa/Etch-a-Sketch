const container = document.querySelector(".container");
const btn = document.querySelector(".btn");

//create div
function setupGrid(size) {  
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;  
    for (i = 0; i <size*size; i++) {
    const div = document.createElement("div")
    div.className = "box";
    container.appendChild(div)
    }};   
  

//paint boxes on mouseover
const boxes = document.querySelectorAll(".box");    
boxes.forEach(box => box.addEventListener("mouseover", (e) => {
    changeColor(box);
}));
const changeColor = (box) => {
    box.style.backgroundColor = "black";
}
//refresh btn
btn.addEventListener("click", function() {
    container.innerHTML = '';
    let squPS = prompt("enter number of squares per side", 16);
    setupGrid(squPS);
});


