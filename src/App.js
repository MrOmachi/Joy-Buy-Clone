import './App.css';
import Banner from './components/Home/Banner';
import MarketProductsDisplay from './components/Home/MarketProductsDisplay';
import MarketRegion from './components/Home/MarketRegion';
import MarketRproducts from './components/Home/MarketRproducts';
import Nav from './components/Navigations/Nav';
import Nav2 from './components/Navigations/Nav2';

function App() {
  return (
    <div className='App'>
      <>
        <Nav />
        <Nav2 />
        <Banner />
        <MarketProductsDisplay />
      </>
    </div>
  );
}

export default App;
