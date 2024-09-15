//Assets
import logo from "../../assets/home/logo.svg";
// import { AnimatedTooltip } from "../ui/animated-tooltip";

function Section1() {
  // const people = [
  //   {
  //     id: 6,
  //     name: "Daniel Molina",
  //     designation: "ML Dev",
  //     image:
  //       "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80",
  //   },
  //   {
  //     id: 7,
  //     name: "David Salinas",
  //     designation: "Backend Dev",
  //     image:
  //       "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80",
  //   },
  //   {
  //     id: 8,
  //     name: "José Paez",
  //     designation: "Frontend Dev",
  //     image:
  //       "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80",
  //   },
  //   {
  //     id: 9,
  //     name: "Caleb Payán",
  //     designation: "Frontend Dev",
  //     image:
  //       "https://instagram.fntr4-1.fna.fbcdn.net/v/t51.2885-19/404920774_737646511730936_860979111117926640_n.jpg?_nc_ht=instagram.fntr4-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=3DZdGtkYvj8Q7kNvgFN0vYa&_nc_gid=4c17fade0dfd499bb89c37ac60a757be&edm=AEhyXUkBAAAA&ccb=7-5&oh=00_AYB4zQL-LUfjNQt63ViQYVskeUNynqPCwtJzncB3Ony1zA&oe=66EC474D&_nc_sid=8f1549",
  //   },
  // ];

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
        {/* <span className="flex mt-10">
          <AnimatedTooltip items={people} />
        </span> */}
      </div>
    </div>
  );
}

export default Section1;
