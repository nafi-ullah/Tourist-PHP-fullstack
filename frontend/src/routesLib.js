import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./screens/HomePage";
import LoginPage from "./screens/LoginPage";





function RoutesLib() {
 


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
        
          {/* <Route path="/ai" element={<AIPage />} />
          <Route path="/room" element={<FriendsPage />} />
          <Route path="/lobby" element={<Lobby />} />
          <Route path="/multiplayer" element={<FriensGame />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default RoutesLib;