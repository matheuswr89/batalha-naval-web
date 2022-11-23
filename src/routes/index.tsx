import { BrowserRouter, Route, Routes } from "react-router-dom";
import GenerateBoard from "../pages/GenerateBoard";
import Home from "../pages/Home";
import StartGame from "../pages/StartGame";

const AppRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/board" element={<GenerateBoard />} />
        <Route path="/game" element={<StartGame />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoute;
