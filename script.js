document.addEventListener("DOMContentLoaded", function() {
    console.log("Website Loaded!");
});
let ball = document.getElementById("ball");
let positionY = 0;
let speed = 3;
let gravity = 0.5;
let bounceFactor = 0.7;
let floor = window.innerHeight - 50; // Batas bawah bola

function animateBall() {
    positionY += speed;
    speed += gravity;

    if (positionY >= floor) {
        positionY = floor;
        speed *= -bounceFactor; // Memantul ke atas
    }

    ball.style.top = positionY + "px";
    requestAnimationFrame(animateBall);
}

animateBall();
