// Verificador de senha

document.querySelector('.form-cadastrar').addEventListener('submit', function(event) {

    const senha = document.getElementById('senha').value;
    const confirmarSenha = document.getElementById('confirmarSenha').value;

    if (senha !== confirmarSenha) {
        event.preventDefault();
        alert('As senhas não são iguais. Por favor, verifique.');
    }
});


// mascara para o telefone e cpf aceitar apenas numero 

function mascaraTelefone(event) {
    let input = event.target;
    input.value = input.value.replace(/\D/g, '');
}

function mascaraCPF(event) {
    let input = event.target;
    input.value = input.value.replace(/\D/g, '');
}

// Cadastro
const urlCadastro = 'http://localhost:8080/users' 

const cadastro = async (nome, sobrenome, email, cpf, telefone, senha) => {
    const dados = {
        firstName: nome,
        lastName: sobrenome,
        email: email,
        cpf: cpf,
        phone: telefone,
        password: senha
    }
    fetch(urlCadastro, {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dados) 
    })
    .then(response => response.json())
    .then(result => console.log('Sucesso:', result))
    .catch(error => console.error('Erro:', error));
}

botaoCadastro = document.querySelector(".botao-cadastrar")
botaoCadastro.addEventListener("click", function(e){
    e.preventDefault()
    const nome = document.querySelector("#name").value;
    const sobrenome = document.querySelector("#sobrenome").value;
    const email = document.querySelector("#email").value;
    const cpf = document.querySelector("#cpf").value;
    const telefone = document.querySelector("#telefone").value;
    const senha = document.querySelector("#senha").value;

    cadastro(nome, sobrenome, email, cpf, telefone, senha)

})