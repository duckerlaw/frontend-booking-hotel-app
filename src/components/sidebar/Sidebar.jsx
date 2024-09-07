import './Sidebar.css'
import logo from '../../img/sidebar1.svg';
import homeicon from '../../img/home.svg';
import exploreicon from '../../img/explore.svg';
import tripsicon from '../../img/trips.svg';
import profileicon from '../../img/profile.svg';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <section className="sidebar">
      <div className="sidebar-logo">
        <Link to="/">
          <img src={logo} alt="icon" />
        </Link>
      </div>
      <div className="sidebar-container">
      <div className="sidebar-item">
        <a href="#">
          <img src={homeicon} alt="icon" />
        </a>
      </div>
      <div className="sidebar-item">
        <a href="#">
          <img src={exploreicon} alt="icon" />
        </a>
      </div>
      <div className="sidebar-item">
        <a href="#">
          <img src={tripsicon} alt="icon" />
        </a>
      </div>
      <div className="sidebar-item">
        <a href="#">
          <img src={profileicon} alt="icon" />
        </a>
      </div>
      </div>
    </section>
  );
}

export default Sidebar;
