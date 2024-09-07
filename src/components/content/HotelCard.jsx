import './HotelCard.css';
import CardTransaction from './CardTransaction';

function HotelCard(result) {
  
  return (
    <section className="hotel-card">
      <p className="hotel-card-header">Best places to enjoy your stay</p>
      <div className="hotel-card-main">
        <div className="hotel-card-container">
          {result.result.map((hotel) => {
            return(<CardTransaction key={hotel.hotel_id} card={hotel} />);
          })}          
        </div>
      </div>
    </section>
  );
}

export default HotelCard;
