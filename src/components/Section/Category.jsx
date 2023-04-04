import axios from "axios";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { Link } from "react-router-dom";
const categoryData = [
  { id: 1, title: "Speaker", imgUrl: "images/speaker.png", items: 4 },
  { id: 2, title: "Desktop & Laptop", imgUrl: "images/laptop.png", items: 5 },
  { id: 3, title: "DSLR Camera", imgUrl: "images/camera.png", items: 6 },
  { id: 4, title: "Speaker", imgUrl: "images/speaker.png", items: 4 },
  { id: 5, title: "Desktop & Laptop", imgUrl: "images/laptop.png", items: 5 },
  { id: 6, title: "DSLR Camera", imgUrl: "images/camera.png", items: 6 },
];
function oneCart(id) {
  axios
    .get(`http://localhost:8000/plusCart/${id}`)
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.error(error);
    });
}

export default function Category() {
  const category = categoryData.map((data) => (
    <div className="carousel-container mt-5">
      <Link to={"detail/" + data.id}>
        {/* <img
          src={item.image}
          alt=""
          className="card-img-top"
          type="button"
         
        /> */}
        <div className="category-card d-flex" onClick={() => oneCart(data.id)}>
          <div className="card-img-container">
            <img src={data.imgUrl} alt="image" />
          </div>
          <div className="category-text text-center">
            <div className="title">{data.title}</div>
            <div className="item text-center">({data.items} items)</div>
          </div>
        </div>
      </Link>
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
