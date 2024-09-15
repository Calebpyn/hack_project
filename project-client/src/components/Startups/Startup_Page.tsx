import { useEffect, useState } from "react";

function Startup_Page({ startupId }: { startupId: number }) {
  const [startupData, setStartupData] = useState<any>(null); // Estado para almacenar los datos del startup
  const [loading, setLoading] = useState<boolean>(true); // Estado de carga

  // Función para obtener los datos de la API
  const fetchData = async () => {
    try {
      const response = await fetch(`https://hack-project.onrender.com/startups/${startupId}`); // Cambia la URL a la de tu API
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

  useEffect(() => {
    // Ensure that the PayPal script is loaded
    const script = document.createElement("script");
    script.src = "https://www.paypal.com/sdk/js?client-id=AY6hSDhLsVitPW1QYB420Oa8etdMf63aLJ21fWmkrOaDqBvpOIbbLQxT9y_XjcLKK7t1SJDna53FRwWA"; // Replace with your PayPal client ID
    script.async = true;

    script.onload = () => {
      console.log("PayPal script loaded successfully");
      // Render PayPal buttons after the script is loaded
      if (window.paypal) {
        window.paypal.Buttons({
          createOrder: function (actions: any) {
            return actions.order.create({
              purchase_units: [
                {
                  amount: {
                    value: "100", // Set the amount for the transaction
                  },
                },
              ],
            });
          },
          onApprove: function (actions: any) {
            return actions.order.capture().then(function (details: any) {
              alert("Transaction completed by " + details.payer.name.given_name);
            });
          },
          onError: function (err: any) {
            console.error("PayPal Checkout onError", err);
          },
        }).render("#paypal-button-container");
      } else {
        console.error("PayPal SDK did not load properly.");
      }
    };

    script.onerror = () => {
      console.error("Failed to load PayPal script.");
    };

    document.body.appendChild(script);

    // Clean up the script
    return () => {
      if (script) {
        document.body.removeChild(script);
      }
    };
  }, []);

  if (loading) {
    return <div>Cargando...</div>; // Mostrar mensaje de carga mientras se obtienen los datos
  }

  if (!startupData) {
    return <div>Error al cargar los datos</div>; // Manejo básico de error si no hay datos
  }

  return (
    <div className="w-full pt-[100px] flex flex-col justify-end items-start px-10 mb-[250px]">
      {/* Sección del uber */}

      {/* Franja negra con solo el título */}
      <div className="w-full py-5 flex items-center justify-center">
        <img
          src={startupData.link_logo}
          alt="Company logo"
          className="w-48 h-48 object-contain rounded-full shadow-lg"
        />
      </div>

      {/* Texto de misión fuera de la franja negra */}
      <div className="w-full py-5 flex items-center justify-center">
        <div className="w-[80%] text-white text-center">
          <p className="mt-2 text-2xl mb-5">
            <strong>Name:</strong> {startupData.name}
          </p>
          <p className="mt-2 text-2xl mb-5">
            <strong>Description:</strong> {startupData.description}
          </p>
          <p className="mt-2 text-2xl mb-5">
            <strong>Mission:</strong> {startupData.research_develop}
          </p>
        </div>
      </div>

      <div className="w-full py-5 flex items-center justify-center">
        <p className="mt-2 text-2xl mb-5 pt-10 text-white">
          <strong>Invest Now</strong>
        </p>
      </div>

      {/* Sección de PayPal */}
      <div className="w-full py-5 flex items-center justify-center">
        <div id="paypal-button-container"></div>
      </div>
    </div>
  );
}

export default Startup_Page;
