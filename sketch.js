/*
    Create a functional Etch a sketch with javascript html and css
    Sept 4th 2026
*/


const squaresDiv = document.querySelector(".squaresContainer")
const gridSizeButton = document.querySelector("#gridSizeButton")


//generate a specific # of square shaped divs in div container
function generateSquares (numOfSquares) {
    if (numOfSquares > 100) numOfSquares = 100;
    for (let i = 0; i < numOfSquares; i++) {
        const squareRow = document.createElement("div")
        for (let j = 0; j < numOfSquares; j++) {
            const square = document.createElement("div")
            square.textContent = "TEST"
            square.classList.add("square")
            squareRow.appendChild(square)
        }
        squaresDiv.appendChild(squareRow)
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