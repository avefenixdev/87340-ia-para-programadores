// Caso 1: Generación pasiva
// Escribo el nombre de la función que quiero que copilot me autocomplete
function calculadoraSuma(a, b) {
    // Copilot me sugiere el código para sumar dos números
    return a + b;
} 

function calculadoraResta(a, b) {
    // Copilot me sugiere el código para restar dos números
    return a - b;
}

function trigonometricaSeno(x) {
    // Copilot me sugiere el código para calcular el seno de un ángulo
    return Math.sin(x);
}

function trigonomtricaCosena(x) {
    // Copilot me sugiere el código para calcular el coseno de un ángulo
    return Math.cos(x);
}

// Caso 2: Generación de código a partir de un comentario
// Estoy desarrollando una calculadora y quiero implementar la función de mutiplicación
// Copilot me sugiere el código para multiplicar dos números
/**
 * Calcula el producto de dos números.
 * 
 * @param {number} a - El primer número a multiplicar.
 * @param {number} b - El segundo número a multiplicar.
 * @returns {number} El resultado de la multiplicación de a por b.
 * 
 * @example
 * // Multiplicar 5 por 3
 * calculadoraMultiplicacion(5, 3);
 * // retorna: 15
 * 
 * @example
 * // Multiplicar números negativos
 * calculadoraMultiplicacion(-4, 6);
 * // retorna: -24
 */
function calculadoraMultiplicacion(a, b) {
    return a * b;
}

// Estoy desarrollando una calculadora y quiero implementar la función que calcule el logaritmo base 10 de un número
// Copilot me sugiere el código para calcular el logaritmo base 10 de un número
function calculadoraLogaritmoBase10(x) {
    return Math.log10(x);
}

// Caso 3: Utilización de chat inline (Ctrl + I)

// Función que retorna el número PI con 10 decimales
function obtenerPi() {
    return Number(Math.PI.toFixed(10));
}

// Función que retorna el número de Euler con 10 decimales
function obtenerEuler() {
    return Number(Math.E.toFixed(10));
}

// Función que calcula el desvío estándar de un array de números
function calcularDesvioEstandar(numeros) {
    const n = numeros.length;
    if (n === 0) return 0;
    
    // Calcular la media
    const media = numeros.reduce((sum, num) => sum + num, 0) / n;
    
    // Calcular la suma de los cuadrados de las diferencias
    const sumaCuadrados = numeros.reduce((sum, num) => sum + Math.pow(num - media, 2), 0);
    
    // Calcular la desviación estándar
    const desvioEstandar = Math.sqrt(sumaCuadrados / n);
    
    return desvioEstandar;
}

// Caso 4: Generación de código utilizando el cat (ctrl + shift + i)

// Función que convierte todas las claves de un objeto a minúsculas
function convertirClavesAMinusculas(obj) {
    if (obj === null || typeof obj !== 'object') {
        return obj;
    }
    
    if (Array.isArray(obj)) {
        return obj.map(item => convertirClavesAMinusculas(item));
    }
    
    const nuevoObj = {};
    for (const clave in obj) {
        if (obj.hasOwnProperty(clave)) {
            const nuevaClave = clave.toLowerCase();
            nuevoObj[nuevaClave] = convertirClavesAMinusculas(obj[clave]);
        }
    }
    return nuevoObj;
}

// Ejemplo de uso
const objetoOriginal = {
    "Nombre": "Juan",
    "Apellido": "Pérez",
    "Email": "JUAN@EJEMPLO.COM",
    "Direccion": {
        "Calle": "Calle Principal",
        "Ciudad": "Madrid",
        "CodigoPostal": "28001"
    },
    "Telefonos": [
        { "Tipo": "Movil", "Numero": "600123456" },
        { "Tipo": "Fijo", "Numero": "912345678" }
    ]
};

console.log("Objeto original:");
console.log(objetoOriginal);

const objetoConMinusculas = convertirClavesAMinusculas(objetoOriginal);

console.log("\nObjeto con claves en minúsculas:");
console.log(objetoConMinusculas);

// Al final del archivo, agregar:
module.exports = {
    calculadoraSuma,
    calculadoraResta,
    trigonometricaSeno,
    trigonomtricaCosena,
    calculadoraMultiplicacion,
    calculadoraLogaritmoBase10,
    obtenerPi,
    obtenerEuler,
    calcularDesvioEstandar,
    convertirClavesAMinusculas
};