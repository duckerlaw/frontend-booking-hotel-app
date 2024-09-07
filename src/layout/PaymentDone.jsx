import './PaymentDone.css'
import { Link } from 'react-router-dom';
import BookingSuccess from '../img/BookingSuccess.svg';

function PaymentDone() {
  return (
    <section className="payment-done">
      <div className="payment-done-container">
        <img src={BookingSuccess} className="payment-done-img" alt="paymentdone" />
        <p className="payment-done-title">Booking Successfully completed</p>
        <p className="payment-done-description">Your trip schedule is ready,please check under profile.</p>
        <Link to="/"><button className="payment-done-btn">Home</button></Link>
      </div>
    </section>
  )
}

export default PaymentDone;
