import React from 'react';
import './styles/main-style.sass'
import Navigation from "./components/Navigation";
import Header from "./components/Header";
import Overview from "./components/Overview";
function App() {
  return (
    <>
      <Navigation/>
      <Header/>
      <Overview/>
    </>
  );
}

export default App;
