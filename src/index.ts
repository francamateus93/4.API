import { fetchJoke } from './api';

document.addEventListener('DOMContentLoaded', () => {
  // const app = document.getElementById('app');
  const jokeText = document.getElementById('joke-text') as HTMLParagraphElement;
  const jokeButton = document.getElementById('joke-next') as HTMLButtonElement;

  const updateJoke = async () => {
    const fetchingJoke = await fetchJoke();
    jokeText.textContent = fetchingJoke;
    console.log(fetchingJoke);
  }

  jokeButton.addEventListener('click', updateJoke);

  updateJoke();
});