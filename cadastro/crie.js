const nomeInput = document.getElementById('nome');
const sobrenomeInput = document.getElementById('sobrenome');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const password2Input = document.getElementById('c-password'); 
const termsInput = document.getElementById('checkbox'); 
const modal = document.getElementById('modal'); 

function submit() {
  const nome = nomeInput.value;
  const sobrenome = sobrenomeInput.value;
  const email = emailInput.value;
  const password = passwordInput.value;
  const password2 = password2Input.value;
  const terms = termsInput.checked;

  if (password !== password2) {
    openModal();
  } else {
    closeModal();

    const userData = {
      nome,
      sobrenome,
      email,
      password,
      terms
    };

    const userDataJSON = JSON.stringify(userData);
    localStorage.setItem('userData', userDataJSON);
    document.querySelector('.inputs').reset();
    window.location.href = 'menu.html';
  }
}

function openModal() {
  modal.style.display = "flex"; 
}

function closeModal() {
  modal.style.display = "none"; 
}

function retorne(){
  window.location.href ='../inicio/index.html'
}