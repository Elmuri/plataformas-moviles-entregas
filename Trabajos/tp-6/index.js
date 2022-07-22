// Numeros

// Implementar una función "suma" que retorne la suma de 2 numeros
// ejemplo: suma(2,3) retorna 5
// fomra de funcion 1
function Suma(num1, num2) {
    suma = num1 + num2;
    return suma;
}
// forma de funcion 2
var Suma = (num1, num2) => {
    suma = num1 + num2;
    return suma;
};

// forma de funcion 3
var suma = function (num1, num2) {
    suma = num1 + num2;
    return suma;
};

document.write("<br><p>" + "suma(2,3): ", Suma(2, 3) + "</p>");
console.log("suma(2,3): ", Suma(2, 3));

// Implementar una función "elevarAlCubo" que eleve al cubo un numero
// ejemplo: elevarAlCubo(3) retorna 27
// forma de funcion 1
function elevarAlCubo(n) {
    return n ** 3;
}
// forma de funcion 2
var elevarAlCubo = (n) => {
    return n ** 3;
};

// forma de funcion 3
var elevarAlCubo = function (n) {
    return n ** 3;
};

document.write("<br><p>" + "elevarAlCubo(3):", elevarAlCubo(3) + "</p>");
console.log("elevarAlCubo(3): ", elevarAlCubo(3));

// Implementar una función "restoDivisionEntera" para devolver el resto de una división entera entre un dividendo y un divisor
// ejemplo: restoDivisionEntera(3,2) retorna 1
// forma de funcion 1
function restoDivisionEntera(dividendoo, divisor) {
    return dividendoo % divisor;
}
// forma de funcion 2
var restoDivisionEntera = (dividendoo, divisor) => {
    return dividendoo % divisor;
};

// forma de funcion 3
var restoDivisionEntera = function (dividendoo, divisor) {
    return dividendoo % divisor;
};

document.write("<br><p>" + "elevarAlCubo(3,2):",restoDivisionEntera(3, 2) + "</p>");
console.log("restoDivisionEntera(3,2): ", restoDivisionEntera(3, 2));

// Implementar una función "numeroPi" para devolver el numero PI
// ejemplo: numeroPi() retorna 3,14...
// forma de funcion 1
function numeroPi() {
    return Math.PI;
}
// forma de funcion 2
var numeroPi = () => {
    return Math.PI;
};

// forma de funcion 3
var numeroPi = function () {
    return Math.PI;
};

document.write("<br><p>" + "numeroPi():", numeroPi() + "</p>");
console.log("numeroPi(): ", numeroPi());

// Implementar una función "numeroRandom" para devolver un número random / aleatorio
// ejemplo: numeroRandom() retorna 0,123...
// forma de funcion 1
function nummeroRandom() {
    return Math.random();
}
// forma de funcion 2
var numeroRandom = () => {
    return Math.random();
};

// forma de funcion 3
var numeroRandom = function () {
    return Math.random();
};

document.write("<br><p>" + "numeroRandom():", numeroRandom() + "</p>");
console.log("numeroRandom(): ", numeroRandom());

// Implementar una función "mejorNumeroRandom" para devolver un número random entre 2 valores recibidos como parámetros
// ejemplo: mejorNumeroRandom(1,6) retorna 3
// forma de funcion 1
function mejorNumeroRandom(desde, hasta) {
    hasta = Math.ceil(hasta);
    desde = Math.floor(desde);
    return Math.floor(Math.random() * (desde - hasta) + hasta);
}
// forma de funcion 2
var mejorNumeroRandom = (desde, hasta) => {
    hasta = Math.ceil(hasta);
    desde = Math.floor(desde);
    return Math.floor(Math.random() * (desde - hasta) + hasta);
};

// forma de funcion 3
var mejorNumeroRandom = function (desde, hasta) {
    hasta = Math.ceil(hasta);
    desde = Math.floor(desde);
    return Math.floor(Math.random() * (desde - hasta) + hasta);
};

document.write("<br><p>" + "mejorNumeroRandom():",mejorNumeroRandom(1, 6) + "</p>");
console.log("mejorNumeroRandom(1,6): ", mejorNumeroRandom(1, 6));

// Cadenas de Caracteres

// Implementar una función "transformarMayuscula" que transforme a mayúscula la palabra recibida como parámetro
// ejemplo: transformarMayuscula("Plataformas Móviles") retorna "PLATAFORMAS MÓVILES"
// forma de funcion 1
function transformarMayuscula(palabra) {
    return palabra.toUpperCase();
}
// forma de funcion 2
var trasformarMAyuscula = (palabra) => {
    return palabra.toUpperCase();
};

// forma de funcion 3
var trasformarMAyuscula = function (palabra) {
    return palabra.toUpperCase();
};

document.write("<br><p>" + "transformarMayuscula('Plataformas Móviles'):",transformarMayuscula("Plataformas Móviles") + "</p>");
console.log('transformarMayuscula("Plataformas Móviles"): ',transformarMayuscula("Plataformas Móviles"));

// Implementar una función "primeraLetra" que nos devuelva la inicial de la palabra recibida como parámetro
// ejemplo: primeraLetra("Plataformas") retorna "P"
// forma de funcion 1
function primeraLetra(palabra) {
    return palabra[0];
}
// forma de funcion 2
var primeraLetra = (palabra) => {
    return palabra[0];
};
// froam de funcion 3
var primeraLetra = function (palabra) {
    return palabra[0];
};
document.write("<br><p>" + "primeraLetra('Plataformas'):",primeraLetra("Plataformas") + "</p>");
console.log('primeraLetra("Plataformas"): ', primeraLetra("Plataformas"));

