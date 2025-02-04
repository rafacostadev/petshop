const productUrl = "http://localhost:8080/products?category=gato"
const produtos = fetch(productUrl);

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