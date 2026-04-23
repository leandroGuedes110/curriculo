const btn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

if (btn) {
    btn.addEventListener("click", () => {
        menu.style.display = menu.style.display === "flex" ? "none" : "flex";
    });
}

const form = document.getElementById("form");

if (form) {
    form.addEventListener("submit", function(e) {
        e.preventDefault();

        let nome = document.getElementById("nome").value.trim();
        let email = document.getElementById("email").value.trim();
        let mensagem = document.getElementById("mensagem").value.trim();
        let erro = document.getElementById("erro");

        if (!nome || !email || !mensagem) {
            erro.textContent = "Preencha todos os campos corretamente!";
        } else {
            erro.textContent = "Mensagem enviada com sucesso!";
        }
    });
}

function toggleDarkMode() {
    document.body.classList.toggle("dark");
}
