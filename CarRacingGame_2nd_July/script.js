function startPlay() {
    let start = document.getElementById('playbtn');
    if (start.innerHTML === 'Play') {
        start.innerHTML = 'Stop';

        start.style.backgroundColor = 'rgb(212, 200, 24)';

        let flag = 2;
        let left = 37;
        let right = 39;

        let gear = 1;
        let time = 1;
        let speed = 8;
        let gearscore = document.getElementById('gearcard');
        gearscore.innerHTML = gear;

        document.addEventListener('keydown', function(e) {
            let car = document.getElementById('canvas');

            if (e.keyCode == right) {
                switch (flag) {
                    case 1:
                        car.style.left = '304px';
                        flag = 2;

                        break;
                    case 2:
                        car.style.left = '515px';
                        flag = 3;
                        break;
                }
            }

            if (e.keyCode == left) {
                switch (flag) {
                    case 2:
                        car.style.left = '80px';
                        flag = 1;
                        break;
                    case 3:
                        car.style.left = '304px';
                        flag = 2;
                        break;
                }
            }
            let gearscore = document.getElementById('gearcard');

            if (e.keyCode == 38) {
                switch (gear) {
                    case 1:
                        time = 2;
                        gear++;
                        speed = 5;
                        gearscore.innerHTML = gear;
                        break;
                    case 2:
                        time = 3;
                        gear++;
                        speed = 3;
                        gearscore.innerHTML = gear;
                        break;
                    case 3:
                        time = 5;
                        gear++;
                        speed = 1;
                        gearscore.innerHTML = gear;
                        break;
                }
            }
            if (e.keyCode == 40) {
                switch (gear) {
                    case 2:
                        time = 1;
                        gear--;
                        speed = 8;
                        gearscore.innerHTML = gear;
                        break;

                    case 3:
                        time = 2;
                        gear--;
                        speed = 5;
                        gearscore.innerHTML = gear;
                        break;

                    case 4:
                        time = 3;
                        gear--;
                        speed = 3;
                        gearscore.innerHTML = gear;
                        break;
                }
            }
        });

        let score = document.getElementById('score').value;

        setInterval(function() {
            current_score = parseInt(document.getElementById('score').value);
            current_score = current_score + time;
            document.getElementById('score').value = current_score;
            document.getElementById('scorecard').innerHTML = current_score;
        }, 3000);
        moveDivider1(speed);
        moveDivider2(speed);
        setInterval(moveCarContinue, 3800);

        function moveCarContinue() {
            setTimeout(moveCar, 1);

            function moveCar() {
                let x = randomNumber(1, 7);
                switch (x) {
                    case 1:
                        movecar2(speed);
                        movecar3(speed);
                        break;
                    case 2:
                        movecar1(speed);
                        movecar3(speed);
                        break;
                    case 3:
                        movecar3(speed);
                        break;
                    case 4:
                        movecar1(speed);
                        movecar2(speed);
                        break;
                    case 5:
                        movecar2(speed);
                        break;
                    case 6:
                        movecar1(speed);
                        break;
                }
            }
        }
    } else if (start.innerHTML === 'Stop') {
        alert('Game Finished');
        start.innerHTML = 'Play';
        window.location.reload();
    }
}

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function checkCollision(x) {
    if (x) {
        alert('Game Over');
        window.location.reload();
    }
}

function movecar1(speed) {
    let ourcar = document.getElementById('canvas');
    let ourcar_height = ourcar.offsetHeight;
    let x = speed;
    let pos1 = 0;

    let id1 = setInterval(frame1, x);

    function frame1() {
        if (pos1 == 500) {
            clearInterval(id1);
        } else {
            pos1 = pos1 + 1;
            let ourcar_width1 = ourcar.offsetLeft;
            if (400 - pos1 <= ourcar_height && ourcar_width1 == 80) {
                let collison = true;
                checkCollision(collison);
            } else {
                document.getElementById('cops1').style.top = pos1 + 'px';
            }
        }
    }
}

function movecar2(speed) {
    let ourcar = document.getElementById('canvas');
    let ourcar_height = ourcar.offsetHeight;
    let x = speed;
    let pos2 = 0;
    let id2 = setInterval(frame2, x);

    function frame2() {
        if (pos2 == 500) {
            clearInterval(id2);
        } else {
            pos2 = pos2 + 1;
            let ourcar_width2 = ourcar.offsetLeft;
            console.log(400 - pos2);
            if (400 - pos2 <= ourcar_height && ourcar_width2 == 304) {
                let collison2 = true;
                checkCollision(collison2);
            } else {
                document.getElementById('cops2').style.top = pos2 + 'px';
            }
        }
    }
}

function movecar3(speed) {
    let ourcar = document.getElementById('canvas');
    let ourcar_height = ourcar.offsetHeight;
    x = speed;
    let pos3 = 0;
    let id3 = setInterval(frame3, x);

    function frame3() {
        if (pos3 == 500) {
            clearInterval(id3);
        } else {
            pos3 = pos3 + 1;
            let ourcar_width3 = ourcar.offsetLeft;
            if (400 - pos3 <= ourcar_height && ourcar_width3 == 515) {
                let collison3 = true;
                checkCollision(collison3);
            } else {
                document.getElementById('cops3').style.top = pos3 + 'px';
            }
        }
    }
}

function moveDivider1(speed) {
    let lane = document.getElementById('divider1_id');
    x = 5;
    setInterval(frame4, x);
    pos4 = 0;

    function frame4() {
        if (pos4 == 500) {
            pos4 = 0;
        } else {
            pos4 = pos4 + 1;
            lane.style.top = pos4 + 'px';
        }
    }
}

function moveDivider2(speed) {
    let lane2 = document.getElementById('divider2_id');
    x = 5;
    setInterval(frame5, x);
    pos5 = 0;

    function frame5() {
        if (pos5 == 500) {
            pos5 = 0;
        } else {
            pos5 = pos5 + 1;

            lane2.style.top = pos5 + 'px';
        }
    }
}