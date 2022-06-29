import logo from "./logo.svg";
import "./App.css";
import NavTop from "./components/NavTop";
import Home from "./pages/home";
import Login from "./pages/login";
import NotFound from "./pages/notfound";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Listings from "./pages/listings";
import Nhap from "./pages/nhap";
import Cases from "./pages/cases";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <NavTop />
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="listings" element={<Listings />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cases" element={<Cases />} />
          <Route path="/nhap" element={<Nhap />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </QueryClientProvider>
    </>
  );
}

export default App;
