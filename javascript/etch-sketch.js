

const initSize = 16;

function genGrid(size) {
    //this function generates the board and populates it with squares with hover event listeners.
    const container = document.querySelector("#container");

    
    for (let i = 0;i<(size*size); i++){
        const divbox = document.createElement("div");
        divbox.classList.add("grid")
        divbox.style.backgroundColor = "violet";
        divbox.addEventListener("click",setColor)
        

        container.appendChild(divbox);
        
    }
    let newHeight = newWidth = 380 / size ;
    const newDivs = document.querySelectorAll('.grid');
    newDivs.forEach(element => {
        element.style.height = newHeight.toString() + "px";
        element.style.width = newWidth.toString() + "px";
      
    })

    //adjust size of grid to fit new size.

}
function setColor(){

    //this function sets the color upon hover on a color.

    this.style.backgroundColor = "rgb(0,0,0)"

}
function hoverColor(){

    //this function sets the color upon hover on a color.
    this.style.backgroundColor = "rgb(216, 112, 147)";

}
function resetColor(){

    //this function sets the color upon hover on a color.
    this.style.backgroundColor = "rgb(238, 130, 238";

}

genGrid(initSize)

const resetBtn = document.querySelector("#reset");

resetBtn.addEventListener("click",()=> {
    let size = prompt("Select grid size (2-100)")
    validateInput(parseInt(size));
});
function clearBoard()
{
    const board = document.querySelector("#container")
    let child = board.lastElementChild
    while(child)
    {
        board.removeChild(child);
        child = board.lastElementChild;
    }
}
function validateInput(size)
{
    //this function validates users input
    if (Number.isInteger(size))
    {
        //check if number is within 2 and 100
        if (size>1 && size<100)
        {
            //call initialize board function and delete old board function
            clearBoard();
            genGrid(size);

        }
        else{
            // generate board with 16 size again (put error message in console log)
            console.log("Invalid input will generate with base case")
            clearBoard()
            genGrid(16);
            
        }
    }
    else{
        //invalid case with generate with 16
        console.log("Invalid input will generate with base case");
        clearBoard()
        genGrid(16);
    }
}