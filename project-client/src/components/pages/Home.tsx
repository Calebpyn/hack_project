import { useEffect } from "react";
import Footer from "../common/Footer";
import Section1 from "../home/Section1";
import Section2 from "../home/Section2";
import { useLocation } from "react-router-dom";

function Home() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div className="w-full">
      <Section1 />
      <Section2 />
      <Footer />
    </div>
  );
}

export default Home;
