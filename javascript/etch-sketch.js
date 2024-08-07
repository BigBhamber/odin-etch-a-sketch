

const initSize = 16;

function genGrid(size) {
    //this function generates the board and populates it with squares with hover event listeners.
    const container = document.querySelector("#container");

    
    for (let i = 0;i<size; i++){
        for (let x = 0;x<size;x++){
        const divbox = document.createElement("div");
        divbox.classList.add("grid")
        divbox.style.backgroundColor = "violet";
        divbox.addEventListener("mouseover",setColor)
        container.appendChild(divbox);
        }
    }

}

genGrid(initSize)
function setColor(){

    //this function sets the color upon hover on a color.
    let x = Math.floor(Math.random()*256);
    let y = Math.floor(Math.random()*256);
    let z = Math.floor(Math.random()*256);
    let backgroundColor = "rgb("+x+","+y+","+z+")";
    this.style.backgroundColor = backgroundColor

}