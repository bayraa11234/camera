import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const userData = [
  {
    date: "22 oct 2021",
    name: "Who avoids a pain that produces?",
    imgUrl: "airpod.png",
    description:
      "Lorem ipsum dolor sit amet consectetur. Nec sit enim tellus faucibus bibendum ullamcorper. Phasellus tristique aenean at lorem sed scelerisque.",
    plus: "By spacing tech",
  },
  {
    date: "22 oct 2021",
    name: "Who avoids a pain that produces?",
    imgUrl: "Bass.png",
    description:
      "Lorem ipsum dolor sit amet consectetur. Nec sit enim tellus faucibus bibendum ullamcorper. Phasellus tristique aenean at lorem sed scelerisque.",
    plus: "By spacing tech",
  },
  {
    date: "22 oct 2021",
    name: "Who avoids a pain that produces?",
    imgUrl: "airpod.png",
    description:
      "Lorem ipsum dolor sit amet consectetur. Nec sit enim tellus faucibus bibendum ullamcorper. Phasellus tristique aenean at lorem sed scelerisque.",
    plus: "By spacing tech",
  },
  {
    date: "22 oct 2021",
    name: "Who avoids a pain that produces?",
    imgUrl: "Bass.png",
    description:
      "Lorem ipsum dolor sit amet consectetur. Nec sit enim tellus faucibus bibendum ullamcorper. Phasellus tristique aenean at lorem sed scelerisque.",
    plus: "By spacing tech",
  },
  {
    date: "22 oct 2021",
    name: "Who avoids a pain that produces?",
    imgUrl: "airpod.png",
    description:
      "Lorem ipsum dolor sit amet consectetur. Nec sit enim tellus faucibus bibendum ullamcorper. Phasellus tristique aenean at lorem sed scelerisque.",
    plus: "By spacing tech",
  },
  {
    date: "22 oct 2021",
    name: "Who avoids a pain that produces?",
    imgUrl: "Bass.png",
    description:
      "Lorem ipsum dolor sit amet consectetur. Nec sit enim tellus faucibus bibendum ullamcorper. Phasellus tristique aenean at lorem sed scelerisque.",
    plus: "By spacing tech",
  },
];
export default function Latest() {
  const user = userData.map((data) => (
    <div className="card" style={{ padding: "10px", margin: "20px" }}>
      <div className="d-flex align-items-center ">
        <img src={data.imgUrl} alt="image" />
        <div style={{ margin: "20px" }}>
          <div
            style={{
              border: "1px solid black",
              borderRadius: "10px",
              textAlign: "center",
              maxWidth: "100px",
              color: "#003F62",
              marginBottom: "10px",
            }}
          >
            {data.date}
          </div>
          <h5 style={{ color: "#003F62" }}>{data.name}</h5>
          <div
            style={{
              borderRadius: "20px",
              padding: "10px",
              color: "#003F62",
            }}
          >
            {data.description}
          </div>
        </div>
      </div>
    </div>
  ));
  return (
    <div>
      <div className="d-flex justify-content-between">
        <h4>Latest news</h4>
        <p>view all</p>
      </div>
      <div>
        <AliceCarousel
          autoPlay
          infinite
          autoPlayInterval="3000"
          mouseTracking
          items={user}
          responsive={{ 0: { items: 2 } }}
          disableButtonsControls
          //   disableDotsControls
        />
      </div>
    </div>
  );
}
