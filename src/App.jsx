import { Route, Routes } from 'react-router-dom';
import Explore from './layout/Explore';
import ExploreHotel from './layout/ExploreHotel';
import ReviewHotel from './layout/ReviewHotel';
import Payments from './layout/Payments';
import PaymentDone from './layout/PaymentDone';
import ResultHotel from './layout/ResultHotel';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Explore />} />        
        <Route path="/results" element={<ResultHotel />} />
        <Route path="/hotel" element={<ExploreHotel />} />
        <Route path="/review-hotel" element={<ReviewHotel />} />
        <Route path="/payment" element={<Payments />} />
        <Route path="/payment-done" element={<PaymentDone />} />
      </Routes>
    </>
  );
}

export default App;
