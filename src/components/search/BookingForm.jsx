import hotelicon from '../../img/hotel.svg';
import flighticon from '../../img/flight.svg';
import caricon from '../../img/car.svg';
import './SearchFilter.css';
import { Link } from 'react-router-dom';

function BookingForm() {
  return (
    <section className="bookingform">
      <p className="bookingform-header">What Are You Looking For?</p>
      <div className="bookingform-container">
        <div className="bookingform-option">
          <div className="bookingform-icon">
            <a href="#">
              <img src={hotelicon} alt="icon" />
            </a>
          </div>
          <div className="bookingform-icon">
            <a href="#">
              <img src={flighticon} alt="icon" />
            </a>
          </div>
          <div className="bookingform-icon">
            <a href="#">
              <img src={caricon} alt="icon" />
            </a>
          </div>
        </div>
        <div className="bookingform-section">
          <div className="bookingform-group">
            <input type="text" placeholder="Where are you going?" />
          </div>

          <div className="bookingform-date">
            <input type="date" value="" />
            <input type="date" value="" />
          </div>

          <div className="bookingform-group">
            <input type="text" placeholder="2 adult ,1 children - 1 room" />
          </div>

          <div className="bookingform-btnwrap">
            <Link to="/results"><button className="bookingform-search-btn">Search</button></Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BookingForm;
