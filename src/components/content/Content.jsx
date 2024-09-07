import rating from '../../img/rating.svg';
import allrating from '../../img/allrating.svg';
import icondescription from '../../img/icondescription.svg';
import './Content.css';

function Content() {
  return (
    <section className="content">
      <p className="recent-search">Recent Searches</p>
      <div className="content-main">
        <div className="content-container">
          <div className="content-img">
            <img
              src="https://s3-alpha-sig.figma.com/img/c2cf/664c/1f3b7304d6cc2b8b6ca187ee4bb55991?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gn4j4lRgSqV0JuJN06hoI8cqY6KV-AHEkkLhyGKAFqzq-VeQsd5pwwmF4yOoMHA9tRdsQ6IIZxfja86HGBUvaS9ORWc12LVP975kKEWw2i9ipVU3dgCuC1rJZT35rGx0tK2Mi5YrcnQJZSd4lCAXWdTdN96hR~2qW9Q5dqE7k8~2jWIyMOVIl8mBGBZvDSyqZFU9T0budsYMad~NqV6PpTMVkkOKiCEEVqR84qb0y2IlFS2w6TihiMh9QKQEGITXcDCR2V42-fagKt1ckriYOc3t2l1CUamJPXBJ3nKMfLx653ywy~atEwiJMkbVaN3nGMPEwqk4RLs9HCz-lW3mTQ__"
              alt="img"
            />
          </div>
          <div className="content-description">
            <p className="content-description-head">Hotel JW Marriott</p>
            <img src={rating} alt="rating" />
            <img src={allrating} alt="allrating" />
            <img src={icondescription} alt="icondescription" />
            <p className="content-description-price">1,000/night</p>
          </div>
          <div className="content-btnwrap">
            <button className="content-btn">Book Now</button>
          </div>
        </div>
      </div>
    </section>
    
  );
}

export default Content;
