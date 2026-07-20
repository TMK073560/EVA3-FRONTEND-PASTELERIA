import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Inicio from './pages/Inicio';
import Gestion from './pages/Gestion';
import DatosApi from './pages/DatosApi';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main style={{ padding: '20px' }}>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/gestion" element={<Gestion />} />
          <Route path="/api-datos" element={<DatosApi />} />
        </Routes>
      </main>
      <footer style={{ marginTop: '40px', borderTop: '1px solid #ccc', paddingTop: '10px', textAlign: 'center' }}>
        <p>&copy; 2026 Pastelería Dulce Detalle - Todos los derechos reservados.</p>
      </footer>
    </BrowserRouter>
  );
}

export default App;