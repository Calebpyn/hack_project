import React from "react";
import { MdOutlineArrowForwardIos } from "react-icons/md";

import { useNavigate } from "react-router-dom";

function Section2() {
  const navigate = useNavigate();
  return (
    <div className="w-full flex flex-col justify-start items-center">
      <span className="h-[1px] w-[95%] bg-white"></span>
      <div className="flex justify-around items-center py-10 w-full">
        <div className="bg-black bg-opacity-50 backdrop-blur-lg text-white flex flex-col justify-between h-[400px] w-[300px] p-5 rounded-[10px]">
          <span className="font-hnRoman">About Us:</span>
          <span className="font-hnLight">
            We created [Software Name] to bridge the gap between investors and
            innovative startups. Our platform provides an in-depth analysis of
            companies so you can invest with confidence, knowing that you have
            the best data at your fingertips. Whether you’re an experienced
            investor or just getting started, we give you the tools to make
            smarter choices.
          </span>
        </div>

        <div className="bg-black bg-opacity-50 backdrop-blur-lg text-white flex flex-col justify-between h-[400px] w-[300px] p-5 rounded-[10px]">
          <span className="font-hnRoman">How it works:</span>
          <span className="font-hnLight">
            <b className="font-gopherBold">1.</b> Select Startups Choose
            startups based on industry, size, and other key criteria. <br />
            <b className="font-gopherBold">2.</b> Analyze Results Review
            side-by-side comparisons, key metrics, and company highlights.
            <br /> <b className="font-gopherBold">3.</b> Invest Smarter Use
            data-backed insights to make the best investment choices.
          </span>
        </div>

        <div className="bg-black bg-opacity-50 backdrop-blur-lg text-white flex flex-col justify-between h-[400px] w-[300px] p-5 rounded-[10px]">
          <span className="font-hnRoman">Why Choose Us?</span>
          <span className="font-hnLight">
            • AI-Powered Comparisons Machine learning evaluates startups across
            key metrics for smarter decisions.
            <br /> • Comprehensive Insights Compare startups by industry, size,
            age, and growth potential.
            <br /> • Data-Driven Decisions Access crucial data for strategic
            investment choices.
            <br /> • Easy-to-Use Interface Quickly compare startups with our
            simple, intuitive platform.
          </span>
        </div>
      </div>

      <div className="w-full flex justify-end items-center p-10">
        <button
          className="text-white border-[1px] border-white flex justify-between items-center group w-[300px] px-5 py-2 rounded-full hover:w-[310px] tr"
          onClick={() => {
            navigate("/explore");
          }}
        >
          <span className="group-hover:scale-105 tr">Explore Start-Ups</span>
          <div className="w-[70px] flex justify-end items-center tr h-[2px] group-hover:w-[80px] bg-white">
            <MdOutlineArrowForwardIos className="text-[20px] -mr-2" />
          </div>
        </button>
      </div>
    </div>
  );
}

export default Section2;
