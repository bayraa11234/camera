export default function BigSell() {
  return (
    <>
      <div
        className="BigSell my-5"
        style={{ backgroundImage: `url(${"/dell.png"})`, borderRadius: "20px" }}
      >
        <div
          className="row d-flex align-items-center text-center"
          style={{ height: "417px" }}
        >
          <div className="col-7"></div>
          <div className="col-5 d-flex justify-content-center align-items-center">
            <div>
              <button className="BigSell-btn">New laptop</button>
              <h1 style={{ color: "#2E8FC5" }} className="my-3">
                Sale up to 50% off
              </h1>
              <h4 style={{ color: "#fff" }}>12 inch hd display</h4>
              <button className=" BigSell-btn">Shop now</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
