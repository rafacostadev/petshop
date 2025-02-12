const urlCadastro = 'https://petlove-backend-production.up.railway.app/users'

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
const cadastro = async (nome, sobrenome, email, cpf, telefone, senha) => {
    const toastSucess = document.getElementById('toast-success');
    const toastError = document.getElementById('toast-error');
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
    .then((result) => {
        if(result.status != 500){
            showToast(toastSucess)
            setTimeout(() => window.location.replace("http://127.0.0.1:5500/login.html"), 2500)
        } else{
            showToast(toastError)
        }
    })

}

botaoCadastro = document.querySelector(".botao-cadastrar")
botaoCadastro.addEventListener("click", function(e){
    e.preventDefault()
    const senha = document.getElementById('senha').value;
    const confirmarSenha = document.getElementById('confirmarSenha').value;
    if (senha !== confirmarSenha) {
        alert('As senhas não são iguais. Por favor, verifique.');
    } else{
        const nome = document.querySelector("#name").value;
        const sobrenome = document.querySelector("#sobrenome").value;
        const email = document.querySelector("#email").value;
        const cpf = document.querySelector("#cpf").value;
        const telefone = document.querySelector("#telefone").value;
        cadastro(nome, sobrenome, email, cpf, telefone, senha)
    }
})

function showToast(toastElement) {
    // Exibe o toast selecionado
    toastElement.classList.remove('hidden');
    toastElement.classList.add('show');

    // Remove o toast após 3 segundos
    setTimeout(() => {
        toastElement.classList.remove('show');
        setTimeout(() => {
            toastElement.classList.add('hidden');
        }, 300); // Tempo para a animação de saída
    }, 3000);
}