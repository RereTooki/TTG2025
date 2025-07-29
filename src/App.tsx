import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import TMCCard from "./components/TMCCard";
import { Analytics } from "@vercel/analytics/react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className=" overflow-hidden">
        <TMCCard />
        <Analytics />
      </div>
    </>
  );
}

export default App;
