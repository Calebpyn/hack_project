import uber from "../../assets/home/uber1.svg";
import React from "react";


function Startup_Page() {
  return (
    <div className="w-full pt-[100px] flex flex-col justify-end items-start px-10 mb-[250px]">
      {/* Sección del uber */}
      
      
      {/* Franja negra con solo el título */}
      <div className="w-full py-5 flex items-center justify-center">
      <div className="w-full p-10 flex justify-center items-center">
        <img src={uber} alt="Company uber"  className="w-100 h-20" />
      </div>
      </div>

      {/* Texto de misión y visión fuera de la franja negra */}
      
      <div className="w-full py-5 flex items-center justify-center">
        <div className="w-[80%] text-white text-center">
          <p className="mt-2 text-2xl mb-5">
            <strong>Mission:</strong> To connect people with reliable transportation quickly and efficiently.
          </p>
          <p className="mt-2 text-2xl mb-5">
            <strong>Vision:</strong> To create a world where transportation is as accessible as running water.
          </p>
        </div>
      </div>
    </div>
  );
}



export default Startup_Page;
