// Joke API (icanhazdadjoke)
export const fetchJoke = async (): Promise<string> => {
  try {
    const response = await fetch('https://icanhazdadjoke.com/', {
      headers: { 'Accept': 'application/json' }
    });
    const data = await response.json();
    return data.joke;
} catch (error) {
    console.error('Error al obtener el chiste:', error)
    return 'Error al obtener el chiste';
  }
};

// Joke API (jokeapi.dev)
export const fetchFromJokeAPI = async (): Promise<string> => {
  try {
    const response = await fetch('https://v2.jokeapi.dev/joke/Any?type=single');
    const data = await response.json();
    return data.joke;
  } catch (error) {
    console.error('Error al obtener el chiste:', error)
    return 'Error al obtener el chiste';
  }
}

// Weather API (open-meteo)
type weatherCodes = {
  [key: number]: string
};

const weatherIcons: weatherCodes = {
  0: "☀️",
  1: "🌤️",
  2: "⛅",
  3: "☁️", 
  45: "🌫️",
  48: "🌫️",
  51: "🌦️",
  61: "🌧️",
  71: "❄️",
  95: "⛈️",
}

export const fetchWeather = async (): Promise<string> => {
  const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=41.38&longitude=2.15&current_weather=true`;

  try {
    const response = await fetch(weatherUrl);
    if (!response.ok) {
      throw new Error("Error al obtener el clima.");
    }
    const data = await response.json();

    const temperature = Math.round(data.current_weather.temperature);
    const weatherCode = data.current_weather.weathercode;
    const weatherIcon = weatherIcons[weatherCode] || "Error Icon";

    const weatherElement = document.getElementById('weather-icon');
    const weatherTemperature = document.getElementById('weather-temperature');

    if(weatherElement && weatherTemperature) {
      weatherElement.textContent = weatherIcon;
      weatherTemperature.textContent = `${temperature}ºC`;
    }
    return weatherIcon;
  } catch (error) {
    console.error('Error al obtener el clima:', error)
    return 'Error al obtener el clima';
  }
};
