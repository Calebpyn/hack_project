import { useEffect, useState, useRef } from "react";

function Startup_Page({ startupId }: { startupId: number }) {
  const [startupData, setStartupData] = useState<any>(null); // Estado para almacenar los datos del startup
  const [loading, setLoading] = useState<boolean>(true); // Estado de carga
  const paypalContainerRef = useRef<HTMLDivElement>(null); // Referencia al contenedor de PayPal
  const paypalScriptLoaded = useRef<boolean>(false); // Evitar cargar el script dos veces

  // Función para obtener los datos de la API
  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://hack-project.onrender.com/startups/${startupId}`
      ); // Cambia la URL a la de tu API
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

  const [alreadyLoaded, setAlreadyLoaded] = useState(false);

  useEffect(() => {
    const loadPaypalButtons = () => {
      if (window.paypal && paypalContainerRef.current) {
        window.paypal
          .Buttons({
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
                alert(
                  "Transaction completed by " + details.payer.name.given_name
                );
              });
            },
            onError: function (err: any) {
              console.error("PayPal Checkout onError", err);
            },
          })
          .render(paypalContainerRef.current);
        setAlreadyLoaded(true);
      }
    };

    // Solo cargar el script si no se ha cargado previamente
    if (!paypalScriptLoaded.current) {
      const script = document.createElement("script");
      script.src =
        "https://www.paypal.com/sdk/js?client-id=AY6hSDhLsVitPW1QYB420Oa8etdMf63aLJ21fWmkrOaDqBvpOIbbLQxT9y_XjcLKK7t1SJDna53FRwWA"; // Reemplaza con tu PayPal client ID
      script.async = true;

      script.onload = () => {
        console.log("PayPal script loaded successfully");
        paypalScriptLoaded.current = true; // Marcamos el script como cargado

        // Utilizamos un `setTimeout` para asegurarnos que el componente esté montado

        setTimeout(() => {
          if (!alreadyLoaded) {
            loadPaypalButtons();
          }
        }, 1000); // Espera de 1 segundo antes de renderizar los botones
      };

      script.onerror = () => {
        console.error("Failed to load PayPal script.");
      };

      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script);
      };
    } else {
      // Si el script ya fue cargado, solo renderizamos los botones de PayPal
      setTimeout(() => {
        if (!alreadyLoaded) {
          loadPaypalButtons();
        }
      }, 1000); // Mantén el timeout para cargar los botones
    }
  }, []); // Asegurarse de que solo se ejecute una vez

  if (loading) {
    return <div>Cargando...</div>; // Mostrar mensaje de carga mientras se obtienen los datos
  }

  if (!startupData) {
    return <div>Error al cargar los datos</div>; // Manejo básico de error si no hay datos
  }

  return (
    <div className="w-full pt-[100px] flex flex-col justify-end items-start px-10 mb-[250px]">
      {/* Sección del startup */}
      <div className="w-full py-5 flex items-center justify-center">
        <img
          src={startupData.link_logo}
          alt="Company logo"
          className="w-48 h-48 object-contain rounded-full shadow-lg"
        />
      </div>

      {/* Información del startup */}
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
        <div
          id="paypal-button-container"
          ref={paypalContainerRef}
          className="h-[130px] overflow-clip"
        ></div>
      </div>
    </div>
  );
}

export default Startup_Page;
