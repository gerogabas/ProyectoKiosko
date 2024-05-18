import React from "react";
import { Link } from "react-router-dom";
import Tabla from "./Components/Table.jsx";

const btn ="bg-transparent hover:bg-pink-900 text-pink-300 font-semibold hover:text-white py-2 px-4 border border-pink-600 hover:border-transparent rounded"

const columnas = [
  { header: "Legajo", accessor: "legajo" },
  { header: "Apellido", accessor: "apellido" },
  { header: "Nombre", accessor: "nombre" },
  { header: "Carrera", accessor: "carrera" },
  { header: "Email", accessor: "email" },
  { header: "+Info", accessor: "ver" }, // <-------------------- esto es muy god
];

export default function Estudiantes({ estudiantes }) {
  //estudiantes = estudiantesHardcoded;

  // es tremen2 este codigo pa
  if (!estudiantes) return <div>Error al acceder a los estudiantes...</div>;
  else if (estudiantes.length === 0)
    return <div>No hay estudiantes en la bdd...</div>;
  const datos = estudiantes.map((estudiante) => ({
    ...estudiante,
    ver: (
      <Link
        to={`/estudiantes/${estudiante.legajo}`}
        className={btn}
      > Ver </Link>
    )
  }));

  return (
    <div className="min-h-screen bg-zinc-900 p-4 rounded-xl">
      <Tabla title={"Estudiantes"} columnas={columnas} datos={datos} />
    </div>
  );
}

//data para testeo
// const estudiantesHardcoded = [
//   {
//     nombre: "Juan",
//     apellido: "Pérez",
//     legajo: "12345",
//     edad: 20,
//     carrera: "Matemáticas",
//     email: "juan.perez@example.com",
//     telefono: "123-456-7890",
//     direccion: "Calle Falsa 123, Ciudad, País",
//     materias: [
//       { nombre: "Álgebra", nota: "A" },
//       { nombre: "Cálculo", nota: "B" },
//       { nombre: "Estadística", nota: "A" },
//     ],
//   }
// ];
