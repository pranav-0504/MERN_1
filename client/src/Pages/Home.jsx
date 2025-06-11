
import { Link } from "react-router-dom";
import "../components/home.css";
import profilePic from "/images/Pranav.jpg"; // adjust the path as per your project

export const Home = () => {
  return (
    <section className="home-section">
      <div className="home-container">
        <div className="home-image-wrapper">
          <img src={profilePic} alt="Pranav Aggarwal" className="home-image" />
        </div>
        <div className="home-content">
          <h1 className="home-title">Hey, I'm Pranav Aggarwal 👋</h1>
          <p className="home-subtitle">
            🎓 A passionate Engineering student at DTU <br />
            🚀 Tech enthusiast, coding daily & building cool projects <br />
            📊 I love business, trading, and exploring the world of aviation <br />
            🧠 Always learning, always curious, HardWorking
          </p>
          <Link to="/login">
            <button className="home-btn">Login & Get Started</button>
          </Link>
        </div>
      </div>
    </section>
  );
};
