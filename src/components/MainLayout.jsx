import Header from "./Header/Header";
import Footer from "./Footer/Footer";

export const MainLayout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};
