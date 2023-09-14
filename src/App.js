import React from "react";
import Header from "./components/Header";
import Game from "./components/Game";
import Footer from "./components/Footer";
import './style.css'; 

function App() {
  return (
    <div>
      <Header score={0} nextWord={"dummy"} />
      <Game/>
      <Footer/>
    </div>
  );
}

export default App;
