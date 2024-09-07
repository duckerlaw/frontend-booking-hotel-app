import './Hotels.css';
import Sidebar from '../components/sidebar/Sidebar';
import SearchFilter from '../components/search/SearchFilter';
import { AiOutlineLeft } from 'react-icons/ai';
import HotelCard from '../components/content/HotelCard';
import Recommended from '../components/remommended/Recommended';
import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

function ResultHotel() {
  const location = useLocation();
  const query = location.state?.query;
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    const fetchSearch = async () => {
      try {
        const data = await fetch(
          `http://localhost:3000/result?search_query=${query}`,
        );
        const json = await data.json();
        setSearchResult(json);
        // console.log(json);
      } catch (error) {
        console.error('Error fetching search results:', error);
      }
    };

    if (query) {
      fetchSearch();
    } else {
      const allSearch = async () => {
        try {
          const data = await fetch(
            `http://localhost:3000/`,
          );
          const json = await data.json();
          setSearchResult(json);
          console.log(json);
        } catch (error) {
          console.error('Error fetching search results:', error);
        }
      };
      allSearch();
    }
  }, [query]);

  console.log(query);  

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
        <HotelCard result={searchResult} />
        <Recommended />
      </div>
    </section>
  );
}

export default ResultHotel;
