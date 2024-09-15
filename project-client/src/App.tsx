import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import { AuroraBackground } from "./components/ui/aurora-background";
import Navbar from "./components/common/Navbar";
import { useEffect, useRef, useState } from "react";
import Startup_Page from "./components/pages/Startup_Page";

import Explore from "./components/pages/Explore";
import CompHome from "./components/pages/CompHome";
import CompMain from "./components/pages/CompMain";

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

  useEffect(() => {
    window.scrollTo(0, 0);
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
              <Route path="/startup_page/:id" element={<Startup_Page />} />
              <Route path="/explore" element={<Explore />} />
              <Route path="/comp_home" element={<CompHome />} />
              <Route path="/comp_engine" element={<CompMain />} />
            </Routes>
          </div>
        }
      />
    </HashRouter>
  );
}

export default App;
