function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

var numero = 8; // puedes cambiar este valor
console.log(`El factorial de ${numero} es ${factorial(numero)}`);
