const notNumber = value => isNaN(value) || value == '';

const calculateIMC = (weight, height) => (weight / ((height / 100) ** 2)).toFixed(2);

export {notNumber, calculateIMC}