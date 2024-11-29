import { fetchJoke } from './api';

document.addEventListener('DOMContentLoaded', () => {
  const app = document.getElementById('app');
  const joke = document.createElement('p');
  const button = document.createElement('button');

  button.textContent = 'Nuevo Chiste';
  button.style.margin = '20px';
  button.style.backgroundColor = '#5cdaeb';

  app?.appendChild(joke);
  app?.appendChild(button);

  const updateJoke = async () => {
    const fetchJoke = await fetchJoke();
    joke.textContent = fetchJoke; 
  }
  button.addEventListener('click', updateJoke);
})