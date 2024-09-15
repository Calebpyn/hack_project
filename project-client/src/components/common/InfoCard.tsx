import React from "react";
import { format } from 'date-fns';
import { useNavigate } from "react-router-dom";



interface InfoCardProps {
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
const InfoCard: React.FC<InfoCardProps> = ({
  id,
  name,
  category,
  created_at,
  roi,
  link_logo,
  link_banner,
  research_develop,
  model,
  value_proposition,
  problem,
  rounds,
  minimum_investment,
  raised,
  num_investors,
  market_share,
  description,
}) => {
  const formattedDate = format(new Date(created_at), "dd MMM yyyy");
  const navigate = useNavigate();

  return (
    <div className="bg-white bg-opacity-30 backdrop-blur-lg rounded-[10px] h-[350px] w-[300px] p-5 text-white flex flex-col justify-between items-start hover:scale-105 tr cursor-pointer" onClick={()=>{ console.log(id) 
    navigate(`/Startup_Page/${id}`)}}>
      
      <span className="text-xl font-hnRoman">{name}</span>
      <div className="w-full">
        <span className="flex flex-col font-hnLight text-sm">
          <span className="text-sm">Name: {name}</span>
          <span className="text-sm">Category: {category}</span>
          <span className="text-sm">Created at: {formattedDate}</span>
          <span className="text-sm">ROI: {roi}</span>
          <span className="text-sm">Model: {model}</span>
          <span className="text-sm">
            Value Proposition: {value_proposition}
          </span>
          <span className="text-sm">Raised: {raised} $</span>
          <span className="w-full h-[100px] object-contain rounded-[10px] mt-2">
            <img
              src={link_logo}
              alt="Company Logo"
              className="w-full h-full object-contain rounded-[10px]"
            />
          </span>
        </span>
      </div>
    </div>
  );
};

export default InfoCard;
