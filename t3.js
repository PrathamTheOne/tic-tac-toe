// prompt returns string
// let player1 = prompt("Enter player1's name: ");
// let symbol1 = prompt("Enter player1's symbol: ");
// document.querySelector("#player1").append(player1);
// document.querySelector("#player1").append(" = ");
// document.querySelector("#player1").append(symbol1);

// let player2 = prompt("Enter player2's name: ");
// let symbol2 = prompt("Enter player2's symbol: ");
// document.querySelector("#player2").append(player2);
// document.querySelector("#player2").append(" = ");
// document.querySelector("#player2").append(symbol2);
function newGame(k){
    let cl = document.createElement("button");
    cl.style.backgroundColor = "aqua";
    cl.style.color = "black";
    cl.innerHTML = "New Game";
    cl.addEventListener("click", ()=>{
        for(let j = 0; j < 9; j++){
            div[j].innerHTML = ""; 
        }
        winner.innerHTML = "";
        cl.remove();
        // for(let r = k; r < 9; r++){
        //     div[r].remove();
        // }
    });
    winner.after(cl);
}

let button = document.querySelectorAll(".box");
let div = document.querySelectorAll(".subBox");
let winner = document.querySelector("#winner");
let turn = "p1";
for(let i = 0; i < 9; i++){
    button[i].addEventListener("click", ()=>{
        if(turn === "p1"){
            var symbol = "X";
            turn = "p2";
            // console.log("player1");
            console.log(i);
        }else{
            var symbol = "O";
            turn = "p1";
            //console.log("player2");
            console.log(i);
        }    
        div[i].innerHTML = symbol;
        console.log(i);
        // console.log(symbol);
        if (
            (div[0].innerHTML === "X" && div[1].innerHTML === "X" && div[2].innerHTML === "X") ||
            (div[3].innerHTML === "X" && div[4].innerHTML === "X" && div[5].innerHTML === "X") ||
            (div[6].innerHTML === "X" && div[7].innerHTML === "X" && div[8].innerHTML === "X") ||
            (div[0].innerHTML === "X" && div[3].innerHTML === "X" && div[6].innerHTML === "X") ||
            (div[1].innerHTML === "X" && div[4].innerHTML === "X" && div[7].innerHTML === "X") ||
            (div[2].innerHTML === "X" && div[5].innerHTML === "X" && div[8].innerHTML === "X") ||
            (div[0].innerHTML === "X" && div[4].innerHTML === "X" && div[8].innerHTML === "X") ||
            (div[2].innerHTML === "X" && div[4].innerHTML === "X" && div[6].innerHTML === "X")
        ) {
            winner.innerHTML = "Player-1 wins";
            newGame(i);
        } else if (
            (div[0].innerHTML === "O" && div[1].innerHTML === "O" && div[2].innerHTML === "O") ||
            (div[3].innerHTML === "O" && div[4].innerHTML === "O" && div[5].innerHTML === "O") ||
            (div[6].innerHTML === "O" && div[7].innerHTML === "O" && div[8].innerHTML === "O") ||
            (div[0].innerHTML === "O" && div[3].innerHTML === "O" && div[6].innerHTML === "O") ||
            (div[1].innerHTML === "O" && div[4].innerHTML === "O" && div[7].innerHTML === "O") ||
            (div[2].innerHTML === "O" && div[5].innerHTML === "O" && div[8].innerHTML === "O") ||
            (div[0].innerHTML === "O" && div[4].innerHTML === "O" && div[8].innerHTML === "O") ||
            (div[2].innerHTML === "O" && div[4].innerHTML === "O" && div[6].innerHTML === "O")
        ) {
            winner.innerHTML = "Player-2 wins";
            newGame();
        }
        
    });
    // console.log(i);
}
