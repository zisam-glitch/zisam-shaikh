const Feedback = ({ dark }) => {
  return (
    <div className="orido_tm_section">
      <div className="orido_tm_testimonials">
        <div className="container">
          <div className="orido_tm_main_title">
            <h3>
              <span>
                Valuable feedback
                <br />
                from my client
              </span>
            </h3>
          </div>
          <div className="testimonials_in">
            <img src={`img/testimonials/${dark ? 2 : 1}.jpg`} alt="" />
            <div className="info">
              <div className="text">
                <p>
                  “Working with the Zisam and his team has been a real pleasure.
                  This project was highly iterative, and the team was always
                  extracting feedback from key stakeholders at our business and
                  baking it into the process. We are pleased with the outcome,
                  and hope to work with them for a long time!”
                </p>
              </div>
              <div className="details">
                <h3 className="name">
                  <span>Lbert Walkers</span>
                </h3>
                <span className="job">Co-founder, LOLA</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Feedback;
