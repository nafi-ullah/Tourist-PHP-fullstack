import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./screens/HomePage";
import LoginPage from "./screens/LoginPage";
import Dashboard from "./screens/Dashboard";
import ProfileEditScren from "./screens/ProfileEditScren";
import BlogPostDetails from "./screens/BlogPostDetails";





function RoutesLib() {
 


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<ProfileEditScren />} />
          <Route path="/post/:postid" element={<BlogPostDetails />} />
       
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default RoutesLib;