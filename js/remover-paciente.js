const tabela = document.querySelector("table");

tabela.addEventListener("dblclick", (event) => {
    const alvoEvento = event.target;
    const paiDoAlvo = alvoEvento.parentNode; // TR = paciente = remover

    event.target.parentNode.classList.add("fade-out");

    setTimeout(() => {
        paiDoAlvo.remove(); 
    }, 500);
})

// event.target.parentNode.remove();
