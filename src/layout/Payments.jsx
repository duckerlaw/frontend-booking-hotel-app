import './Payments.css';
import Sidebar from '../components/sidebar/Sidebar';
import { Link } from 'react-router-dom';
import { AiOutlineLeft } from 'react-icons/ai';
import PaymentDetails from '../components/content/PaymentDetails';

function Payments() {
  return (
    <section className="payments">
      <div className="payments-container">
        <Sidebar />
        <div className="payments-main">
          <div className="payments-nav">
            <div className="payment-back">
              <Link to="/review-hotel">
                <AiOutlineLeft />
              </Link>
            </div>
          </div>
          <PaymentDetails />
        </div>
      </div>
    </section>
  );
}

export default Payments;
