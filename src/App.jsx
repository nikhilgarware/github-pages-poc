import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a target="_blank">
          <img
            src={
              "https://carbonminus-public-images.s3.ap-south-1.amazonaws.com/logos/White+with+tagline.png"
            }
            className="logo"
            alt="Vite logo"
          />
        </a>
      </div>
      <h1>Carbon Minus Implementation with help of GitPages</h1>
    </>
  );
}

export default App;
