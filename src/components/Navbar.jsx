import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <header>
      <h1>🧁 Pastelería Dulce Detalle</h1>
      <nav>
        <NavLink to="/" style={({ isActive }) => ({ marginRight: '15px', fontWeight: isActive ? 'bold' : 'normal' })}>
          Inicio
        </NavLink>
        <NavLink to="/gestion" style={({ isActive }) => ({ marginRight: '15px', fontWeight: isActive ? 'bold' : 'normal' })}>
          Gestión
        </NavLink>
        <NavLink to="/api-datos" style={({ isActive }) => ({ fontWeight: isActive ? 'bold' : 'normal' })}>
          Datos API
        </NavLink>
      </nav>
    </header>
  );
}

export default Navbar;