const start_game_field = document.getElementsByClassName("start_game")[0]
const btn3 = document.getElementById("btn3")
const btn4 = document.getElementById("btn4")
const to_game = document.getElementsByClassName("container")[0]

btn3.addEventListener("click", () => {
    start_game_field.style.display = "none";
    to_game.style.display= "flex";
    field = [[0, 0, 0], [0, 0, 0], [0, 0, 0]]
    game()
    len = 3
});

btn4.addEventListener("click", () => {
    start_game_field.style.display = "none";
    to_game.style.display= "flex";
    const board = document.getElementById("field")
    const rows = [...board.rows];
    rows.forEach((row, index) => {
        row.innerHTML += `<td  data-row="${index+1}" data-colomun="4"></td>`;
    });
    const newRow = 
                '<td data-row="4" data-colomun="1">  </td> <td data-row="4" data-colomun="2"> </td> <td data-row="4" data-colomun="3">  </td> <td data-row="4" data-colomun="4">  </td>'
    document.getElementById("field").insertAdjacentHTML('beforeend', newRow);
    field = [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]]
    len = 4
    game()
});


function check_winer(field){
    for(let i = 0; i < len;i++){
        for(let j = 0;j<len-2;j++){
            if(field[i][j] == field[i][j + 1] && field[i][j + 1] == field[i][j + 2]){
                if(field[i][j] == 1){
                    return "X";
                }
                if(field[i][j] == 2){
                    return 'O';
                }
            }
        }
    }
    for(let i = 0; i < len - 2;i++){
        for(let j = 0;j<len;j++){
            if(field[i][j] == field[i + 1][j] && field[i + 1][j] == field[i + 2][j]){
                if(field[i][j] == 1){
                    return "X";
                }
                if(field[i][j] == 2){
                    return 'O';
                }
            }
        }
    }
    for(let i = 0; i < len - 2;i++){
        for(let j = 0;j<len-2;j++){
            if(field[i][j] == field[i  + 1][j + 1] && field[i + 1][j + 1] == field[i + 2][j + 2]){
                if(field[i][j] == 1){
                    return "X";
                }
                if(field[i][j] == 2){
                    return 'O';
                }
            }
        }
    }
    for(let i = 0; i < len - 2;i++){
        for(let j = 0;j<len-2;j++){
            if(field[i + 2][j] == field[i  + 1][j + 1] && field[i + 1][j + 1] == field[i][j + 2]){
                if(field[i + 2][j] == 1){
                    return "X";
                }
                if(field[i + 2][j] == 2){
                    return 'O';
                }
            }
        }
    }
    for(let i = 0;i<len;i++){
        for(let j = 0;j<len;j++){
            if(field[i][j] == 0){
                return "-";
            }
        }
    }
    return "XO";
}

function game(){
    const current_player = document.getElementById("player")
    const button = document.getElementById("btn")
    const winner = document.getElementById("winner")
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
        console.log(field.lenght)
        for(let i = 0; i < len;i++){
            for(let j = 0;j<len;j++){
                field[i][j] = 0;
            }
        }
        cell.forEach(element => {
            element.textContent = "";
        });
        current_player.textContent = "X";
        current_player.style.color = "blue";
        winner.textContent = " ";
    });

}