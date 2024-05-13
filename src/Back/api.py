from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI()

# Configurar el middleware CORSMiddleware
# Permitir solicitudes desde todos los orígenes
origins = [
    "http://localhost",
    "http://localhost:3000",  # Cambia esto por la URL de tu frontend
    "https://example.com",
    "https://example.com:3000",
    "http://localhost:5173/logIn",
    "http://localhost:5173"
]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,  # Puedes ajustar esto a los orígenes permitidos específicos si lo deseas
    allow_credentials=False,
    allow_methods=["GET", "POST", "PUT", "DELETE"],  # Aquí puedes especificar los métodos permitidos
    allow_headers=["*","Content-Type"]
)

class LoginRequest(BaseModel):
    email: str
    password: str

@app.get("/login/")
async def nada():
    return "hola"

@app.post("/login/")
async def login(l: LoginRequest):
    # Validar el correo electrónico y la contraseña (hardcodeado)
    if l.email == "g@g" and l.password == "123":
        return {"message": "Login exitoso"}
    else:
        # Si la validación falla, devuelve un error HTTP 401 no autorizado
        raise HTTPException(status_code=401, detail="Credenciales incorrectas")

# Definir el modelo de datos para la materia
class Materia(BaseModel):
    nombre: str
    carrera: str

# Lista de ejemplo de materias
materias = [
    Materia(nombre="Matematicas", carrera="Ingenieria"),
    Materia(nombre="Fisica", carrera="Ingenieria"),
    Materia(nombre="Quimica", carrera="Ingenieria"),
    Materia(nombre="Matematicas", carrera="TUP"),
]

# Rutas para operaciones CRUD
@app.get("/materias")
async def obtener_materias():
    return materias

@app.post("/materias")
async def crear_materia(materia: Materia):
    materias.append(materia)
    return {"message": "Materia creada exitosamente"}

@app.put("/materias/{nombre}")
async def actualizar_materia(nombre: str, nueva_materia: Materia):
    for materia in materias:
        if materia.nombre == nombre:
            materia.nombre = nueva_materia.nombre
            materia.carrera = nueva_materia.carrera
            return {"message": f"Materia {nombre} actualizada"}
    raise HTTPException(status_code=404, detail="Materia no encontrada")

@app.delete("/materias/{nombre}")
async def borrar_materia(nombre: str):
    for i, materia in enumerate(materias):
        if materia.nombre == nombre:
            del materias[i]
            return {"message": f"Materia {nombre} eliminada"}
    raise HTTPException(status_code=404, detail="Materia no encontrada")
