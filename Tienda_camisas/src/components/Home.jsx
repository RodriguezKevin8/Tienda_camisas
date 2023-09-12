import Card from "./Card";

function Home() {
  const datos = [
    {
      valor: "Item 1",
      imagen: "/img/cm1.jpg",
      descripcion: "Descripción del Item 1",
      marca: "champion",
    },
    {
      valor: "Item 2",
      imagen: "/img/cm2.jpg",
      descripcion: "Descripción del Item 2",
      marca: "champion",
    },
    {
      valor: "Item 3",
      imagen: "/img/cm3.jpg",
      descripcion: "Descripción del Item 2",
      marca: "champion",
    },
    {
      valor: "Item 4",
      imagen: "/img/cm4.jpg",
      descripcion: "Descripción del Item 2",
      marca: "champion",
    },
    {
      valor: "Item 5",
      imagen: "/img/cm5.jpg",
      descripcion: "Descripción del Item 2",
      marca: "champion",
    },
    {
      valor: "Item 6",
      imagen: "/img/acm1.jpg",
      descripcion: "Descripción del Item 2",
    },
    {
      valor: "Item 7",
      imagen: "/img/acm2.jpg",
      descripcion: "Descripción del Item 2",
      marca: "adidas",
    },
    {
      valor: "Item 8",
      imagen: "/img/acm3.jpg",
      descripcion: "Descripción del Item 2",
      marca: "adidas",
    },
    {
      valor: "Item 9",
      imagen: "/img/acm4.jpg",
      descripcion: "Descripción del Item 2",
      marca: "adidas",
    },
    {
      valor: "Item 10",
      imagen: "/img/acm5.jpg",
      descripcion: "Descripción del Item 2",
      marca: "adidas",
    },
    {
      valor: "Item 11",
      imagen: "/img/ncm1.jpg",
      descripcion: "Descripción del Item 2",
      marca: "nike",
    },
    {
      valor: "Item 12",
      imagen: "/img/ncm2.jpg",
      descripcion: "Descripción del Item 2",
      marca: "nike",
    },
    {
      valor: "Item 13",
      imagen: "/img/ncm3.jpg",
      descripcion: "Descripción del Item 2",
      marca: "nike",
    },
    {
      valor: "Item 14",
      imagen: "/img/ncm4.jpg",
      descripcion: "Descripción del Item 2",
      marca: "nike",
    },
    {
      valor: "Item 15",
      imagen: "/img/ncm5.jpg",
      descripcion: "Descripción del Item 2",
      marca: "nike",
    },
  ];

  return (
    <div>
      <div className=" text-center">
        <h2 className="letter">Encuentra tu estilo</h2>
        <br />
        <p className="text-center let-init">
          En ##, la moda encuentra su hogar. Nos enorgullecemos de ofrecerte una
          experiencia de compra excepcional donde la elegancia y la comodidad se
          fusionan en cada prenda que exhibimos.
        </p>
        <p className="text-center let-init">
          Nuestra tienda es un paraíso para los amantes de las camisetas, donde
          la calidad y la moda se fusionan en cada prenda que exhibimos. Te
          brindamos una selección diversa de camisetas que van desde estilos
          casuales y cómodos hasta diseños únicos y vanguardistas.
        </p>
      </div>
      <Card datos={datos} />
    </div>
  );
}

export default Home;
