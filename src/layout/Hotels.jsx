import './Hotels.css';
import Sidebar from '../components/sidebar/Sidebar';
import SearchFilter from '../components/search/SearchFilter';
import { AiOutlineLeft } from 'react-icons/ai';
import HotelCard from '../components/content/HotelCard';
import Recommended from '../components/remommended/Recommended';
import { Link } from 'react-router-dom';

function Hotels() {    

  return (
    <section className="hotels">
      <div className="hotels-container">
        <Sidebar />
        <div className="hotels-nav">
          <div className="hotels-nav-row">
            <div className="hotels-back">
              <Link to="/">
                <AiOutlineLeft />
              </Link>
            </div>
            <SearchFilter />
          </div>
          <div className="hotels-btn">
            <button className="hotels-sort-btn">Sort By</button>
            <button className="hotels-filter-btn">Filter</button>
          </div>
        </div>
        <HotelCard />
        <Recommended />
      </div>
    </section>
  );
}

export default Hotels;
