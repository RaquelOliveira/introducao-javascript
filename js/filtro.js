var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function(){
    var pacintes = document.querySelectorAll(".paciente");
    
    if(this.value.length > 0){
        for(let i = 0; i < pacintes.length; i++){
            let paciente = pacintes[i];
            let tdNome = paciente.querySelector(".info-nome");
            let nome = tdNome.textContent;
            var expressao = new RegExp(this.value, "i"); 
            if (expressao.test(nome)){
                paciente.classList.remove("invisivel");
            }else{
                paciente.classList.add("invisivel");
            }
    
        }
    }else{
        for(let i = 0; i < pacintes.length; i++){
            let paciente = pacintes[i];
            paciente.classList.remove("invisivel");
        }

    }


});
