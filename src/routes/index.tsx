import { BrowserRouter, Route, Routes } from "react-router-dom";
import GenerateBoard from "../pages/GenerateBoard";
import Home from "../pages/Home";

const AppRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/board" element={<GenerateBoard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoute;
