let col_1 = [1,2,3,4,5,6]; let col_2 = []; let col_3 = []; let col_4 = []; let col_5 = []; let col_6 = []; let col_7 = [];
let line = [col_1, col_2, col_3, col_4, col_5, col_6, col_7];
let player = 0;

document.getElementById("button_col_1").addEventListener("click", function selectButton(col_1){});
document.getElementById("button_col_2").addEventListener("click", function selectButton(col_2){});
document.getElementById("button_col_3").addEventListener("click", function selectButton(col_3){});
document.getElementById("button_col_4").addEventListener("click", function selectButton(col_4){});
document.getElementById("button_col_5").addEventListener("click", function selectButton(col_5){});
document.getElementById("button_col_6").addEventListener("click", function selectButton(col_6){});
document.getElementById("button_col_7").addEventListener("click", function selectButton(col_7){});

function selectButton(column) {
    console.log("sono dentro");
    for (let pos = 1; pos <= 6; pos++) {
        if (line.includes(column.includes(pos))) {
            console.log(pos);
            column.push(pos);
            putSymbol(column, pos, player);
            break;
        }
    }

    document.getElementById("vincita").addEventListener()
    
}

function putSymbol(column, line, player) {
    if(player == 0){
        document.getElementById(column + " ln_" + line).classList.add("bg-danger");
        player++;
    } else {
        document.getElementById(col_1 + " ln_" + line).classList.add("bg-primary");
        player--;
    }
}