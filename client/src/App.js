import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Personal from "./Pages/Personal"
import AEF from "./Pages/AEF"
import Projected from './Pages/Projected';
import Training from './Pages/Training';
import PageNotFound from './Pages/PageNotFound';
import Marksmanship from './Pages/Marksmanship';
import IssuedGear from './Pages/IssuedGear';
import Upload from './Pages/Upload';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login/>} />
        <Route exact path="/Login" element={<Login/>} />
        <Route exact path="/personal" element={<Personal/>} />
        <Route exact path="/AEF" element={<AEF/>} />
        <Route exact path="/projected" element={<Projected/>} />
        <Route exact path="/training" element={<Training/>} />
        <Route exact path="/marksmanship" element={<Marksmanship/>} />
        <Route exact path="/issuedgear" element={<IssuedGear/>} />
        <Route exact path="*" element={<PageNotFound/>} />
        <Route exact path="/upload" element={<Upload/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
