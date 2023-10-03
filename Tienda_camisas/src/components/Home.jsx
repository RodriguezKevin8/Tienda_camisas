
import "../components/home.css";
import Card from "./Card";
function Home() {

  const datos = [
    {
      valor: "Champion 1",
      imagen: "/img/cm1.jpg",
      descripcion: "Camiseta color negro",
      marca: "champion",
    },
    {
      valor: "Champion 2",
      imagen: "/img/cm2.jpg",
      descripcion: "Camiseta color rojo",
      marca: "champion",
    },
    {
      valor: "Champion 3",
      imagen: "/img/cm3.jpg",
      descripcion: "Camiseta color verde",
      marca: "champion",
    },
    {
      valor: "Champion 4",
      imagen: "/img/cm4.jpg",
      descripcion: "Camiseta color ocre",
      marca: "champion",
    },
    {
      valor: "Champion 5",
      imagen: "/img/cm5.jpg",
      descripcion: "Camiseta color naranja",
      marca: "champion",
    },
    {
      valor: "Adidas 1",
      imagen: "/img/acm1.jpg",
      descripcion: "Camiseta color rojo",
    },
    {
      valor: "Adidas 2",
      imagen: "/img/acm2.jpg",
      descripcion: "Camiseta color negro",
      marca: "adidas",
    },
    {
      valor: "Adidas 3",
      imagen: "/img/acm3.jpg",
      descripcion: "Camiseta color gris",
      marca: "adidas",
    },
    {
      valor: "Adidas 4",
      imagen: "/img/acm4.jpg",
      descripcion: "Camiseta color verde militar",
      marca: "adidas",
    },
    {
      valor: "Adidas 5",
      imagen: "/img/acm5.jpg",
      descripcion: "Camiseta color blanca",
      marca: "adidas",
    },
    {
      valor: "Nike 1",
      imagen: "/img/ncm1.jpg",
      descripcion: "Camiseta color negra",
      marca: "nike",
    },
    {
      valor: "Niken2",
      imagen: "/img/ncm2.jpg",
      descripcion: "Camiseta color roja",
      marca: "nike",
    },
    {
      valor: "Nike 3",
      imagen: "/img/ncm3.jpg",
      descripcion: "Camiseta color rosa",
      marca: "nike",
    },
    {
      valor: "Nike 4",
      imagen: "/img/ncm4.jpg",
      descripcion: "Camiseta color salmon",
      marca: "nike",
    },
    {
      valor: "Nike 5",
      imagen: "/img/ncm5.jpg",
      descripcion: "Camiseta color rosa fuerte",
      marca: "nike",
    },
  ];

  return (
    <div className="home_font">
      <div className="container text-center">
        <h2 className="letter pt-4">Encuentra tu estilo</h2>
        <br />
        <p className="text-center let-init">
          En JVCamisas, la moda encuentra su hogar. Nos enorgullecemos de
          ofrecerte una experiencia de compra excepcional donde la elegancia y
          la comodidad se fusionan en cada prenda que exhibimos.
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
