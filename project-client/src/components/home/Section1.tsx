//Assets
import logo from "../../assets/home/logo.svg";

function Section1() {
  return (
    <div className="w-full pt-[200px] flex flex-col justify-end items-start px-10 mb-[250px]">
      <div className="w-full p-10">
        <img src={logo} />
      </div>
      <div>
        <span className="text-6xl tracking-wide text-white font-gopherBold">
          Compare. <span className="text-[#570AAF]">Analyze.</span> Invest.
        </span>
      </div>
      <div className="w-[60%] py-5 text-white font-hnLight text-xl">
        <span>
          Leverage AI to compare startups based on industry, size, and age, and
          make data-driven investment decisions with confidence.
        </span>
      </div>
    </div>
  );
}

export default Section1;
