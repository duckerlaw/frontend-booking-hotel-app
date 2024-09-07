import './ReviewHotel.css';
import Sidebar from '../components/sidebar/Sidebar';
import { Link } from 'react-router-dom';
import { AiOutlineLeft } from 'react-icons/ai';
import SearchFilter from '../components/search/SearchFilter';
import BookingSearch from '../components/search/BookingSearch';
import ReviewMain from '../components/content/ReviewMain';

function ReviewHotel() {
  return (
    <section className="review-hotel">
      <div className="review-hotel-container">
        <Sidebar />
        <div className="explore-hotel-nav">
          <div className="explore-hotel-row">
            <div className="explore-hotel-back">
              <Link to="/hotel">
                <AiOutlineLeft />
              </Link>
            </div>
            <SearchFilter />
          </div>
          <div className="explore-hotel-bookingsearch">
            <BookingSearch />
          </div>
        </div>
        <ReviewMain />
      </div>
    </section>
  );
}

export default ReviewHotel;
