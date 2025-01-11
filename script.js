function check_winer(field){
    if(field[0][0] == field[0][1] && field[0][1] == field[0][2]){
        if(field[0][0] == 1){
            return "X";
        }
        if(field[0][0] == 2){
            return 'O';
        }
    }
    if(field[1][0] == field[1][1] && field[1][1]  == field[1][2]){
        if(field[1][0] == 1){
            return "X";
        }
        if(field[1][0] == 2){
            return 'O';
        }
    }
    if(field[2][0] == field[2][1] &&  field[2][1] == field[2][2]){
        if(field[2][0] == 1){
            return "X";
        }
        if(field[2][0] == 2){
            return 'O';
        }
    }
    if(field[0][0] == field[1][0] && field[1][0] == field[2][0]){
        if(field[0][0] == 1){
            return "X";
        }
        if(field[0][0] == 2){
            return 'O';
        }
    }
    if(field[0][1] == field[1][1] && field[1][1] == field[2][1]){
        if(field[0][1] == 1){
            return "X";
        }
        if(field[0][1] == 2){
            return 'O';
        }
    }
    if(field[0][2] == field[1][2] && field[1][2] == field[2][2]){
        if(field[0][2] == 1){
            return "X";
        }
        if(field[0][2] == 2){
            return 'O';
        }
    }
    if(field[0][0] == field[1][1] && field[1][1] == field[2][2]){
        if(field[0][0] == 1){
            return "X";
        }
        if(field[0][0] == 2){
            return 'O';
        }
    }
    if(field[0][2] == field[1][1] && field[1][1] == field[2][0]){
        if(field[0][2] == 1){
            return "X";
        }
        if(field[0][2] == 2){
            return "O";
        }
    }
    for(let i = 0;i<3;i++){
        for(let j = 0;j<3;j++){
            if(field[i][j] == 0){
                return "-";
            }
        }
    }
    return "XO";
}


const current_player = document.getElementById("player")
const button = document.getElementById("btn")
const winner = document.getElementById("winner")
field = [[0, 0, 0], [0, 0, 0], [0, 0, 0]]
stop = false;

const cell = document.querySelectorAll("td")
cell.forEach(element => {
    element.addEventListener("click", () => {
        row = Number(element.getAttribute("data-row"))
        column = Number(element.getAttribute("data-colomun"))
        row--;
        column--;
        if(field[row][column] == 0 && !stop){
            if(current_player.textContent == "X"){
                field[row][column] = 1;
                element.textContent = "X";
                element.style.color = "blue";
                current_player.textContent = "O";           
                current_player.style.color = "green";
            }
            else{
                field[row][column] = 2;
                element.textContent = "O";
                element.style.color = "green";
                current_player.textContent = "X";
                current_player.style.color = "blue";
            }
            if(check_winer(field) == "X"){
                winner.textContent = "Крестики выиграли!";
                stop = true;
            }
            else if(check_winer(field) == "O"){
                winner.textContent = "Нолики выиграли!";
                stop = true;
            }
            else if(check_winer(field) == "XO"){
                winner.textContent = "Ничья";
                stop = true;
            }
        }
    });
});

button.addEventListener("click", () => {
    stop = false;
    field = [[0, 0, 0], [0, 0, 0], [0, 0, 0]]
    cell.forEach(element => {
        element.textContent = "";
    });
    current_player.textContent = "X";
    current_player.style.color = "blue";
    winner.textContent = " ";
});