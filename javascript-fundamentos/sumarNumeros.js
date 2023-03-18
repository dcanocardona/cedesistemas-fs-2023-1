//V1 función tradicional
function sumar(numero1, numero2) {
    return numero1 + numero2;
}

const resultado = sumar(3, 2);

//V2 (arrow function)

//arrow function con retorno explícito
const sumarFlecha = (numero1, numero2) => {
    return numero1 + numero2;
}

//arrow function con retorno implícito
const sumarFlecha2 = (numero1, numero2) => (
    numero1 + numero2
);

//arrow function con retorno implícito (sin paréntesis)
const sumarFlecha3 = (numero1, numero2) => numero1 + numero2;