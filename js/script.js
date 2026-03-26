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


