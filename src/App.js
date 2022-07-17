import './App.css';
import Footer from './components/footer/Footer';
import Banner from './components/Home/Banner';
import ConsumerElect from './components/Home/ConsumerElect';
import ElectCardsDisplay from './components/Home/ElectCardsDisplay';
import MarketProductsDisplay from './components/Home/MarketProductsDisplay';
import MarketRegion from './components/Home/MarketRegion';
import Nav from './components/Navigations/Nav';
import Nav2 from './components/Navigations/Nav2';
import Products from './components/Product page/Products';

function App() {
  return (
    <div className='App'>
      <>
        <Nav />
        <Nav2 />
        <Banner />
        <MarketRegion />
        <MarketProductsDisplay />
        <ConsumerElect />
        <Footer />
        <Products />
      </>
    </div>
  );
}

export default App;
