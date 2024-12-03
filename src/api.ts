export const fetchJoke = async (): Promise<string> => {
  const response = await fetch('https://icanhazdadjoke.com/', { headers: { 'Accept': 'application/json' }});
  const data = await response.json();
  return data.joke;
}