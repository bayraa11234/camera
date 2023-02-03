import Header from "./components/Header/Header";
import Carousel from "./components/Section/Carousel";
import Section from "./components/Section/Section";

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <Section />
        <Carousel />
      </div>
      <h1>hello</h1>
    </>
  );
}

export default App;
