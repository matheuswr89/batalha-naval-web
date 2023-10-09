import { BrowserRouter, Route, Routes } from "react-router-dom";
import io from "socket.io-client";
import GenerateBoard from "../pages/GenerateBoard";
import Home from "../pages/Home";
import Loading from "../pages/Loading";
import StartGame from "../pages/StartGame";

const AppRoute = () => {
  const socket = io("https://batalha-naval-65b41af002f7.herokuapp.com/");

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home socket={socket} />} />
        <Route path="/board" element={<GenerateBoard socket={socket} />} />
        <Route path="/game" element={<StartGame socket={socket} />} />
        <Route path="/loading" element={<Loading socket={socket} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoute;
