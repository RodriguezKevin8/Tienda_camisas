import { useParams } from "react-router-dom";
import { useState } from "react";
import "../css/Buy.css";

const Buy = ({carrito, setCarrito}) => {
  const { valor, imagen, descripcion, marca } = useParams();
  const [cantidadSeleccionada, setCantidadSeleccionada] = useState(1);
  const [tallaSeleccionada, setTallaSeleccionada] = useState('S'); 
  
  const agregarAlCarrito = () => {
    const nuevaCamiseta = {
      valor,
      imagen: decodeURIComponent(imagen),
      descripcion: decodeURIComponent(descripcion),
      marca,
      cantidad: cantidadSeleccionada,
      talla: tallaSeleccionada, // Agregar la talla al objeto
    };
    setCarrito([...carrito, nuevaCamiseta]);
  };

  return (
    <div className="product-container">
      <div className="product-image-container">
        <img
          src={decodeURIComponent(imagen)}
          alt={decodeURIComponent(descripcion)}
          className="product-image"
          style={{ width: "300px" }}
        />
      </div>
      <div className="product-info">
        <h2 className="product-title">{valor}</h2>
        <p className="product-description">{decodeURIComponent(descripcion)}</p>
        <p className="product-brand">Marca: {marca}</p>
        <div className="product-options">
          <label htmlFor="size">Talla:</label>
          <select id="size" className="product-select" value={tallaSeleccionada}
          onChange={(e) => setTallaSeleccionada(e.target.value)}>
            <option value="small">S</option>
            <option value="medium">M</option>
            <option value="large">L</option>
          </select>
          <label htmlFor="quantity">Cantidad:</label>
          <input
            type="number"
            id="quantity"
            min="1"
            defaultValue="1"
            value={cantidadSeleccionada}
            onChange={(e) => setCantidadSeleccionada(parseInt(e.target.value))}
            className="product-quantity"
          />
          <button className="product-button" onClick={agregarAlCarrito}>Añadir al carrito</button>
        </div>
      </div>
    </div>
  );
};

export default Buy
