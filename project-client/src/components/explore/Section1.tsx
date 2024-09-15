import logo from "../../assets/home/logo.svg";

import { SlMagnifier } from "react-icons/sl";
import InfoCard from "../common/InfoCard";
import { useState } from "react";

function Section1() {
  const [dummies, setDummies] = useState<any[]>([
    {
      companyName: "TechNova Solutions",
      industry: "Technology",
      founded: 2018,
      size: 150,
      revenue: "25M",
      description:
        "TechNova Solutions specializes in cutting-edge AI and machine learning technologies. The company focuses on developing innovative software solutions that enhance data analysis and automation for various industries.",
      keyMetrics: {
        revenue: "25M",
        funding: "50M",
        marketPosition:
          "TechNova holds a strong position in the AI market, with a growing client base and a reputation for reliability and innovation.",
      },
      highlights: [
        "Awarded 'Best Tech Startup' by TechWorld Magazine (2022)",
        "Partnerships with leading tech firms like Intel and Microsoft",
        "Successfully launched three major products in the last year",
      ],
      whyInvest:
        "TechNova Solutions offers a unique combination of cutting-edge technology and strong market presence. With a solid track record of innovation and strategic partnerships, it represents a promising investment opportunity in the rapidly evolving tech industry.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAHAe0g1f5ng-92MI1s6prc0NW9ZnRPDlHuQ&s",
    },
    {
      companyName: "GreenWave Energy",
      industry: "Renewable Energy",
      founded: 2015,
      size: 300,
      revenue: "22M",
      description:
        "GreenWave Energy is a leader in sustainable energy solutions, specializing in solar and wind power technologies. The company’s mission is to make clean energy more accessible through affordable, high-efficiency products.",
      keyMetrics: {
        revenue: "22M",
        funding: "70M",
        marketPosition:
          "GreenWave is recognized as a top player in the renewable energy sector, with a growing presence in both domestic and international markets.",
      },
      highlights: [
        "Winner of 'Top Innovator in Clean Energy' Award (2021)",
        "Partnerships with national energy grids in three countries",
        "Achieved 100% carbon-neutral operations by 2022",
      ],
      whyInvest:
        "GreenWave Energy is at the forefront of the renewable energy movement, offering innovative solutions in a rapidly growing market. With increasing demand for sustainable power and a strong pipeline of projects, GreenWave presents a valuable investment opportunity in the green energy sector.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAHAe0g1f5ng-92MI1s6prc0NW9ZnRPDlHuQ&s",
    },
    {
      companyName: "SkyNet Robotics",
      industry: "Robotics",
      founded: 2017,
      size: 200,
      revenue: "38M",
      description:
        "SkyNet Robotics is pioneering the future of automation with cutting-edge robotic systems for industrial applications. Their autonomous solutions increase efficiency and safety across multiple sectors, from manufacturing to logistics.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAHAe0g1f5ng-92MI1s6prc0NW9ZnRPDlHuQ&s",
    },
    {
      companyName: "BioFusion Health",
      industry: "Biotechnology",
      founded: 2014,
      size: 250,
      revenue: "45M",
      description:
        "BioFusion Health is a biotech company specializing in gene editing technologies aimed at revolutionizing healthcare treatments. Their focus on cutting-edge research has made them a leader in personalized medicine.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAHAe0g1f5ng-92MI1s6prc0NW9ZnRPDlHuQ&s",
    },
    {
      companyName: "NextGen Fintech",
      industry: "Fintech",
      founded: 2016,
      size: 180,
      revenue: "32M",
      description:
        "NextGen Fintech offers innovative digital payment solutions and financial products, helping consumers and businesses streamline transactions. Their secure and scalable platform has rapidly gained market traction.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAHAe0g1f5ng-92MI1s6prc0NW9ZnRPDlHuQ&s",
    },
    {
      companyName: "SolarWave Solutions",
      industry: "Renewable Energy",
      founded: 2015,
      size: 120,
      revenue: "25M",
      description:
        "SolarWave Solutions provides affordable, scalable solar energy solutions. They are transforming the renewable energy landscape with high-efficiency solar panels and energy storage systems.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAHAe0g1f5ng-92MI1s6prc0NW9ZnRPDlHuQ&s",
    },
    {
      companyName: "EduTrack Innovations",
      industry: "Education Technology (EdTech)",
      founded: 2018,
      size: 100,
      revenue: "12M",
      description:
        "EduTrack Innovations creates cutting-edge digital tools for the education sector. Their platform helps institutions track student progress, improve teaching efficiency, and offer personalized learning experiences.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAHAe0g1f5ng-92MI1s6prc0NW9ZnRPDlHuQ&s",
    },
  ]);

  const [filteredData, setFilteredData] = useState<any[]>(dummies);
  const [searchQuery, setSearchQuery] = useState("");

  // Function to handle search
  const handleSearch = (query: string) => {
    const lowercasedQuery = query.toLowerCase();
    const newFilteredData = dummies.filter((item) =>
      item.companyName.toLowerCase().includes(lowercasedQuery)
    );
    setFilteredData(newFilteredData);
  };

  // Function to handle input change
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    setSearchQuery(query);
    handleSearch(query);
  };

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
                <img src={logo} className="h-[40px]" />
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
                ></input>
                <SlMagnifier className="hover:scale-110 tr cursor-pointer" />
              </span>
            </div>
          </div>
          <div className="min-h-[200px] w-full py-5 flex flex-wrap gap-5">
            {filteredData.map((item) => (
              <InfoCard
                founded={item.founded}
                img={item.img}
                industry={item.industry}
                name={item.companyName}
                revenue={item.revenue}
                size={item.size}
              />
            ))}
          </div>
        </div>
        <div className="w-[30%] h-[700px] flex items-center flex-col text-white">
          <div className="w-[90%] h-full bg-black bg-opacity-35 backdrop-blur-lg rounded-[10px] p-5">
            <span className="font-hnLight text-[12px]">Categories</span>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section1;
