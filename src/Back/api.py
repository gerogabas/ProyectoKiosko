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