// funcion para pedir y validar numero
function pedirNumero(mensaje) {
    let numero;

    while (true) {
        numero = prompt(mensaje);

        if (numero === null) {
            alert("Debes ingresar los tres numeros.");
            return null;
        }

        // trim() eliminamos los espacios al inicio y al final, evitando que usuario deje la respuesta vacia o escriba solo espacios
        // isNaN() comprueba si el dato No es un numero valido, y !isNaN() comprueba que lo ingresado sea un numero valido
        if (numero.trim() !== "" && !isNaN(numero)) {
            return Number(numero);
        } else {
            alert("Algo paso, debes ingresar solo numeros");
        }
    }
}

function iniciarPrograma() {
    // Pedir los tres numeros
    let numero1 = pedirNumero("Ingresa el numero-1:");

    if (numero1 !== null) {
        let numero2 = pedirNumero("Ingresa el numero-2:");

        if (numero2 !== null) {
            let numero3 = pedirNumero("Ingresa el numero-3:");

            if (numero3 !== null) {
                let numMayor;
                let numMedio;
                let numMenor;

                // Comparar los numeros
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

                // Imprimir los numeros
                console.log("De mayor a menor:", numMayor, numMedio, numMenor);
                console.log("De menor a mayor:", numMenor, numMedio, numMayor);
                document.getElementById("mayor-menor").textContent =
                    `De mayor a menor: ${numMayor}, ${numMedio}, ${numMenor}`;
                document.getElementById("menor-mayor").textContent =
                    `De menor a mayor: ${numMenor}, ${numMedio}, ${numMayor}`;

                // Imprimir si los tres numeros son iguales
                if (numero1 === numero2 && numero2 === numero3) {
                    console.log("Los tres numeros son iguales");
                    document.getElementById("numeros-iguales").textContent =
                        "Los tres numeros son iguales";
                } else {
                    document.getElementById("numeros-iguales").textContent = "";
                }
                alert("Ejercicio terminado. Los resultados aparecen en la página y en la consola.");
            }
        }
    }
}
