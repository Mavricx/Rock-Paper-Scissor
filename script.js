const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissor = document.getElementById('scissor');
const pc_sign = document.querySelector('.one')
const you_sign = document.querySelector('.two');
const again_btn = document.getElementById('again');
const result = document.getElementById('result');

let pc;
let you;
let streak = 0;
let winner;
let col;

function streakUpdate() {
    document.getElementById('streak').innerHTML = `<b>Streak:${streak}</b>`;
}

function win() {
    col = 'rgba(8,244,63,0.904)';
    winner = "You've Won"
    ++streak;

}

function lose() {
    col = `rgba(244, 8, 8, 0.904)`;
    winner = "Computer Won"
    streak = 0;
}
function draw() {
    col = `#f0e130`;
    result.style.color = `black`;
    winner = "That's a Draw"
}

function initial() {
    result.style.backgroundColor = "rgb(0, 145, 255)";
    result.innerHTML = `<b>Take Your Shot</b>`
    pc_sign.setAttribute("src", "images/rock/rock_right.png");
    you_sign.setAttribute("src", "images/rock/rock_left.png");

}

function randomGenerator() {
    result.style.backgroundColor = "rgb(0, 145, 255)";
    result.innerHTML = `<b>Rock...Paper...Scissor...Shoot..</b>`
    pc = Math.floor(Math.random() * 3) + 1;
    console.log(pc)
}

function show() {
    streakUpdate();
    showBothSigns(pc_sign, pc, you_sign, you);
    result.style.backgroundColor = `${col}`;
    result.innerHTML = `<b>${winner}</b>`

}
function findWinner() {
    if (pc == 3 && you == 1) {
        win();
    }
    else if (pc == 1 && you == 3) {
        lose();
    }
    else if (pc > you) {
        lose();
    }
    else if (pc < you) {
        win();
    }
    else {
        draw();
    }

}

function showBothSigns(img1, no1, img2, no2) {
    if (no1 == 1) {
        img1.setAttribute("src", "images/rock/rock_right.png");
    }
    else if (no1 == 2) {
        img1.setAttribute("src", "images/paper/paper_right.png");
    }
    else {
        img1.setAttribute("src", "images/scissor/scissor_right.png");
    }
    if (no2 == 1) {
        img2.setAttribute("src", "images/rock/rock_left.png");
    }
    else if (no2 == 2) {
        img2.setAttribute("src", "images/paper/paper_left.png");
    }
    else {
        img2.setAttribute("src", "images/scissor/scissor_left.png");
    }
}

function pickSign() {
    rock.addEventListener("click", function () {
        you = 1;
        randomGenerator();
        startAnimation();
        setTimeout(show, 2900)
        findWinner();
    });
    paper.addEventListener("click", function () {
        you = 2;
        randomGenerator();
        startAnimation();
        setTimeout(show, 2900)
        findWinner();
    });
    scissor.addEventListener("click", function () {
        you = 3;
        randomGenerator();
        startAnimation();
        setTimeout(show, 2900)
        findWinner();
    });
}

function startAnimation() {
    const images = ['.one', '.two']; // IDs of images to animate
    const totalBounces = 3;

    images.forEach(imageId => {
        const imgElement = document.querySelector(imageId);
        imgElement.style.position = 'relative';
        let count = 0;
        pc_sign.setAttribute("src", "images/rock/rock_right.png");
        you_sign.setAttribute("src", "images/rock/rock_left.png");
        function animateBounce() {
            imgElement.animate(
                [
                    { transform: 'translateY(0)' },
                    { transform: 'translateY(-30px)' },
                    { transform: 'translateY(0)' }
                ],
                {
                    duration: 800,
                    easing: 'ease-in-out'
                }
            ).onfinish = function () {
                count++;
                if (count < totalBounces) {
                    animateBounce();
                }
            };
        }

        animateBounce();
    });
}

const goAgain = function () {
    initial();
    pickSign();
    streakUpdate();
    console.log('here go another round');
}

again_btn.addEventListener("click", goAgain);
goAgain();


