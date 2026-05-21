"source: https://youtu.be/j7OhcuZQ-q8?si=S7YIcCH6DIUHAzOG"
document.addEventListener("DOMContentLoaded", () => {
    createSquares();

    function createSquares() {
        const gameBoard = document.getElementById("board")
            
        for (let index = 0; index < 30; index++) {
            let square = document.createElement("div")
            square.classList.add("square")
            square.setAttribute("id", index + 1);
            gameBoard.appendChild(square);
        }
    }
})