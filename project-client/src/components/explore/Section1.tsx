import logo from "../../assets/home/logo.svg";
import { SlMagnifier } from "react-icons/sl";
import InfoCard from "../common/InfoCard";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function Section1() {
  const { pathname } = useLocation();
  const [originalData, setOriginalData] = useState<any[]>([]); // Datos originales sin filtrar
  const [filteredData, setFilteredData] = useState<any[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilters, setSelectedFilters] = useState<number[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // Función para obtener los datos desde la API
  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://hack-project.onrender.com/startups/"
      ); // Reemplaza con la URL de tu API
      const data = await response.json();
      setOriginalData(data); // Guardar los datos originales
      setFilteredData(data); // Inicialmente mostrar todos los datos
      setLoading(false);
    } catch (error) {
      console.error("Error al obtener los datos", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Función para manejar la búsqueda y filtrado por categorías
  const handleSearch = (query: string, filters: number[]) => {
    const lowercasedQuery = query.toLowerCase();
    let newFilteredData = originalData.filter((item) =>
      item.name.toLowerCase().includes(lowercasedQuery)
    );

    // Filtrar por categorías seleccionadas
    if (filters.length > 0) {
      const categoryFilters = filters.map((filter) => {
        switch (filter) {
          case 1:
            return "Technology";
          case 2:
            return "Health";
          case 3:
            return "Environment";
          case 4:
            return "E-commerce";
          case 5:
            return "Logistics";
          case 6:
            return "Education";
          default:
            return "";
        }
      });

      newFilteredData = newFilteredData.filter((item) =>
        categoryFilters.includes(item.category)
      );
    }

    setFilteredData(newFilteredData);
  };

  useEffect(() => {
    handleSearch(searchQuery, selectedFilters);
  }, [selectedFilters, searchQuery]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    setSearchQuery(query);
    handleSearch(query, selectedFilters);
  };

  const toggleFilter = (filterId: number) => {
    const updatedFilters = selectedFilters.includes(filterId)
      ? selectedFilters.filter((x) => x !== filterId)
      : [...selectedFilters, filterId];
    setSelectedFilters(updatedFilters);
  };

  if (loading) {
    return <div className="h-[650px]">Cargando...</div>; // Mostrar estado de carga
  }

  return (
    <div className="w-full flex justify-center items-center p-10">
      <div className="w-full flex justify-between items-start">
        <div className="w-[70%] flex flex-col justify-start h-full">
          <div className="flex flex-col w-full">
            <div className="w-full flex flex-col items-start">
              <span className="flex gap-5 items-center">
                <span className="font-gopherBold text-6xl text-white">
                  Explore Startups
                </span>
                <img src={logo} className="h-[40px]" alt="logo" />
              </span>
              <span className="font-hnLight text-white text-sm mt-5">
                Compare top startups side by side, with key metrics at your
                fingertips. Discover their industry, size, revenue, growth
                potential, and more to find the perfect investment opportunity.
              </span>
            </div>
            <div>
              <span className="w-full border-b-[1px] border-white bg-transparent mt-5 outline-none tr text-white flex justify-end items-center pr-3 gap-3 backdrop-blur-lg">
                <input
                  className="w-full p-3 bg-transparent outline-none"
                  onChange={(e) => handleInputChange(e)}
                  value={searchQuery}
                  placeholder="Search Startups"
                ></input>
                <SlMagnifier className="hover:scale-110 tr cursor-pointer" />
              </span>
            </div>
          </div>
          <div className="min-h-[200px] w-full py-5 flex flex-wrap gap-5">
            {filteredData.map((item) => (
              <InfoCard
                key={item.id}
                name={item.name}
                category={item.category}
                created_at={item.created_at}
                roi={item.roi}
                link_logo={item.link_logo}
                link_banner={item.link_banner}
                research_develop={item.research_develop}
                model={item.model}
                value_proposition={item.value_proposition}
                problem={item.problem}
                rounds={item.rounds}
                minimum_investment={item.minimum_inv}
                raised={item.raised}
                num_investors={item.num_investors}
                market_share={item.market_share}
                description={item.description}
              />
            ))}
          </div>
        </div>
        <div className="w-[30%] h-[700px] flex items-center flex-col text-white">
          <div className="w-[90%] h-[45%] bg-black bg-opacity-35 backdrop-blur-lg rounded-[10px] p-5 font-hnLight">
            <span className="font-hnLight text-[12px] w-full justify-between flex">
              <span>Categories</span>
              <span
                className="cursor-pointer hover:scale-105 tr"
                onClick={() => setSelectedFilters([])}
              >
                Clear
              </span>
            </span>

            <div className="flex flex-col p-3 gap-5">
              <span className="flex items-center gap-5 justify-start">
                <div
                  className={`w-[20px] h-[20px] border-2 border-white rounded-sm tr cursor-pointer ${
                    selectedFilters.includes(1) ? "bg-white" : ""
                  }`}
                  onClick={() => toggleFilter(1)}
                ></div>
                <span>Technology</span>
              </span>
              <span className="flex items-center gap-5 justify-start">
                <div
                  className={`w-[20px] h-[20px] border-2 border-white rounded-sm tr cursor-pointer ${
                    selectedFilters.includes(2) ? "bg-white" : ""
                  }`}
                  onClick={() => toggleFilter(2)}
                ></div>
                <span>Health</span>
              </span>
              <span className="flex items-center gap-5 justify-start">
                <div
                  className={`w-[20px] h-[20px] border-2 border-white rounded-sm tr cursor-pointer ${
                    selectedFilters.includes(3) ? "bg-white" : ""
                  }`}
                  onClick={() => toggleFilter(3)}
                ></div>
                <span>Environment</span>
              </span>
              <span className="flex items-center gap-5 justify-start">
                <div
                  className={`w-[20px] h-[20px] border-2 border-white rounded-sm tr cursor-pointer ${
                    selectedFilters.includes(4) ? "bg-white" : ""
                  }`}
                  onClick={() => toggleFilter(4)}
                ></div>
                <span>E-commerce</span>
              </span>
              <span className="flex items-center gap-5 justify-start">
                <div
                  className={`w-[20px] h-[20px] border-2 border-white rounded-sm tr cursor-pointer ${
                    selectedFilters.includes(5) ? "bg-white" : ""
                  }`}
                  onClick={() => toggleFilter(5)}
                ></div>
                <span>Logistics</span>
              </span>
              <span className="flex items-center gap-5 justify-start">
                <div
                  className={`w-[20px] h-[20px] border-2 border-white rounded-sm tr cursor-pointer ${
                    selectedFilters.includes(6) ? "bg-white" : ""
                  }`}
                  onClick={() => toggleFilter(6)}
                ></div>
                <span>Education</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section1;
