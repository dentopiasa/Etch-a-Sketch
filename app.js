const DEFAULT_SIZE = 16;
const container = document.querySelector(".container");
const btn = document.querySelector(".btn");

//create div
function setupGrid(size) {  
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;  
    for (i = 0; i <size*size; i++) {
    const div = document.createElement("div");
    div.className = ("box");
    container.appendChild(div);
    const boxes = document.querySelectorAll(`.box`);    
    boxes.forEach(item => item.addEventListener("mouseover", (e) => {
    item.style.backgroundColor = "black";
    }))
    }};   
//refresh btn
btn.addEventListener("click", function() {
    container.innerHTML = '';
    let squPS = prompt("enter number of squares per side", 16);
    setupGrid(squPS);
});
//DEFAULT 
window.onload = () => {
    setupGrid(DEFAULT_SIZE)
};
