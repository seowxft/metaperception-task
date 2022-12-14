import "./App.css";
import { Routes, Route } from "react-router-dom";

import StartPage from "./Components/StartPage";
import MetaPerTut from "./Components/MetaPerTut";
import MetaPerTask from "./Components/MetaPerTask";
import Bonus from "./Components/Bonus";
import Questionnaires from "./Components/Questionnaires";
import EndPage from "./Components/EndPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<StartPage />} />
      <Route path="MetaPerTut" element={<MetaPerTut />} />
      <Route path="MetaPerTask" element={<MetaPerTask />} />
      <Route path="Bonus" element={<Bonus />} />
      <Route path="Questionnaires" element={<Questionnaires />} />
      <Route path="End" element={<EndPage />} />
    </Routes>
  );
}

export default App;
