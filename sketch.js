/*
    Create a functional Etch a sketch with javascript html and css
    Sept 4th 2026
*/


const squaresDiv = document.querySelector(".squaresContainer")
const gridSizeButton = document.querySelector("#gridSizeButton")


//generate a specific # of square shaped divs in div container
function generateSquares (numOfSquares) {
    if (numOfSquares > 100) numOfSquares = 100;
    //calculate the size of each square
    const squareSize = squaresDiv.clientWidth / numOfSquares
    for (let i = 0; i < numOfSquares * numOfSquares; i++) {
            const square = document.createElement("div")
            square.classList.add("square")
            square.style.width = `${squareSize}px`;
            square.style.height = `${squareSize}px`;
            squaresDiv.appendChild(square)
    }
}

function removeSquares () {
    //remove every child of squares container 
    while(squaresDiv.firstChild){
        squaresDiv.firstChild.remove();
    }
}

gridSizeButton.addEventListener("click", (event) => {
    console.log(event.target.id)
    const numOfSquares = prompt("Please enter a number less than 100")

    //remove current grid
    removeSquares();
    generateSquares(numOfSquares)
})




generateSquares(16)