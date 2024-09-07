import './SearchFilter.css';
import { Link } from 'react-router-dom';

function BookingSearch() {
  return (
    <section className="booking-search">
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
          <Link to="/results">
            <button className="bookingform-search-btn">Search</button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default BookingSearch;
