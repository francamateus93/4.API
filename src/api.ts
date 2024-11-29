export const fetchJoke = async (): Promise => {
  const response = await fetch('https://icanhazdadjoke.com/', {headers: {'accept': 'application/json'}});
  const data = await response.json();
  return data.joke;
}