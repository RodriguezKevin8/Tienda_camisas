import { useState } from "react";
import "../css/Card.css";

const Card = ({ datos }) => {
  const [marcaSeleccionada, setMarcaSeleccionada] = useState(null);

  const handleMarcaChange = (event) => {
    setMarcaSeleccionada(event.target.value);
  };

  const tarjetas = [];
  for (let i = 0; i < datos.length; i += 5) {
    const bloque = datos.slice(i, i + 5);
    const tarjetasBloque = bloque.map((item, index) => {
      if (!marcaSeleccionada || item.marca === marcaSeleccionada) {
        return (
          <div key={index} className="col-md-2 container">
            <div className="card mx-3">
              <img
                src={item.imagen}
                className="card-img-top img-fluid"
                alt={item.descripcion}
              />
              <div className="card-body">
                <h5 className="card-title">{item.valor}</h5>
                <p className="card-text">{item.descripcion}</p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
        );
      }
      return null;
    });
    tarjetas.push(
      <div
        key={i / 5}
        className="row mb-3"
        style={{ justifyContent: "center" }}
      >
        {tarjetasBloque}
      </div>
    );
  }

  return (
    <div>
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
      <div className="">{tarjetas}</div>
    </div>
  );
};

export default Card;
