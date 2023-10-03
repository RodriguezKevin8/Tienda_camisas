import React from 'react';
import '../css/Carrito.css';

function Carrito({ carrito, setCarrito }) {
  const eliminarDelCarrito = (index) => {
    const nuevoCarrito = [...carrito];
    nuevoCarrito.splice(index, 1);
    setCarrito(nuevoCarrito);
  };

  return (
    <div className='centrado'>
      <h2>Carrito de compras</h2>
      {carrito.map((camisa, index) => (
        <div key={index} className='camisa'>
          <h3 className='camisa__titulo'>{camisa.valor}</h3>
          <div className='camisa__contenido'>
                <img src={camisa.imagen} alt={camisa.descripcion} style={{ width: '100px' }} className='camisa__img'/>
                <div className='camisa__detalle'>
                   <div>
                        <p>{camisa.descripcion}</p>
                        <p>Marca: {camisa.marca}</p>
                        <p>Cantidad: {camisa.cantidad}</p>
                        <p>Talla: {camisa.talla}</p> {/* Mostrar la talla */}
                   </div>
                    <button className='button' onClick={() => eliminarDelCarrito(index)}>Eliminar</button>
                </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Carrito;
