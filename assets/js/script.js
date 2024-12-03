// Seleciona o botão e o pop-up
const shareButton = document.getElementById('share');
const popup = document.getElementById('popup');
const closeButton = document.querySelector('.close-button');

// Função para abrir o pop-up
shareButton.addEventListener('click', () => {
  popup.style.display = 'flex';
});

// Função para fechar o pop-up
closeButton.addEventListener('click', () => {
  popup.style.display = 'none';
});

// Fechar o pop-up ao clicar fora do conteúdo
popup.addEventListener('click', (event) => {
  if (event.target === popup) {
    popup.style.display = 'none';
  }
});

// Botão de Copiar a URL
document.getElementById('copy-url-btn').addEventListener('click', function() {
  const url = window.location.href;
  navigator.clipboard.writeText(url).then(function() {
      alert('URL copiada para a área de transferência!');
  }, function(err) {
      console.error('Erro ao copiar URL: ', err);
  });
});

// Compartilhar no WhatsApp
document.getElementById('whatsapp-btn').addEventListener('click', function() {
  const url = window.location.href;
  const message = `Esse é o cartão digital do SindPetShop-SP: ${url}`;
  const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`;
  window.open(whatsappUrl, '_blank');
});

// Compartilhar no Telegram (Código Atualizado)
document.getElementById('telegram-btn').addEventListener('click', function() {
  const url = window.location.href;
  const message = `Esse é o cartão digital do SindPetShop-SP`;
  const telegramUrl = `https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(message)}`;
  window.open(telegramUrl, '_blank');
});

// Compartilhar no X (antigo Twitter)
document.getElementById('x-btn').addEventListener('click', function() {
  const url = window.location.href;
  const text = `Esse é o cartão digital do SindPetShop-SP`;
  const xUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`;
  window.open(xUrl, '_blank');
});

// Compartilhar no Facebook
document.getElementById('facebook-btn').addEventListener('click', function() {
  const url = window.location.href;
  const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
  window.open(facebookUrl, '_blank');
});

// Compartilhar no LinkedIn (Código Atualizado)
document.getElementById('linkedin-btn').addEventListener('click', function() {
  const url = window.location.href;
  const title = 'Esse é o cartão digital do SindPetShop-SP:';
  const summary = 'Conheça o cartão digital do SindPetShop-SP e fique por dentro das novidades.';
  const linkedinUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}&summary=${encodeURIComponent(summary)}`;
  window.open(linkedinUrl, '_blank');
});

// Compartilhar no Messenger
document.getElementById('messenger-btn').addEventListener('click', function() {
  const url = window.location.href;
  const messengerAppUrl = `fb-messenger://share?link=${encodeURIComponent(url)}`;
  const messengerWebUrl = `https://www.facebook.com/dialog/send?link=${encodeURIComponent(url)}&app_id=SEU_APP_ID&redirect_uri=${encodeURIComponent(url)}`;

  // Tenta abrir o aplicativo Messenger
  window.location.href = messengerAppUrl;

  // Fallback para a versão web após um pequeno atraso
  setTimeout(function() {
      window.open(messengerWebUrl, '_blank');
  }, 500);
});

// Enviar por E-mail
document.getElementById('email-btn').addEventListener('click', function() {
  const url = window.location.href;
  const subject = encodeURIComponent('Cartão Digital SindPetShop-SP');
  const body = encodeURIComponent(`Olá, esse é o cartão digital do SindPetShop-SP: ${url}`);
  window.location.href = `mailto:?subject=${subject}&body=${body}`;
});