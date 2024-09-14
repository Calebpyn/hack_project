import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import { AuroraBackground } from "./components/ui/aurora-background";
import Navbar from "./components/common/Navbar";

function App() {
  return (
    <HashRouter>
      <AuroraBackground
        children={
          <div className="w-full h-screen overflow-y-auto relative pt-[100px]">
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </div>
        }
      />
    </HashRouter>
  );
}

export default App;
