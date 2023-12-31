import { Link, Outlet } from "react-router-dom";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import logo from "../multimedia/logo.svg"
import "../css/navbar.css"

function Navbar({ carrito }) {
  const cantidadEnCarrito = carrito.reduce((total, camisa) => total + camisa.cantidad, 0);
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg "
        style={{ backgroundColor: "#09090b" }}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img src={logo} alt="Logo" width="50px" height="50px" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link " aria-current="page" to={`/`}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={`/about`}>
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={`/contact`}>
                  Contact Us
                </Link>
              </li>
              <li className="nav-item icono">
                <Link className="nav-link" to={`/carrito`}>
                  <AddShoppingCartIcon />
                  <span>{cantidadEnCarrito}</span>
                </Link>
              </li>

            </ul>
          </div>
        </div>
      </nav>
      <Outlet />
    </div>
  );
}

export default Navbar;
