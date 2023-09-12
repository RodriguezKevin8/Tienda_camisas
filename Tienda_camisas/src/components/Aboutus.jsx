import './Dos.css';
import imagen from "../../public/img/Zelda.jpeg";

function Dos() {
  return (
    <div>
      <h1>About Us</h1>
      <div className="contenedor">
            <div className="contenedor__imagen">
              <img src={imagen} alt="imagen"/>
            </div>            
            <div className="contenedor__texto">
            <p>Somos una tienda de camisas con una pasión por la moda y el estilo. Fundada en 1995, nuestra tienda se ha dedicado a proporcionar a nuestros clientes las camisas de mayor calidad y diseño.</p>

            <p>Nuestra misión es vestir a nuestros clientes con camisas que no solo sean elegantes y cómodas, sino también expresen su personalidad y estilo individual. Trabajamos con diseñadores de renombre para asegurarnos de que cada prenda sea una obra maestra de la moda.</p>

            <p>En Camisas Elegantes, creemos que la ropa no solo es una forma de cubrirse, sino una forma de expresarse. Queremos ayudarte a lucir y sentirte increíble en cada ocasión.</p>

            <p>Estamos comprometidos a utilizar materiales de alta calidad y prácticas de fabricación éticas en la creación de nuestras camisas. Cada detalle, desde la selección de telas hasta el acabado final, es cuidadosamente supervisado para garantizar la satisfacción de nuestros clientes.</p>

           </div>
        </div>
    </div>
  );
}

export default Dos;
