import React from "react";
import PublicImage from "../../utils/PublicImage";
import { SiGoogle, SiFacebook, SiInstagram, SiTwitter } from "react-icons/si";

const footerItems = [
  {
    ul: "Find product",
    li1: "Brownze arnold ",
    li2: "Chronograph blue ",
    li3: "Smart phones ",
    li4: "Automatic watch ",
    li5: "Hair straighteners ",
  },
  {
    ul: "Get help",
    li1: "About us ",
    li2: "Contuct us",
    li3: "Return policy",
    li4: "Privacy policy",
    li5: "Payment policy",
  },
  {
    ul: "About us",
    li1: "News",
    li2: "Service",
    li3: "Our policy",
    li4: "Customer care",
    li5: "Faq's",
  },
];
export default function Footer() {
  return (
    <div style={{ backgroundColor: "#E2F4FF", paddingTop: "20px" }}>
      <div className="container">
        <div
          className="d-flex justify-content-evenly align-items-center"
          style={{
            backgroundColor: "#fff",
            borderRadius: "20px",
            padding: "20px 30px",
          }}
        >
          <h2>Subscribe newsletter</h2>
          <div className="d-flex align-items-center">
            <input
              type="email"
              placeholder="Email address"
              style={{
                backgroundColor: "#EDA415",
                border: "none",
                color: "#fff",
                padding: "10px 30px",
                borderRadius: "20px",
                position: "relative",
              }}
            />
            <button
              style={{
                position: "absolute",
                zIndex: "2",
                border: "none",
                backgroundColor: "#EDA415",
                marginLeft: "200px",
                borderRadius: "20px",
              }}
            >
              <img src="./logos/send-2.png" alt="" />
            </button>
          </div>
          <div className="d-flex align-items-center" style={{ gap: "10px" }}>
            <img src="./logos/Vector.png" alt="" />
            <div>Call us 24/7 : (+62) 0123 567 789</div>
          </div>
        </div>
        <div className="row py-4">
          <div className="col-3">
            <PublicImage path="/logo-2.png" />
            <p
              style={{
                borderBottom: "1px solid black",
                maxWidth: "200px",
                color: "#1b5a7d",
                padding: "30px 0",
              }}
            >
              64 st james boulevard hoswick , ze2 7zj
            </p>
            <div className="d-flex justify-content-evenly fs-5">
              <SiGoogle />
              <SiFacebook />
              <SiInstagram />
              <SiTwitter />
            </div>
          </div>
          {footerItems.map((item) => (
            <div className="col-3">
              <h6 style={{ color: "color: #1b5a7d;" }}>{item.ul}</h6>
              <ul className="Footer-ul">
                <li>{item.li1}</li>
                <li>{item.li2}</li>
                <li>{item.li3}</li>
                <li>{item.li4}</li>
                <li>{item.li5}</li>
              </ul>
            </div>
          ))}
          {/* <div className="col-3">
            <h6>Find product</h6>
            <ul className="Footer-ul">
              <li>Brownze arnold</li>
              <li>Chronograph blue</li>
              <li>Smart phones</li>
              <li>Automatic watch</li>
              <li>Hair straighteners</li>
            </ul>
          </div>
          <div className="col-3">
            <p>Find product</p>
            <ul>
              <li>Brownze arnold</li>
              <li>Chronograph blue</li>
              <li>Smart phones</li>
              <li>Automatic watch</li>
              <li>Hair straighteners</li>
            </ul>
          </div>
          <div className="col-3">
            <p>Find product</p>
            <ul>
              <li>Brownze arnold</li>
              <li>Chronograph blue</li>
              <li>Smart phones</li>
              <li>Automatic watch</li>
              <li>Hair straighteners</li>
            </ul>
          </div> */}
        </div>
      </div>
    </div>
  );
}
