import Card from "./Card";

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
      <h1>Hola a todos</h1>
      <Card datos={datos} />
    </div>
  );
}

export default Hola;
