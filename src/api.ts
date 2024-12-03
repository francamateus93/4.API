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

export const fetchWeather = async (provinceId: string): Promise<string> => {
  const weatherApi = 'https://www.el-tiempo.net/api/json/v2/provincias';
  const weatherUrl = `${weatherApi}/${provinceId}`;

  try {
    const response = await fetch(weatherUrl);
    const data = await response.json();
    const weatherInfo = data.stateSky.description || 'Información no disponible';
    return weatherInfo;
  } catch (error) {
    console.error('Error al obtener el clima:', error)
    return 'Error al obtener el clima';
  }
};