import Header from "./components/Header/Header";
import Carousell from "./components/Section/Carousel";
import Section from "./components/Section/Section";
import BigSell from "./aside/BigSell";

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <Section />
        <Carousell />
        <BigSell />
      </div>
      <h1>hello</h1>
    </>
  );
}

export default App;
