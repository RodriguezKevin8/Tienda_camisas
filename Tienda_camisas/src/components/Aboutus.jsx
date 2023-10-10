import "./Dos.css";
import imagen from "../multimedia/about.jpg";
import { Padding } from "@mui/icons-material";

function Dos() {
  return (
    <div className="AboutUs">
      <div className="contenedor">
        <div className="contenedor__imagen">
          <img src={imagen} alt="imagen" />
        </div>
        <div className="contenedor__texto">
        <h1>About Us</h1>
          <p>
            Somos una tienda de camisas con una pasión por la moda y el estilo.
            Fundada en 1995, nuestra tienda se ha dedicado a proporcionar a
            nuestros clientes las camisas de mayor calidad y diseño.
          </p>

          <p>
            Nuestra misión es vestir a nuestros clientes con camisas que no solo
            sean elegantes y cómodas, sino también expresen su personalidad y
            estilo individual. Trabajamos con diseñadores de renombre para
            asegurarnos de que cada prenda sea una obra maestra de la moda.
          </p>

          <p>
            En Camisas Elegantes, creemos que la ropa no solo es una forma de
            cubrirse, sino una forma de expresarse. Queremos ayudarte a lucir y
            sentirte increíble en cada ocasión.
          </p>

          <p>
            Estamos comprometidos a utilizar materiales de alta calidad y
            prácticas de fabricación éticas en la creación de nuestras camisas.
            Cada detalle, desde la selección de telas hasta el acabado final, es
            cuidadosamente supervisado para garantizar la satisfacción de
            nuestros clientes.
          </p>
          <p>
            Cada una de nuestras camisas es una obra maestra en sí misma.
            Utilizamos solo los mejores algodones y linos para garantizar la
            comodidad y durabilidad de nuestras prendas. Nuestro equipo de
            artesanos expertos se asegura de que cada detalle cumpla con los
            estándares más exigentes.
          </p>
          <p>
            Nuestra colección combina la elegancia clásica con toques modernos.
            Desde camisas de vestir a patrones audaces para el fin de semana,
            cada diseño refleja nuestra dedicación a la moda atemporal y la
            innovación.
          </p>
        </div>
      </div>
      <div className="contenido">
        <div className="section">
            <h2 className="sectio__titulo">Ubicaciones Globales</h2>
            <p className="sectio__titulo">
              Con tiendas en Milán, Nueva York y París, estamos orgullosos de
              atender a una clientela internacional apasionada por la moda de
              calidad...
            </p>
        </div>

        <div className="section">
          <h2 className="sectio__titulo">Innovación en la Moda</h2>
          <p className="sectio__titulo">
            Nos enorgullecemos de estar a la vanguardia de las tendencias de
            moda para hombres...
          </p>
        </div>

        <div className="section">
          <h2 className="sectio__titulo">Primera Calidad</h2>
          <p className="sectio__titulo">
            Utilizamos solo los materiales más finos, seleccionados con
            meticulosidad para garantizar la comodidad y durabilidad...
          </p>
        </div>

        <div className="section">
          <h2 className="sectio__titulo">Preservando la Tradición</h2>
          <p className="sectio__titulo">
            Aunque abrazamos la innovación, nunca perdemos de vista las raíces
            de nuestra herencia italiana...
          </p>
        </div>
        </div>
      </div>
  );
}

export default Dos;
