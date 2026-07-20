import React from 'react';

function Inicio() {
  return (
    <section style={{ textAlign: 'center', padding: '3rem 2rem' }}>
      <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>¡Bienvenidos a Dulce Detalle!</h2>
      <p style={{ fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto 2rem auto' }}>
        Somos una pastelería artesanal dedicada a endulzar tus momentos más especiales. 
        Navega por nuestras secciones para gestionar tus pedidos especiales o ver nuestro stock en tiempo real desde la API.
      </p>
      
      <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '2rem' }}>
        <div style={{ background: '#fefae0', padding: '20px', borderRadius: '8px', width: '250px' }}>
          <h3>🍰 100% Artesanal</h3>
          <p style={{ fontSize: '0.9rem' }}>Ingredientes frescos y recetas tradicionales con el mejor sabor local.</p>
        </div>
        <div style={{ background: '#fefae0', padding: '20px', borderRadius: '8px', width: '250px' }}>
          <h3>🚚 Pedidos Online</h3>
          <p style={{ fontSize: '0.9rem' }}>Agenda y personaliza tus tortas y postres directamente desde el módulo de Gestión.</p>
        </div>
      </div>
    </section>
  );
}

export default Inicio;