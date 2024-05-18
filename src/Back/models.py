from pydantic import BaseModel
from typing import List

class LoginRequest(BaseModel):
    email: str
    password: str


class Materia(BaseModel):
    id: int
    nombre: str
    carrera: str

class Estudiante(BaseModel):
    nombre: str
    apellido: str
    legajo: str
    edad: int
    carrera: str
    email: str
    telefono: str
    direccion: str
    materias: List[Materia]
