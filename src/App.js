import './App.css';
import Banner from './components/Home/Banner';
import ConsumerElect from './components/Home/ConsumerElect';
import ElectCardsDisplay from './components/Home/ElectCardsDisplay';
import MarketProductsDisplay from './components/Home/MarketProductsDisplay';
import MarketRegion from './components/Home/MarketRegion';
import Nav from './components/Navigations/Nav';
import Nav2 from './components/Navigations/Nav2';

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
      </>
    </div>
  );
}

export default App;
