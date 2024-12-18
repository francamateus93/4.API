import { fetchJoke, fetchWeather, fetchFromJokeAPI } from './api';

document.addEventListener('DOMContentLoaded', async () => {
  const jokeText = document.getElementById('joke-text') as HTMLParagraphElement;
  const jokeButton = document.getElementById('joke-next') as HTMLButtonElement;
  const scoreButtons = document.querySelectorAll('.score-btn') as NodeListOf<HTMLButtonElement>;
  const weatherParagraph = document.getElementById('weather-icon') as HTMLParagraphElement;

// Actualizacion del Tiempo
  try {
    const weatherInfo = await fetchWeather();
    weatherParagraph.textContent = `${weatherInfo}`;
  } catch (error) {
    console.error('Error al mostrar el clima:', error);
    weatherParagraph.textContent = 'Error al cargar la información meteorológica.';
  }

// Almacenar los reports de los chistes
  let reportAcudits: {joke: string, score: number | null, date: string}[] = [];

// Manejar la pontuación y el chiste
  let currentScore: number | null = null;
  let currentJoke = "";

  
  // Actualización del Chiste
  const updateJoke = async () => {
    const joke = await getRandomJoke();
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

  // Obtener chistes de forma alternada
  const getRandomJoke = async (): Promise<string> => {
    const random = Math.random(); // Genera un numero entre 0 y 1
    if (random < 0.5) {
      return await fetchJoke();
    } else {
      return await fetchFromJokeAPI();
    }
    };

  updateJoke();
});