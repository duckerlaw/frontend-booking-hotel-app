import './PaymentDetails.css';
import DebitCard from '../../img/DebitCard.svg';
import UPI from '../../img/UPI.svg';
import PhonePay from '../../img/PhonePay.svg';
import NetBanking from '../../img/NetBanking.svg';
import CreditCard from '../../img/CreditCard.svg';
import { Link } from 'react-router-dom';

function PaymentDetails() {
  return (
    <section className="payment-details">
      <div className="payment-details-container">
        <div className="payment-details-type">
          <p className="payment-details-type-title">Payment Details</p>
          <div className="payment-detail-type-container">
            <img
              src={DebitCard}
              alt="typepayments"
              className="payment-details-type-icon"
            />
            <img
              src={UPI}
              alt="typepayments"
              className="payment-details-type-icon-use"
            />
            <img
              src={PhonePay}
              alt="typepayments"
              className="payment-details-type-icon"
            />
            <img
              src={NetBanking}
              alt="typepayments"
              className="payment-details-type-icon"
            />
            <img
              src={CreditCard}
              alt="typepayments"
              className="payment-details-type-icon"
            />
          </div>
        </div>
        <div className="payment-details-amount">
          <div className="payment-details-costttitle">
            <p>Base fare</p>
            <p>Total discount</p>
            <p>Price after discount</p>
            <p>Taxes & service fees</p>
            <p className="payment-details-allcost-title">Total Amount</p>
          </div>
          <div className="payment-details-costamount">
            <p>1,000.00</p>
            <p>0.00</p>
            <p>1,000.00</p>
            <p>140.00</p>
            <p className="payment-details-allcost-amount">1,140.00</p>
          </div>
        </div>
      </div>
      <div className="payment-details-amount-btn-wrap">
        <Link to="/payment-done">
          <button className="payment-details-amount-btn">Payment</button>
        </Link>
      </div>
    </section>
  );
}

export default PaymentDetails;
