// Elementos do Formulário
const btnSubmit = document.getElementById('button__submit');
const userName = document.getElementById('name');
const userEmail = document.getElementById('email');
const userMessage = document.getElementById('message');

// Funções Auxiliares

// Aplica borda colorida a um campo
const insertBorder = (elemento, cor) => {
  elemento.style.border = `3px solid ${cor}`;
};

// Reseta o campo (valor e borda)
const resetFields = (elemento) => {
  elemento.value = '';
  elemento.style.border = '3px solid #ccc';
};

// Manipulação do Formulário

const enviarForm = (e) => {
  e.preventDefault();

  const getName = userName.value.trim();
  const getEmail = userEmail.value.trim();
  const getMessage = userMessage.value.trim();

  // Aplica bordas com base na validação
  insertBorder(userName, getName ? 'green' : 'red');
  insertBorder(userEmail, getEmail ? 'green' : 'red');
  insertBorder(userMessage, getMessage ? 'green' : 'red');

  // Se tudo estiver preenchido, mostra mensagem e limpa campos
  if (getName && getEmail && getMessage) {
    alert(`Obrigado pelo contato, ${getName}!`);
    resetFields(userName);
    resetFields(userEmail);
    resetFields(userMessage);
  }
};

// Evento de envio
btnSubmit.addEventListener('submit', enviarForm);

// Menu Responsivo (Mobile Toggle)

const toggleBtn = document.querySelector('.menu-toggle');
const menu = document.querySelector('#menu');

toggleBtn.addEventListener('click', () => {
  const expanded = toggleBtn.getAttribute('aria-expanded') === 'true';
  toggleBtn.setAttribute('aria-expanded', !expanded);
  menu.classList.toggle('active');
});

// Animação ao Rolar 

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target); // Para animar apenas uma vez
    }
  });
}, {
  threshold: 0.1,
});

// Observa todos os elementos com a classe .animate
document.querySelectorAll('.animate').forEach((el) => {
  observer.observe(el);
});


 
 
 