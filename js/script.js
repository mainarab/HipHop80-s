document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function (e) {
    const destino = this.getAttribute('href');
        if (destino && destino.startsWith('#')) {
            e.preventDefault();
    const elemento = document.querySelector(destino);
            if (elemento) {
                elemento.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }   
        }
    });
});


const header = document.querySelector(".header");

function mudarHeader(){
    header.classList.toggle('ativo', window.scrollY > 40);
}

window.addEventListener("scroll", mudarHeader);

const logo = document.querySelector(".logo")

gsap.fromTo(logo, {y: -500}, {y: 0, ease: "bounce.out", duration:2, })

const imagem2 = document.querySelector("#img2")

gsap.fromTo(imagem2, {opacity: 0}, {opacity:1, duration:10, })

const menu = document.querySelector(".navegacao");
const abrir = document.getElementById("menuHamburguer");
const fechar = document.getElementById("sairMenu");

abrir.addEventListener("click", () => {
  menu.classList.add("ativo");
  abrir.classList.add("esconder");
  fechar.classList.add("ativo");
});

fechar.addEventListener("click", () => {
  menu.classList.remove("ativo");
  abrir.classList.remove("esconder");
  fechar.classList.remove("ativo");
});

let slide = document.querySelector("#img1")
gsap.fromTo(slide, { x: -500,},{x: 500, duration: 10});

