import React from "react";

function Pagestart() {
  return (
    <div id="home">
      <header
        className="w3-display-container w3-content w3-wide"
        style={{ maxWidth: "1500px" }}
      >
        <img
          className="w3-image"
          src="https://www.w3schools.com/w3images/architect.jpg"
          alt="Architecture"
          style={{
            width: "100%",
            height: "auto",
            minHeight: "600px",
            objectFit: "cover",
          }}
        />

        <div className="w3-display-middle w3-margin-top w3-center">
          <h1
            className="w3-xxlarge w3-text-white"
            style={{ letterSpacing: "5px" }}
          >
            <span className="w3-padding w3-black w3-opacity-min">
              <b>BR</b>
            </span>

            <span className="w3-hide-small w3-text-light-grey">
              {" "}
              Architects
            </span>
          </h1>

          <p
            className="w3-text-light-grey w3-hide-small w3-margin-top"
            style={{ fontSize: "18px", fontWeight: "300" }}
          >
            We design the future, building sustainable and modern spaces.
          </p>
        </div>
      </header>

      <section
        className="w3-content w3-padding-64"
        style={{ maxWidth: "1200px" }}
      >
        <div className="w3-container">
          <h2 className="w3-border-bottom w3-border-light-grey w3-padding-16">
            Who We Are
          </h2>

          <p className="w3-text-grey" style={{ lineHeight: "1.8" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>

          <p className="w3-text-grey" style={{ lineHeight: "1.8" }}>
            Sunt in culpa qui officia deserunt mollit anim id est laborum.
            Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
          </p>
        </div>
      </section>

      <section className="w3-light-grey w3-padding-64">
        <div className="w3-content" style={{ maxWidth: "1200px" }}>
          <div className="w3-container">
            <h2 className="w3-border-bottom w3-border-grey w3-padding-16">
              Featured Concepts
            </h2>
          </div>

          <div className="w3-row-padding w3-margin-top">
            <div className="w3-col l4 m6 w3-margin-bottom">
              <div className="w3-display-container">
                <div className="w3-display-topleft w3-black w3-padding">
                  Nordic Cabin
                </div>

                <img
                  src="https://www.w3schools.com/w3images/house5.jpg"
                  alt="House"
                  style={{ width: "100%" }}
                />
              </div>
            </div>

            <div className="w3-col l4 m6 w3-margin-bottom">
              <div className="w3-display-container">
                <div className="w3-display-topleft w3-black w3-padding">
                  Skyline Office
                </div>

                <img
                  src="https://www.w3schools.com/w3images/house2.jpg"
                  alt="House"
                  style={{ width: "100%" }}
                />
              </div>
            </div>

            <div className="w3-col l4 m12 w3-margin-bottom">
              <div className="w3-display-container">
                <div className="w3-display-topleft w3-black w3-padding">
                  Ocean Villa
                </div>

                <img
                  src="https://www.w3schools.com/w3images/house4.jpg"
                  alt="House"
                  style={{ width: "100%" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="w3-content w3-padding-64 w3-center"
        style={{ maxWidth: "1200px" }}
      >
        <div className="w3-row w3-center w3-padding-16">
          <div className="w3-quarter w3-section">
            <span className="w3-xlarge">12+</span>
            <br />
            Years of Experience
          </div>

          <div className="w3-quarter w3-section">
            <span className="w3-xlarge">150+</span>
            <br />
            Projects Certified
          </div>

          <div className="w3-quarter w3-section">
            <span className="w3-xlarge">50+</span>
            <br />
            Happy Clients
          </div>

          <div className="w3-quarter w3-section">
            <span className="w3-xlarge">25+</span>
            <br />
            Awards Won
          </div>
        </div>
      </section>

      <section className="w3-light-grey w3-padding-64">
        <div className="w3-content" style={{ maxWidth: "1200px" }}>
          <div className="w3-container">
            <h2 className="w3-border-bottom w3-border-grey w3-padding-16">
              What Our Clients Say
            </h2>
          </div>

          <div className="w3-row-padding w3-margin-top">
            <div className="w3-col l6 m12 w3-margin-bottom">
              <div className="w3-container w3-white w3-padding-24 w3-card">
                <p>
                  <i>
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam."
                  </i>
                </p>

                <p>
                  <b>- John Doe, CEO of TechCorp</b>
                </p>
              </div>
            </div>

            <div className="w3-col l6 m12 w3-margin-bottom">
              <div className="w3-container w3-white w3-padding-24 w3-card">
                <p>
                  <i>
                    "Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                    Consectetur adipiscing elit, sed do."
                  </i>
                </p>

                <p>
                  <b>- Jane Smith, Creative Director</b>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Pagestart;
