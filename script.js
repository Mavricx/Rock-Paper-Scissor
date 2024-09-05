const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissor = document.getElementById('scissor');
const pc_sign = document.querySelector('.one')
const you_sign = document.querySelector('.two');
const restart_btn = document.getElementById('restart');
const reset_btn = document.getElementById('reset');
const again_btn = document.getElementById('again');


let pc;
let you;
let streak = 0;
let winner;


function randomGenerator() {
    pc = Math.floor(Math.random() * 3) + 1;
    console.log(pc)
}
function streakUpdate() {
    document.getElementById('streak').innerHTML = `<b>Winning Streak:${streak}</b>`;
}
function findWinner() {
    if (pc == 3 && you == 1) {
        winner = "You Have Won This Match"
        ++streak;
        streakUpdate();

    }
    else if (pc == 1 && you == 3) {
        winner = "Computer Won This Match"
        streak = 0;
        streakUpdate();
    }
    else if (pc > you) {
        winner = "Computer Won This Match"
        streak = 0;
        streakUpdate();

    }
    else if (pc < you) {
        winner = "You Have Won This Match"
        ++streak;
        streakUpdate();
    }
    else {
        winner = "This is a Draw"
        streakUpdate();

    }
    document.getElementById('result').innerHTML = `<b>${winner}</b>`
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
        showBothSigns(pc_sign, pc, you_sign, you);
        findWinner();
    });
    paper.addEventListener("click", function () {
        you = 2;
        randomGenerator();
        showBothSigns(pc_sign, pc, you_sign, you);
        findWinner();
    });
    scissor.addEventListener("click", function () {
        you = 3;
        randomGenerator();
        showBothSigns(pc_sign, pc, you_sign, you);
        findWinner();
    });
}

// const gameOn = function () {//animation for the hands
//     const one = document.querySelector('.one');
//     const two = document.querySelector('.two');


//     one.style.position = 'relative'; // Set relative positioning for the animation
//     two.style.position = 'relative'; // Set relative positioning for the animation


//     function animateBounce(rockImage) {
//         let count = 0;
//         const totalBounces = 3;
//         rockImage.animate(
//             [
//                 { transform: 'translateY(0)' },        // Initial position
//                 { transform: 'translateY(-30px)' },    // Move up
//                 { transform: 'translateY(0)' }         // Move down
//             ],
//             {
//                 duration: 1000, // 1 second for a full bounce
//                 easing: 'ease-in-out'
//             }
//         ).onfinish = function () {
//             count++;
//             if (count < totalBounces) {
//                 animateBounce(); // Repeat bounce 3 times
//             }
//         };
//     }

//     animateBounce(one); // Start the bouncing animation
//     animateBounce(two); // Start the bounce animation
// }
// const reset = function () {
//     streak = 0;
//     document.getElementById('streak').innerHTML = `<b>Winning Streak:${streak}</b>`;
//     console.log('high score has been reseted');
// }

const goAgain = function () {
    pc_sign.setAttribute("src", "images/rock/rock_right.png");
    you_sign.setAttribute("src", "images/rock/rock_left.png");
    pickSign();
    document.getElementById('streak').innerHTML = `<b>Winning Streak:${streak}</b>`;
    console.log('here go another round');
}
// const restart = function () {
//     goAgain();
// }
// restart_btn.addEventListener("click", restart);
// reset_btn.addEventListener("click", reset);
again_btn.addEventListener("click", goAgain);



