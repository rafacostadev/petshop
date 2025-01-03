const url = "http://localhost:8080/products";

async function chamarApi(){
    const answer = await fetch(url);
    if(answer.status === 200){
        const obj = await answer.json()
        dados = obj.content[0]
        document.getElementById("search-input").setAttribute("value", dados.name)
    }   
}

chamarApi()


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
