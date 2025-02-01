import { jwtDecode } from "../libs/jwt-decode.js";


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
    const deslogar = document.createElement("li")
    conta.textContent = "Conta"
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
        setTimeout(() => window.location.replace("http://127.0.0.1:5500/index.html"), 2000)
    })
    
}


const productUrl = "http://localhost:8080/products"
const produtos = fetch(productUrl);



produtos.then((r)=>{
    return r.json()
    }).then((body)=>{
       document.querySelector('.produto_1_img_url').setAttribute("src", body[0].imgUrl);
       document.querySelector('.produto_1_nome').innerText = body[0].name;
       document.querySelector('.produto_1_preco').innerText += body[0].price;
       document.querySelector('.produtoum').setAttribute("data-name", body[0].name)
       document.querySelector('.produtoum').setAttribute("data-price", body[0].price)
       document.querySelector('.produtoum').setAttribute("data-image", body[0].imgUrl)

       document.querySelector('.produto_2_img_url').setAttribute("src", body[1].imgUrl);
       document.querySelector('.produto_2_nome').innerText = body[1].name;
       document.querySelector('.produto_2_preco').innerText += body[1].price;
       document.querySelector('.produtodois').setAttribute("data-name", body[1].name)
       document.querySelector('.produtodois').setAttribute("data-price", body[1].price)
       document.querySelector('.produtodois').setAttribute("data-image", body[1].imgUrl)

       document.querySelector('.produto_3_img_url').setAttribute("src", body[2].imgUrl);
       document.querySelector('.produto_3_nome').innerText = body[2].name;
       document.querySelector('.produto_3_preco').innerText += body[2].price;
       document.querySelector('.produtotres').setAttribute("data-name", body[2].name)
       document.querySelector('.produtotres').setAttribute("data-price", body[2].price)
       document.querySelector('.produtotres').setAttribute("data-image", body[2].imgUrl)

       document.querySelector('.produto_4_img_url').setAttribute("src", body[3].imgUrl);
       document.querySelector('.produto_4_nome').innerText = body[3].name;
       document.querySelector('.produto_4_preco').innerText += body[3].price;
       document.querySelector('.produtoquatro').setAttribute("data-name", body[3].name)
       document.querySelector('.produtoquatro').setAttribute("data-price", body[3].price)
       document.querySelector('.produtoquatro').setAttribute("data-image", body[3].imgUrl)

       document.querySelector('.produto_5_img_url').setAttribute("src", body[4].imgUrl);
       document.querySelector('.produto_5_nome').innerText = body[4].name;
       document.querySelector('.produto_5_preco').innerText += body[4].price;
       document.querySelector('.produtocinco').setAttribute("data-name", body[4].name)
       document.querySelector('.produtocinco').setAttribute("data-price", body[4].price)
       document.querySelector('.produtocinco').setAttribute("data-image", body[4].imgUrl)

       document.querySelector('.produto_6_img_url').setAttribute("src", body[5].imgUrl);
       document.querySelector('.produto_6_nome').innerText = body[5].name;
       document.querySelector('.produto_6_preco').innerText += body[5].price;
       document.querySelector('.produtoseis').setAttribute("data-name", body[5].name)
       document.querySelector('.produtoseis').setAttribute("data-price", body[5].price)
       document.querySelector('.produtoseis').setAttribute("data-image", body[5].imgUrl)

       document.querySelector('.produto_7_img_url').setAttribute("src", body[6].imgUrl);
       document.querySelector('.produto_7_nome').innerText = body[6].name;
       document.querySelector('.produto_7_preco').innerText += body[6].price;
       document.querySelector('.produtosete').setAttribute("data-name", body[6].name)
       document.querySelector('.produtosete').setAttribute("data-price", body[6].price)
       document.querySelector('.produtosete').setAttribute("data-image", body[6].imgUrl)

       document.querySelector('.produto_8_img_url').setAttribute("src", body[7].imgUrl);
       document.querySelector('.produto_8_nome').innerText = body[7].name;
       document.querySelector('.produto_8_preco').innerText += body[7].price;
       document.querySelector('.produtooito').setAttribute("data-name", body[7].name)
       document.querySelector('.produtooito').setAttribute("data-price", body[7].price)
       document.querySelector('.produtooito').setAttribute("data-image", body[7].imgUrl)

       document.querySelector('.produto_9_img_url').setAttribute("src", body[8].imgUrl);
       document.querySelector('.produto_9_nome').innerText = body[8].name;
       document.querySelector('.produto_9_preco').innerText += body[8].price;
       document.querySelector('.produtonove').setAttribute("data-name", body[8].name)
       document.querySelector('.produtonove').setAttribute("data-price", body[8].price)
       document.querySelector('.produtonove').setAttribute("data-image", body[8].imgUrl)

       document.querySelector('.produto_10_img_url').setAttribute("src", body[9].imgUrl);
       document.querySelector('.produto_10_nome').innerText = body[9].name;
       document.querySelector('.produto_10_preco').innerText += body[9].price;
       document.querySelector('.produtodez').setAttribute("data-name", body[9].name)
       document.querySelector('.produtodez').setAttribute("data-price", body[9].price)
       document.querySelector('.produtodez').setAttribute("data-image", body[9].imgUrl)

       document.querySelector('.produto_11_img_url').setAttribute("src", body[10].imgUrl);
       document.querySelector('.produto_11_nome').innerText = body[10].name;
       document.querySelector('.produto_11_preco').innerText += body[10].price;
       document.querySelector('.produtoonze').setAttribute("data-name", body[10].name)
       document.querySelector('.produtoonze').setAttribute("data-price", body[10].price)
       document.querySelector('.produtoonze').setAttribute("data-image", body[10].imgUrl)

       document.querySelector('.produto_12_img_url').setAttribute("src", body[11].imgUrl);
       document.querySelector('.produto_12_nome').innerText = body[11].name;
       document.querySelector('.produto_12_preco').innerText += body[11].price;
       document.querySelector('.produtodoze').setAttribute("data-name", body[11].name)
       document.querySelector('.produtodoze').setAttribute("data-price", body[11].price)
       document.querySelector('.produtodoze').setAttribute("data-image", body[11].imgUrl)
    })


//Lógica carrinho de compras
 // Seleciona os botões e os toasts
 const botaos = document.querySelectorAll('.add-to-cart');
 const toastAdded = document.getElementById('toast-added');
 const toastExists = document.getElementById('toast-exists');

 botaos.forEach(botao => {
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
