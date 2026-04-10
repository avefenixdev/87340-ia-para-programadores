# Clase 01 - IA para programadores

## Introducción a las IA 

## Instalaciones y registro en las siguientes páginas

* <https://claude.ai/new>
* <https://antigravity.google/>
* <https://gemini.google.com/app?hl=es>
* <https://chatgpt.com/>
* <https://cursor.com/>

## ¿Qué es la IA?

La Inteligencia Artificial es el conjunto de técnicas que permiten a una máquina simular comportamientos inteligentes: reconocer patrones, tomar decisiones, predecir resultados o generar contenido. Nada más. Nada menos.

No hay conciencia, no hay intención, no hay creatividad real. Hay modelos entrenados con datos.

## ¿Cómo funciona realmente?

La IA se apoya principalmente en tres pilares:

- Datos
    Sin datos no hay IA. Y datos malos → resultados malos. Punto.
- Algoritmos
    Reglas matemáticas que ajustan parámetros para minimizar errores. No “aprenden” como humanos; optimizan.
- Capacidad de cómputo
    GPUs, TPUs y hardware especializado. Sin potencia, no hay milagros.

## Subcampos

* Machine Learning (ML): Modelos que pueden aprender patrones a partir datos.
* Deep Learning: Redes neuronales profundas
* Procedimientos de Lenguajes Natural: texto, voz, lenguaje humano
* Visión por compuradora: imágenes y video.

## Limitaciones

- Alucina: puede inventar información.
- Depende del entrenamiento: sesgos.
- No razona como humano: simula coherencia, no compresión
- No remplaza criterio profesional: lo asiste, no lo sustituye

## Arena (Compentencia entre IAs)

<https://arena.ai/>

## Estadisticas de IAs

<https://artificialanalysis.ai/>

## Canvas | Prototipo/Artefacto
Cuando le pido a la IA un código web me va a hacer una previsualización en el canvas o prototipo/artefacto.

# Utilizando Claude
Es para código

## Prompts Enginnering (Ingeniería de prompts)

1. Rol de la IA
2. Stack Tecnológico
3. Objetivo Principal
4. Contexto
5. Formato de Salida
6. Nivel Técnico.
7. Contracto de datos
8. Restricciones absolutas

### 1. Rol de la IA
Actuá como desarrollador senior + arquitecto de software

### 2. Stack Tecnologico
* Frontend: React 18 + Bootstrap 5.3
* Backend: Node.js v24.14 + Express 5.2
* Autencación: JWT
* Estilos: Tailwind CSS
    - No usar colores de fondo de Tailwind (Enumerar colores de fondo a utilizar)
    - Prohibido CSS custom

### 3. Objetivo principal

Crear un CRUD completo de productos:
    * Autencación mediante JWT
    * Middleware de valicación
    * Separación de responsabilidades (MVC -> Modelo Vista Controlador)

### 4. Contexto

* Tailwind ya está configuración
* No usar pseucodigo
* Código listo para producción, no ejemplo didacticos.

### 5. Formato de Salida

1. Código completo y funcional
2. Middleware JWT separado de la app principal
3. Un ejemplo de test para la validación
4. Comentarios solo donde agreguen valor.

### 6. Nivel Técnico

Asumí que soy un desarrollador principante:
* Aplicar principios SOLID
* Código modular
* Buenas prácticas reales (no didacticas)

### 7. Contrato de Datos

Ejemplo de autenticación JWT

> Entrada

```json
{ "correo": "string", "password": "string" }
```

> Salida

```json
{ "token": "string" }
```

### 8. Restricciones absolutas

* Nada de pseudocódigo
* Nada CSS Custom
* Nada de ejemplos incompletos
* Nada de "podría hacer..."

# Ejemplos de prompts

1. Aplicación CRUD Completo productos con JWT

```prompt
ROL: Desarrollador senior backend
LENGUAJE: JavaScript
Framework: Node.js v24 + Express 5
Objetivo: CRUD de productos con autenticación JWT
Prohibiciones: pseudocodigo, CSS Custom
Salida: código completo + middleware+ test
Nivel: Avazando
```

2. Componente de React con Tailwind

```prompt
ROL DE LA IA:
Actua como desarrollador senior fronted en React.

STACK:
Lenguaje: Javascript
Framework: React 18
Librerías obligatorias: Tailwind CSS
Librerías prohibidas: CSS custom, styled-components

OBJETIVO:
Crear un componete ProductCard reutilizable

CONTEXTO:
Tailwind ya está configurado

``` 