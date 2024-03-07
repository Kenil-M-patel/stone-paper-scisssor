let human = 0;
let computer = 0;
let iteration = 0;


function start() {
    let start = document.getElementById("starter");
    start.style.cssText = 'top : -135px; transform : scale(0.1) ;visibility:hidden';
    event();

}

function user() {
    let value = this.value;
    console.log(value);
    let res = Math.floor(Math.random() * 3);
    console.log(res);
    let popup = document.getElementById("popup");


    iteration += 1;


    if (iteration <= 3) {


        // your own input shown 
        if (value == 0) {

            document.getElementById("four").innerHTML = "<img src='images/stone.png'>"

        }
        else if (value == 1) {
            document.getElementById("four").innerHTML = "<img src='images/scissor.png' >"


        } else if (value == 2) {
            document.getElementById("four").innerHTML = "<img src='images/paper.png'>"

        }





        if (res == 0) {

            document.getElementById("result").innerHTML = "<img src='images/stone.png'>"

        }
        else if (res == 1) {
            document.getElementById("result").innerHTML = "<img src='images/scissor.png' >"


        } else if (res == 2) {
            document.getElementById("result").innerHTML = "<img src='images/paper.png'>"
        }

        // point counting        

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

        if (human == 1) {
            document.getElementById("h1").innerHTML = "<img src='images/star.webp'>";

        }
        else if (human == 2) {
            document.getElementById("h2").innerHTML = "<img src='images/star.webp'>";
        }
        else if (human == 3) {
            document.getElementById("h3").innerHTML = "<img src='images/star.webp'>";

        }

        // showing star for computer

        if (computer == 1) {
            document.getElementById("c1").innerHTML = "<img src='images/star.webp'>";
        }
        else if (computer == 2) {
            document.getElementById("c2").innerHTML = "<img src='images/star.webp'>";
        }
        else if (computer == 3) {
            document.getElementById("c3").innerHTML = "<img src='images/star.webp'>";

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
    else {
        console.log("round is over ")
    }
}

let button = document.getElementsByClassName("button");


function event(){
for (var i = 0; i < 3; i++) {


    button[i].addEventListener("click", user);

}
}
