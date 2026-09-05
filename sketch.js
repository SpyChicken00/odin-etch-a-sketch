/*
    Create a functional Etch a sketch with javascript html and css
    Sept 4th 2026

    Additinal Ideas- Enable draw only while holding mouseButton
    Add Opacity Effect
    Update Styling CSS and HTML - lower buttons
*/

const CUBE_COLOR_DEFAULT = "rgb(197, 198, 198)"
const CUBE_COLOR_HOVER = "rgb(28, 28, 28)"
const CUBE_TIMEOUT_DEFAULT = 2000;
const squaresDiv = document.querySelector(".squaresContainer")
const gridSizeButton = document.querySelector("#gridSizeButton")
const timeOutButton = document.querySelector("#timeOutButton")
const toggleRainbowButton = document.querySelector("#toggleRainbowButton")
let cubeTimeout = CUBE_TIMEOUT_DEFAULT;
let rainbowColor = false;

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
//generate a random number from 0 to max-1  
function randomNum (max) {
    return Math.floor(Math.random() * max)
}

//EVENT LISTENERS
//Mouse enter and Mouse exit creates a hover effect
//add handler to squaresDiv parent, let event bubble to parent
squaresDiv.addEventListener("mouseover", (event) => {
    if (rainbowColor) {
        const randomColor = `rgb(${randomNum(256)},${randomNum(256)},${randomNum(256)})`
        event.target.style.backgroundColor = randomColor;
        
    } else {
        event.target.style.backgroundColor = CUBE_COLOR_HOVER;
    }
})
squaresDiv.addEventListener("mouseout", (event) => {
    setTimeout(function(){
        event.target.style.backgroundColor = CUBE_COLOR_DEFAULT;
    }, cubeTimeout)
})

//Buttons
timeOutButton.addEventListener("click", () => {
    const val = parseInt(prompt("How many seconds?"))
    //check that valid number 
    if (Number.isInteger(val) && val > 0) {
        cubeTimeout = val * 1000
    } else {
        console.log(`invalid number, reset to default: ${CUBE_TIMEOUT_DEFAULT / 1000} seconds`)
        cubeTimeout = CUBE_TIMEOUT_DEFAULT;
    }

})
toggleRainbowButton.addEventListener("click", () => {
    rainbowColor = rainbowColor ? false: true;
})
gridSizeButton.addEventListener("click", () => {
    const numOfSquares = prompt("Please enter a number less than 100")

    //remove current grid and create new grid with designated num 
    removeSquares();
    generateSquares(numOfSquares)
})



generateSquares(16)