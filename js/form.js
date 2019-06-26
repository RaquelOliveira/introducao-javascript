var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(){
    event.preventDefault();

    let form = document.querySelector("#form-adiciona");
    let paciente = obterPacienteDoFormulario(form);

    let erros = validaPaciente(paciente);
    console.log(erros);

    if(erros.length > 0){
        exibirMensagensDeErro(erros);
        return;  
    }

    adicionarPacienteNaTabela(paciente);

    let mensagensErro = document.querySelector("#mensagem-erro");
    mensagensErro.innerHTML = "";
});

function adicionarPacienteNaTabela(paciente){
    let pacienteTr = montarTr(paciente);
    var tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(pacienteTr);

}

function obterPacienteDoFormulario (form){

    const paciente = {
        nome : form.nome.value,
        peso : form.peso.value,
        altura : form.altura.value,
        gordura : form.gordura.value,
        imc : calculaImc(form.peso.value,form.altura.value)
    }

    return paciente;
}

function montarTr (paciente){

    let pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(montarTd(paciente.nome,"info-nome"));
    pacienteTr.appendChild(montarTd(paciente.peso,"info-peso"));
    pacienteTr.appendChild(montarTd(paciente.altura,"info-altura"));
    pacienteTr.appendChild(montarTd(paciente.gordura,"info-gordura"));
    pacienteTr.appendChild(montarTd(paciente.imc,"info-imc"));

    return pacienteTr;
}

function montarTd (dado,classe){
    let td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}

function validaPaciente(paciente){
    let erros = [];

    if(!validaPeso(paciente.peso)){
        erros.push("Peso inválido!");
    }

    if(!validaAltura(paciente.altura)){
        erros.push("Altura inválida!");
    }

    return erros;
}

function exibirMensagensDeErro(erros){

    let ul = document.querySelector("#mensagem-erro");
    ul.innerHTML = "";

    erros.forEach(function(erro) {
        let li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });

    
}