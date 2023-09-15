import React from "react";
import "../components/contac.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

function ContactUs() {
  return (
    <div className="contact-page">
      <div className="container top-row">
        <div className="card">
          <FontAwesomeIcon icon={faMapMarkerAlt} size="3x" />
          <p>Nuestra oficina principal</p>
          <p>XFM2+2JX, By pass a Metapán y carretera Antigua a San Salvador, Santa Ana</p>
        </div>

        <div className="card">
          <FontAwesomeIcon icon={faPhone} size="3x" />
          <p>Número de teléfono</p>
          <p>+503 1234 5678</p>
        </div>

        <div className="card">
          <FontAwesomeIcon icon={faEnvelope} size="3x" />
          <p>Correo electrónico</p>
          <p>chacalito@catolica.edu.sv</p>
        </div>
      </div>

      <div className="container bottom-row">
        <div className="card contact-card">
          <h2>Datos de contacto</h2>
          <div className="contact-card-inputs">
            <div className="input-group">
              <input type="text" placeholder="Email" />
              <input type="text" placeholder="Name" />
            </div>
          </div>
          <textarea placeholder="Mensaje"></textarea>
          <button>Enviar</button>
        </div>

        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3871.5963402679567!2d-89.55097142418617!3d13.982616191906365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f62e6202f8eeca1%3A0x976b0fd1a95a4d8a!2sUniversidad%20Cat%C3%B3lica%20de%20El%20Salvador!5e0!3m2!1ses-419!2ssv!4v1694758406738!5m2!1ses-419!2ssv"
            width="600"
            height="450"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
