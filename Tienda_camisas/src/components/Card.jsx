import { useState } from "react";
import { Link } from "react-router-dom";
import "../css/Card.css";

const Card = ({ datos }) => {
  const [marcaSeleccionada, setMarcaSeleccionada] = useState(null);

  const handleMarcaChange = (event) => {
    setMarcaSeleccionada(event.target.value);
  };

  const filteredDatos = !marcaSeleccionada
    ? datos
    : datos.filter((item) => item.marca === marcaSeleccionada);

  return (
    <div className="card-container">
      <select
        value={marcaSeleccionada}
        onChange={handleMarcaChange}
        className="form-select my-3 mx-3 ms-auto"
        style={{ width: "150px" }}
      >
        <option value="">Todas</option>
        <option value="champion">Champion</option>
        <option value="adidas">Adidas</option>
        <option value="nike">Nike</option>
      </select>
      <div className="card-grid">
        {filteredDatos.map((item, index) => (
          <div key={index} className="card">
            <img
              src={item.imagen}
              className="card-img-top img-fluid tama"
              alt={item.descripcion}
            />
            <div className="card-body">
              <h5 className="card-title">{item.valor}</h5>
              <p className="card-text">{item.descripcion}</p>
            </div>
            <div className="mt-auto mx-3 my-3">
              <Link
                to={`/buy?valor=${item.valor}&imagen=${item.imagen}&descripcion=${item.descripcion}&marca=${item.marca}`}
                className="btn btn-primary text-center"
              >
                Ver producto
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
