"""
API: Catálogo de la pastelería
Alumno: Sebastián Ignacio Barrientos Barrientos  ·  Sección: C2  ·  Tema 25: Pastelería
Proyecto EV3 (UA3) — API asignada por el docente.

Ejecutar:
    pip install -r requirements.txt
    uvicorn main:app --host 0.0.0.0 --port 8000

Endpoint principal:  GET /api/productos
Documentación:       http://127.0.0.1:8000/docs
"""
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="API Catálogo de la pastelería")

# CORS abierto para que el frontend (React/Vite) pueda consumir la API.
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# "Base de datos" en memoria (arreglo de objetos).
DATOS = [{'id': 1,
  'nombre': 'Torta de chocolate',
  'descripcion': 'Bizcocho húmedo',
  'categoria': 'Tortas',
  'precio': 22990,
  'disponible': True,
  'imagen': 'https://placehold.co/400x300?text=Torta+de+chocolate'},
 {'id': 2,
  'nombre': 'Cheesecake',
  'descripcion': 'Frutos rojos',
  'categoria': 'Tortas',
  'precio': 19990,
  'disponible': True,
  'imagen': 'https://placehold.co/400x300?text=Cheesecake'},
 {'id': 3,
  'nombre': 'Cupcakes x6',
  'descripcion': 'Decorados',
  'categoria': 'Individuales',
  'precio': 7990,
  'disponible': True,
  'imagen': 'https://placehold.co/400x300?text=Cupcakes+x6'},
 {'id': 4,
  'nombre': 'Kuchen de manzana',
  'descripcion': 'Receta alemana',
  'categoria': 'Kuchen',
  'precio': 15990,
  'disponible': True,
  'imagen': 'https://placehold.co/400x300?text=Kuchen+de+manzana'},
 {'id': 5,
  'nombre': 'Macarons x12',
  'descripcion': 'Colores surtidos',
  'categoria': 'Individuales',
  'precio': 9990,
  'disponible': False,
  'imagen': 'https://placehold.co/400x300?text=Macarons+x12'}]


@app.get("/")
def inicio():
    return {
        "mensaje": "API Catálogo de la pastelería",
        "endpoint": "GET /api/productos",
        "docs": "/docs",
    }


@app.get("/api/productos")
def listar():
    """Devuelve el JSON con todos los registros."""
    return {"total": len(DATOS), "productos": DATOS}


@app.get("/api/productos/{item_id}")
def obtener(item_id: int):
    """Devuelve un registro por su id (404 si no existe)."""
    for item in DATOS:
        if item["id"] == item_id:
            return item
    raise HTTPException(status_code=404, detail="No encontrado")


if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)