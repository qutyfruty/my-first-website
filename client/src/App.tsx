import { useEffect, useState } from "react";
import { BackendClass } from "@genezio-sdk/workshop1";
import "./App.css";

type LocationApiResponse = {
  country?: string;
  regionName?: string;
  city?: string;
};

export default function App() {
  const [location, setLocation] = useState<LocationApiResponse>({});
  const [cats, setCats] = useState("");
  const [buttonColor1, setButtonColor1] = useState("black");
  const [buttonColor2, setButtonColor2] = useState("black");
  const [buttonColor3, setButtonColor3] = useState("black");

  const colorsArray = ["red", "blue", "yellow", "green", "purple", "orange"];

  async function CallLocationApi() {
    const res = await BackendClass.handleCall();
    setLocation(res);
  }

  async function CallCatsApi() {
    const res = await BackendClass.handleCats();
    setCats(res);
  }

  useEffect(() => {
    CallCatsApi();
  }, []);

  const changeButton1 = () => {
    setButtonColor1("green");
  };

  const changeButton2 = () => {
    const randomIndex = Math.floor(Math.random() * colorsArray.length);
    setButtonColor2(colorsArray[randomIndex]);
  };

  const changeButton3 = () => {
    const currentColor = buttonColor3;
    let newColor = currentColor;
    while (newColor === currentColor) {
      newColor = colorsArray[Math.floor(Math.random() * colorsArray.length)];
    }
    setButtonColor3(newColor);
  };

  return (
    <div>
      <h1 style={{ marginBottom: "4rem" }}>Workshop 1</h1>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "1rem",
          marginBottom: "3rem",
        }}
      >
        <button
          onClick={changeButton1}
          style={{ backgroundColor: buttonColor1 }}
        >
          Change background
        </button>
        <button
          onClick={changeButton2}
          style={{ backgroundColor: buttonColor2 }}
        >
          Change from array
        </button>
        <button
          onClick={changeButton3}
          style={{ backgroundColor: buttonColor3 }}
        >
          Change random from array
        </button>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      ></div>
      <img width={250} height={250} src={cats} />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "1rem",
        }}
      >
        <button onClick={() => CallCatsApi()}> Change cat photo</button>
      </div>
      <div className="card">
        <button onClick={() => CallLocationApi()}>Call location api</button>
        <p>Country: {location.country || "no call"}</p>
        <p>Region: {location.regionName || "no call"}</p>
        <p>City: {location.city || "no call"}</p>
      </div>
    </div>
  );
}
