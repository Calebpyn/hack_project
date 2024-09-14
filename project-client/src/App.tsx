import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";

function App() {
  return (
    <HashRouter>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