// Implementar una función "ultimaLetra" que nos devuelva la letra final la palabra recibida como parámetro
// ejemplo: ultimaLetra("Plataformas") retorna "s"
// forma de funcion 1
function ultimaLetra(palabra) {
    return palabra[palabra.length - 1];
}
// forma de funcion 2
var ultimaLetra = (palabra) => {
    return palabra[palabra.length - 1];
};
// forma de funcion 3
var ultimaLetra = function (palabra) {
    return palabra[palabra.length - 1];
};

document.write("<br><p>" + "ultimaLetra('Plataformas'):",ultimaLetra("Plataformas") + "</p>");
console.log('ultimaLetra("Plataformas"): ', ultimaLetra("Plataformas"));

// Implementar una función "primeraLetraMayuscula" que devuelve la palabra original con su primera letra en mayúscula
// ejemplo: primeraLetraMayuscula("plataformas") retorna "Plataformas"
// forma de funcion 1
function primeraLetraMayuscula(palabra) {
    var primeraletraM = trasformarMAyuscula(primeraLetra(palabra));
    var restodelaPalabra = palabra.slice(1, palabra.length);
    return primeraletraM + restodelaPalabra;
}
// forma de funcion 2
var primeraLetraMayuscula = (palabra) => {
    var primeraletraM = trasformarMAyuscula(primeraLetra(palabra));
    var restodelaPalabra = palabra.slice(1, palabra.length);
    return primeraletraM + restodelaPalabra;
};
// forma de funcion 3
var primeraLetraMayuscula = function (palabra) {
    var primeraletraM = trasformarMAyuscula(primeraLetra(palabra));
    var restodelaPalabra = palabra.slice(1, palabra.length);
    return primeraletraM + restodelaPalabra;
};
document.write("<br><p>" + "primeraLetraMayuscula('plataformas'):",primeraLetraMayuscula("plataformas") + "</p>");
console.log('primeraLetraMayuscula("plataformas"): ',primeraLetraMayuscula("plataformas"));

// Implementar una función "palabraAListaDeLetras" que dada una palabra me retorne un listado de sus letras
// ejemplo: palabraAListaDeLetras("hola") retorna ['h', 'o', 'l', 'a'];
// forma de funcion 1
function palabraListaDeLetras(palabra) {
    let listaResultado = [];
    for (var i = 0; i < palabra.length; i++) {
        listaResultado.push(palabra[i]);
        // listaResultado[i]=palabra[i];
    }
    return listaResultado;
}
// forma de funcion 2
var palabraAListaDeLetras = (palabra) => {
    let listaResultado = [];
    for (var i = 0; i < palabra.length; i++) {
        listaResultado.push(palabra[i]);
        // listaResultado[i]=palabra[i];
    }
    return listaResultado;
};
// forma de funcion 3
var palabraAListaDeLetras = function (palabra) {
    let listaResultado = [];
    for (var i = 0; i < palabra.length; i++) {
        listaResultado.push(palabra[i]);
        // listaResultado[i]=palabra[i];
    }
    return listaResultado;
};

document.write("<br><p>" + "palabraAListaDeLetras('hola'):",palabraAListaDeLetras("hola") + "</p>");
console.log('palabraAListaDeLetras("hola"): ', palabraAListaDeLetras("hola"));

// Implementar una función "listaDeLetrasAPalabra" que dado un listado de letras, devuelva una palabra
// ejemplo: listadoDeLetrasAPalabra(["h", "o", "l", "a"]) retorna "hola";
// forma de funcion 1
function listadoDeLetrasAPalabra(lista) {
    palabra = "";
    for (var i = 0; i < lista.length; i++) {
        palabra += lista[i];
    }
    return palabra;
}
//forma de funcion 2
var listadoDeLetrasAPalabra = (lista) => {
    palabra = "";
    for (var i = 0; i < lista.length; i++) {
        palabra += lista[i];
    }
    return palabra;
};
//forma de funcion 3
var listadoDeLetrasAPalabra = function (lista) {
    palabra = "";
    for (var i = 0; i < lista.length; i++) {
        palabra += lista[i];
    }
    return palabra;
};

document.write("<br><p>" + "listadoDeLetrasAPalabra(['h', 'o', 'l', 'a']):",listadoDeLetrasAPalabra(["h", "o", "l", "a"]) + "</p>");
console.log('listadoDeLetrasAPalabra(["h", "o", "l", "a"]): ',listadoDeLetrasAPalabra(["h", "o", "l", "a"]));

// Implementar una función "palabraInvertida" que devuelva la palabra invertida
// ejemplo: palabraInvertida("hola") retorna "aloh";
// forma de funcion 1
// 1-split() separará cada carácter de una cadena y lo convertirá en un array.
// 2-reverse() tomará esa matriz e invertirá los elementos dentro de ella.
// 3-join() unirá los caracteres que han sido invertidos por la función reverse().
function palabraInvertida(palabra) {
    reverso = palabra.split("").reverse().join("");
    return reverso;
}
// forma de funcion 2
var palabraInvertida = (palabra) => {
    reverso = palabra.split("").reverse().join("");
    return reverso;
};
// forma de funcion 3
var palabraInvertida = function (palabra) {
    reverso = palabra.split("").reverse().join("");
    return reverso;
};

document.write("<br><p>" + "palabraInvertida('hola'):",palabraInvertida("hola") + "</p>");
console.log('palabraInvertida("hola"): ', palabraInvertida("hola"));
