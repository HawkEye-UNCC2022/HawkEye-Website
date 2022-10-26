import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Personal from "./Pages/Personal"
import Fitness from './Pages/Fitness';
import Jumps from './Pages/Jumps';
import Training from './Pages/Training';
import PageNotFound from './Pages/PageNotFound';
import Marksmanship from './Pages/Marksmanship';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login/>} />
        <Route exact path="/personal" element={<Personal/>} />
        <Route exact path="/jumps" element={<Jumps/>} />
        <Route exact path="/fitness" element={<Fitness/>} />
        <Route exact path="/training" element={<Training/>} />
        <Route exact path="/marksmanship" element={<Marksmanship/>} />
        <Route exact path="*" element={<PageNotFound/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
