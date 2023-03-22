import Header from "./components/Header/Header";
import Category from "./components/Section/Category";
import PopularProduct from "./components/Section/PopularProduct";
import Section from "./components/Section/Section";

import BigSell from "./aside/BigSell";
import SpecialProduct from "./components/Section/SpecialProduct";
import Free from "./components/Free";
import Comments from "./components/Comments";
import Company from "./components/Company";
import Latest from "./components/Latest";
import Footer from "./components/Footer/Footer";

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
        <Free />
        <Comments />
        <Company />
        <Latest />
      </div>
      <Footer />
    </>
  );
}

export default App;
