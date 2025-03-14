let human = 0;
let computer = 0;
let iteration = 0;


function start() {
    let start = document.getElementById("starter");
    start.style.cssText = 'top : -135px; transform : scale(0.1) ;visibility:hidden';
    event();
}

function Display_selection (value,res){
    const choices = ['stone', 'scissor', 'paper'];
    document.getElementById("four").innerHTML = `<img src='images/${choices[value]}.png'>`;
    document.getElementById("result").innerHTML = `<img src='images/${choices[res]}.png'>`;
}

function user() {
    let value = this.value;
    let res = Math.floor(Math.random() * 3);
    let popup = document.getElementById("popup");
    iteration += 1;
    if (iteration <= 3) {
        console.log(value)
        Display_selection(value, res)
       
                

        if (value == res) {
            human += 1;
            computer += 1;
        }
        else if ((value == 0 && res == 2) || (value == 1 && res == 0) || (value == 2 && res == 1)) {
            computer += 1;
        }
        else if ((value == 0 && res == 1) || (value == 1 && res == 2) || (value == 2 && res == 0)) {
            human += 1;
        }



        // showing star for human

        switch(human){
            case 1:
                document.getElementById("h1").innerHTML = "<img src='images/star.webp'>";
                break;
            case 2:
                document.getElementById("h2").innerHTML = "<img src='images/star.webp'>";
                break;
            case 3:
                document.getElementById("h3").innerHTML = "<img src='images/star.webp'>";
                break;
        }
        // showing star for computer

        switch(computer){
            case 1:
                document.getElementById("c1").innerHTML = "<img src='images/star.webp'>";
                break;
            case 2:
                document.getElementById("c2").innerHTML = "<img src='images/star.webp'>";
                break;
            case 3:
                document.getElementById("c3").innerHTML = "<img src='images/star.webp'>";
                break;
        }

        // result

        if (iteration == 3) {
            if (computer == human) {
                document.getElementById("1").innerHTML = "<img src='images/download (2).png'>"//draw
            }
            else if (computer > human) {
                document.getElementById("1").innerHTML = "<img src='images/lose.png'>" //loss
            }
            else if (computer < human) {
                document.getElementById("1").innerHTML = "<img src='images/win.png'>"//win

            }


            popup.style.cssText = 'top : 250px; transform : scale(1) ;visibility:visible';

        }
    }
}

let button = document.getElementsByClassName("button");
function event(){
for (var i = 0; i < 3; i++) {
    button[i].addEventListener("click", user);
}
}
