//Assets
import logo from "../../assets/home/logo.svg";

function Footer() {
  return (
    <div className="h-[100px] w-full bg-black text-white p-10">
      <div className="flex justify-between items-center">
        <span className="flex items-center gap-5">
          <span className="font-gopherBold">InvestIQ</span>
          <img src={logo} className="h-[30px]" />
        </span>
        <span className="font-hnLight text-[10px]">
          © 2024 InvestIQ. All rights reserved.
        </span>
      </div>
    </div>
  );
}

export default Footer;
