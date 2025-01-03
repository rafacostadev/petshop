// Selecionando os elementos da tabela, o total e o botão de limpar carrinho
const cartTableBody = document.querySelector('#cart-table tbody');
const totalPriceElement = document.getElementById('total-price');
const clearCartButton = document.getElementById('clear-cart');

// Recuperando os itens do carrinho armazenados no localStorage (se existirem), ou inicializar como uma lista vazia
const cartItems = JSON.parse(localStorage.getItem('cart')) || [];

let total = 0;

function updateCart() {
    // Limpar a tabela
    cartTableBody.innerHTML = '';
    total = 0;

    // Percorrer cada item no array carrinho 
    cartItems.forEach((item, index) => {
        const row = document.createElement('tr'); // Cria uma nova linha para cada item

        // Coluna da imagem
        const imgCell = document.createElement('td');
        const img = document.createElement('img');
        img.src = item.image;
        img.alt = item.name;
        img.style.width = '50px';
        img.style.height = '50px';
        imgCell.appendChild(img);

        // Coluna do nome
        const nameCell = document.createElement('td');
        nameCell.textContent = item.name;

        // Coluna do preço
        const priceCell = document.createElement('td');
        priceCell.textContent = `R$ ${item.price}`;

        // Coluna da quantidade
        const quantityCell = document.createElement('td');
        // Botão para diminuir a quantidade
        const decreaseButton = document.createElement('button');
        decreaseButton.textContent = '-';
        decreaseButton.addEventListener('click', () => {
            updateQuantity(index, -1);
        });
    // Exibição da quantidade atual
        const quantitySpan = document.createElement('span');
        quantitySpan.textContent = item.quantity || 1;
      // Botão para aumentar a quantidade
        const increaseButton = document.createElement('button');
        increaseButton.textContent = '+';
        increaseButton.addEventListener('click', () => {
            updateQuantity(index, 1);
        });
        // Adicionando os botões e a quantidade ao elemento da célula
        quantityCell.appendChild(decreaseButton);
        quantityCell.appendChild(quantitySpan);
        quantityCell.appendChild(increaseButton);

        // Criando a coluna de ação e botão para remover
        const actionCell = document.createElement('td');
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remover';
        // removendo produto
        removeButton.addEventListener('click', () => {
            removeItem(index);
        });
        actionCell.appendChild(removeButton);

    // Adicionado todas as células (colunas) à linha
        row.appendChild(imgCell);
        row.appendChild(nameCell);
        row.appendChild(priceCell);
        row.appendChild(quantityCell);
        row.appendChild(actionCell);

        // Adicionando a linha na tabela
        cartTableBody.appendChild(row);

        // Atualizando o  total
        total += parseFloat(item.price) * (item.quantity || 1);
    });

    totalPriceElement.textContent = `Total: R$ ${total.toFixed(2)}`;
}

//atualizando a quantidade de itens no carrinho
function updateQuantity(index, novaquantidade) {
    const item = cartItems[index]; //pegando o item pelo index 
    item.quantity = (item.quantity || 1) + novaquantidade; // Atualiza a quantidade com o novo valor

    if (item.quantity < 1) {
        item.quantity = 1; // Não permite que a quantidade seja menor que 1
    }
    // Atualizando os dados no localStorage e a tabela
    localStorage.setItem('cart', JSON.stringify(cartItems));
    updateCart(); // Atualiza a tabela
}

//rmeovendo o item da tabela
function removeItem(index) {
    cartItems.splice(index, 1);// Remove o item do array com base no índice
    localStorage.setItem('cart', JSON.stringify(cartItems)); // Atualiza o localStorage
    updateCart(); // Atualiza a tabela
}

clearCartButton.addEventListener('click', () => {
    localStorage.removeItem('cart');  // Remove todos os dados do carrinho do localStorage
    cartItems.length = 0; // Limpa o array local
    updateCart(); // Atualiza a tabela
});

// Chama a função inicial para carregar os dados do carrinho
updateCart();