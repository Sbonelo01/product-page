import { Rating } from '@mui/material';
import './App.css';
import ShippingTime from './components/AddToBox/ShippingTime/ShippingTime';
import Badges from './components/InfoBox/Badges/Badges';
import Banner from './components/InfoBox/MarchExpo/Banner';
import OfferInfo from './components/InfoBox/MarchExpo/OfferInfo';
import PriceBox from './components/InfoBox/PriceBox/PriceBox';
import ProductOptions from './components/InfoBox/Products/ProductOptions';

function App() {
  return (
    <>
    <Banner />
    <div>
      <OfferInfo />
    </div>
    <div className="main">
      <ProductOptions />
    </div>
    </>
  );
}

export default App;
