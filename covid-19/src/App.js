import React from 'react';
import Navigation from "./components/Navigation";
import Header from "./components/Header";
import Overview from "./components/Overview";
import Contagion from "./components/Contagion";
import Symptomps from "./components/Symptomps";
import WhatShouldWeDo from "./components/WhatShouldWeDo";
function App() {
  return (
    <>
      <Navigation/>
      <Header/>
      <Overview/>
      <Contagion/>
      <Symptomps/>
      <WhatShouldWeDo/>
    </>
  );
}

export default App;
