var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

let pacientes = document.querySelectorAll(".paciente");

for(i = 0; i < pacientes.length; i++ ){

    let paciente = pacientes[i];

    let tdPeso = paciente.querySelector(".info-peso");
    let peso = tdPeso.textContent;

    let tdAltura = paciente.querySelector(".info-altura");
    let altura = tdAltura.textContent;

    let pesoEhValido = validaPeso(peso);
    let alturaEhValida = validaAltura(altura);

    if(!pesoEhValido){
        tdPeso.textContent = "Peso inválido!";
        pesoEhValido = false;
        paciente.classList.add("paciente-invalido");
    }

    if(!alturaEhValida){
        tdAltura.textContent = "Altura Inválida!";
        alturaEhValida = false;
        paciente.classList.add("paciente-invalido");
    }

    if(pesoEhValido && alturaEhValida){
        let tdImc = paciente.querySelector(".info-imc");
        tdImc.textContent = calculaImc(peso,altura);
    }
}

function calculaImc(peso,altura){
    let imc = peso / (altura * altura);

    return imc.toFixed(2);
}

function validaPeso(peso){
    if(peso <= 0 || peso >= 1000){
        return false;
    }
    return true;
}

function validaAltura(altura){
    if(altura <= 0 || altura >= 3.0){
        return false;
    }
    return true;
}