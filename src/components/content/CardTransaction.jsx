// import { useEffect } from "react";
import { Link } from "react-router-dom"

function CardTransaction({card})  {

  // useEffect(() => {
       
  // },[card]);  

  return (
    <section>
      <div className="hotel-card-item">
            <div className="hotel-card-item-img">
              <img
                src={card.thumbnail_url}                
                alt="cardimg"
              />
              <div className="hotel-card-item-detail">
                <div className="hotel-card-item-description">
                  <p className="hotel-card-item-title">{card.hotel_name}</p>
                  <p className="hotel-card-item-price">
                    Price starts from {card.price_start}
                  </p>
                </div>
                <Link to="/hotel">
                  <button className="hotel-card-item-btn">View Details</button>
                </Link>
              </div>
            </div>
          </div>
    </section>
  )
}

export default CardTransaction;
