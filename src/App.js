import logo from "./logo.svg";
import "./App.css";
import NavTop from "./components/NavTop";
import Home from "./pages/home";
import Login from "./pages/login";
import NotFound from "./pages/notfound";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Listings from "./pages/listings";
import Nhap from "./pages/nhap";

function App() {
  return (
    <>
      <NavTop />
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="listings" element={<Listings />} />
        <Route path="/login" element={<Login />} />
        <Route path="/nhap" element={<Nhap />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
