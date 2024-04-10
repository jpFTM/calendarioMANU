// Array de imagens de fundo
const backgroundImages = ['manu1.png', 'manu2.png', 'manu3.png', 'manu4.png'];

// Índice atual da imagem
let currentIndex = 0;

// Função para atualizar a imagem de fundo
function updateBackground() {
  const imageUrl = backgroundImages[currentIndex];
  document.querySelector('.background-img').style.backgroundImage = `url('${imageUrl}')`;
  
  // Avança para a próxima imagem
  currentIndex = (currentIndex + 1) % backgroundImages.length;
}

// Atualiza a imagem de fundo inicial
updateBackground();

// Atualiza a imagem de fundo a cada 5 segundos
setInterval(updateBackground, 5000);

// Função para calcular o tempo restante
function calculateCountdown() {
  const now = new Date();
  const targetDate = new Date('June 28, 2024 00:00:00');

  const difference = targetDate - now;
  
  if (difference <= 0) {
    return {
      months: 0,
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    };
  }
  
  let remainingTime = Math.floor(difference / 1000);
  
  const months = Math.floor(remainingTime / (3600 * 24 * 30));
  remainingTime = remainingTime % (3600 * 24 * 30);
  
  const days = Math.floor(remainingTime / (3600 * 24));
  remainingTime = remainingTime % (3600 * 24);
  
  const hours = Math.floor(remainingTime / 3600);
  remainingTime = remainingTime % 3600;
  
  const minutes = Math.floor(remainingTime / 60);
  const seconds = remainingTime % 60;
  
  return {
    months,
    days,
    hours,
    minutes,
    seconds
  };
}

// Função para formatar o tempo restante
function formatCountdown(countdown) {
  return `${countdown.months} meses, ${countdown.days} dias, ${countdown.hours} horas, ${countdown.minutes} minutos, ${countdown.seconds} segundos`;
}

// Função para atualizar o contador
function updateCountdown() {
  const countdownElement = document.getElementById('countdown');
  const countdown = calculateCountdown();
  countdownElement.textContent = formatCountdown(countdown);

  if (countdown.months === 0 && countdown.days === 0 && countdown.hours === 0 && countdown.minutes === 0 && countdown.seconds === 0) {
    clearInterval(interval);
    countdownElement.textContent = "Já chegamos em 28 de junho de 2024!";
  }
}

// Atualiza o contador inicialmente
updateCountdown();

// Atualiza o contador a cada segundo
const interval = setInterval(updateCountdown, 1000);
