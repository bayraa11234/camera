import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
const categoryData = [
  {
    title: "Speaker",
    imgUrl: "images/speaker.png",
    items: 4,
  },
  {
    title: "Desktop & Laptop",
    imgUrl: "images/laptop.png",
    items: 5,
  },
  {
    title: "DSLR Camera",
    imgUrl: "images/camera.png",
    items: 6,
  },
  {
    title: "Speaker",
    imgUrl: "images/speaker.png",
    items: 4,
  },
  {
    title: "Desktop & Laptop",
    imgUrl: "images/laptop.png",
    items: 5,
  },
  {
    title: "DSLR Camera",
    imgUrl: "images/camera.png",
    items: 6,
  },
];

export default function Category() {
  const category = categoryData.map((data) => (
    <div className="carousel-container mt-5">
      <div className="category-card d-flex">
        <div className="card-img-container">
          <img src={data.imgUrl} alt="image" />
        </div>
        <div className="category-text text-center">
          <div className="title">{data.title}</div>
          <div className="item text-center">({data.items} items)</div>
        </div>
      </div>
    </div>
  ));

  return (
    <div>
      <AliceCarousel
        autoPlay
        infinite
        autoPlayInterval="3000"
        mouseTracking
        items={category}
        responsive={{ 0: { items: 3 } }}
        disableButtonsControls
        // disableDotsControls
      />
    </div>
  );
}
