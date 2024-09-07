import Content from '../components/content/Content';
import TakeTour from '../components/remommended/TakeTour';
import BookingForm from '../components/search/BookingForm';
import SearchFilter from '../components/search/SearchFilter';
import Sidebar from '../components/sidebar/Sidebar';

function Explore() {
  return (
    <section className="explore">
      <Sidebar />
      <SearchFilter />
      <BookingForm />
      <Content />      
      <TakeTour />
    </section>
  );
}

export default Explore;
