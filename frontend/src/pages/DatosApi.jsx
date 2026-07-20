import React, { useEffect, useState } from 'react';

function DatosApi() {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Conexión directa a tu backend de FastAPI
    fetch('http://127.0.0.1:8000/api/productos')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Error al conectar con la API de la pastelería');
        }
        return response.json();
      })
      .then((data) => {
        setProductos(data.productos || []);
        setCargando(false);
      })
      .catch((err) => {
        setError(err.message);
        setCargando(false);
      });
  }, []);

  return (
    <section>
      <h2>Datos desde la API (FastAPI)</h2>
      <p>Aquí se listan las preparaciones traídas directamente desde tu backend en Python.</p>

      {/* Estados visuales que exige la infografía */}
      {cargando && (
        <div style={{ textAlign: 'center', padding: '20px', color: '#d4a373' }}>
          ⌛ <strong>Cargando datos...</strong>
        </div>
      )}
      
      {error && (
        <div style={{ padding: '15px', backgroundColor: '#ffe3e3', color: '#ce3737', borderRadius: '8px', marginBottom: '15px' }}>
          ❌ <strong>Error al obtener datos:</strong> {error}. Asegúrate de tener corriendo tu archivo main.py.
        </div>
      )}

      {!cargando && !error && (
        <div style={{ padding: '10px 15px', backgroundColor: '#e2f0d9', color: '#385723', borderRadius: '8px', marginBottom: '20px', display: 'inline-block' }}>
          ✔️ <strong>Datos obtenidos con éxito</strong>
        </div>
      )}

      {/* Tarjetas de productos */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '20px', marginTop: '10px' }}>
        {productos.map((producto) => (
          <div key={producto.id} style={{ border: '1px solid #fefae0', padding: '15px', borderRadius: '8px', backgroundColor: '#faf7f2' }}>
            {producto.imagen && (
              <img 
                src={producto.imagen} 
                alt={producto.nombre} 
                style={{ width: '100%', height: '150px', objectFit: 'cover', borderRadius: '6px', marginBottom: '10px' }} 
              />
            )}
            <h3 style={{ color: '#d4a373' }}>{producto.nombre}</h3>
            <p style={{ fontSize: '0.9rem', color: '#666' }}>{producto.descripcion}</p>
            <p style={{ fontWeight: 'bold', marginTop: '10px' }}>Precio: ${producto.precio.toLocaleString('es-CL')}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default DatosApi;