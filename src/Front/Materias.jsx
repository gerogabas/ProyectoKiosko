const materias = [
  { id: 1, nombre: "Matemáticas", carrera: "Matemáticas Aplicadas" },
  { id: 2, nombre: "Física", carrera: "Física Teórica" },
  { id: 3, nombre: "Química", carrera: "Química Orgánica" },
];

const btnRojo = "bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-2 rounded mr-2";
const btnAzul = "bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-2 rounded";
function DibujarMaterias() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-1"> Materias</h1>
      <ul className="space-y-2" >
        {materias.map(materia =>
          <li key={"materia"+materia.id} name={materia.nombre}
            className="flex justify-between items-center bg-purple-400 p-2 rounded">
            Materia: {materia.nombre} - Carrera: {materia.carrera}
            <div>
            <button className={btnRojo} onClick={() => eliminarMateria(materia.id)}> Eliminar </button>
            <button className={btnAzul}> Editar </button>
            </div>
          </li>)}
      </ul>
    </div>
  );
}

export default function Materias() {
  return (
    <div className="container mx-auto bg-slate-700">

      <DibujarMaterias />
    </div>
  );
}

// import React, { useState, useEffect } from 'react';

// const Materias2 = () => {
//   const [materias, setMaterias] = useState([]);

//   useEffect(() => {
//     const obtenerMaterias = async () => {
//       try {
//         const response = await fetch('https://tu-api.com/materias');
//         if (!response.ok) {
//           throw new Error('Error al obtener las materias');
//         }
//         const data = await response.json();
//         setMaterias(data);
//       } catch (error) {
//         console.error('Error al obtener las materias:', error);
//       }
//     };

//     obtenerMaterias();
//   }, []);

//   return (
//     <div>
//       <h1>Materias</h1>
//       <ul>
//         {materias.map(materia => (
//           <li key={materia.id}>
//             {materia.nombre} - {materia.carrera}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };
// const [materias, setMaterias] = useState([
//   { id: 1, nombre: "Matemáticas", carrera: "Matemáticas Aplicadas" },
//   { id: 2, nombre: "Física", carrera: "Física Teórica" },
//   { id: 3, nombre: "Química", carrera: "Química Orgánica" },
// ]);
// const [nuevaMateria, setNuevaMateria] = useState({ nombre: "", carrera: "" });

// const Materias = () => {
//   // Estado para almacenar la lista de materias

//   // Estado para el formulario de nueva materia

//   // Función para agregar una nueva materia
//   const agregarMateria = () => {
//     if (nuevaMateria.nombre !== "" && nuevaMateria.carrera !== "") {
//       setMaterias([...materias, { id: Date.now(), ...nuevaMateria }]);
//       setNuevaMateria({ nombre: "", carrera: "" });
//     }
//   };

//   // Función para eliminar una materia
//   const eliminarMateria = (id) => {
//     setMaterias(materias.filter((materia) => materia.id !== id));
//   };

//   return (
//     <div className="container mx-auto">
//       < SeccionAgregar />
//       <h1 className="text-2xl font-bold mb-4">Materias</h1>
//       <ul className="space-y-2">
//         {materias.map((materia) => (
//           <li
//             key={materia.id}
//             className="flex justify-between items-center bg-purple-400    p-2 rounded"
//           >
//             <div>
//               <span className="font-bold">{materia.nombre}</span> -{" "}
//               {materia.carrera}
//             </div>
//             <div>
//               <button
//                 className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-2 rounded mr-2"
//                 onClick={() => eliminarMateria(materia.id)}
//               >
//                 Eliminar
//               </button>
//               <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-2 rounded">
//                 Editar
//               </button>
//             </div>
//           </li>
//         ))}
//       </ul>

//     </div>
//   );
// };

// function SeccionAgregar(valor) {
//   return (
//     <div className="mt-4">
//       <h2 className="text-lg font-bold mb-2">Agregar Materia</h2>
//       <input
//         type="text"
//         placeholder="Nombre"
//         value={nuevaMateria.nombre}
//         onChange={(e) => setNuevaMateria({ ...nuevaMateria, nombre: e.target.val })}
//         className="border border-gray-400 p-1 rounded mr-2"
//       />
//       <input
//         type="text"
//         placeholder="Carrera"
//         value={nuevaMateria.carrera}
//         onChange={(e) => setNuevaMateria({ ...nuevaMateria, carrera: e.target.valor })}
//         className="border border-gray-400 p-1 rounded mr-2"
//       />
//       <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-1 px-2 rounded"
//         onClick={agregarMateria}> Agregar </button>
//     </div>
//   );
// }
// export default Materias;

//--------------------------------------------------------
// import React, { useState, useEffect } from 'react';

// const Materias = () => {
//     const [materias, setMaterias] = useState([]);
//     const [nuevaMateria, setNuevaMateria] = useState({ nombre: '', carrera: '' });
//     const [materiaSeleccionada, setMateriaSeleccionada] = useState('');
//     const [materiaActualizada, setMateriaActualizada] = useState({ nombre: '', carrera: '' });

//     useEffect(() => {
//         obtenerMaterias();
//     }, []);

//     const obtenerMaterias = async () => {
//         try {
//             const response = await fetch('http://localhost:8000/materias');
//             if (!response.ok) {
//                 throw new Error('Hubo un problema al obtener las materias');
//             }
//             const data = await response.json();
//             setMaterias(data);
//         } catch (error) {
//             console.error('Error al obtener las materias:', error);
//         }
//     };

//     const crearMateria = async () => {
//         try {
//             const response = await fetch('http://localhost:8000/materias', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify(nuevaMateria),
//             });
//             if (!response.ok) {
//                 throw new Error('Hubo un problema al crear la materia');
//             }
//             setNuevaMateria({ nombre: '', carrera: '' });
//             obtenerMaterias();
//         } catch (error) {
//             console.error('Error al crear la materia:', error);
//         }
//     };

//     // Resto del código para actualizarMateria y borrarMateria...

//     return (
//         <div>
//             Materias
//         </div>
//     );
// };

// export default Materias;
