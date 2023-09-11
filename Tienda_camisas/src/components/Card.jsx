const Card = ({ datos }) => {
  const tarjetas = [];
  for (let i = 0; i < datos.length; i += 5) {
    const bloque = datos.slice(i, i + 5);
    const tarjetasBloque = bloque.map((item, index) => (
      <div key={index} className="col-md-2 mb-3 mx-3">
        <div className="card mx-3" style={{ width: "15rem" }}>
          <img
            src={item.imagen}
            className="card-img-top"
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
    ));
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
  return <div>{tarjetas}</div>;
};
export default Card;
