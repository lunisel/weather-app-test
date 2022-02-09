import { useState } from "react";
import { useEffect } from "react";
import "./App.css";
import Desktop from "./components/Desktop";
import Mobile from "./components/Mobile";

function App() {
  const [vw, setVw] = useState(0);

  useEffect(() => {
    const handleScreenSize = () => {
      setVw(window.innerWidth);
    };
    window.addEventListener("resize", handleScreenSize);

    handleScreenSize();

    return () => {
      window.removeEventListener("resize", handleScreenSize);
    };
  }, [vw]);

  return (
    <div className="App">
      {vw > 1000 ? <Desktop vw="Desktop" /> : <Mobile vw="Mobile" />}
    </div>
  );
}

export default App;
