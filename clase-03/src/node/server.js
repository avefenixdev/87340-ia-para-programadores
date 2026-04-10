const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(express.json());

// Datos de ejemplo de clima
const datosClima = {
  'madrid': {
    ciudad: 'Madrid',
    temperatura: 22,
    descripcion: 'Parcialmente nublado',
    humedad: 65,
    viento: 15,
    presion: 1013,
    pais: 'España'
  },
  'barcelona': {
    ciudad: 'Barcelona',
    temperatura: 20,
    descripcion: 'Soleado',
    humedad: 70,
    viento: 18,
    presion: 1015,
    pais: 'España'
  },
  'buenos-aires': {
    ciudad: 'Buenos Aires',
    temperatura: 25,
    descripcion: 'Despejado',
    humedad: 55,
    viento: 12,
    presion: 1011,
    pais: 'Argentina'
  },
  'mexico-city': {
    ciudad: 'Ciudad de México',
    temperatura: 28,
    descripcion: 'Lluvia moderada',
    humedad: 80,
    viento: 20,
    presion: 1009,
    pais: 'México'
  }
};

// Rutas
app.get('/', (req, res) => {
  res.json({
    mensaje: 'Bienvenido a la API de Clima',
    version: '1.0.0',
    endpoints: {
      clima: '/api/clima/:ciudad',
      ciudades: '/api/ciudades',
      saludo: '/api/saludo'
    }
  });
});

// Endpoint para obtener clima de una ciudad
app.get('/api/clima/:ciudad', (req, res) => {
  const ciudad = req.params.ciudad.toLowerCase().replace(/\s+/g, '-');
  
  if (datosClima[ciudad]) {
    res.json({
      exito: true,
      datos: datosClima[ciudad],
      timestamp: new Date().toISOString()
    });
  } else {
    res.status(404).json({
      exito: false,
      error: `No se encontraron datos del clima para ${req.params.ciudad}`,
      ciudadesDisponibles: Object.keys(datosClima)
    });
  }
});

// Endpoint para obtener lista de ciudades disponibles
app.get('/api/ciudades', (req, res) => {
  const ciudades = Object.keys(datosClima).map(key => datosClima[key].ciudad);
  res.json({
    exito: true,
    total: ciudades.length,
    ciudades: ciudades
  });
});

// Endpoint de prueba
app.get('/api/saludo', (req, res) => {
  const nombre = req.query.nombre || 'Usuario';
  res.json({
    mensaje: `¡Hola ${nombre}!`,
    clima: 'API de clima funcionando correctamente'
  });
});

// Manejo de rutas no encontradas
app.use((req, res) => {
  res.status(404).json({
    error: 'Ruta no encontrada',
    url: req.url,
    metodo: req.method
  });
});

// Manejo de errores
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    error: 'Error interno del servidor',
    mensaje: err.message
  });
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`🌡️  Servidor de clima ejecutándose en puerto ${PORT}`);
  console.log(`📍 Accede a http://localhost:${PORT}`);
  console.log(`📚 Documentación disponible en http://localhost:${PORT}/`);
});

module.exports = app;
