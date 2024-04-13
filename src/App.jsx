import { useState } from "react";
import AddPlayerPage from "./pages/AddPlayerPage";
import TeamGalleryPage from "./pages/TeamGalleryPage";
import PlayerPage from "./pages/PlayerPage";
import UpdatePlayerPage from "./pages/UpdatePlayerPage";
import { Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<TeamGalleryPage />} />
        <Route path="/addplayer" element={<AddPlayerPage />} />
        <Route path="/players/:id" element={<PlayerPage />} />
        <Route path="/updateplayer/:id" element={<UpdatePlayerPage />} />
      </Routes>
    </>
  );
}

export default App;
