import Sidebar from '../components/sidebar/Sidebar';
import { Link } from 'react-router-dom';
import { AiOutlineLeft } from 'react-icons/ai';
import SearchFilter from '../components/search/SearchFilter';
import HotelInfo from '../components/content/HotelInfo';
import BookingSearch from '../components/search/BookingSearch';
import './ExploreHotel.css';

function ExploreHotel() {
  return (
    <section className="explore-hotel">
      <div className="explore-hotel-container">
        <Sidebar />
        <div className="explore-hotel-nav">
          <div className="explore-hotel-row">
            <div className="explore-hotel-back">
              <Link to="/results">
                <AiOutlineLeft />
              </Link>
            </div>
            <SearchFilter />
          </div>
          <div className="explore-hotel-bookingsearch">
            <BookingSearch />
          </div>
        </div>
        <HotelInfo />
      </div>
    </section>
  );
}

export default ExploreHotel;
