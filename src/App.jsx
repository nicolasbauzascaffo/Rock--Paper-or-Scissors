import "./App.css";
import Buttons from "./components/buttons";
import Points from "./components/points";
import { useState,useEffect } from "react";

function App() {

  const [points, setpoints] = useState(0);

  return (
    <div className="main">
      <Points className="points" points={points} setpoints={setpoints} />
      <Buttons className='buttons' points={points} setpoints={setpoints} />
    </div>
  );
}

export default App;
