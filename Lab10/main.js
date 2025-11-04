// main.js
import { usdToKzt, kztToUsd } from './converter.js';
import { format } from './formatter.js';

const usd = 50;
const kzt = usdToKzt(usd);
const backToUsd = kztToUsd(kzt);

document.body.innerHTML = `
    <h2>Лабораторная №10 — Модульность JS</h2>
    <p>${format(`${usd} USD →`, kzt, 'KZT')}</p>
    <p>${format(`${kzt} KZT →`, backToUsd, 'USD')}</p>
`;