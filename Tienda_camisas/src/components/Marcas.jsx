import React from "react";
import "../css/marcas.css";
import imagen1 from "../multimedia/nike.png";
import imagen2 from "../multimedia/puma.png";
import imagen3 from "../multimedia/adidas.png";
import imagen4 from "../multimedia/champion.png";

const Marcas = () => {
    return (
        <div className="marcas">
            <div className="texto">
                <h1 className="titulo">Marcas</h1>
                <div className="Container">
                    <p className="parrafo">Nuestras marcas asociadas son un elemento clave de nuestro éxito. Trabajamos con marcas de alta calidad que ofrecen productos y servicios que son relevantes para nuestro negocio. Estas marcas nos ayudan a llegar a nuevos clientes y a ofrecer una mejor experiencia a nuestros usuarios.</p>
                </div>
                <div className="imagenes-container">
                    <img className="imagen" src={imagen1} alt="Marca 1" />
                    <img className="imagen" src={imagen2} alt="Marca 2" />
                    <img className="imagen" src={imagen3} alt="Marca 3" />
                    <img className="imagen" src={imagen4} alt="Marca 4" />
                </div>
            </div>
        </div>
    );
};

export default Marcas;


