import { fetchJoke } from './api';

document.addEventListener('DOMContentLoaded', () => {
  const jokeText = document.getElementById('joke-text') as HTMLParagraphElement;
  const jokeButton = document.getElementById('joke-next') as HTMLButtonElement;
  const scoreButtons = document.querySelectorAll('.score-btn') as NodeListOf<HTMLButtonElement>;

// Almacenar los reports de los chistes
  let reportAcudits: {joke: string, score: number | null, date: string}[] = [];

// Manejar la pontuación y el chiste
  let currentScore: number | null = null;
  let currentJoke = "";

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
      // console.log(`Pontuación: ${score}`);
    })
  })

  updateJoke();
});