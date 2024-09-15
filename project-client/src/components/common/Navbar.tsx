import { useNavigate } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

import logo from "../../assets/home/logo.svg";

interface NavbarProps {
  bgColor: string;
  bgBlur: string;
}

const Navbar: React.FC<NavbarProps> = ({ bgColor, bgBlur }) => {
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="w-full h-[100px] fixed top-0 flex justify-between items-center px-10 tr z-[99]"
      style={{
        backgroundColor: bgColor,
        backdropFilter: bgBlur,
      }}
    >
      <span
        className="text-3xl font-gopherBold text-white select-none cursor-pointer"
        onClick={() => navigate("/")}
      >
        InvestIQ
      </span>
      <span
        className="flex flex-col gap-3 items-end cursor-pointer group tr"
        onClick={() => setIsOpen(true)}
      >
        <div className="w-[30px] bg-white h-[1px] group-hover:w-[33px] tr"></div>
        <div className="w-[25px] bg-white h-[1px] group-hover:w-[28px] tr"></div>
        <div className="w-[30px] bg-white h-[1px] group-hover:w-[33px] tr"></div>
      </span>

      <div
        className={`absolute bg-black w-[30%] h-screen flex flex-col justify-between top-0 tr right-0 ${
          isOpen ? "" : "translate-x-[100%]"
        }`}
        style={{
          backdropFilter: bgBlur,
        }}
      >
        <div>
          <span className="p-10 w-full flex justify-end items-center text-white">
            <AiOutlineClose
              className="text-4xl hover:scale-110 tr cursor-pointer"
              onClick={() => setIsOpen(false)}
            />
          </span>
          <div className="w-full p-10 text-2xl font-hnLight text-white flex flex-col gap-8">
            <span
              className="hover:scale-110 tr select-none cursor-pointer hover:tracking-wider"
              onClick={() => {
                navigate("/");
                setIsOpen(false);
              }}
            >
              Home
            </span>
            <span
              className="hover:scale-110 tr select-none cursor-pointer hover:tracking-wider"
              onClick={() => {
                navigate("/comp_home");
                setIsOpen(false);
              }}
            >
              Compare
            </span>
            <span
              className="hover:scale-110 tr select-none cursor-pointer hover:tracking-wider"
              onClick={() => {
                navigate("/explore");
                setIsOpen(false);
              }}
            >
              Explore
            </span>
            <span
              className="hover:scale-110 tr select-none cursor-pointer hover:tracking-wider"
              onClick={() => {
                navigate("/signin");
                setIsOpen(false);
              }}
            >
              Sign up as a Startup
            </span>
          </div>
        </div>

        <span className="p-10">
          <img src={logo} className="h-[30px]" />
        </span>
      </div>
    </div>
  );
};

export default Navbar;