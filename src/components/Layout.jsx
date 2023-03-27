import Header from "./Header/Header";
import Category from "./Section/Category";
import PopularProduct from "./Section/PopularProduct";
import Section from "./Section/Section";
import BigSell from "../aside/BigSell";
import SpecialProduct from "./Section/SpecialProduct";
import Free from "./Free";
import Comments from "./Comments";
import Company from "./Company";
import Latest from "./Latest";
import Footer from "./Footer/Footer";

function Layout() {
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

export default Layout;
