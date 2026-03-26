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

let slide = document.querySelector("#img1")
gsap.fromTo(slide, { x: -500,},{x: 500, duration: 10});