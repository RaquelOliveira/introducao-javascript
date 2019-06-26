let botaoBuscar = document.querySelector("#buscar-paciente");

botaoBuscar.addEventListener("click",function(){
    let xhr = new XMLHttpRequest();
    
    xhr.open("GET","https://api-pacientes.herokuapp.com/pacientes");

    xhr.addEventListener("load", function(){
        let erroAjax = document.querySelector("#erro-ajax");

        if(xhr.status == 200){
            erroAjax.classList.add("invisivel");
            let resposta = xhr.responseText;
            let pacientes = JSON.parse(resposta);

            pacientes.forEach(paciente => {
                adicionarPacienteNaTabela(paciente);
            });
        }else{
            
            erroAjax.classList.remove("invisivel");
        }
        
    });

    xhr.send();

});