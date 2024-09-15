import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import { AuroraBackground } from "./components/ui/aurora-background";
import Navbar from "./components/common/Navbar";
import { useEffect, useRef, useState } from "react";
import Explore from "./components/pages/Explore";

interface NavbarProps {
  bgColor: string;
  bgBlur: string;
}

function App() {
  const [navbarBgColor, setNavbarBgColor] = useState<NavbarProps>({
    bgColor: "transparent",
    bgBlur: "blur(0px)",
  });
  const appRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (appRef.current) {
        const scrollY = appRef.current.scrollTop;
        console.log(scrollY);
        if (scrollY > 100) {
          setNavbarBgColor({
            bgColor: "",
            bgBlur: "blur(50px)",
          });
        } else {
          setNavbarBgColor({
            bgColor: "transparent",
            bgBlur: "blur(0px)",
          });
        }
      }
    };

    const container = appRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (container) {
        container.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);
  return (
    <HashRouter>
      <AuroraBackground
        children={
          <div
            className="w-full h-screen overflow-y-auto relative pt-[100px]"
            ref={appRef}
          >
            <Navbar
              bgColor={navbarBgColor.bgColor}
              bgBlur={navbarBgColor.bgBlur}
            />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/explore" element={<Explore />} />
            </Routes>
          </div>
        }
      />
    </HashRouter>
  );
}

export default App;
