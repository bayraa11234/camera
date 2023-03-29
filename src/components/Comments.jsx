import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
const userData = [
  {
    name: "Savannah Nguyen",
    imgUrl: "comment/user1.png",
    description:
      "Lorem ipsum dolor sit amet consectetur. Nec sit enim tellus faucibus bibendum ullamcorper. Phasellus tristique aenean at lorem sed scelerisque.",
  },
  {
    name: "Esther Howard",
    imgUrl: "comment/user2.png",
    description:
      "Lorem ipsum dolor sit amet consectetur. Nec sit enim tellus faucibus bibendum ullamcorper. Phasellus tristique aenean at lorem sed scelerisque.",
  },
  {
    name: "Esther Howard",
    imgUrl: "comment/user3.png",
    description:
      "Lorem ipsum dolor sit amet consectetur. Nec sit enim tellus faucibus bibendum ullamcorper. Phasellus tristique aenean at lorem sed scelerisque.",
  },
  {
    name: "Savannah Nguyen",
    imgUrl: "comment/user1.png",
    description:
      "Lorem ipsum dolor sit amet consectetur. Nec sit enim tellus faucibus bibendum ullamcorper. Phasellus tristique aenean at lorem sed scelerisque.",
  },
  {
    name: "Esther Howard",
    imgUrl: "comment/user2.png",
    description:
      "Lorem ipsum dolor sit amet consectetur. Nec sit enim tellus faucibus bibendum ullamcorper. Phasellus tristique aenean at lorem sed scelerisque.",
  },
  {
    name: "Esther Howard",
    imgUrl: "comment/user3.png",
    description:
      "Lorem ipsum dolor sit amet consectetur. Nec sit enim tellus faucibus bibendum ullamcorper. Phasellus tristique aenean at lorem sed scelerisque.",
  },
];

export default function Comments() {
  const user = userData.map((data) => (
    <div className="card" style={{ padding: "10px", margin: "20px" }}>
      <div className="d-flex align-items-center ">
        <img src={data.imgUrl} alt="image" />
        <h5 style={{ color: "#003F62", marginLeft: "1em" }}>{data.name}</h5>
      </div>
      <div
        style={{
          backgroundColor: "#E2F4FF",
          borderRadius: "20px",
          margin: "10px",
          padding: "10px",
          color: "#003F62",
        }}
      >
        {data.description}
      </div>
    </div>
  ));

  return (
    <div>
      <AliceCarousel
        autoPlay
        infinite
        autoPlayInterval="5000"
        mouseTracking
        items={user}
        responsive={{ 0: { items: 3 } }}
        disableButtonsControls
        // disableDotsControls
      />
    </div>
  );
}
