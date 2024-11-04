// tem que ver se no html os id é esse

const emailLogin = document.getElementById('emailLogin');
const passwordLogin = document.getElementById('passwordLogin');


//adicionar o onclick no html
function submit() {
  const email = emailLogin.value;
  const password = passwordLogin.value;

  // pega os bgl do localstorage
  const storedUserDataJSON = localStorage.getItem('userData');
  if (!storedUserDataJSON) {
    alert("Nenhum usuário cadastrado.");
    return;
  }

  const storedUserData = JSON.parse(storedUserDataJSON);

  // Verifica os bgl
  if (email === storedUserData.email && password === storedUserData.password) {
    alert("Login bem-sucedido!");    // substituir para um redirecionamento para o menu inicial

    // caso voce seja burro e escreva errado
  } else {
    alert("Email ou senha incorretos.");    // substituir por um modal
  }
}

function retorne(){
  window.location.href ='../inicio/index.html'
}