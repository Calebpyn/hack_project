import React, { useEffect, useState } from "react";

function Startup_Page2({ startupId }: { startupId: number }) {
  const [startupData, setStartupData] = useState<any>(null); // Estado para almacenar los datos del startup
  const [loading, setLoading] = useState<boolean>(true); // Estado de carga

  // Función para obtener los datos de la API
  const fetchData = async () => {
    try {
      const response = await fetch(`https://hack-project.onrender.com/startups/1`); // Cambia la URL a la de tu API
      const data = await response.json();
      setStartupData(data); // Guardar los datos obtenidos en el estado
      setLoading(false); // Finaliza el estado de carga
    } catch (error) {
      console.error("Error al obtener los datos de la API", error);
      setLoading(false); // Manejar cualquier error
    }
  };

  useEffect(() => {
    fetchData(); // Llamada a la API al montar el componente
  }, [startupId]); // Ejecutar la llamada cada vez que cambie el ID del startup

  if (loading) {
    return <div>Cargando...</div>; // Mostrar mensaje de carga mientras se obtienen los datos
  }

  if (!startupData) {
    return <div>Error al cargar los datos</div>; // Manejo básico de error si no hay datos
  }

  return (
    <div className="w-full pt-[100px] p-10 text-white">
      {/* Contenedor de las 2 primeras columnas */}
      <div className="grid grid-cols-2 gap-10 mb-10">
        {/* Columna 1: Problem it Solves */}
        <div>
          <h2 className="text-2xl mb-5 font-bold">Problem it solves</h2>
          <p className="text-2xl mb-4">
            <strong>Problem:</strong> {startupData.problem}
          </p>
          <p className="text-2xl mb-4">
            <strong>Solution:</strong> {startupData.solution}
          </p>
        </div>

        {/* Columna 2: Value Proposition */}
        <div>
          <h2 className="text-2xl font-bold mb-5">Value Proposition</h2>
          <p className="text-2xl mb-4">
            <strong>Value Proposition:</strong> {startupData.value_proposition}
          </p>
          <p className="text-2xl mb-4">
            <strong>Research & Development:</strong> {startupData.research_develop}
          </p>
        </div>
      </div>

      {/* Sección completa: Business Model */}
      <div className="w-full">
        <h2 className="text-2xl font-bold mb-5">Business Model</h2>
        <ul className="list-disc list-inside text-2xl mb-4">
          <li>
            <strong>Business Model:</strong> {startupData.model}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Startup_Page2;
