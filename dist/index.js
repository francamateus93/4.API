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
const api_1 = require("./api");
document.addEventListener('DOMContentLoaded', () => __awaiter(void 0, void 0, void 0, function* () {
    const jokeText = document.getElementById('joke-text');
    const jokeButton = document.getElementById('joke-next');
    const scoreButtons = document.querySelectorAll('.score-btn');
    const weatherParagraph = document.getElementById('weather-text');
    // Actualizacion del Tiempo
    try {
        const weatherInfo = yield (0, api_1.fetchWeather)();
        weatherParagraph.textContent = `${weatherInfo}`;
    }
    catch (error) {
        console.error('Error al mostrar el clima:', error);
        weatherParagraph.textContent = 'Error al cargar la información meteorológica.';
    }
    // Almacenar los reports de los chistes
    let reportAcudits = [];
    // Manejar la pontuación y el chiste
    let currentScore = null;
    let currentJoke = "";
    // Actualización del Chiste
    const updateJoke = () => __awaiter(void 0, void 0, void 0, function* () {
        const joke = yield getRandomJoke();
        currentScore = null;
        currentJoke = joke;
        jokeText.textContent = joke;
        console.clear();
        console.log(reportAcudits);
    });
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
            const score = parseInt(button.getAttribute('data-score') || '0');
            currentScore = score;
            // console.log(score);
        });
    });
    // Obtener chistes de forma alternada
    const getRandomJoke = () => __awaiter(void 0, void 0, void 0, function* () {
        const random = Math.random(); // Genera un numero entre 0 y 1
        if (random < 0.5) {
            return yield (0, api_1.fetchJoke)();
        }
        else {
            return yield (0, api_1.fetchFromJokeAPI)();
        }
    });
    updateJoke();
}));
