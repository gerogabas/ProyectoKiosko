import React from 'react';
import { Link } from 'react-router-dom';
import Tabla from './Components/Table.jsx';

const columnas = [
  { header: "Legajo", accessor: "legajo" },
  { header: "Apellido", accessor: "apellido" },
  { header: "Nombre", accessor: "nombre" },
  { header: "Carrera", accessor: "carrera" },
  { header: "Email", accessor: "email" },
  { header: "Ver", accessor: "ver" }, // <-------------------- esto es muy god
];

function Estudiantes({ estudiantes }) {
  // es tremen2 este codigo pa
  const datos = estudiantes.map(estudiante => ({
    ...estudiante,
    ver: 
    ( <Link to={`/estudiantes/${estudiante.legajo}`} 
      className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
      > Ver </Link>
    )
  }));

  return (
    <div className="min-h-screen bg-zinc-100 dark:bg-zinc-900 p-4 rounded-xl">
      {!estudiantes
        ? ( <pre className="text-left"> {JSON.stringify(estudiantes, null, 2)} </pre>)
        : ( <Tabla title={"Estudiantes"} columnas={columnas} datos={datos} />)}
    </div>
  );
}

export default Estudiantes;

//data para testeo
// const alumnos = [
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

// Asi estaba antes
// // Componente principal
// const Estudiantes = () => {
//   const [selectedAlumno, setSelectedAlumno] = useState(null);

//   const handleClickAlumno = (alu) => {
//     setSelectedAlumno(alu);
//   };

//   return (
//     <div className="flex min-h-screen bg-zinc-100 dark:bg-zinc-900 p-4 rounded-xl">
//       {selectedAlumno ? (
//         <pre className="text-left">
//           {JSON.stringify(selectedAlumno, null, 2)}
//         </pre>
//       ) : (
//         <Table
//           title="Alumnos"
//           datos={alumnos}
//           link={"/estudiantes"}
//           columnas={[
//             { header: "Legajo", accessor: "legajo" },
//             { header: "Apellido", accessor: "apellido" },
//             { header: "Nombre", accessor: "nombre" },
//             { header: "Carrera", accessor: "carrera" },
//             { header: "Email", accessor: "email" },
//             { header: "Teléfono", accessor: "telefono" },
//           ]}
//         />
//       )}
//     </div>
//   );
// };

