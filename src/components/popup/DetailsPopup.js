import Popup from "./Popup";
const DetailsPopup = ({ open, close }) => {
  return (
    <Popup open={open} close={close}>
      <div className="popup_details">
        <div className="top_image">
          <img src="img/thumbs/4-2.jpg" alt="" />
          <div
            className="main"
            data-img-url="img/portfolio/4.jpg"
            style={{ backgroundImage: 'url("img/portfolio/4.jpg")' }}
          />
        </div>
        <div className="portfolio_main_title">
          <h3>Okalpha</h3>
          <span>
            <a href="#" onClick={(e) => e.preventDefault()}>
              Details
            </a>
          </span>
          <div />
        </div>
        <div className="main_details">
          <div className="textbox">
            <p>
              This project was a collaboration with Cape Town Design Agency
              MakeReign who designed the website.
            </p>
            <p>
              Being an animation studio, Okalpha had some very clear ideas for
              how the website should feel and what sort of interactions they
              wanted to see. They also wanted a CMS that was easy to use, and so
              I recommended Webflow as the website builder so that they could
              maintain their own website going forward really easily.
            </p>
          </div>
          <div className="detailbox">
            <ul>
              <li>
                <span className="first">Role</span>
                <span>Web Development</span>
              </li>
              <li>
                <span className="first">Responsibilities</span>
                <span>
                 Development, Custom CSS, SEO, Launch
                </span>
              </li>
              <li>
                <span className="first">URL</span>
                <span><a href="http://okalpha.co/">okalpha.co</a></span>
              </li>
            </ul>
          </div>
        </div>
        <div className="additional_images">
          <ul>
            <li>
              <div className="list_inner">
                <div className="my_image">
                  <img src="img/portfolio/d-1.png" alt="" />
                  <div className="main" data-img-url="img/portfolio/d-1.png" />
                </div>
              </div>
            </li>
            <li>
              <div className="list_inner">
                <div className="my_image">
                  <img src="img/thumbs/4-2.jpg" alt="" />
                  <div className="main" data-img-url="img/portfolio/d-2.jpg" />
                </div>
              </div>
            </li>
            <li>
              <div className="list_inner">
                <div className="my_image">
                  <img src="img/thumbs/4-2.jpg" alt="" />
                  <div className="main" data-img-url="img/portfolio/d-3.jpg" />
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </Popup>
  );
};
export default DetailsPopup;
