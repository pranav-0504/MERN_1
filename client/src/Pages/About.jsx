import "../components/about.css";
import AboutImage from "/images/About.png"; // Put your image in /src/assets folder

export const About = () => {
  return (
    <section className="about-section">
      <div className="container about-grid">
        <div className="about-content">
          <p>Welcome, ABC Pvt Limited</p>
          <h1>Why Choose Us?</h1>

          <ul>
            <li>
              <strong>Expertise:</strong> Our team consists of experienced IT professionals who are passionate about staying up-to-date with the latest industry trends.
            </li>
            <li>
              <strong>Customization:</strong> We understand that every business is unique. That’s why we create solutions that are tailored to your specific needs and goals.
            </li>
            <li>
              <strong>Customer-Centric Approach:</strong> We prioritize your satisfaction and provide top-notch support to address your IT concerns.
            </li>
            <li>
              <strong>Affordability:</strong> We offer competitive pricing without compromising on the quality of our services.
            </li>
            <li>
              <strong>Reliability:</strong> Count on us to be there when you need us. We're committed to ensuring your IT environment is reliable and available 24/7.
            </li>
          </ul>

          <div className="about-buttons">
            <button className="btn-connect">Connect Now</button>
            <button className="btn-learn">Learn More</button>
          </div>
        </div>

        <div className="about-image">
          <img src={AboutImage} alt="About Illustration" />
        </div>
      </div>
    </section>
  );
};
