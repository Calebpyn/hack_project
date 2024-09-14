import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import { AuroraBackground } from "./components/ui/aurora-background";

function App() {
  return (
    <HashRouter>
      <div className="w-full h-screen overflow-y-auto">
        <AuroraBackground
          children={
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          }
        />
      </div>
    </HashRouter>
  );
}

export default App;
