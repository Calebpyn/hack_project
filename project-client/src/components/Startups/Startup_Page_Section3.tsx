import { useState, useEffect, useRef } from 'react';

function Startup_Page_Section3({ startupId }: { startupId: number }) {  // Recibe startupId como prop
  const [activeTab, setActiveTab] = useState<null | 'Expansion Plan' | 'Key Metrics' | 'Founding Team'>(null);
  const [startupData, setStartupData] = useState<any>(null); // Estado para almacenar los datos del startup
  const [employerData, setEmployerData] = useState<any>(null); // Estado para almacenar los datos del employer
  const [loading, setLoading] = useState<boolean>(true); // Estado de carga

  const buttonAreaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (buttonAreaRef.current && !buttonAreaRef.current.contains(event.target as Node)) {
        setActiveTab(null); // Reiniciar la pestaña activa al hacer clic fuera
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Función para obtener los datos de la API
  const fetchData = async () => {
    try {
      // Obtener datos del startup
      const response = await fetch(`https://hack-project.onrender.com/startups/${startupId}`);
      const startupData = await response.json();
      
      // Obtener datos del employer según el ID del startup
      const response2 = await fetch(`https://hack-project.onrender.com/employers/${startupId}`);
      const employerData = await response2.json();

      // Guardar los datos obtenidos en los respectivos estados
      setStartupData(startupData);
      setEmployerData(employerData);
      setLoading(false); // Finaliza el estado de carga
    } catch (error) {
      console.error("Error al obtener los datos de la API", error);
      setLoading(false); // Manejar cualquier error
    }
  };

  useEffect(() => {
    fetchData(); // Llamada a la API al montar el componente
  }, [startupId]); // Ejecutar la llamada cada vez que cambie el ID del startup

  // Renderiza el contenido dinámico basado en la pestaña seleccionada
  const renderContent = () => {
    if (!activeTab || !startupData || !employerData) return null;

    switch (activeTab) {
      case 'Expansion Plan':
        return (
          <div>
            <p className="text-2xl mb-5">
              <strong>Current Markets:</strong> {startupData.currentMarkets}
            </p>
            <p className="text-2xl mb-5">
              <strong>Future Expansion:</strong> {startupData.futureExpansion}
            </p>
            <p className="text-2xl mb-5">
              <strong>Technological Innovation:</strong> {startupData.technologicalInnovation}
            </p>
          </div>
        );
      case 'Key Metrics':
        return (
          <div>
            <p className="text-2xl mb-5">
              <strong>Active Users:</strong> {startupData.activeUsers}
            </p>
            <p className="text-2xl mb-5">
              <strong>Annual Growth:</strong> {startupData.annualGrowth}
            </p>
            <p className="text-2xl mb-5">
              <strong>Annual Revenue:</strong> {startupData.annualRevenue}
            </p>
            <p className="text-2xl mb-5">
              <strong>Profit Margins:</strong> {startupData.profitMargins}
            </p>
          </div>
        );
      case 'Founding Team':
        return (
          <div>
            <p className="text-2xl mb-5">
              <strong>CEO:</strong> {employerData.name}
            </p>
            <p className="text-2xl mb-5">
              <strong>Contact:</strong> {employerData.contact}
            </p>
          </div>
        );
      default:
        return null;
    }
  };

  if (loading) {
    return <div>Cargando...</div>; // Mostrar mensaje de carga mientras se obtienen los datos
  }

  return (
    <div className="w-full b p-10 text-white pt-[200px]">
      <div className="grid grid-cols-3 gap-10 mb-10">
        <div className="col-span-3">
          {/* Área de botones */}
          <div className="flex space-x-4 mb-5 flex items-center justify-center" ref={buttonAreaRef}>
            <button
              className={`px-10 py-2 rounded-full flex items-center justify-center ${
                activeTab === 'Expansion Plan' ? 'bg-white text-black' : 'border border-white text-white hover:bg-white hover:text-black'
              }`}
              onClick={() => setActiveTab('Expansion Plan')}
            >
              <h2 className="text-2xl mb-3">Expansion Plan</h2>
            </button>
            <button
              className={`px-4 py-2 rounded-full flex items-center justify-center ${
                activeTab === 'Key Metrics' ? 'bg-white text-black' : 'border border-white text-white hover:bg-white hover:text-black'
              }`}
              onClick={() => setActiveTab('Key Metrics')}
            >
              <h2 className="text-2xl mb-3">Key Metrics</h2>
            </button>
            <button
              className={`px-4 py-2 rounded-full flex items-center justify-center ${
                activeTab === 'Founding Team' ? 'bg-white text-black' : 'border border-white text-white hover:bg-white hover:text-black'
              }`}
              onClick={() => setActiveTab('Founding Team')}
            >
              <h2 className="text-2xl mb-3">Founding Team</h2>
            </button>
          </div>

          {/* Contenido dinámico */}
          <div className="p-5 bg-black bg-opacity-5 rounded-lg flex items-center justify-center">
            {renderContent()}
          </div>
          <br />
          <br />
        </div>
      </div>
    </div>
  );
}

export default Startup_Page_Section3;
