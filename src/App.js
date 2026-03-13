import "./App.css";
import Games from "./pages/Games";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Team from "./pages/Team";
import BehindScene from "./pages/BehindScene";
import { Route, Routes } from "react-router-dom";
import ArticlePage from "./pages/ArticlePage";

function App() {
  return (
    <>
      <Navbar/>
      <div>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/games" element={<Games />}></Route>
          <Route path="/teamSilent" element={<Team />}></Route>
          <Route path="/bts" element={<BehindScene />}></Route>
          <Route path="/bts/:id" element={<ArticlePage />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
