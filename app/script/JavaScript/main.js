"use strict";
const mario = document.querySelector(".mario");
const pipe = document.querySelector(".pipe");
const nuvem = document.querySelector(".nuvem");
const titulo = document.querySelector(".titulo");
const reload = document.querySelector(".reload");
const pulo = () => {
    mario.classList.add("jump");
    setTimeout(() => {
        mario.classList.remove("jump");
    }, 500);
};
document.addEventListener("keydown", (event) => {
    if (event.code === "Space") {
        pulo();
    }
});
const loop = setInterval(() => {
    const pipe_position = +pipe.offsetLeft;
    const mario_position = +window
        .getComputedStyle(mario)
        .bottom.replace("px", "");
    if (pipe_position <= 100 && pipe_position > 0 && mario_position < 55) {
        pipe.style.animationPlayState = "paused";
        pipe.style.left = `${pipe_position}px`;
        mario.style.animationPlayState = "paused";
        mario.style.bottom = `${mario_position}px`;
        nuvem.style.animationPlayState = "paused";
        mario.src = "./src/game-over.png";
        mario.style.width = "75px";
        mario.style.margin = "50px";
        reload.innerHTML = "Game Over";
        reload.style.color = "red";
        const button_reload = document.createElement("button");
        button_reload.innerHTML = "Reload";
        button_reload.classList.add("button_reload");
        button_reload.addEventListener("click", () => {
            window.location.reload();
        });
        reload.appendChild(button_reload);
        clearInterval(loop);
    }
}, 10);
