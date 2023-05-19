import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Menu from "./Component/Menu";
import Music from "./Component/Music";
import Pnf from "./Component/Pnf";
import Tracks from "./Component/Tracks";


function App() {
  return (
    <BrowserRouter>
    <Menu/>
    {/* route path and component */}
      <Routes>
        <Route path={`/`} element={<Music/>}/>
        <Route path={`/music`} element={<Music/>}/>
        <Route path={`/tracks/artist/:id`}element={<Tracks/>}/>
        <Route path={`/*`} element={<Pnf/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
