const About = () => {
  return (
    <div className="orido_tm_section" id="about">
      <div className="orido_tm_about">
        <div className="about_in">
          <div className="left">
            <div className="box">
              <h3 className="year">6</h3>
              <span className="experience">Years of Experience</span>
            </div>
          </div>
          <div className="right">
            <span className="element">
              <img className="svg" src="img/svg/element.svg" alt="" />
            </span>
            <div className="orido_tm_main_title">
              <h3>
                <span>About Me</span>
              </h3>
            </div>
            <div className="text">
              <p>
                Since beginning my journey as a freelance Developer over 6 years
                ago, I've done remote work for agencies, consulted for startups,
                and collaborated with talented people to create digital products
                for both business and consumer use. I'm quietly confident,
                naturally curious, and perpetually working on improving my chops
                one design problem at a time.
              </p>
            </div>
            <div className="short">
              {/* <div className="orido_tm_boxed_button">
                <a href="img/cv/1.jpg" download>
                  Download CV{" "}
                  <img className="svg" src="img/svg/paper.svg" alt="" />
                </a>
              </div> */}
              <img src="img/signature.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
