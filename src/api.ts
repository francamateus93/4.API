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

export const fetchWeather = async (): Promise<string> => {
  const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=41.38&longitude=2.15&current_weather=true`;

  try {
    const response = await fetch(weatherUrl);
    const data = await response.json();
    const temperature = data.current_weather.temperature;
    const windSpeed = data.current_weather.windspeed; 
    return `⛅ Temperatura: ${temperature}ºC | 🌬️ Velocidad del Viento: ${windSpeed}km/h`;
  } catch (error) {
    console.error('Error al obtener el clima:', error)
    return 'Error al obtener el clima';
  }
};