

const initSize = 16;

function genGrid(size) {
    const container = document.querySelector("#container");

    
    for (let i = 0;i<size; i++){
        for (let x = 0;x<size;x++){
        const divbox = document.createElement("div");
        divbox.classList.add("grid")
        container.appendChild(divbox);
        }
    }

}

genGrid(initSize)