import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Aboutus from "./components/Aboutus";
import Contactus from "./components/Contactus";
import Buy from "./components/Buy";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<Aboutus />} />
            <Route path="/contact" element={<Contactus />} />
            <Route path="/buy" element={<Buy />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
