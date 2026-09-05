/*
    Create a functional Etch a sketch with javascript html and css
    Sept 4th 2026

    Toggle Grid Outline for squares
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
const toggleHoldButton = document.querySelector("#toggleHoldButton")
const toggleGridButton = document.querySelector("#toggleGridButton")
let cubeTimeout = CUBE_TIMEOUT_DEFAULT;
let rainbowColor = false;
let holdToggle = false;

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

function colorCube(event) {
    if (rainbowColor) {
        const randomColor = `rgb(${randomNum(256)},${randomNum(256)},${randomNum(256)})`
        event.target.style.backgroundColor = randomColor;
    
    } else {
        event.target.style.backgroundColor = CUBE_COLOR_HOVER;
    }
}

//only color when mouse is being held down on squares
function checkCube(event) {
    if (event.target.classList.contains("square")) colorCube(event)
}

function restoreCubeColor(event) {
    setTimeout(function(){
        event.target.style.backgroundColor = CUBE_COLOR_DEFAULT;
    }, cubeTimeout)
}

function dragCube(event) {
    //check that on a cube and color it
    checkCube(event)
    //set timeout immediately
    restoreCubeColor(event)
}
//EVENT LISTENERS
//Mouse Events
squaresDiv.addEventListener("mouseover", (event) => {
    //if toggle enabled only draw while holding left mouse button
    if(holdToggle) {
        if(event.buttons == 1 || event.buttons == 3){
            colorCube(event);
        }
    } else {
        colorCube(event);
    }
    
})
squaresDiv.addEventListener("mouseout", restoreCubeColor)
squaresDiv.addEventListener("mousedown", checkCube)//when clicking cubes directly
squaresDiv.addEventListener("dragover", dragCube)//when dragging over cubes


//Button Events
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
gridSizeButton.addEventListener("click", () => {
    const numOfSquares = prompt("Please enter a number less than 100")

    //remove current grid and create new grid with designated num 
    removeSquares();
    generateSquares(numOfSquares)
})
toggleHoldButton.addEventListener("click", () => {
    holdToggle = holdToggle ? false: true;
})
toggleGridButton.addEventListener("click", () => {
    for (const square of Array.from(squaresDiv.children)) {
        square.classList.toggle("outline")
    }
})
toggleRainbowButton.addEventListener("click", () => {
    rainbowColor = rainbowColor ? false: true;
})


generateSquares(16)