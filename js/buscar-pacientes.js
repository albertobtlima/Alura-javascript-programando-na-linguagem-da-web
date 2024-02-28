const botaoBuscarPaciente = document.getElementById("buscar-pacientes");

botaoBuscarPaciente.addEventListener("click", () => {
    console.log('Buscando');

    const xhr = new XMLHttpRequest();

    xhr.open("GET", "https://raw.githubusercontent.com/loresgarcia/Pacientes-API/master/pacientes.json");

    xhr.addEventListener("load", () => {
        const erroAjax = document.getElementById("erro-ajax");

        if (xhr.status == 200) {
            const resposta = xhr.responseText;
            const pacientes = JSON.parse(resposta);
            
            erroAjax.classList.add("invisivel");

            pacientes.forEach(function(paciente) {
                adicionarPacienteNaTabela(paciente);
            });
        } else {
            console.log(xhr.status);
            console.log(xhr.responseText);
            erroAjax.classList.remove("invisivel");
        }
    })

    xhr.send();
})
