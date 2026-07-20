import React from 'react';

// Recibe estados y funciones controladoras por props
function FormularioProducto({ 
  titulo, setTitulo, 
  descripcion, setDescripcion, 
  categoria, setCategoria, 
  estado, setEstado, 
  onSubmit, idEditando, onCancelar, error 
}) {
  return (
    <div style={{ background: '#fff', border: '1px solid #e1dbd6', padding: '20px', borderRadius: '10px', boxShadow: '0 4px 6px rgba(0,0,0,0.03)' }}>
      <h3 style={{ color: '#d4a373', marginBottom: '15px', borderBottom: '1px solid #eee', paddingBottom: '5px' }}>
        {idEditando !== null ? '✏️ Editar Producto' : '📋 Nuevo Producto'}
      </h3>

      {error && (
        <div style={{ color: '#e53e3e', fontSize: '0.85rem', marginBottom: '10px', padding: '8px', background: '#fff5f5', borderRadius: '5px', border: '1px solid #fed7d7' }}>
          ⚠️ {error}
        </div>
      )}

      <form onSubmit={onSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
          <label style={{ fontSize: '0.85rem', fontWeight: 'bold' }}>Título:</label>
          <input 
            type="text" 
            placeholder="Escribe el título..." 
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            style={{ padding: '8px', borderRadius: '5px', border: '1px solid #ccc', outline: 'none' }}
          />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
          <label style={{ fontSize: '0.85rem', fontWeight: 'bold' }}>Descripción:</label>
          <textarea 
            placeholder="Escribe la descripción..." 
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
            rows="3"
            style={{ padding: '8px', borderRadius: '5px', border: '1px solid #ccc', outline: 'none', resize: 'none' }}
          />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
          <label style={{ fontSize: '0.85rem', fontWeight: 'bold' }}>Categoría:</label>
          <select 
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
            style={{ padding: '8px', borderRadius: '5px', border: '1px solid #ccc', outline: 'none', background: '#fff' }}
          >
            <option value="">Selecciona...</option>
            <option value="Tortas">Tortas</option>
            <option value="Kuchen">Kuchen</option>
            <option value="Individuales">Individuales</option>
            <option value="Otros">Otros</option>
          </select>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
          <label style={{ fontSize: '0.85rem', fontWeight: 'bold' }}>Estado:</label>
          <select 
            value={estado}
            onChange={(e) => setEstado(e.target.value)}
            style={{ padding: '8px', borderRadius: '5px', border: '1px solid #ccc', outline: 'none', background: '#fff' }}
          >
            <option value="">Selecciona...</option>
            <option value="Disponible">Disponible</option>
            <option value="Sin Stock">Sin Stock</option>
          </select>
        </div>

        <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
          <button 
            type="submit"
            style={{ flex: 1, padding: '10px', backgroundColor: '#38a169', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold' }}
          >
            💾 Guardar
          </button>
          {idEditando !== null && (
            <button 
              type="button"
              onClick={onCancelar}
              style={{ padding: '10px', backgroundColor: '#718096', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold' }}
            >
              Cancelar
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default FormularioProducto;