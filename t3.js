function checkWinner(){
    const patterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5 ,8],
        [0, 4, 8], [2, 4, 6]
    ];
    for(let pattern of patterns){
        let value1 = box[pattern[0]].innerHTML;
        let value2 = box[pattern[1]].innerHTML;
        let value3 = box[pattern[2]].innerHTML;
        if(value1 != "" && value2 != "" && value3 != ""){
            if(value1 === value2 && value2 === value3){
                turnH.style.display = "none";
                winner.innerHTML = "Winner is <br>" + value1;
                winner.style.fontSize = "5.5em";
                winner.style.textAlign = "center";
                disable();
                newGame();
            }
        }
    }
}
function disable(){
    for(let i = 0; i < 9; i++){
        box[i].disabled = true; 
    }
}
function newGame(){
    let NGbutton = document.createElement("button");
    winner.append(NGbutton);
    NGbutton.innerHTML = "New Game";
    NGbutton.addEventListener("click", () => {
        for(let i = 0; i < 9; i++){
            box[i].disabled = false;
            box[i].innerHTML = "";
        }
        winner.innerHTML = "";
        turnH.style.display = "block";
        playersTurn.innerHTML = "";
        turn = true;
    });
}
function Reset(){
    resetB.addEventListener("click", ()=>{
        for(let i = 0; i < 9; i++){
            box[i].disabled = false;
            box[i].innerHTML = "";
        }
        turn = true;
        playersTurn.innerHTML = "";
    });
}
let box = document.querySelectorAll(".box");
let playersTurn = document.querySelector(".turn");
let winner = document.querySelector(".winner");
let turnH = document.querySelector(".turnH");
let resetB = document.querySelector(".reset");

let player1 = "X";
let player2 = "O";
let turn = true;
Reset();
for(let i = 0; i < 9; i++){
    box[i].addEventListener("click", () => {
        if(turn === true){
            box[i].innerHTML = player1;
            playersTurn.innerHTML = player2;
            turn = false;
        } else {
            box[i].innerHTML = player2;
            playersTurn.innerHTML = player1;
            turn = true;
        }
        box[i].disabled = true;
        checkWinner();
    });
}