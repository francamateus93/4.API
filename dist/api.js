"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchWeather = exports.fetchFromJokeAPI = exports.fetchJoke = void 0;
// Joke API (icanhazdadjoke)
const fetchJoke = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield fetch('https://icanhazdadjoke.com/', {
            headers: { 'Accept': 'application/json' }
        });
        const data = yield response.json();
        return data.joke;
    }
    catch (error) {
        console.error('Error al obtener el chiste:', error);
        return 'Error al obtener el chiste';
    }
});
exports.fetchJoke = fetchJoke;
// Joke API (jokeapi.dev)
const fetchFromJokeAPI = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield fetch('https://v2.jokeapi.dev/joke/Any?type=single');
        const data = yield response.json();
        return data.joke;
    }
    catch (error) {
        console.error('Error al obtener el chiste:', error);
        return 'Error al obtener el chiste';
    }
});
exports.fetchFromJokeAPI = fetchFromJokeAPI;
const weatherIcons = {
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
};
const fetchWeather = () => __awaiter(void 0, void 0, void 0, function* () {
    const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=41.38&longitude=2.15&current_weather=true`;
    try {
        const response = yield fetch(weatherUrl);
        if (!response.ok) {
            throw new Error("Error al obtener el clima.");
        }
        const data = yield response.json();
        const temperature = data.current_weather.temperature;
        const weatherCode = data.current_weather.weathercode;
        const weatherIcon = weatherIcons[weatherCode] || "Error Icon";
        const weatherElement = document.getElementById('weather-icon');
        const weatherTemperature = document.getElementById('weather-temperature');
        if (weatherElement && weatherTemperature) {
            weatherElement.textContent = weatherIcon;
            weatherTemperature.textContent = {} `${temperature}ºC`;
        }
    }
    catch (error) {
        console.error('Error al obtener el clima:', error);
        return 'Error al obtener el clima';
    }
});
exports.fetchWeather = fetchWeather;
