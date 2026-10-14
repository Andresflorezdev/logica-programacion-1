# Comparación de números

Ejercicio de lógica de programación en JavaScript. El programa solicita tres
números, valida los datos ingresados y muestra los valores ordenados de mayor a
menor y de menor a mayor. También informa si los tres números son iguales.

El proyecto contiene dos versiones:

- `script.js`: versión para Node.js usando la biblioteca `prompt-sync`.
- `script-navegador.js`: versión para el navegador usando `prompt`, `alert` y
  `console.log`.

## Requisitos

- [Node.js](https://nodejs.org/) para ejecutar la versión de terminal.
- Un navegador web para ejecutar la versión de navegador.
- Un gestor de paquetes: `pnpm`, `npm` o `yarn`.

## Instalación

Primero, ubícate en la carpeta del proyecto:

```bash
cd ComparacionNumeros
```

Instala la dependencia `prompt-sync` con el gestor que tengas disponible:

```bash
# pnpm
pnpm install

# npm
npm install

# yarn
yarn install
```

El proyecto ya contiene `package.json` y `pnpm-lock.yaml`, por lo que
`pnpm install` instala la versión registrada de las dependencias. La
biblioteca utilizada es:

```text
prompt-sync
```

Esta biblioteca permite utilizar una entrada parecida a `prompt()` en la
terminal de Node.js.

## Importante: CommonJS y `type: module`

La versión de terminal utiliza la sintaxis CommonJS:

```js
const prompt = require("prompt-sync")();
```

Si en `package.json` aparece esta propiedad:

```json
"type": "module"
```

hay que quitarla para trabajar con `require()` sin convertir el archivo a
ES Modules. En este proyecto la propiedad `"type": "module"` no está
incluida, así que no es necesario eliminar nada, sin embargo siempre es bueno 
darle una revisada luego de las instalaciones, para validar algun error o mirar si todo esta bien.

Otra opción sería cambiar el código a `import`, pero este ejercicio está
escrito con `require`, por lo que se mantiene CommonJS.

## Ejecutar en Node.js

Después de instalar la dependencia, ejecuta:

```bash
node script.js
```

Escribe un número en cada pregunta. Si se ingresa texto, una respuesta vacía
o solo espacios, el programa muestra un mensaje y vuelve a solicitar el dato.
Al terminar, los resultados aparecen en la terminal.

## Ejecutar en el navegador

1. Abre `index.html` en el navegador.
2. Haz clic en **Empezar ejercicio**.
3. Responde las tres ventanas de entrada.
4. Para ver los resultados por consola, haz clic derecho en la página y selecciona
   **Inspeccionar**, tambien los puedes ver en la mini interfaz creada sin tener que ir a la terminal.
5. Abre la pestaña **Console** o **Consola**.

La versión del navegador no necesita `prompt-sync`: los navegadores ya
incluyen las funciones `prompt()` y `alert()`. Tampoco se ejecuta con
`node script-navegador.js`, porque `prompt`, `alert` y el objeto `window`
pertenecen al entorno del navegador.

Después de completar las tres entradas, los resultados también se muestran
directamente en la página. La consola continúa mostrando los mismos mensajes
para practicar el uso de las herramientas de desarrollo.

## Funciones creadas

### `pedirNumero(mensaje)`

Solicita un valor y lo valida dentro de un ciclo `while`. Si el usuario
cancela, devuelve `null`. Si escribe un número válido, lo convierte a tipo
`number` y lo devuelve. En caso contrario, muestra un mensaje y repite la
pregunta.

### `iniciarPrograma()`

Controla la versión del navegador: llama tres veces a `pedirNumero`, compara
los valores, identifica el mayor, el medio y el menor, y muestra los resultados
en la página y en la consola. Solo continúa si los tres números fueron
ingresados.

En `script.js`, el flujo principal está escrito directamente después de la
función `pedirNumero`, porque la versión de terminal no necesita un botón para
iniciar el programa.

## Funciones y conceptos de JavaScript utilizados

### `prompt()`

Muestra una ventana para que el usuario escriba un valor. El resultado llega
como texto (`string`) aunque se escriban números. Si el usuario pulsa
**Cancelar**, devuelve `null`.

### `alert()`

Muestra un mensaje en una ventana emergente del navegador. No devuelve el
resultado de la comparación; solo sirve para informar al usuario.

### `console.log()`

Imprime información en la consola del navegador o en la terminal de Node.js.
En la versión del navegador se conserva para revisar los resultados en
**Console**, aunque ahora también se muestran en la página.

### `document.getElementById()` y `textContent`

`document.getElementById()` busca un elemento HTML por su atributo `id`.
Después, `textContent` permite cambiar el texto que aparece dentro de ese
elemento:

```js
document.getElementById("mayor-menor").textContent =
    "De mayor a menor: 8, 5, 3";
```

El programa utiliza estas propiedades para escribir los resultados en los
elementos preparados en `index.html`.

### `trim()`

Elimina los espacios al inicio y al final de un texto:

```js
"   25  ".trim(); // "25"
```

En el ejercicio se usa para evitar que una entrada vacía o formada solo por
espacios se considere válida.

### `isNaN()`

Significa “is Not a Number” (“no es un número”). Devuelve `true` cuando el
valor no puede interpretarse como un número y `false` cuando sí puede.

```js
isNaN("abc"); // true
isNaN("25");  // false
```

Por eso el programa utiliza `!isNaN(numero)`: el signo `!` invierte el
resultado y permite continuar cuando la entrada sí es numérica. La validación
de `trim()` se hace antes para que una entrada vacía no pase por conversión
automática.

### `Number()`

Convierte un valor a tipo `number`:

```js
Number("25"); // 25
```

Se usa porque `prompt()` entrega texto y las comparaciones deben hacerse con
valores numéricos.

### `null`

Representa la ausencia intencional de un valor. En este programa significa que
el usuario canceló el `prompt()`. Por eso se comprueba:

```js
numero1 !== null
```

Esto evita intentar ordenar los números cuando falta una respuesta.

### `let`

Declara variables cuyo valor puede cambiar. Por ejemplo, `numMayor`,
`numMedio` y `numMenor` reciben su valor después de comparar los tres números.

### `while (true)`

Repite las instrucciones indefinidamente hasta que se ejecuta `return` o se
interrumpe el ciclo. Aquí permite volver a pedir el número después de una
entrada inválida.

### `return`

Finaliza la función y entrega un resultado. `pedirNumero` devuelve el número
convertido o `null` si el usuario cancela.

### `===`, `>=` y `&&`

- `===` compara valor y tipo sin conversiones automáticas.
- `>=` comprueba si un número es mayor o igual que otro.
- `&&` significa “y”; ambas condiciones deben ser verdaderas.

Estas comparaciones permiten ordenar los números y detectar cuando los tres
son iguales.

### Plantillas de texto

Las comillas invertidas (`` ` ``) permiten insertar saltos de línea con `\n`
y crear textos de varias partes, como el mensaje final que aparece en
`alert()`.

## Ejemplo de salida

Si se ingresan `8`, `3` y `5`, la consola muestra:

```text
De mayor a menor: 8 5 3
De menor a mayor: 3 5 8
```
