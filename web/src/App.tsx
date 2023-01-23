import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Habit } from "./components/Habit";
import './styles/global.css';

function App() {
  return (
    <>
      <h1>Hello</h1>
      <Habit completed={3}/>
      <Habit completed={10}/>
      <Habit completed={20}/>
      <Habit completed={30}/>
      <Habit completed={40}/>
      <Habit completed={50}/>
    </>
  );
}

export default App;
