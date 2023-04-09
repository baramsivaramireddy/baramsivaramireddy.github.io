import {Routes , Route} from "react-router-dom"
import "./App.css"

import Home from "./components/home"

import GenderDetect  from "./components/genderdetector"

import AgeDetect from "./components/agedetector";
function App() {
  return (
      <>
      <Routes>

        <Route path="/" element={ <Home/>} />
        <Route path="/genderdetect" element={ <GenderDetect />} />
        <Route path="/Agedetect" element={ <AgeDetect/>} />

      </Routes>

      </>
  );
}

export default App;
