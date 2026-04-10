# Weather API 🌡️

API REST desarrollada en Node.js con Express para obtener información del clima.

## Requisitos

- Node.js (v14 o superior)
- npm o yarn

## Instalación

1. Navega al directorio del proyecto:
```bash
cd src/node
```

2. Instala las dependencias:
```bash
npm install
```

## Uso

### Iniciar el servidor

En modo desarrollo (con recarga automática):
```bash
npm run dev
```

En modo producción:
```bash
npm start
```

El servidor estará disponible en `http://localhost:3000`

## Endpoints disponibles

### 1. Raíz de la API
```
GET /
```
Retorna información general de la API y los endpoints disponibles.

**Respuesta:**
```json
{
  "mensaje": "Bienvenido a la API de Clima",
  "version": "1.0.0",
  "endpoints": {...}
}
```

### 2. Obtener clima de una ciudad
```
GET /api/clima/:ciudad
```

**Parámetros:**
- `ciudad` (string): Nombre de la ciudad

**Ejemplos:**
```
GET /api/clima/madrid
GET /api/clima/barcelona
GET /api/clima/buenos-aires
GET /api/clima/mexico-city
```

**Respuesta exitosa (200):**
```json
{
  "exito": true,
  "datos": {
    "ciudad": "Madrid",
    "temperatura": 22,
    "descripcion": "Parcialmente nublado",
    "humedad": 65,
    "viento": 15,
    "presion": 1013,
    "pais": "España"
  },
  "timestamp": "2024-01-20T10:30:00.000Z"
}
```

**Respuesta no encontrada (404):**
```json
{
  "exito": false,
  "error": "No se encontraron datos del clima para paris",
  "ciudadesDisponibles": ["madrid", "barcelona", "buenos-aires", "mexico-city"]
}
```

### 3. Obtener lista de ciudades disponibles
```
GET /api/ciudades
```

**Respuesta:**
```json
{
  "exito": true,
  "total": 4,
  "ciudades": ["Madrid", "Barcelona", "Buenos Aires", "Ciudad de México"]
}
```

### 4. Endpoint de prueba con parámetro
```
GET /api/saludo?nombre=Juan
```

**Parámetros de query:**
- `nombre` (string, opcional): Tu nombre

**Respuesta:**
```json
{
  "mensaje": "¡Hola Juan!",
  "clima": "API de clima funcionando correctamente"
}
```

## Estructura del proyecto

```
src/node/
├── server.js          # Archivo principal del servidor
├── package.json       # Dependencias del proyecto
├── .env              # Variables de entorno
├── .gitignore        # Archivos a ignorar en git
└── README.md         # Este archivo
```

## Pruebas

### Usando curl

```bash
# Obtener información de clima de Madrid
curl http://localhost:3000/api/clima/madrid

# Obtener lista de ciudades
curl http://localhost:3000/api/ciudades

# Saludar
curl http://localhost:3000/api/saludo?nombre=Maria
```

### Usando Postman o VS Code REST Client

1. Instala la extensión REST Client en VS Code
2. Crea un archivo `requests.http` y usa los ejemplos anteriores

## Código de ejemplo

### Node.js (fetch)
```javascript
fetch('http://localhost:3000/api/clima/madrid')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
```

### JavaScript (axios)
```javascript
const axios = require('axios');

axios.get('http://localhost:3000/api/clima/madrid')
  .then(response => console.log(response.data))
  .catch(error => console.error('Error:', error));
```

## Variables de entorno

Puedes configurar las siguientes variables en el archivo `.env`:

- `PORT`: Puerto en el que se ejecutará el servidor (por defecto: 3000)
- `NODE_ENV`: Ambiente de ejecución (development o production)

## Dependencias

- **express**: Framework web para Node.js
- **cors**: Middleware para manejar CORS
- **dotenv**: Cargar variables de entorno desde un archivo .env
- **nodemon** (dev): Reinicia automáticamente el servidor en cambios

## Próximas mejoras

- Integración con API de clima real (OpenWeatherMap, etc.)
- Base de datos para almacenar históricos
- Autenticación con JWT
- Validación de entrada mejorada
- Tests unitarios

## Licencia

ISC
