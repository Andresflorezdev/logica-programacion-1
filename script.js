const prompt = require("prompt-sync")();

// Funcion para pedir y validar un numero
function pedirNumero(mensaje) {
    let numero;

    while (true) {
        numero = prompt(mensaje); // 

        // trim() eliminamos los espacios al inicio y al final, evitando que usuario deje la respuesta vacia o escriba solo espacios
        // isNaN() comprueba si el dato No es un numero valido, y !isNaN() comprueba que lo ingresado sea un numero valido
        if (numero.trim() !== "" && !isNaN(numero)) {
            return Number(numero);
        } else {
            console.log("Algo paso, debes ingresar solo numeros");
        }
    }
}

let numero1 = pedirNumero("Ingresa el numero-1: ");
let numero2 = pedirNumero("Ingresa el numero-2: ");
let numero3 = pedirNumero("Ingresa el numero-3: ");

let numMayor;
let numMedio;
let numMenor;

if (numero1 >= numero2 && numero1 >= numero3) {
    numMayor = numero1;

    if (numero2 >= numero3) {
        numMedio = numero2;
        numMenor = numero3;
    } else {
        numMedio = numero3;
        numMenor = numero2;
    }

} else if (numero2 >= numero1 && numero2 >= numero3) {
    numMayor = numero2;

    if (numero1 >= numero3) {
        numMedio = numero1;
        numMenor = numero3;
    } else {
        numMedio = numero3;
        numMenor = numero1;
    }

} else {
    numMayor = numero3;

    if (numero1 >= numero2) {
        numMedio = numero1;
        numMenor = numero2;
    } else {
        numMedio = numero2;
        numMenor = numero1;
    }
}

console.log("De mayor a menor: ", numMayor, numMedio, numMenor);
console.log("De menor a mayor: ", numMenor, numMedio, numMayor);

if (numero1 === numero2 && numero2 === numero3) {
    console.log("Los tres numeros son iguales");
}