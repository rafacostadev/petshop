

const productUrl = "http://localhost:8080/products?category=gato"
const produtos = fetch(productUrl);

function loadProducts(){
produtos.then((r)=>{
    return r.json()
    }).then((body)=>{
        const listaItens = document.querySelector(".card-container")
        body.forEach((json) => {
            const li = document.createElement("li");
            li.classList.add("card")
            const liImg = document.createElement("img");
            const liH3 = document.createElement("h3");
            const liP = document.createElement("p");
            const liButton = document.createElement("button");
            liButton.innerText = " Adicionar ao Carrinho"
            liButton.classList.add("add-to-cart")
            liButton.setAttribute("data-name", json.name)
            liButton.setAttribute("data-price", json.price)
            liButton.setAttribute("data-image", json.imgUrl)
            liImg.setAttribute("src", json.imgUrl)
            liH3.innerText = json.name
            liP.innerText = "R$ " + json.price
            li.appendChild(liImg)
            li.appendChild(liH3)
            li.appendChild(liP)
            li.appendChild(liButton)
            listaItens.appendChild(li)
        })
    })
}

loadProducts()
const toastAdded = document.getElementById('toast-added');
const toastExists = document.getElementById('toast-exists');
const toastLogoff = document.getElementById('toast-logoff');

setTimeout(() => {
    const botaos = document.querySelectorAll(".add-to-cart");
    botaos.forEach(botao => {
        botao.addEventListener('click', (event) => {
            console.log("botao")
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
    });}, 100  )

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

const token = localStorage.getItem('authToken');
// if (token) {
//     const decodedData = jwtDecode(token);
//     document.querySelector('.entrar').remove()
//     document.querySelector('.cadastrar').remove()
//     const a = document.createElement('a')
//     a.innerText = decodedData.username + " ▼"
//     a.style.textDecoration = "underline"
//     a.style.cursor = "pointer"
//     const loginSection = document.querySelector('.login')
//     a.classList.add("email-usuario")
//     loginSection.appendChild(a)
    
//     const ul = document.createElement("ul")
//     const conta = document.createElement("li")
//     const contaLink = document.createElement("a")
//     contaLink.setAttribute("href", "./sessao_dados_usuario.html")
//     const deslogar = document.createElement("li")
//     contaLink.textContent = "Conta"
//     conta.appendChild(contaLink)
//     deslogar.textContent = "Deslogar"
//     conta.style.textDecoration = "underline"
//     deslogar.style.textDecoration = "underline"
//     ul.appendChild(conta)
//     ul.appendChild(deslogar)
//     ul.classList.add("dropdown-menu")
//     loginSection.appendChild(ul)

//     const dropdown = document.querySelector(".dropdown-menu")
//     const email = document.querySelector(".email-usuario")
//     email.addEventListener("click", function(){
//         dropdown.classList.toggle("visible-menu")
//     })

//     deslogar.addEventListener("click", function(){
//         localStorage.clear()
//         showToast(toastLogoff)
//         setTimeout(() => window.location.replace("http://127.0.0.1:5500/index.html"), 2000)
//     })
    
// }