import Startup_Page from "../Startups/Startup_Page";
import Startup_Page_Section2 from "../Startups/Startup_Page_Section2";
import Startup_Page_Section3 from "../Startups/Startup_Page_Section3";
import { useParams } from "react-router-dom";

function startup_Page() {
  const { id } = useParams<any>(); // El ID del startup que deseas pasar. Puedes cambiar esto dinámicamente según sea necesario
  return (
    <div className="w-full">
      {/* Pasando startupId como prop a cada sección */}
      <Startup_Page startupId={parseInt(id!)} />
      <Startup_Page_Section2 startupId={parseInt(id!)} />
      <Startup_Page_Section3 startupId={parseInt(id!)} />
    </div>
  );
}

export default startup_Page;
