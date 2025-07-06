import React from "react";

const About: React.FC = () => {
  return (
    <section className="about section-padding" id="section_2">
      <div className="container">
        <div className="row">
          {/* --- RIGHT COLUMN (My Story): Now appears FIRST in code --- */}
          {/* The 'order-lg-2' class pushes this column to the right on large screens */}
          <div className="col-lg-6 col-12 mt-5 mt-lg-0 order-lg-2">
            <div className="about-thumb">
              <div className="section-title-wrap d-flex justify-content-end align-items-center mb-4">
                <h2 className="text-white me-4 mb-0">My Story</h2>
                <img
                  src={process.env.PUBLIC_URL + "/images/Paschal Headshot.png"}
                  className="avatar-image img-fluid"
                  alt="Enyimiri Chetachi Paschal"
                  style={{ transform: "scaleX(-1)" }}
                />
              </div>

              <h3 className="pt-2 mb-3">About Me</h3>

              <p>
                I am a detail-oriented Senior Software Quality Assurance
                Analyst/Engineer with years of experience in Q.A. concepts,
                testing tools, and test automation (BDD/TDD frameworks).
              </p>
              <p>
                I specialize in building test pipelines from the ground up and
                collaborating with smart teams to build cutting-edge products. I
                take quality seriously, viewing it as a critical element in
                maintaining epic levels of customer retention and solving
                problems for today’s businesses.
              </p>
            </div>
          </div>

          {/* --- LEFT COLUMN (Education): Now appears SECOND in code --- */}
          {/* The 'order-lg-1' class pulls this column to the left on large screens */}
          <div className="col-lg-6 col-12 order-lg-1">
            {/* Education Section */}
            <div className="profile-thumb mb-4">
              <div className="profile-title">
                <h4 className="mb-0">Education</h4>
              </div>
              <div className="profile-body">
                <div className="info-row">
                  <span className="info-label">University</span>
                  <span className="info-value">
                    Lagos State University, Bsc Psychology
                  </span>
                </div>
                <div className="info-row">
                  <span className="info-label">College</span>
                  <span className="info-value">
                    Holy Angeles College, Second school leaving Certificate
                  </span>
                </div>
              </div>
            </div>

            {/* Certifications Section */}
            <div className="profile-thumb mb-4">
              <div className="profile-title">
                <h4 className="mb-0">Certifications</h4>
              </div>
              <div className="profile-body">
                <div className="info-row">
                  <span className="info-label">Udemy</span>
                  <span className="info-value">
                    Quality Management, Selenium WebDriver, ISTQB CTFL
                  </span>
                </div>
                <div className="info-row">
                  <span className="info-label">Test Automation University</span>
                  <span className="info-value">
                    API Testing, Mocha JS, Chai Assertions, Cypress
                  </span>
                </div>
              </div>
            </div>

            {/* Publications Section */}
            <div className="profile-thumb">
              <div className="profile-title">
                <h4 className="mb-0">Publications</h4>
              </div>
              <div className="profile-body">
                <div className="info-row">
                  <span className="info-label">Article 1</span>
                  <span className="info-value">
                    <a
                      href="https://tinyurl.com/k6-paschal"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      K6: A Comprehensive Load Testing Tool for Web Applications
                    </a>
                  </span>
                </div>
                <div className="info-row">
                  <span className="info-label">Article 2</span>
                  <span className="info-value">
                    <a
                      href="https://tinyurl.com/k6-cucumber-steps"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Load Testing Made Dynamic with k6-cucumber-steps
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
