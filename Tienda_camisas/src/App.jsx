import { useState } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Aboutus from "./components/Aboutus";
import Contactus from "./components/Contactus";
import Buy from "./components/Buy";
import Carrito from "./components/Carrito";
import Marcas from "./components/Marcas"
function App() {
  const [carrito, setCarrito] = useState([]);
  return (    
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar carrito={carrito} />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<Aboutus />} />
            <Route path="/contact" element={<Contactus />} />
            <Route path="/marcas" element={<Marcas />} />
            <Route
              path="/buy/:valor/:imagen/:descripcion/:marca"
              element={<Buy carrito={carrito} setCarrito={setCarrito} />}
            />
            <Route path="/carrito" element={<Carrito carrito={carrito} setCarrito={setCarrito} />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
