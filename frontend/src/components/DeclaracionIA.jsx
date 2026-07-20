import React from 'react';

// Recibe el "nombreEstudiante" por props
function DeclaracionIA({ nombreEstudiante }) {
  return (
    <div style={{ marginTop: '30px', padding: '15px', backgroundColor: '#fffbe6', border: '1px solid #ffe58f', borderRadius: '8px', textAlign: 'left', fontSize: '0.85rem', color: '#613d00' }}>
      💡 <strong>Declaración de uso de IA:</strong> Este proyecto SPA lo hice con IA utilizando de asistencia a Gemini como para estructurar la navegación (React Router), el diseño CSS mostrado justo ahora y depurar la integración con FastAPI.
    </div>
  );
}

export default DeclaracionIA;