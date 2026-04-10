# Documentación: convertirClavesAMinusculas

## Descripción General
La función `convertirClavesAMinusculas()` es una utilidad recursiva que transforma todas las claves de un objeto (y objetos anidados) a minúsculas, preservando sus valores. Es especialmente útil para normalizar estructuras de datos que provienen de diferentes fuentes o APIs con inconsistencias en el formato de las claves.

## Firma de la Función
```javascript
function convertirClavesAMinusculas(obj) {
    // Implementación...
}
```

## Parámetros

| Parámetro | Tipo | Descripción |
|-----------|------|-------------|
| `obj` | `any` | El objeto, array o valor primitivo a procesar. Puede contener objetos y arrays anidados. |

## Valor Retornado
- **Tipo**: `any`
- **Descripción**: Retorna una nueva estructura de datos con todas las claves convertidas a minúsculas. Preserve los valores originales sin modificar.

## Comportamiento

### Casos Especiales

1. **Valores primitivos** (null, undefined, números, strings, booleans)
   - Se retornan sin modificación

2. **Arrays**
   - Se procesan recursivamente, aplicando la función a cada elemento
   - Se preserva la estructura del array

3. **Objetos**
   - Todas las claves se convierten a minúsculas
   - Los valores se procesan recursivamente (si son objetos o arrays)
   - Se utiliza `hasOwnProperty()` para procesar solo propiedades propias

## Ejemplos de Uso

### Ejemplo 1: Objeto Plano
```javascript
const objeto = {
    "Nombre": "Juan",
    "Apellido": "Pérez",
    "Email": "juan@ejemplo.com"
};

const resultado = convertirClavesAMinusculas(objeto);
// Resultado:
// {
//     "nombre": "Juan",
//     "apellido": "Pérez",
//     "email": "juan@ejemplo.com"
// }
```

### Ejemplo 2: Objeto Anidado
```javascript
const usuario = {
    "Nombre": "Juan",
    "Dirección": {
        "Calle": "Calle Principal",
        "Ciudad": "Madrid",
        "CodigoPostal": "28001"
    }
};

const resultado = convertirClavesAMinusculas(usuario);
// Resultado:
// {
//     "nombre": "Juan",
//     "dirección": {
//         "calle": "Calle Principal",
//         "ciudad": "Madrid",
//         "codigopostal": "28001"
//     }
// }
```

### Ejemplo 3: Array de Objetos
```javascript
const telefonos = [
    { "Tipo": "Movil", "Numero": "600123456" },
    { "Tipo": "Fijo", "Numero": "912345678" }
];

const resultado = convertirClavesAMinusculas(telefonos);
// Resultado:
// [
//     { "tipo": "Movil", "numero": "600123456" },
//     { "tipo": "Fijo", "numero": "912345678" }
// ]
```

### Ejemplo 4: Estructura Compleja Anidada
```javascript
const datosComplejos = {
    "Nombre": "Juan",
    "Email": "JUAN@EJEMPLO.COM",
    "Dirección": {
        "Calle": "Calle Principal",
        "Ciudad": "Madrid"
    },
    "Teléfonos": [
        { "Tipo": "Movil", "Número": "600123456" },
        { "Tipo": "Fijo", "Número": "912345678" }
    ]
};

const resultado = convertirClavesAMinusculas(datosComplejos);
// Todas las claves se convierten a minúsculas recursivamente
```

## Cómo Funciona (Algoritmo)

1. **Validación Inicial**: Verifica si el valor es nulo o no es un objeto. Si es así, lo retorna sin cambios.

2. **Procesamiento de Arrays**: Si es un array, aplica la función recursivamente a cada elemento.

3. **Procesamiento de Objetos**: 
   - Itera sobre cada propiedad del objeto original
   - Verifica que sea una propiedad propia (no heredada)
   - Convierte la clave a minúsculas usando `toLowerCase()`
   - Aplica la función recursivamente al valor (por si contiene objetos o arrays anidados)
   - Asigna el par clave-valor al nuevo objeto

4. **Retorno**: Retorna el nuevo objeto con todas las claves en minúsculas.

## Casos de Uso

- ✅ Normalizar datos provenientes de APIs externas con inconsistencias en mayúsculas/minúsculas
- ✅ Estandarizar estructuras de datos heterogéneas
- ✅ Preparar datos para búsquedas o comparaciones sensibles a mayúsculas/minúsculas
- ✅ Integración con bases de datos que tienen preferencias de formato
- ✅ Compatibilidad entre diferentes sistemas que usan convenciones distintas

## Ventajas

- **Recursiva**: Funciona con objetos y arrays profundamente anidados
- **No destructiva**: No modifica el objeto original
- **Flexible**: Maneja valores primitivos, objetos y arrays
- **Segura**: Utiliza `hasOwnProperty()` para evitar propiedades heredadas

## Limitaciones

- ⚠️ Las claves con caracteres especiales pueden comportarse de forma inesperada con `toLowerCase()`
- ⚠️ En objetos muy profundos o con referencias circulares, podría causar problemas
- ⚠️ No modifica valores, solo claves
- ⚠️ Crea nuevas referencias de objeto (no copia profunda de objetos internos)

## Relacionado
- Consultar el archivo `main.js` para ver el ejemplo de uso completo
