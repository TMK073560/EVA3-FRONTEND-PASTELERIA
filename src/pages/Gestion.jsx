import React, { useState, useEffect } from 'react';
import TarjetaProducto from '../components/TarjetaProducto';
import FormularioProducto from '../components/FormularioProducto';
import DeclaracionIA from '../components/DeclaracionIA';

function Gestion() {
  const [pedidos, setPedidos] = useState(() => {
    const datosLocales = localStorage.getItem('pedidos_pasteleria');
    return datosLocales ? JSON.parse(datosLocales) : [
      {
        id: 1,
        titulo: 'Torta Amor de Frambuesa',
        descripcion: 'Hojarasca, manjar, crema pastelera y frambuesas frescas.',
        categoria: 'Tortas',
        estado: 'Disponible'
      },
      {
        id: 2,
        titulo: 'Kuchen de Nuez',
        descripcion: 'Masa quebrada rellena de crema de nueces caramelizadas.',
        categoria: 'Kuchen',
        estado: 'Sin Stock'
      }
    ];
  });

  const [titulo, setTitulo] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [categoria, setCategoria] = useState('');
  const [estado, setEstado] = useState('');
  const [idEditando, setIdEditando] = useState(null);
  const [errorValidacion, setErrorValidacion] = useState('');

  useEffect(() => {
    localStorage.setItem('pedidos_pasteleria', JSON.stringify(pedidos));
  }, [pedidos]);

  const handleGuardar = (e) => {
    e.preventDefault();
    if (!titulo.trim() || !descripcion.trim() || !categoria || !estado) {
      setErrorValidacion('Por favor, rellena todos los campos obligatorios.');
      return;
    }
    setErrorValidacion('');

    if (idEditando !== null) {
      setPedidos(pedidos.map(p => p.id === idEditando ? { ...p, titulo, descripcion, categoria, estado } : p));
      setIdEditando(null);
    } else {
      const nuevoPedido = { id: Date.now(), titulo, descripcion, categoria, estado };
      setPedidos([...pedidos, nuevoPedido]);
    }

    setTitulo('');
    setDescripcion('');
    setCategoria('');
    setEstado('');
  };

  const handleIniciarEdicion = (pedido) => {
    setIdEditando(pedido.id);
    setTitulo(pedido.titulo);
    setDescripcion(pedido.descripcion);
    setCategoria(pedido.categoria);
    setEstado(pedido.estado);
  };

  const handleEliminar = (id) => {
    if (window.confirm('¿Estás seguro de que deseas eliminar este registro?')) {
      setPedidos(pedidos.filter(p => p.id !== id));
      if (idEditando === id) {
        handleCancelarEdicion();
      }
    }
  };

  const handleCancelarEdicion = () => {
    setIdEditando(null);
    setTitulo('');
    setDescripcion('');
    setCategoria('');
    setEstado('');
  };

  return (
    <section>
      <h2>Gestión Interna de Productos</h2>
      <p style={{ marginBottom: '20px' }}>Agrega nuevos productos al catálogo local o edita los existentes. Tus cambios se guardan automáticamente en tu navegador.</p>

      <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '30px', alignItems: 'start' }}>
        
        {/* COLUMNA IZQUIERDA: LISTA DE TARJETAS (Componentes con Props) */}
        <div>
          {pedidos.length === 0 ? (
            <p style={{ textAlign: 'center', color: '#999', padding: '40px', border: '2px dashed #ddd', borderRadius: '8px' }}>
              No hay productos registrados. Usa el formulario de la derecha para añadir uno.
            </p>
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
              {pedidos.map((pedido) => (
                <TarjetaProducto 
                  key={pedido.id} 
                  producto={pedido} 
                  onEditar={handleIniciarEdicion} 
                  onEliminar={handleEliminar} 
                />
              ))}
            </div>
          )}
        </div>

        {/* COLUMNA DERECHA: FORMULARIO (Componente con Props) */}
        <div>
          <FormularioProducto 
            titulo={titulo} setTitulo={setTitulo}
            descripcion={descripcion} setDescripcion={setDescripcion}
            categoria={categoria} setCategoria={setCategoria}
            estado={estado} setEstado={setEstado}
            onSubmit={handleGuardar}
            idEditando={idEditando}
            onCancelar={handleCancelarEdicion}
            error={errorValidacion}
          />
        </div>

      </div>

      {/* Declaración de IA exigida por la pauta */}
      <DeclaracionIA nombreEstudiante="Sebastián Ignacio Barrientos Barrientos" />
    </section>
  );
}

export default Gestion;