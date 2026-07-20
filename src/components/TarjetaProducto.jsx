import React from 'react';

// Recibe "producto", "onEditar" y "onEliminar" como props
function TarjetaProducto({ producto, onEditar, onEliminar }) {
  return (
    <div style={{ border: '1px solid #e1dbd6', padding: '15px', borderRadius: '10px', backgroundColor: '#faf7f2', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', boxShadow: '0 2px 4px rgba(0,0,0,0.02)' }}>
      <div>
        <span style={{ fontSize: '1.5rem' }}>🧁</span>
        <h4 style={{ color: '#d4a373', fontSize: '1.1rem', margin: '5px 0' }}>{producto.titulo}</h4>
        <p style={{ fontSize: '0.85rem', color: '#666', marginBottom: '8px' }}>{producto.descripcion}</p>
        <span style={{ fontSize: '0.8rem', background: '#eef', padding: '3px 8px', borderRadius: '12px', marginRight: '5px' }}>
          {producto.categoria}
        </span>
        <span style={{ 
          fontSize: '0.8rem', 
          padding: '3px 8px', 
          borderRadius: '12px', 
          background: producto.estado === 'Disponible' ? '#e2f0d9' : '#fce4d6',
          color: producto.estado === 'Disponible' ? '#385723' : '#c65911'
        }}>
          {producto.estado}
        </span>
      </div>

      <div style={{ display: 'flex', gap: '10px', marginTop: '15px' }}>
        <button 
          onClick={() => onEditar(producto)}
          style={{ flex: 1, padding: '6px', backgroundColor: '#3182ce', border: 'none', borderRadius: '5px', cursor: 'pointer', color: 'white', fontWeight: 'bold', fontSize: '0.8rem' }}
        >
          📝 Editar
        </button>
        <button 
          onClick={() => onEliminar(producto.id)}
          style={{ flex: 1, padding: '6px', backgroundColor: '#e53e3e', border: 'none', borderRadius: '5px', cursor: 'pointer', color: 'white', fontWeight: 'bold', fontSize: '0.8rem' }}
        >
          🗑️ Eliminar
        </button>
      </div>
    </div>
  );
}

export default TarjetaProducto;