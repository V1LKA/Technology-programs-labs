// formatter.js
export function format(label, value, currency) {
    return `${label}: ${value.toFixed(2)} ${currency}`;
}