// Função para copiar a chave Pix para a área de transferência
function copyPixKey() {
  const pixKey = document.querySelector('.pix-key span').innerText;
  navigator.clipboard.writeText(pixKey)
    .then(() => {
      alert('Chave Pix copiada!');
    })
    .catch(err => {
      console.error('Erro ao copiar chave Pix: ', err);
    });
}

// Função para processar o pagamento e exibir a mensagem de "Aguardando pagamento"
function processPayment() {
  // Desabilitar o botão "Concluir Pagamento" para evitar múltiplos cliques
  document.getElementById('payButton').disabled = true;

  // Exibir a mensagem "Aguardando pagamento" após 3 segundos
  setTimeout(() => {
    // Esconder a seção de detalhes do pagamento
    document.querySelector('.payment-details').style.display = 'none';

    // Exibir a mensagem "Aguardando pagamento"
    document.getElementById('waitingMessage').style.display = 'block';
  }, 3000);
}