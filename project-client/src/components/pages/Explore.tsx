import { useEffect } from "react";
import Section1 from "../explore/Section1";
import Footer from "../common/Footer";
import { useLocation } from "react-router-dom";

function Explore() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div className="w-full">
      <Section1 />
      <Footer />
    </div>
  );
}

export default Explore;
