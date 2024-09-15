import React from "react";

interface InfoCardProps {
  name: string;
  industry: string;
  founded: number;
  size: number;
  revenue: string;
  img: string;
}

const InfoCard: React.FC<InfoCardProps> = ({
  name,
  industry,
  founded,
  size,
  revenue,
  img,
}) => {
  return (
    <div className="bg-white bg-opacity-30 backdrop-blur-lg rounded-[10px] h-[350px] w-[300px] p-5 text-white flex flex-col justify-between items-start hover:scale-105 tr cursor-pointer">
      <span className="text-xl font-hnRoman">{name}</span>
      <div className="w-full">
        <span className="flex flex-col font-hnLight text-sm">
          <span>Industry: {industry}</span>
          <span>Founded: {founded}</span>
          <span>Size: {size} Employees</span>
          <span>Revenue: ${revenue}</span>
        </span>
        <div
          style={{ backgroundImage: `url(${img})` }}
          className="w-full h-[100px] rounded-[10px] mt-3"
        ></div>
      </div>
    </div>
  );
};

export default InfoCard;
