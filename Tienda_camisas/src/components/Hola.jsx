import Card from "./Card";
import Navbar from "./Navbar";

function Hola() {
  const datos = [
    {
      valor: "Item 1",
      imagen: "/img/cm1.jpg",
      descripcion: "Descripción del Item 1",
    },
    {
      valor: "Item 2",
      imagen: "/img/cm2.jpg",
      descripcion: "Descripción del Item 2",
    },
    {
      valor: "Item 2",
      imagen: "/img/cm3.jpg",
      descripcion: "Descripción del Item 2",
    },
    {
      valor: "Item 2",
      imagen: "/img/cm3.jpg",
      descripcion: "Descripción del Item 2",
    },
    {
      valor: "Item 2",
      imagen: "/img/cm3.jpg",
      descripcion: "Descripción del Item 2",
    },
  ];

  return (
    <div>
      <Navbar/>
      <Card datos={datos} />
    </div>
  );
}

export default Hola;
