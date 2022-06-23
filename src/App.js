import logo from "./logo.svg";
import "./App.css";
import NavTop from "./components/NavTop";
import Home from "./pages/home";
import Login from "./pages/login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Listings from "./pages/listings";

function App() {
  return (
    <>
      <NavTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="listings" element={<Listings />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
