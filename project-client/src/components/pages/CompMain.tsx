import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";
import logo from "../../assets/home/logo.svg";
import { useEffect, useState } from "react";
import { CiCircleInfo } from "react-icons/ci";

import { useNavigate } from "react-router-dom";

function CompMain() {
  const [result, setResult] = useState(0);
  const [dummies, setDummies] = useState<any[]>([
    {
      id: 1,
      created_at: "",
      description: "",
      roi: 0,
      market_share: 0,
      num_investors: 0,
      raised: 0,
      minimum_inv: 0,
      rounds: 0,
      problem: "",
      value_proposition: "",
      model: "",
      research_develop: "",
      link_logo: "",
      link_banner: "",
      category: "",
      name: "",
    },
  ]);

  const handleAllStartUps = async () => {
    try {
      const res = await fetch("https://hack-project.onrender.com/startups");
      const data = await res.json();

      setDummies(data);
      console.log(data[0]);
    } catch (err) {
      console.log(err);
    }
  };

  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);

  const [resultInfo, setResultInfo] = useState("");

  const handleCompare = async () => {
    try {
      let dummy = {
        id1: dummies[left].id,
        id2: dummies[right].id,
      };
      const res = await fetch("https://hack-project.onrender.com/compare", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dummy),
      });

      const data = await res.json();

      if (data) {
        const startIndex = data.message.indexOf("{$");
        const endIndex = data.message.indexOf("$}", startIndex);

        // Extract the number if found
        if (startIndex !== -1 && endIndex !== -1) {
          const numberString = data.message.slice(startIndex + 2, endIndex); // Get the part between {$ and $}
          const number = parseInt(numberString); // Convert it to an integer
          if (number == dummies[left].id) {
            setResult(1);
          } else if (number == dummies[right].id) {
            setResult(2);
          } else {
            alert("GG PONGASE A CHAMBEAR");
          }
          setResultInfo(
            data.message.slice(0, startIndex) + data.message.slice(endIndex + 2)
          );
        } else {
          console.log("No {$ $} pattern found");
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    handleAllStartUps();
  }, []);

  const navigate = useNavigate();

  return (
    <div className="w-full h-[700px] p-10 flex justify-center items-end select-none">
      <div className="w-full h-full flex justify-between items-end">
        <div
          className={`tr h-full ${
            result == 1 ? "w-[70%]" : result == 2 ? "hidden" : "w-[40%]"
          }`}
        >
          <span className="flex justify-end items-center p-5">
            <span
              className="text-white flex items-center gap-5 font-hnLight hover:scale-105 tr select-none cursor-pointer"
              onClick={() => navigate(`/startup_page/${dummies[left].id}`)}
            >
              <span>More Info</span>
              <FaArrowRightLong />
            </span>
          </span>
          <div className="bg-black bg-opacity-40 backdrop-blur-lg w-full h-[85%] rounded-[10px]">
            {result == 1 ? (
              <div className="p-10 text-white flex flex-col gap-5">
                <span className="font-gopherBold text-3xl">
                  {dummies[left].name}
                </span>

                <span className="font-hnLight">{resultInfo}</span>
              </div>
            ) : (
              <div className="text-white flex flex-col gap-10 px-10 py-5 overflow-y-auto">
                <span className="font-gopherBold text-xl">
                  {dummies[left].name}
                </span>
                <span>{dummies[left].description}</span>
                <span className="flex flex-col text-sm font-hnLight gap-2 max-h-[140px]">
                  <span>Raised: ${dummies[left].raised}</span>
                  <span>Investors: {dummies[left].num_investors}</span>
                  <span>Min Investment: {dummies[left].minimum_inv}</span>
                  <span>Market Share: {dummies[left].market_share}</span>
                  <span>Roi: %{dummies[left].roi}</span>
                </span>
                <span className="w-full bg-white h-[1px]"></span>
                <div className="h-[120px] w-full overflow-clip flex justify-center items-center object-contain">
                  <img
                    src={dummies[left].link_logo}
                    className="object-contain w-full h-full"
                  />
                </div>
              </div>
            )}
          </div>
          <span className="flex justify-between w-full items-center p-5 text-white">
            <FaArrowLeftLong
              className="hover:scale-110 tr cursor-pointer"
              onClick={() => {
                if (left == 0) {
                  setLeft(dummies.length - 1);
                } else {
                  setLeft(left - 1);
                }
              }}
            />
            <FaArrowRightLong
              className="hover:scale-110 tr cursor-pointer"
              onClick={() => {
                if (left == dummies.length - 1) {
                  setLeft(0);
                } else {
                  setLeft(left + 1);
                }
              }}
            />
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
              if (result == 0) {
                handleCompare();
              } else {
                setResult(0);
              }
            }}
          >
            <img src={logo} />
            <span className="font-hnLight">
              {result == 0 ? "Compare" : "Compare again"}
            </span>
          </div>
          <div className={`tr ${result == 0 ? "hidden" : "mt-5 text-white"}`}>
            <span className="text-sm font-hnLight">Similar Companies</span>
            <div className="p-3 overflow-y-auto flex flex-col h-[280px]">
              {dummies.map((item, idx) => (
                <div
                  key={idx}
                  className="flex flex-col font-hnLight bg-black bg-opacity-25 backdrop-blur-sm mb-5 p-2 rounded-lg relative text-sm w-full hover:scale-110 tr select-none cursor-pointer"
                >
                  <span className="fixed top-0 right-0 m-2">
                    <CiCircleInfo />
                  </span>
                  <span className="">{item.name}</span>
                  <span>Raised: ${item.raised}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div
          className={`tr h-full ${
            result == 2 ? "w-[70%]" : result == 1 ? "hidden" : "w-[40%]"
          }`}
        >
          <span className="flex justify-end items-center p-5">
            <span
              className="text-white flex items-center gap-5 font-hnLight hover:scale-105 tr select-none cursor-pointer"
              onClick={() => navigate(`/startup_page/${dummies[right].id}`)}
            >
              <span>More Info</span>
              <FaArrowRightLong />
            </span>
          </span>
          <div className="bg-black bg-opacity-40 backdrop-blur-lg w-full h-[85%] rounded-[10px]">
            {result == 2 ? (
              <div className="p-10 text-white flex flex-col gap-5">
                <span className="font-gopherBold text-3xl">
                  {dummies[right].name}
                </span>

                <span className="font-hnLight">{resultInfo}</span>
              </div>
            ) : (
              <div className="text-white flex flex-col gap-10 px-10 py-5 overflow-y-auto">
                <span className="font-gopherBold text-xl">
                  {dummies[right].name}
                </span>
                <span>{dummies[right].description}</span>
                <span className="flex flex-col text-sm font-hnLight gap-2 max-h-[140px]">
                  <span>Raised: ${dummies[right].raised}</span>
                  <span>Investors: {dummies[right].num_investors}</span>
                  <span>Min Investment: {dummies[right].minimum_inv}</span>
                  <span>Market Share: {dummies[right].market_share}</span>
                  <span>Roi: %{dummies[right].roi}</span>
                </span>
                <span className="w-full bg-white h-[1px]"></span>
                <div className="h-[120px] w-full overflow-clip flex justify-center items-center object-contain">
                  <img
                    src={dummies[right].link_logo}
                    className="object-contain w-full h-full"
                  />
                </div>
              </div>
            )}
          </div>
          <span className="flex justify-between w-full items-center p-5 text-white">
            <FaArrowLeftLong
              className="hover:scale-110 tr cursor-pointer"
              onClick={() => {
                if (right == 0) {
                  setRight(dummies.length - 1);
                } else {
                  setRight(right - 1);
                }
              }}
            />
            <FaArrowRightLong
              className="hover:scale-110 tr cursor-pointer"
              onClick={() => {
                if (right == dummies.length - 1) {
                  setRight(0);
                } else {
                  setRight(right + 1);
                }
              }}
            />
          </span>
        </div>
      </div>
    </div>
  );
}

export default CompMain;
