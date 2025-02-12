import { jwtDecode } from 'jwt-decode';

const getMeUrl = "http://localhost:8080/users/me"
const urlAtualizarUsuario = 'http://localhost:8080/users' 
let userId = 0

const getUserData = async () => {
    const token = localStorage.getItem('authToken'); // Recupera o token armazenado
    if (!token) {
        console.error('Token de autenticação não encontrado.');
        return;
    }

    try {
        const response = await fetch(getMeUrl, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error('Erro ao buscar dados do usuário');
        }
        
        const userData = await response.json();
        const nome = document.querySelector("#nome")
        const sobrenome = document.querySelector("#sobrenome")
        const cpf = document.querySelector("#cpf")
        const email = document.querySelector("#email")
        const telefone = document.querySelector("#telefone")

        userId = userData.id
        nome.value = userData.firstName
        sobrenome.value = userData.lastName
        cpf.value = userData.cpf
        email.value = userData.email
        telefone.value = userData.phone
        
    } catch (error) {
        console.log("Erro!")
    }
}

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

function updateUserData(){
    const name = document.querySelector("#nome").value
    const sobrenome = document.querySelector("#sobrenome").value
    const cpf = document.querySelector("#cpf").value
    const email = document.querySelector("#email").value
    const telefone = document.querySelector("#telefone").value

    atualizarDados(name, sobrenome, email, cpf, telefone)

}

// const botao = document.querySelector(".botao_atualizar")
// botao.addEventListener("click", (event)=>{
//     event.preventDefault()
//     updateUserData()
// })

const atualizarDados = async (nome, sobrenome, email, cpf, telefone) => {
    const toastSucess = document.getElementById('toast-success');
    const toastError = document.getElementById('toast-error');
    const dados = {
        firstName: nome,
        lastName: sobrenome,
        email: email,
        cpf: cpf,
        phone: telefone
    }
    fetch(urlAtualizarUsuario + '/' + userId, {
        method: 'PUT', 
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dados) 
    })
    .then(response => response.json())
    .then((result) => {
        if(result.status == 200){
            showToast(toastSucess)
        } else{
            showToast(toastError)
        }
    })

}

const toastLogoff = document.getElementById('toast-logoff');
const token = localStorage.getItem('authToken');
if (token) {
    const decodedData = jwtDecode(token);
    document.querySelector('.entrar').remove()
    document.querySelector('.cadastrar').remove()
    const a = document.createElement('a')
    a.innerText = decodedData.username + " ▼"
    a.style.textDecoration = "underline"
    a.style.cursor = "pointer"
    const loginSection = document.querySelector('.login')
    a.classList.add("email-usuario")
    loginSection.appendChild(a)
    
    const ul = document.createElement("ul")
    const conta = document.createElement("li")
    const contaLink = document.createElement("a")
    contaLink.setAttribute("href", "./sessao_dados_usuario.html")
    const deslogar = document.createElement("li")
    contaLink.textContent = "Conta"
    conta.appendChild(contaLink)
    deslogar.textContent = "Deslogar"
    conta.style.textDecoration = "underline"
    deslogar.style.textDecoration = "underline"
    ul.appendChild(conta)
    ul.appendChild(deslogar)
    ul.classList.add("dropdown-menu")
    loginSection.appendChild(ul)

    const dropdown = document.querySelector(".dropdown-menu")
    const email = document.querySelector(".email-usuario")
    email.addEventListener("click", function(){
        dropdown.classList.toggle("visible-menu")
    })

    deslogar.addEventListener("click", function(){
        localStorage.clear()
        showToast(toastLogoff)
        setTimeout(() => window.location.replace("http://127.0.0.1:5500/index.html"), 2000)
    })
    
}

getUserData()   