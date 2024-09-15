
import React from "react";


function Startup_Page2() {
  return (
    <div className="w-full pt-[100px] p-10 text-white">
      {/* Contenedor de las 2 primeras columnas */}
      <div className="grid grid-cols-2 gap-10 mb-10">
        {/* Columna 1: Problem it Solves */}
        <div>
          <h2 className="text-2xl mb-5 font-bold">Problem it solves</h2>
          <p className="text-2xl mb-4">
            <strong>Problem:</strong> Lack of accessible and affordable transportation options, especially in densely populated urban areas or regions with limited mobility choices.
          </p>
          <p className="text-2xl mb-4">
            <strong>Solution:</strong> Uber offers an online platform that connects riders and passengers, providing reliable and affordable transportation with just a few clicks.
          </p>
        </div>

        {/* Columna 2: Value Proposition */}
        <div>
          <h2 className="text-2xl font-bold mb-5">Value Proposition</h2>
          <p className="text-2xl mb-4">
            <strong>Convenience:</strong> Request a ride from your smartphone anytime, anywhere. Affordable pricing. Flexible pricing models that adjust to market demand.
          </p>
          <p className="text-2xl mb-4">
            <strong>Safety:</strong> Verified drivers and safety options for riders. A model that can easily expand to different cities and countries.
          </p>
        </div>
      </div>

      {/* Sección completa: Business Model */}
      <div className="w-full">
        <h2 className="text-2xl font-bold mb-5">Business Model</h2>
        <ul className="list-disc list-inside text-2xl mb-4">
          <li>
            <strong>Marketplace Platform:</strong> Uber connects drivers and passengers and takes a commission on each completed ride.
          </li>
          <li>
            <strong>Multiple Segments:</strong> Ridesharing (UberX, UberPool), food delivery (Uber Eats), and eventually other logistics services.
          </li>
          <li>
            <strong>Revenue Streams:</strong> Commission on rides, dynamic pricing, and additional services (subscriptions, etc.).
          </li>
        </ul>
      </div>
    </div>
  );
}


export default Startup_Page2;
