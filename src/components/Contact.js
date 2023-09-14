const Contact = () => {
  return (
    <div className="orido_tm_section" id="contact">
      <div className="orido_tm_contact">
        <div className="container">
          <div className="infobox">
            <div className="video_button">
              <a
                className="popup-youtube"
                href="https://www.youtube.com/watch?v=7e90gBu4pas"
              >
                <img
                  className="anim_circle"
                  src="img/hero/welcome.png"
                  alt=""
                />
                <img className="svg" src="img/svg/play.svg" alt="" />
              </a>
            </div>
            <div className="text">
              <h3>{`Let's`} work together</h3>
              <p>
                Refine Your Website challenges the typical web design experience
                by having a proven process. One that results in a website for
                your business that is easy to use, functional, and effective.
              </p>
            </div>
            <div className="orido_tm_boxed_button">
              <a href="tel:+8801996169888">
                Say Hello <img className="svg" src="img/svg/send.svg" alt="" />
              </a>
            </div>
          </div>
          <div className="connect">
            <div className="left">
              <ul>
                <li>
                  <span className="name">Call:</span>
                  <p>
                    <a className="line_effect" href="tel:+8801996169888">
                      01996 169 888
                    </a>
                  </p>
                </li>
                <li>
                  <span className="name">Email:</span>
                  <p>
                    <a className="line_effect" href="mailto:shaikhzisam@gmail.com">
                    connect@zisam.com
                    </a>
                  </p>
                </li>
              </ul>
            </div>
            <div className="right">
              <div className="orido_tm_follow">
                <span>Follow me:</span>
                <ul>
                  <li>
                  <a href="https://www.linkedin.com/in/zisam-shaikh-2a2697290/"
              target="_blank"
              rel="noreferrer">
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
          </div>
        </div>
        <span className="element">
          <img className="svg" src="img/svg/elements.svg" alt="" />
        </span>
        <span className="element2">
          <img className="svg" src="img/svg/element-2.svg" alt="" />
        </span>
      </div>
    </div>
  );
};
export default Contact;
