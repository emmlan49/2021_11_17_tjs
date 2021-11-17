import React from "react";
// import logo from './logo.svg';

import "./App.css";
import Button from "./components/Button/Button";

function App() {
  return (
    <div className="App">
      <Button text="Ok" onButtonClicked={(arg) => {}} />
      <Button
        text="Cancel"
        onButtonClicked={(arg) => {
          console.log("Clic sur le bouton OK");
        }}
        bgColor="tomato"
      />
      <Button text="Ne pas cliquer ICI" onButtonClicked={(arg) => {}} />
      <Button
        text="Je sais que tu vas quand même cliquer"
        onButtonClicked={(arg) => {}}
      />
    </div>
  );
}

export default App;
