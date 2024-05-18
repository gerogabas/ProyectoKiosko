import React, { useState } from "react";

// Estilos
const sharedTableCellClasses =
  "px-6 py-4 whitespace-nowrap text-sm text-zinc-900 dark:text-zinc-100";
const sharedTableHeaderClasses =
  "px-6 py-3 text-left text-xs font-medium text-zinc-500 dark:text-zinc-400 uppercase tracking-wider";

// Componente para el encabezado de la tabla
const TableHeader = () => {

  const str = ["Legajo", "Nombre", "Apellido", `Email`, "Telefono", "Detalles"];
  


  // lo que agregue:
  const [estudiantes, setEstudiantes] = useState([]);







  return (
    <thead className=" dark:bg-zinc-700 ">
      <tr>
        {str.map(
          (header) => (
            <th key={header} scope="col" className={sharedTableHeaderClasses}>
              {header}
            </th>
          )
        )}
      </tr>
    </thead>
  );
};

// Componente principal
const Estudiantes = () => {
  const [selectedAlumno, setSelectedAlumno] = useState(null);

  const handleClickAlumno = (alu) => {
    setSelectedAlumno(alu);
  };

  return (
    <div className="flex min-h-screen bg-zinc-100 dark:bg-zinc-900 p-4 rounded-xl">
      {selectedAlumno ? (
        <pre className="text-left">
          {JSON.stringify(selectedAlumno, null, 2)}
        </pre>
      ) : (
        <div className="container mx-auto">
          <h1 className="text-2xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">
            Estudiantes
            <p className="text-sm">Total: {alumnos.length}</p>
          </h1>
          <div className="shadow-md overflow-hidden border-b border-zinc-200 dark:border-zinc-700 sm:rounded-lg">
            <table className="min-w-full divide-y divide-zinc-200 dark:divide-zinc-700">
              <TableHeader />
              <tbody className="bg-white dark:bg-zinc-800 divide-y divide-zinc-200 dark:divide-zinc-700">
                {alumnos.map((alumno) => (
                  <tr key={alumno.legajo}>
                    <td className={`${sharedTableCellClasses} font-medium`}>
                      {" "}
                      {alumno.legajo}{" "}
                    </td>
                    <td className={sharedTableCellClasses}>{alumno.nombre}</td>
                    <td className={sharedTableCellClasses}>
                      {alumno.apellido}
                    </td>
                    <td className={sharedTableCellClasses}>{alumno.email}</td>
                    <td className={sharedTableCellClasses}>
                      {alumno.telefono}
                    </td>
                    <td className={`${sharedTableCellClasses} text-right`}>
                      <button
                        className=" dark:text-indigo-400 dark:hover:text-indigo-600"
                        onClick={() => handleClickAlumno(alumno)}
                      >
                        {" "}
                        Info{" "}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default Estudiantes;

//data para testeo
const alumnos = [
  {
    nombre: "Juan",
    apellido: "Pérez",
    legajo: "12345",
    edad: 20,
    carrera: "Matemáticas",
    email: "juan.perez@example.com",
    telefono: "123-456-7890",
    direccion: "Calle Falsa 123, Ciudad, País",
    materias: [
      { nombre: "Álgebra", nota: "A" },
      { nombre: "Cálculo", nota: "B" },
      { nombre: "Estadística", nota: "A" },
    ],
  },
  {
    nombre: "Ana",
    apellido: "Gómez",
    legajo: "67890",
    edad: 22,
    carrera: "Historia",
    email: "ana.gomez@example.com",
    telefono: "987-654-3210",
    direccion: "Avenida Siempre Viva 456, Ciudad, País",
    materias: [
      { nombre: "Historia Antigua", nota: "B" },
      { nombre: "Historia Moderna", nota: "A" },
      { nombre: "Arqueología", nota: "B" },
    ],
  },
  {
    nombre: "Luis",
    apellido: "Martínez",
    legajo: "11223",
    edad: 21,
    carrera: "Biología",
    email: "luis.martinez@example.com",
    telefono: "555-555-5555",
    direccion: "Boulevard de los Sueños 789, Ciudad, País",
    materias: [
      { nombre: "Biología Molecular", nota: "A" },
      { nombre: "Genética", nota: "A" },
      { nombre: "Ecología", nota: "B" },
    ],
  },
  {
    nombre: "María",
    apellido: "López",
    legajo: "44556",
    edad: 23,
    carrera: "Ingeniería",
    email: "maria.lopez@example.com",
    telefono: "444-444-4444",
    direccion: "Calle de las Flores 321, Ciudad, País",
    materias: [
      { nombre: "Física", nota: "A" },
      { nombre: "Química", nota: "A" },
      { nombre: "Cálculo", nota: "A" },
    ],
  },
  {
    nombre: "Carlos",
    apellido: "Rodríguez",
    legajo: "77889",
    edad: 24,
    carrera: "Derecho",
    email: "carlos.rodriguez@example.com",
    telefono: "333-333-3333",
    direccion: "Avenida Libertador 567, Ciudad, País",
    materias: [
      { nombre: "Derecho Constitucional", nota: "A" },
      { nombre: "Derecho Penal", nota: "B" },
      { nombre: "Derecho Civil", nota: "A" },
    ],
  },
  {
    nombre: "Lucía",
    apellido: "Fernández",
    legajo: "99887",
    edad: 19,
    carrera: "Medicina",
    email: "lucia.fernandez@example.com",
    telefono: "222-222-2222",
    direccion: "Calle San Martín 678, Ciudad, País",
    materias: [
      { nombre: "Anatomía", nota: "A" },
      { nombre: "Fisiología", nota: "B" },
      { nombre: "Bioquímica", nota: "A" },
    ],
  },
  {
    nombre: "Jorge",
    apellido: "García",
    legajo: "33445",
    edad: 25,
    carrera: "Arquitectura",
    email: "jorge.garcia@example.com",
    telefono: "111-111-1111",
    direccion: "Boulevard de los Artistas 123, Ciudad, País",
    materias: [
      { nombre: "Diseño Arquitectónico", nota: "A" },
      { nombre: "Historia de la Arquitectura", nota: "A" },
      { nombre: "Estructuras", nota: "B" },
    ],
  },
  {
    nombre: "Elena",
    apellido: "Morales",
    legajo: "66778",
    edad: 21,
    carrera: "Psicología",
    email: "elena.morales@example.com",
    telefono: "777-777-7777",
    direccion: "Calle de la Paz 234, Ciudad, País",
    materias: [
      { nombre: "Psicología General", nota: "A" },
      { nombre: "Desarrollo Humano", nota: "A" },
      { nombre: "Psicología Clínica", nota: "B" },
    ],
  },
  {
    nombre: "Fernando",
    apellido: "Silva",
    legajo: "55667",
    edad: 22,
    carrera: "Economía",
    email: "fernando.silva@example.com",
    telefono: "666-666-6666",
    direccion: "Avenida del Comercio 456, Ciudad, País",
    materias: [
      { nombre: "Microeconomía", nota: "A" },
      { nombre: "Macroeconomía", nota: "B" },
      { nombre: "Econometría", nota: "A" },
    ],
  },
  {
    nombre: "Sofía",
    apellido: "Torres",
    legajo: "88990",
    edad: 20,
    carrera: "Filosofía",
    email: "sofia.torres@example.com",
    telefono: "888-888-8888",
    direccion: "Calle de la Sabiduría 789, Ciudad, País",
    materias: [
      { nombre: "Ética", nota: "A" },
      { nombre: "Metafísica", nota: "A" },
      { nombre: "Lógica", nota: "B" },
    ],
  },
];
