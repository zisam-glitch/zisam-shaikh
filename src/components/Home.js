import Typewriter from "typewriter-effect";

const Home = ({ dark }) => {
  return (
    <div className="orido_tm_hero orido_tm_section" id="home">
      <div className="container">
        <div className="content">
          <div className="details">
            <div className="short">
              <h3>
                zisam shaikh <img className="svg" src="img/svg/hi.svg" alt="" />
              </h3>
              <span className="job">
                <Typewriter
                  options={{
                    autoStart: true,
                    loop: true,
                    delay: 40,
                    strings: ["Frontend Developer", "Designer", "Mentor"],
                  }}
                />
              </span>
            </div>
            <div className="text">
              <p>
                Innovative, task-driven professional with 6+ years of experience
                in web design and development across diverse industries.
              </p>
            </div>
            <div className="buttons">
              <div className="orido_tm_boxed_button">
                <a className="anchor" href="tel:+8801996169888">
                  Say Hello{" "}
                  <img className="svg" src="img/svg/send.svg" alt="" />
                </a>
              </div>
              <div className="orido_tm_simple_button">
                <a className="line_effect anchor" href="#portfolio">
                  My Works{" "}
                  <img className="svg" src="img/svg/top-arrow.svg" alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="orido_tm_follow">
          <span>Follow me:</span>
          <ul>
            
            <li>
              <a href="https://www.linkedin.com/in/zisam-shaikh-2a2697290/"
              target="_blank"
              rel="noreferrer"
              >
                <img className="svg" src="img/svg/social/linkedin.svg" alt="" />
              </a>
            </li>
            <li>
              <a href="https://instagram.com/zisam_shaikh?igshid=OGQ5ZDc2ODk2ZA=="
              target="_blank"
              rel="noreferrer">
                <img
                  className="svg"
                  src="img/svg/social/instagarm.svg"
                  alt=""
                />
              </a>
            </li>
            
          </ul>
        </div>
      </div>
      <div className="orido_tm_down">
        <a className="anchor" href="#about">
          <img
            className="svg"
            src={`img/svg/${dark ? "down_button_light" : "down_button"}.svg`}
            alt=""
          />
        </a>
      </div>
      <div className="avatar">
        <div className="img">
          <img src={`img/hero/${dark ? 2 : 1}.jpg`} alt="" />
          <div className="video_button">
            <a
              className="popup-youtube"
              href="https://www.youtube.com/watch?v=7e90gBu4pas"
            >
              <img className="anim_circle" src="img/hero/welcome.png" alt="" />
              <img className="svg" src="img/svg/play.svg" alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
