import { useState } from 'react';
import './SearchFilter.css';
import { useNavigate } from 'react-router-dom';

function SearchFilter() {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate('/results', { state: { query } });
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <form className="search-box">
      <input
        type="text"
        className="search-input"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Search city , Country,Place for Travel advisory"
      />
    </form>
  );
}

export default SearchFilter;
