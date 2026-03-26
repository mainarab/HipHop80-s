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



