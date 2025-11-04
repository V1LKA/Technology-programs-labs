// main.js
import { usdToKzt, kztToUsd } from './converter.js';
import { format } from './formatter.js';

const input = document.getElementById('inputUsd');
const output = document.getElementById('output');
const button = document.getElementById('convertBtn');

button.addEventListener('click', () => {
    const usdValue = Number(input.value);

    if (isNaN(usdValue) || usdValue <= 0) {
        output.innerHTML = "<p>Введите корректное число!</p>";
        return;
    }

    const resultKZT = usdToKzt(usdValue);
    const resultBack = kztToUsd(resultKZT);

    output.innerHTML = `
        <p>${format(`${usdValue} USD →`, resultKZT, 'KZT')}</p>
        <p>${format(`${resultKZT} KZT →`, resultBack, 'USD')}</p>
    `;
});