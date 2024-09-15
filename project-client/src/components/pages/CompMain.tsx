import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";
import logo from "../../assets/home/logo.svg";
import { useState } from "react";

function CompMain() {
  const [result, setResult] = useState(0);
  return (
    <div className="w-full h-[700px] p-10 flex justify-center items-end">
      <div className="w-full h-full flex justify-between items-end">
        <div
          className={`tr h-full ${
            result == 1 ? "w-[70%]" : result == 2 ? "hidden" : "w-[40%]"
          }`}
        >
          <span className="flex justify-end items-center p-5">
            <span className="text-white flex items-center gap-5 font-hnLight hover:scale-105 tr select-none cursor-pointer">
              <span>More Info</span>
              <FaArrowRightLong />
            </span>
          </span>
          <div className="bg-black bg-opacity-40 backdrop-blur-lg w-full h-[85%] rounded-[10px]"></div>
          <span className="flex justify-between w-full items-center p-5 text-white">
            <FaArrowLeftLong className="hover:scale-110 tr cursor-pointer" />
            <FaArrowRightLong className="hover:scale-110 tr cursor-pointer" />
          </span>
        </div>
        <div
          className={`tr ${
            result == 0
              ? "w-[20%] flex h-full flex-col justify-center items-center"
              : "w-[20%] h-[85%] bg-black bg-opacity-40 backdrop-blur-lg self-center mt-9 rounded-[10px] flex justify-start flex-col p-5 pt-10"
          }`}
        >
          <div
            className="hover:scale-110 tr cursor-pointer text-white flex flex-col items-center gap-5"
            onClick={() => {
              setResult(1);
            }}
          >
            <img src={logo} />
            <span className="font-hnLight">
              {result == 0 ? "Compare" : "Compare again"}
            </span>
          </div>
          <div className={`tr ${result == 0 ? "hidden" : ""}`}></div>
        </div>
        <div
          className={`tr h-full ${
            result == 2 ? "w-[70%]" : result == 1 ? "hidden" : "w-[40%]"
          }`}
        >
          <span className="flex justify-end items-center p-5">
            <span className="text-white flex items-center gap-5 font-hnLight hover:scale-105 tr select-none cursor-pointer">
              <span>More Info</span>
              <FaArrowRightLong />
            </span>
          </span>
          <div className="bg-black bg-opacity-40 backdrop-blur-lg w-full h-[85%] rounded-[10px]"></div>
          <span className="flex justify-between w-full items-center p-5 text-white">
            <FaArrowLeftLong className="hover:scale-110 tr cursor-pointer" />
            <FaArrowRightLong className="hover:scale-110 tr cursor-pointer" />
          </span>
        </div>
      </div>
    </div>
  );
}

export default CompMain;
