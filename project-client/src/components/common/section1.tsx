import React, { useEffect, useState } from "react";
import InfoCard from "./InfoCard"; // Asegúrate de que la ruta sea la correcta

interface Startup {
  id: number;
  name: string;
  category: string;
  created_at: number;
  roi: number;
  link_logo: string;
  link_banner: string;
  research_develop: string;
  model: string;
  value_proposition: string;
  problem: string;
  rounds: number;
  minimum_investment: number;
  raised: number;
  num_investors: number;
  market_share: number;
  description: string;
}

const Section1: React.FC = () => {
  const [startups, setStartups] = useState<Startup[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // Aquí haces la llamada a la API
    const fetchData = async () => {
      try {
        const response = await fetch("https://hack-project.onrender.com/"); // Reemplaza con la URL de tu API
        const data = await response.json();
        setStartups(data); // Guarda los datos obtenidos
        setLoading(false); // Detiene el estado de carga
      } catch (error) {
        console.error("Error fetching data", error);
        setLoading(false); // Incluso si falla, detiene el estado de carga
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Cargando...</div>; // Mientras carga, muestra un spinner o mensaje
  }

  return (
    <div className="w-full flex flex-wrap gap-5">
      {startups.map((startup) => (
        <InfoCard
          key={startup.id}
          name={startup.name}
          category={startup.category}
          created_at={startup.created_at}
          roi={startup.roi}
          link_logo={startup.link_logo}
          link_banner={startup.link_banner}
          research_develop={startup.research_develop}
          model={startup.model}
          value_proposition={startup.value_proposition}
          problem={startup.problem}
          rounds={startup.rounds}
          minimum_investment={startup.minimum_investment}
          raised={startup.raised}
          num_investors={startup.num_investors}
          market_share={startup.market_share}
          description={startup.description}
          id={0}
        />
      ))}
    </div>
  );
};

export default Section1;
