import './HotelInfo.css';
import HotelInfoReview from '../../img/reviewhotel.svg';
import redstar from '../../img/redstar.svg';
import { Link } from 'react-router-dom';

function HotelInfo() {
  return (
    <section className="hotel-info">
      <div className="hotel-info-container">
        <div className="hotel-info-img-all">
          <div className="hotel-info-img-pv">
            <img src="https://via.placeholder.com/680x450" alt="img-pv" />
          </div>
          <div className="hotel-info-img-pv2">
            <img src="https://via.placeholder.com/408x285" alt="img-more" />
            <div className="hotel-info-img-more">
              <img src="https://via.placeholder.com/200x150" alt="img-more" />
              <img src="https://via.placeholder.com/200x150" alt="img-more" />
            </div>
          </div>
        </div>
        <div className="hotel-info-header">
          <div className="hotel-info-title">
            <p className="hotel-info-name">Holiday Inn Resort</p>
            <p className="hotel-info-place">Mobor,Cavelossim,Goa</p>
          </div>
          <div className="hotel-info-price-btn-wrap">
            <Link to="/review-hotel">
              <button className="hotel-info-price-btn">
                Price Starting from 1,000 BAHT
              </button>
            </Link>
          </div>
        </div>
        <div className="hotel-info-booking">
          <div className="hotel-info-booking-item">
            <div className="hotel-info-booking-img">
              <img src="https://via.placeholder.com/175x145" alt="img" />
            </div>
            <div className="hotel-info-booking-detail">
              <p className="hotel-info-booking-title">Deluxe Room</p>
              <p className="hotel-info-booking-price">1,500 BAHT/night</p>
            </div>
            <div className="hotel-info-booking-btn-wrap">
              <button className="hotel-info-booking-btn">Book Now</button>
            </div>
          </div>
          <div className="hotel-info-booking-item">
            <div className="hotel-info-booking-img">
              <img src="https://via.placeholder.com/175x145" alt="img" />
            </div>
            <div className="hotel-info-booking-detail">
              <p className="hotel-info-booking-title">Deluxe Room</p>
              <p className="hotel-info-booking-price">1,500 BAHT/night</p>
            </div>
            <div className="hotel-info-booking-btn-wrap">
              <button className="hotel-info-booking-btn">Book Now</button>
            </div>
          </div>
        </div>
      </div>
      <div className="hotel-info-review">
        <div className="hotel-info-review-container">
          <div className="hotel-info-review-img">
            <img src={HotelInfoReview} alt="reviewhotel" />
          </div>
          <div className="hotel-info-review-dialog">
            <img src={redstar} alt="redstar" />
            <p className="hotel-info-review-text">
              This property is in highly demand today.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HotelInfo;
