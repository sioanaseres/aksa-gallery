import css from "./styles/app.module.scss";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Offer from "./components/offer/Offer";
import Space from "./components/space/Space";
import Gallery from "./components/gallery/Gallery";
import Reviews from "./components/reviews/Reviews";
import Fees from "./components/fees/Fees";
import Footer from "./components/footer/Footer";
import HotOffer from "./components/hotOffer/HotOffer";

function App() {
  return (
    <div className={`bg-primary ${css.container}`}>
      <Header />
      <Hero />
      <Offer />
      {/* <HotOffer /> */}
      <Space />
      <Gallery />
      <Reviews />
      <Fees />
      <Footer />
    </div>
  );
}

export default App;
