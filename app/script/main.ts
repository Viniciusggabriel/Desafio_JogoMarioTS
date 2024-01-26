const mario = document.querySelector(".mario") as HTMLImageElement;
const pipe = document.querySelector(".pipe") as HTMLImageElement;
const nuvem = document.querySelector(".nuvem") as HTMLImageElement;
const titulo = document.querySelector(".titulo") as HTMLHeadingElement;
const reload = document.querySelector(".reload") as HTMLHeadingElement;

/* Adiciona e remove a classe jump */
const pulo = () => {
  mario.classList.add("jump");
  setTimeout(() => {
    mario.classList.remove("jump");
  }, 500);
};

/* Adiciona o evento de pulo para o Mario pegando a tecla espaço */
document.addEventListener("keydown", (event) => {
  if (event.code === "Space") {
    pulo();
  }
});

/* Loop que verifica se o Mario encostou no cano */
const loop = setInterval(() => {
  /* Captura o movimento do cano */
  const pipe_position = +pipe.offsetLeft;
  const mario_position = +window
    .getComputedStyle(mario)
    .bottom.replace("px", "");

  /* Condição que pausa a animação quando o mario encostar no pipe */
  if (pipe_position <= 100 && pipe_position > 0 && mario_position < 55) {
    /* Para o cano quando ele encostas */
    pipe.style.animationPlayState = "paused";
    pipe.style.left = `${pipe_position}px`;

    /* Para o mario onde ele encostou  */
    mario.style.animationPlayState = "paused";
    mario.style.bottom = `${mario_position}px`;

    /* Pausa a nuvem */
    nuvem.style.animationPlayState = "paused";

    /* Troca a imagem quando o mario morre */
    mario.src = "./src/game-over.png";
    mario.style.width = "75px";
    mario.style.margin = "50px";

    reload.innerHTML = "Game Over";
    reload.style.color = "red";
    /* Cria um botão de reload */
    const button_reload = document.createElement("button");
    button_reload.innerHTML = "Reload";
    button_reload.classList.add("button_reload");
    button_reload.addEventListener("click", () => {
      window.location.reload();
    });
    /* Coloca o botão dentro da div */
    reload.appendChild(button_reload);

    clearInterval(loop);
  }
}, 10);
