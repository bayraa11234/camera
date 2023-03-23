// import Header from "./components/Header/Header";
// import Category from "./components/Section/Category";
// import PopularProduct from "./components/Section/PopularProduct";
// import Section from "./components/Section/Section";
import { Routes, Route } from "react-router-dom";
// import BigSell from "./aside/BigSell";
// import SpecialProduct from "./components/Section/SpecialProduct";
// import Free from "./components/Free";
// import Comments from "./components/Comments";
// import Company from "./components/Company";
// import Latest from "./components/Latest";
// import Footer from "./components/Footer/Footer";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import Layout from "./components/Layout";
import Detail from "./components/Detail/Detail";

function App() {
  return (
    <>
      {/* <Header />
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
      <Footer /> */}
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/detail" element={<Detail />} />
      </Routes>
    </>
  );
}

export default App;
