import Header from "./components/Header/Header";
import Category from "./components/Section/Category";
import PopularProduct from "./components/Section/PopularProduct";
import Section from "./components/Section/Section";

import BigSell from "./aside/BigSell";
import SpecialProduct from "./components/Section/SpecialProduct";

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <Section />
        <Category />
        <PopularProduct />
        <BigSell />
        <SpecialProduct />
      </div>
      <h1>hello</h1>
    </>
  );
}

export default App;
