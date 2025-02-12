import jwtDecode from 'jwt-decode';

//Lógica carrinho de compras
// Seleciona os botões e os toasts
const botaos = document.querySelectorAll('.add-to-cart');
const toastAdded = document.getElementById('toast-added');
const toastExists = document.getElementById('toast-exists');
const toastLogoff = document.getElementById('toast-logoff');

const token = localStorage.getItem('authToken');
if (token) {
    const decodedData = jwtDecode(token);
    document.querySelector('#login-button').remove()
    document.querySelector('#signup-button').remove()
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
const productUrl = "http://localhost:8080/products"
const parametros = new URLSearchParams(window.location.search);
const productId = parametros.get("id");
const produto = fetch(`${productUrl}/${productId}`);

produto.then((r)=>{
    return r.json()
    }).then((body)=>{
        document.querySelector('.img-produto').setAttribute("src", body.imgUrl)
        document.querySelector('.nome-produto').innerText += body.name
        document.querySelector('.preco-produto').innerText += body.price
        document.querySelector('.codigo-produto').innerText += " " + body.id
        const botao = document.querySelector('.add-to-cart')  
        botao.setAttribute("data-name", body.name)
        botao.setAttribute("data-price", body.price)
        botao.setAttribute("data-image", body.imgUrl)
    })

const botao = document.querySelector('.add-to-cart');

botao.addEventListener('click', (event) => {
    const name = event.target.getAttribute('data-name');
    const price = event.target.getAttribute('data-price');
    const image = event.target.getAttribute('data-image');

    // Recupera os itens existentes no localStorage ou cria um array vazio
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];

    // Verifica se o item já existe no carrinho
    const itemExists = cartItems.some(item => item.name === name);

    if (itemExists) {
        // Mostra o toast informando que o produto já está no carrinho
        showToast(toastExists);
    } else {
        // Adiciona o novo item ao carrinho
        cartItems.push({ name, price, image });

        // Atualiza o localStorage
        localStorage.setItem('cart', JSON.stringify(cartItems));

        // Mostra o toast de sucesso
        showToast(toastAdded);
    }
});
 

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
