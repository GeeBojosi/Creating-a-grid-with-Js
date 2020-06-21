let container = document.querySelector(".container");
let resetBtn = document.getElementById("clearGrid");
let gridSize = document.querySelector("input");
let size = 16;

function makeGrid(size){
    container.style.setProperty('--grid-rows', size);
    container.style.setProperty('--grid-cols', size);
    //add the divs
    for(let i = 0; i < size * size; i++){
        let div = document.createElement("div");
        div.classList.add("square");
        container.appendChild(div);    
    }
    drawGrid();
    reset();
}


//hover over the divs

function drawGrid(){
    const squares = document.querySelectorAll(".square");

    for(let i = 0; i < squares.length; i++){
        squares[i].addEventListener("mouseover", function(){
            this.classList.add("changeColor");
        });
    }
}

function reset(){
    const squares = document.querySelectorAll(".square");

    for(let i = 0; i < squares.length; i++){
    
        resetBtn.addEventListener("click", function(){
            squares[i].classList.remove("changeColor");
        });
    }
}


gridSize.addEventListener("change", function(){
    
    size = this.value;

    if(size === isNaN){
        size === 16;
    }

    makeGrid(size);
});







