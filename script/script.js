const url = "https://testesdeploy-production.up.railway.app/products";

async function chamarApi(){
    const answer = await fetch(url);
    if(answer.status === 200){
        const obj = await answer.json()
        dados = obj.content[0]
        console.log(dados)
        document.getElementById("search-input").setAttribute("value", dados.name)
    }   
}

chamarApi()
