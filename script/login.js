const button = document.querySelector(".botao-login")

button.addEventListener("click", function(e){
    e.preventDefault()
    username = document.querySelector(".email").value
    password = document.querySelector(".password").value

    login(username, password)

})

const botaos = document.querySelectorAll('.add-to-cart');
const toastSucess = document.getElementById('toast-success');
const toastError = document.getElementById('toast-error');

const login = async (username, password) => {
  const grant_type = 'password';
  const credentials = 'Basic bXljbGllbnRpZDpteWNsaWVudHNlY3JldA=='; // Substitua por suas credenciais codificadas em Base64.
  try {
      const response = await fetch('http://localhost:8080/oauth2/token', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
              'Authorization': credentials,
          },
          body: new URLSearchParams({
              username,
              password,
              grant_type,
          }).toString(),
      });

      const data = await response.json();

      if (data.access_token) {
          localStorage.setItem('authToken', data.access_token); // Use access_token corretamente
          showToast(toastSucess)
          setTimeout(() => window.location.replace("http://127.0.0.1:5500/index.html"), 2500)
      } else {
          showToast(toastError);
      }
  } catch (error) {
      console.error('Erro na requisição de login:', error);
  }
};

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