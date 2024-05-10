
document.addEventListener('DOMContentLoaded', function() {
  const tituloLinks = document.querySelectorAll('.titulo-link');

  tituloLinks.forEach(function(titulo) {
    titulo.addEventListener('mouseover', function() {
      this.classList.add('hovered');
    });

    titulo.addEventListener('mouseout', function() {
      this.classList.remove('hovered');
    });
  });

  // Valida o formulário de contato antes de ser enviado
  const form = document.querySelector('form');

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const duvida = document.getElementById('Dúvida').value;

    if (nome.trim() === '' || email.trim() === '' || duvida.trim() === '') {
      alert('Por favor, preencha todos os campos do formulário.');
      return;
    }

    // Se todos os campos estiverem preenchidos, envie o formulário
    this.submit();
  });
});  