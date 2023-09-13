import { useParams } from "react-router-dom";

const Buy = () => {
  let { valor, imagen, descripcion, marca } = useParams();

  console.log(valor, imagen);
  return (
    <div>
      <h2>Detalles del Producto</h2>
      <p>Valor: {valor}</p>
      <p>Imagen: {imagen}</p>
      <p>Descripción: {descripcion}</p>
      <p>Marca: {marca}</p>
    </div>
  );
};

export default Buy;
