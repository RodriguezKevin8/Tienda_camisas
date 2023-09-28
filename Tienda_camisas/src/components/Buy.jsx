import { useParams } from "react-router-dom";
import "../css/Buy.css";

const Buy = () => {
  const { valor, imagen, descripcion, marca } = useParams();

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
          <select id="size" className="product-select">
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
            className="product-quantity"
          />
          <button className="product-button">Añadir al carrito</button>
          <button className="product-button">Comprar</button>
        </div>
      </div>
    </div>
  );
};

export default Buy;
