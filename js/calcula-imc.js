const pacientes = document.querySelectorAll(".paciente");

pacientes.forEach(function(paciente, i) {

    const tdPeso = pacientes[i].querySelector(".info-peso");
    const tdAltura = pacientes[i].querySelector(".info-altura")
    const tdImc = pacientes[i].querySelector(".info-imc");
    
    const peso = tdPeso.textContent;
    const altura = tdAltura.textContent;
    
    let pesoEhValido = validaPeso(peso);
    let alturaEhValida = validaAltura(altura);
    
    if (!pesoEhValido) {
        pesoEhValido = false;
        tdImc.textContent = "IMC inválido!";
        paciente.classList.add("paciente-invalido")
    }
    
    if (!alturaEhValida) {
        alturaEhValida = false;
        tdImc.textContent = "IMC inválido!";
        paciente.classList.add("paciente-invalido")
    }
    
    if (pesoEhValido && alturaEhValida) {
        const imc = calculaImc(peso, altura);
        tdImc.textContent = imc;
    }
}) 

function validaPeso(peso) {
    if (peso > 0 && peso < 1000){
        return true;
    } else {
        return false;
    }
}

function validaAltura(altura) {
    if (altura > 0 && altura < 3.0) {
        return true;
    } else {
        return false;
    }
}

function calculaImc(peso, altura) {
    let imc = 0;
    imc = peso / (altura ** 2);
    return imc.toFixed(2);
}




/* for (let i = 0; i < pacientes.length; i = i + 1) {
    console.log(i);
} */

/* if (peso <= 0 || peso >= 1000) {
    alert("Peso inválido");
    pesoEhValido = false;
    tdImc.textContent = "IMC inválido!";
    paciente.classList.add("paciente-invalido")
}

if (altura <= 0 || altura >= 3.00) {
    alert("Altura inválido");
    alturaEhValida = false;
    tdImc.textContent = "IMC inválido!";
    paciente.classList.add("paciente-invalido")
}

if (pesoEhValido && alturaEhValida) {
    const imc = calculaImc(peso, altura);
    tdImc.textContent = imc;
} */

/* const botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault();
    
    const form = document.querySelector("#form-adiciona");
    const nome = form.nome.value;
    const peso = form.peso.value;
    const altura = form.altura.value;
    const gordura = form.gordura.value;

    const pacienteTr = document.createElement("tr"); 
    const nomeTd = document.createElement("td");
    const pesoTd = document.createElement("td");
    const alturaTd = document.createElement("td");
    const gorduraTd = document.createElement("td");

    nomeTd.textContent = nome;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = gordura;

    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);

    const tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(pacienteTr);
})
 */
