import { Fragment, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { projectSliderProps } from "../sliderProps";
import { dataImage } from "../utilits";
import DetailsPopup from "./popup/DetailsPopup";
const Projects = () => {
  useEffect(() => {
    dataImage();
  }, []);
  const [detailsPopup, setDetailsPopup] = useState(false);

  return (
    <Fragment>
      <DetailsPopup close={() => setDetailsPopup(false)} open={detailsPopup} />
      <div className="orido_tm_section" id="portfolio">
        <div className="orido_tm_portfolio">
          <div className="container">
            <div className="orido_tm_main_title">
              <h3>
                <span>
                  Look at my
                  <br />
                  recent projects
                </span>
              </h3>
            </div>
            <div className="portfolio_list">
              <Swiper
                {...projectSliderProps}
                className="owl-carousel gallery_zoom"
              >
                <SwiperSlide>
                  <div className="list_inner">
                    <div className="image">
                      <img src="img/thumbs/37-40.jpg" alt="" />
                      <div
                        className="main"
                        data-img-url="img/portfolio/4.jpg"
                      />
                    </div>
                    <div className="details">
                      <h3 className="title">
                        <span>Okalpha</span>
                      </h3>
                    </div>
                    <a
                      className="orido_tm_full_link details_link c-pointer"
                      onClick={() => setDetailsPopup(true)}
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <a href="https://www.mvemanagement.com/"
                  target="_blank">
                    <div className="list_inner">
                      <div className="image">
                        <img src="img/thumbs/37-40.jpg" alt="" />
                        <div
                          className="main"
                          data-img-url="img/portfolio/5.jpg"
                        />
                      </div>
                      <div className="details">
                        <h3 className="title">
                          <span>Margravine</span>
                        </h3>
                      </div>
                    </div>
                  </a>
                </SwiperSlide>
                <SwiperSlide>
                  <a href="https://superlink.me/"
                  target="_blank">
                    <div className="list_inner">
                      <div className="image">
                        <img src="img/thumbs/37-40.jpg" alt="" />
                        <div
                          className="main"
                          data-img-url="img/portfolio/3.jpg"
                        />
                      </div>
                      <div className="details">
                        <h3 className="title">
                          <span>Superlink</span>
                        </h3>
                      </div>
                    </div>
                  </a>
                </SwiperSlide>
                <SwiperSlide>
                  <a href="https://www.karoobioscience.com/"
                  target="_blank">
                    <div className="list_inner">
                      <div className="image">
                        <img src="img/thumbs/37-40.jpg" alt="" />
                        <div
                          className="main"
                          data-img-url="img/portfolio/2.jpg"
                        />
                      </div>
                      <div className="details">
                        <h3 className="title">
                          <span>Karoo Bioscience</span>
                        </h3>
                      </div>
                    </div>
                  </a>
                </SwiperSlide>
                <SwiperSlide>
                  <a href="https://www.ward.work/"
                  target="_blank">
                    <div className="list_inner">
                      <div className="image">
                        <img src="img/thumbs/37-40.jpg" alt="" />
                        <div
                          className="main"
                          data-img-url="img/portfolio/1.jpg"
                        />
                      </div>
                      <div className="details">
                        <h3 className="title">
                          <span>ward</span>
                        </h3>
                      </div>
                    </div>
                  </a>
                </SwiperSlide>
              </Swiper>
              <a className="prev_button" href="#">
                <img className="svg" src="img/svg/prev.svg" alt="" />
              </a>
              <a className="next_button" href="#">
                <img className="svg" src="img/svg/next.svg" alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default Projects;
