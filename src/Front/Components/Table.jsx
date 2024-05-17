// Estilos
const sharedTableCellClasses =
  "px-6 py-4 whitespace-nowrap text-sm text-zinc-900 dark:text-zinc-100";
const sharedTableHeaderClasses =
  "px-6 py-3 text-left text-xs font-medium text-zinc-500 dark:text-zinc-400 uppercase tracking-wider";

export default function DibujarTabla({ title, header, datos }) {

  header = ["Legajo", "Nombre", "Apellido", `Email`, "Telefono", "Detalles"];

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">
        {title}
        <p className="text-sm">Total:{datos.length}</p>
      </h1>
      <div className="shadow-md overflow-hidden border-b border-zinc-200 dark:border-zinc-700 sm:rounded-lg">
        <table className="min-w-full divide-y divide-zinc-200 dark:divide-zinc-700">
          <TableHeader />
          <TableBody />
        </table>
      </div>
    </div>
  );
}

const TableHeader = () => {
  return (
    <thead className=" dark:bg-zinc-700 ">
      <tr>
        {str.map((header) => (
          <th key={header} scope="col" className={sharedTableHeaderClasses}>
            {" "}
            {header}{" "}
          </th>
        ))}
      </tr>
    </thead>
  );
};

const TableBody = () => {
  return (
    <tbody className="bg-white dark:bg-zinc-800 divide-y divide-zinc-200 dark:divide-zinc-700">
      {alumnos.map((alumno) => (
        <tr key={alumno.legajo}>
          <td className={`${sharedTableCellClasses} font-medium`}>
            {" "}
            {alumno.legajo}{" "}
          </td>
          <td className={sharedTableCellClasses}>{alumno.nombre}</td>
          <td className={sharedTableCellClasses}>{alumno.apellido}</td>
          <td className={sharedTableCellClasses}>{alumno.email}</td>
          <td className={sharedTableCellClasses}>{alumno.telefono}</td>
          <td className={`${sharedTableCellClasses} text-right`}>
            <button
              className=" dark:text-indigo-400 dark:hover:text-indigo-600"
              onClick={() => handleClickAlumno(alumno)}
            >
              {" "}
              Info{""}
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  );
};
