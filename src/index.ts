import { fetchJoke, fetchWeather } from './api';

document.addEventListener('DOMContentLoaded', async () => {
  const weatherParagraph = document.getElementById('weather-text') as HTMLParagraphElement;
  const jokeText = document.getElementById('joke-text') as HTMLParagraphElement;
  const jokeButton = document.getElementById('joke-next') as HTMLButtonElement;
  const scoreButtons = document.querySelectorAll('.score-btn') as NodeListOf<HTMLButtonElement>;

// Almacenar los reports de los chistes
  let reportAcudits: {joke: string, score: number | null, date: string}[] = [];

// Manejar la pontuación y el chiste
  let currentScore: number | null = null;
  let currentJoke = "";

// Actualizacion del Tiempo
  const idProvince = "08" // codigo de la provincia de Barcelona
  try {
    const weatherInfo = await fetchWeather(idProvince);
    weatherParagraph.textContent = `El Clima: ${weatherInfo}`;
  } catch(error) {
    console.error('Error al mostrar el clima:', error);
    weatherParagraph.textContent = 'Error al cargar';
  }

// Actualización del Chiste
  const updateJoke = async () => {
    const joke = await fetchJoke();
    currentScore = null;
    currentJoke = joke;
    jokeText.textContent = joke;
    console.clear();
    console.log(reportAcudits);
  }

// Manejar el evento de click en el button 'Nuevo Chiste'
  jokeButton.addEventListener('click', () => {
    if (currentJoke) {
      const reportJokes = {
        joke: currentJoke,
        score: currentScore,
        date: new Date().toString(),
      };
      reportAcudits.push(reportJokes);
    }
    updateJoke();
  });

// Manejar la pontuación
  scoreButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const score = parseInt(button.getAttribute('data-score') || '0')
      currentScore = score;
      // console.log(score);
    })
  })

  updateJoke();
});