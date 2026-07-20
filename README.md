# 🍰 API Pastelería — Dulce Detalle

**Alumno:** Sebastián Ignacio Barrientos Barrientos · **Sección:** C2
**Tema:** Tema 25 — Pastelería
**Proyecto:** Evaluación 3 (UA3) — SPA en React que consume una API en FastAPI

Aplicación web full-stack para una pastelería ficticia ("Dulce Detalle"). Combina:

- Un **backend en FastAPI** que expone un catálogo de productos (tortas, kuchenes, individuales) de solo lectura.
- Un **frontend en React (Vite)** que consume esa API y, además, incluye un módulo de **gestión interna** de productos con CRUD guardado en `localStorage`.

## Estructura del proyecto

```
API PASTELERIA/
├── backend/
│   ├── main.py            # API FastAPI (catálogo de productos)
│   └── requirements.txt   # Dependencias Python
└── frontend/
    ├── src/
    │   ├── App.jsx              # Rutas (React Router)
    │   ├── main.jsx              # Punto de entrada
    │   ├── components/
    │   │   ├── Navbar.jsx
    │   │   ├── TarjetaProducto.jsx
    │   │   ├── FormularioProducto.jsx
    │   │   └── DeclaracionIA.jsx
    │   └── pages/
    │       ├── Inicio.jsx        # Landing page
    │       ├── DatosApi.jsx      # Consumo de la API (GET /api/productos)
    │       └── Gestion.jsx       # CRUD local (localStorage)
    ├── index.html
    ├── package.json
    └── vite.config.js
```

## Backend (FastAPI)

Expone un catálogo en memoria con los siguientes endpoints:

| Método | Ruta                     | Descripción                                    |
| ------ | ------------------------ | ----------------------------------------------- |
| GET    | `/`                      | Mensaje de bienvenida e info de la API          |
| GET    | `/api/productos`         | Lista todos los productos (`{ total, productos }`) |
| GET    | `/api/productos/{id}`    | Devuelve un producto por id (404 si no existe)  |

### Cómo ejecutarlo

```bash
cd backend
pip install -r requirements.txt
uvicorn main:app --host 0.0.0.0 --port 8000
```

- API: <http://127.0.0.1:8000/api/productos>
- Documentación interactiva (Swagger): <http://127.0.0.1:8000/docs>

CORS está abierto (`allow_origins=["*"]`) para que el frontend pueda consumirla sin problemas durante el desarrollo.

## Frontend (React + Vite)

### Cómo ejecutarlo

```bash
cd frontend
npm install
npm run dev
```

Por defecto Vite corre en <http://localhost:5173>.

### Secciones de la app

- **Inicio** (`/`) — Landing page de bienvenida de la pastelería.
- **Datos API** (`/api-datos`) — Consume `GET /api/productos` desde el backend con `fetch`, mostrando los tres estados clásicos: ⏳ cargando, ✅ datos y ❌ error.
- **Gestión** (`/gestion`) — CRUD de productos administrado por el usuario (crear, editar, eliminar), persistido en `localStorage` del navegador. Es independiente del catálogo de la API: aquí se gestionan "encargos" propios.

> **Importante:** el backend debe estar corriendo en `http://127.0.0.1:8000` para que la sección "Datos API" funcione correctamente.

### Declaración de uso de IA

El proyecto incluye un componente (`DeclaracionIA.jsx`) que declara explícitamente el uso de asistencia de IA (Gemini) para estructurar la navegación con React Router, el diseño CSS y la depuración de la integración con FastAPI, tal como lo exige la pauta de la evaluación.

## Tecnologías usadas

- **Backend:** Python, FastAPI, Uvicorn
- **Frontend:** React 19, React Router 7, Vite 8
- **Persistencia local:** `localStorage` (módulo de Gestión)

## Notas

- Los datos del catálogo (`DATOS` en `main.py`) están hardcodeados en memoria; al reiniciar el servidor vuelven a su estado original.
- Los productos gestionados en `/gestion` se guardan en el navegador del usuario y no se sincronizan con el backend.
