// Estilos
const tableCell =
  "px-6 py-4 whitespace-nowrap text-sm text-zinc-900 dark:text-zinc-100";
const tableHeader =
  "px-6 py-3 text-left text-xs font-medium text-zinc-500 dark:text-zinc-400 uppercase tracking-wider";

export default function DibujarTabla({ title, columnas, datos }) {

  console.log(JSON.stringify(columnas))
  console.log("")
  console.log(JSON.stringify(datos))
  console.log("")
  const TableHeader = () => {
    return (

      <thead className="dark:bg-zinc-700 text-white">
          <tr>
            {columnas.map((columna, index) => (
              <th key={index} className={tableHeader}> {columna.header} </th>
            ))}
          </tr>
        </thead>
    );
  };

  const TableBody = () => {
    return (
      <tbody className="text-gray-700">
        {datos.map((fila, index) =>
          (<tr key={index}>
              {columnas.map((columna, subIndex) =>
                // fila[columna.accessor] es la celda, accessor es el nombre de la columna a la que accede
                (<td key={subIndex} className={tableCell}>{fila[columna.accessor]}</td>))
              }
              <td className={`${tableCell} text-right`}>
                <button className=" dark:text-indigo-400 dark:hover:text-indigo-600" 
                  onClick={null}
                > Info </button>
              </td>
            </tr>
          ))}
      </tbody>
    );
  };

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
