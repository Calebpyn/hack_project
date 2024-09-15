import { MdOutlineArrowForwardIos } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/home/logo.svg";

function Signinmenu() {
  const navigate = useNavigate();

  return (
    <div className="w-full h-[700px] flex flex-col justify-end items-start p-10">
      <div className="text-white flex flex-col gap-5">
        <span className="text-6xl font-gopherBold tracking-wide">
          Sign up <br />
          as a Startup
        </span>
        <span className="font-hnLight w-[70%] text-2xl">
        Join our platform to showcase your startup to a global network of investors. Gain visibility, highlight your unique value, and attract the right funding to accelerate your growth and success
        </span>
      </div>
      <div className="mt-14 flex items-center justify-between w-full">
        <button
          className="text-white border-[1px] border-white flex justify-between items-center group w-[300px] px-5 py-2 rounded-full hover:w-[310px] tr"
          onClick={() => {
            navigate("/form");
          }}
        >
          <span className="group-hover:scale-105 tr">Sign up</span>
          <div className="w-[70px] flex justify-end items-center tr h-[2px] group-hover:w-[80px] bg-white">
            <MdOutlineArrowForwardIos className="text-[20px] -mr-2" />
          </div>
        </button>

        <img src={logo} />
      </div>
    </div>
  );
}

export default Signinmenu;
