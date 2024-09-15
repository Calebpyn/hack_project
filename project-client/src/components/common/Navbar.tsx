import { useNavigate } from "react-router-dom";

interface NavbarProps {
  bgColor: string;
  bgBlur: string;
}

const Navbar: React.FC<NavbarProps> = ({ bgColor, bgBlur }) => {
  const navigate = useNavigate();

  return (
    <div
      className="w-full h-[100px] fixed top-0 flex justify-between items-center px-10 tr z-[999]"
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
      <span className="flex flex-col gap-3 items-end cursor-pointer group tr">
        <div className="w-[30px] bg-white h-[1px] group-hover:w-[33px] tr"></div>
        <div className="w-[25px] bg-white h-[1px] group-hover:w-[28px] tr"></div>
        <div className="w-[30px] bg-white h-[1px] group-hover:w-[33px] tr"></div>
      </span>
    </div>
  );
};

export default Navbar;
