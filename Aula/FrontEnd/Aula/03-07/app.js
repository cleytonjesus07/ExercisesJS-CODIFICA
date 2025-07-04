document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const scrollTop = document.getElementById("scrollTop");
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('open')
    })

    document.addEventListener("scroll", function ({ target }) {
        checarTopo()
    })

    const form = document.getElementById("contactForm");

    form.querySelectorAll('input, textarea').forEach(field => {
        field.addEventListener('input', () => {
            field.classList.remove('error');
            field.nextElementSibling.textContent = "";
        })
    })

    form.addEventListener("submit", event => {
        event.preventDefault();

        let valido = true;
        function showError(field, msg) {
            field.classList.add('error');
            field.nextElementSibling.textContent = msg;
            valido = false;
        }

        const name = form.name.value.trim();
        if (name.length < 3) {
            showError(form.name, "Digite ao menos 3 caracteres.");
        }
        const email = form.email.value.trim()
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!regexEmail.test(email)) {
            showError(form.email, 'E-mail inválido')
        }
    })

    function checarTopo() {
        if (window.scrollY > 0) {
            scrollTop.style.display = "initial"
            scrollTop.style.opacity = 1;
        } else {
            scrollTop.style.display = "none"
            scrollTop.style.opacity = 0;
        }
    }
})

function getTop() {
    window.scrollTo({
        behavior: "smooth",
        top: 0
    })
}