

const initSize = 16;

function genGrid(size) {
    const container = document.querySelector("#container");

    let numLoops = size*size;
    for (let i =0;i<numLoops; i++){
        const divbox = document.createElement("div");
        divbox.classList.add("grid")
        container.appendChild(divbox);
    }

}

genGrid(initSize)