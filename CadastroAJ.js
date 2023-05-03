let submit = document.getElementById("btn-submit");
submit.addEventListener('click', function(e){

    e.preventDefault()

    console.log('funcionou')
})
var j = {
    'nomecomp' : ['Ana Julia Ferreira'],
    'cpf' : ['123.321.123.32'],
    'telefone' : ['1912321212'],
    'email' : ['anajulia2023@gmail.com'],
    'senha' : ['1234'],
    'confsenha' : ['1234']

}
for(let i=0; i< j.nomecomp.length; i++){
    if (senha== j.senha){
        window.alert("Seu cadastro foi concluído");
    }else{
        window.alert("Senha inválida")
    }
    }

