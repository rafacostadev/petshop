//Não permite que a data seja maior que a atual

document.addEventListener("DOMContentLoaded", function() {
    const today = new Date();
const formattedToday = today.toISOString().split('T')[0];
const dateInput = document.getElementById('data');
dateInput.max = formattedToday;
});


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

