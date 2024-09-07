import { Link } from 'react-router-dom';
import './TakeTour.css'
import { CgAirplane } from "react-icons/cg";

function TakeTour() {
  return (
    <section className="taketour">
      <div className="taketour-container">      
        <div className="taketour-overlay"></div>
        <div className="taketour-plane-icon"><CgAirplane /></div>
        <div className="taketour-main">
          <p className="taketour-header">Incredible India</p>
          <p className="taketour-description">“For where thy treasure is,<br/> here also will thy heart be.”</p>
          <Link to="/result"><button className="take-tour-btn">Take Tour</button></Link>
        </div>
      </div>
    </section>
  )
}

export default TakeTour;
