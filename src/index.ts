import { fetchJoke } from './api';

document.addEventListener('DOMContentLoaded', () => {
  const jokeText = document.getElementById('joke-text') as HTMLParagraphElement;
  const jokeButton = document.getElementById('joke-next') as HTMLButtonElement;

  const updateJoke = async () => {
    const joke = await fetchJoke();
    jokeText.textContent = joke;
    console.log(joke);
  }

  jokeButton.addEventListener('click', updateJoke);
  updateJoke();
});