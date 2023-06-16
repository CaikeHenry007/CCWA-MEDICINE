let submit = document.getElementById("btn-submit");
submit.addEventListener('click', function(e){

    e.preventDefault()

    console.log('funcionou')
})
var j = {
    'nomecomp' : ['Ana Julia Ferreira'],
    'cpf' : ['123.321.123.32'],
    'telefone' : ['1912321212'],
    'email' : ['ferreira@gmail.com'],
    'senha' : ['12345678'],
    'confsenha' : ['12345678']

}
for(let i=0; i< j.nomecomp.length; i++){
    if (senha== j.senha){
        window.alert("Seu cadastro foi concluído");
    }else{
        window.alert("Senha inválida")
    }
    }

