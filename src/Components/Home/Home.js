import React from "react";
import { FaMapMarkerAlt, FaDollarSign, FaShieldAlt, FaHeadset } from "react-icons/fa"; // Import icons
import { FaUserPlus, FaCar, FaWallet, FaStar, FaClock, FaGlobe, FaGift, FaUsers } from "react-icons/fa";
import "./Home.css";


const Hero = () => {
  const features = [
    { img: "images/Miniatura-do-wpisu-4-scaled.jpg", title: "Flexible Scheduling", desc: "Plan your rides in advance by scheduling a driver.<br />Book a driver at your convenience." },
    { img: "images/images.jpg", title: "Experienced and Verified Drivers", desc: "Our drivers are carefully selected.<br />You can view driver profiles, ratings, and reviews." },
    { img: "images/24_7-customer-support-1024x576.jpeg", title: "24/7 Customer Support", desc: "Need assistance? Our customer support is available 24/7." },
    { img: "images/istockphoto-1186431236-612x612.jpg", title: "Multiple Ride Options", desc: "Choose from different vehicle types based on your needs." },
    { img: "images/1q195tb7imuapkbx2641tq-1694462581208-compressed.jpg", title: "Safety First", desc: "Real-time driver monitoring & ride status sharing." },
    { img: "images/Loyalty_Program_Listicle-Blog_Main_Banner.jpeg", title: "Loyalty Program", desc: "Earn rewards with every ride you take." },
    { img: "images/images (2).jpg", title: "Transparent Pricing", desc: "Upfront pricing with no hidden charges." }
  ];
  
  return (
    <>
    <section className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h4 className="subheading">RIDE BOOKING SERVICE</h4>
        <h1 className="heading">
        Track Your Driver<br />    in Real-Time
        </h1>
        <button className="learn-more">LEARN MORE</button>
      </div>

      {/* Car Images */}
      <div className="car-images">
        <img src='images/chauffeur-barcelona.png' alt="Red Car" className="car red-car" />
      </div>
    </section>

    <div>

    <section className="home-container">
      <div className="home-content">
        <h2 className="home-heading">Explore Our Services</h2>
      </div>

      <div className="home-cards">
        {/* Card 1 */}
        <div className="home-card">
          <img src="images/Driver-Rental-Service-in-Kolkata.jpg" alt="Service 1" className="card-image" />
          <h3 className="card-title">Book a Driver</h3>
          <p className="card-description">
          Easily search and book a driver in your vicinity, available 24/7.
          </p>
          <button className="card-button">Learn More</button>
        </div>

        {/* Card 2 */}
        <div className="home-card">
          <img src="images/AdobeStock_224919267.jpeg" alt="Service 2" className="card-image" />
          <h3 className="card-title">Track Your Driver</h3>
          <p className="card-description">
          Use our real-time tracking to follow your driver’s location on the map.
          </p>
          <button className="card-button">Learn More</button>
        </div>

        {/* Card 3 */}
        <div className="home-card">
          <img src="images/1698703246317.jpg" alt="Service 3" className="card-image" />
          <h3 className="card-title">Secure Payments</h3>
          <p className="card-description">
          Pay securely through our app and get an estimated fare before booking.
          </p>
          <button className="card-button">Learn More</button>
        </div>
      </div>
    </section>
    </div>


    <div className="features-container">
      <h2 className="features-heading">More Features</h2>
      <div className="features-slider">
        <div className="features-track">
          {[...features, ...features].map((feature, index) => (
            <div key={index} className="feature-card">
              <img src={feature.img} alt={feature.title}  style={{height:"250px"}}/>
              <h3>{feature.title}</h3>
              <p dangerouslySetInnerHTML={{ __html: feature.desc }}></p>
              <button className="learn-more">Learn More</button>
            </div>
          ))}
        </div>
      </div>
    </div>


    <div className="about-container">
      <div className="about-overlay"></div>
      <div className="about-content">
        <h2 className="about-heading">About RideReady</h2>
        <p className="about-paragraph">
        RideReady is designed to connect customers in need of reliable drivers with professional drivers looking for job opportunities. Whether it's for a long trip or a quick drive, we ensure a seamless experience for both customers and drivers.
        </p>
      </div>
    </div>




    <div className="mission-container">
      <img src="images/Taxi-Driver-PNG-Image.png" alt="why-img"/>
      <div>

      <div className="mission-content">
        <h2 className="mission-heading">Our Mission</h2>
        <p className="mission-text">
          Our goal is to provide a platform where customers can easily find trustworthy drivers, 
          and drivers can manage their schedules and earnings effectively. <br /><br />
          Transparency, safety, and customer satisfaction are at the core of our mission.
        </p>
      </div>

      <div className="why-choose-container">
        <h2 className="why-choose-heading">Why Choose RideReady?</h2>
        <div className="why-choose-list">
          <div className="feature-item">
            <FaMapMarkerAlt className="feature-icon" />
            <p>Real-time driver tracking</p>
          </div>
          <div className="feature-item">
            <FaDollarSign className="feature-icon" />
            <p>Affordable and transparent pricing</p>
          </div>
          <div className="feature-item">
            <FaShieldAlt className="feature-icon" />
            <p>Safe and secure payment processing</p>
          </div>
          <div className="feature-item">
            <FaHeadset className="feature-icon" />
            <p>Reliable customer support</p>
          </div>
        </div>
      </div>
      </div>

    </div>



    <div className="ride-container">
      {/* Hero Section */}
      <div className="ride-hero">
<img src="images/chauffeur-barcelona.png" alt="car"/>
      {/* Steps Section */}
      <div className="ride-steps">
        <div className="step-card">
          <FaUserPlus className="step-icon" />
          <h3>Sign Up</h3>
          <p>Customers and drivers can easily create an account within minutes.</p>
        </div>

        <div className="step-card">
          <FaCar className="step-icon" />
          <h3>Book a Driver</h3>
          <p>Enter your destination and find a nearby driver instantly.</p>
        </div>

        <div className="step-card">
          <FaMapMarkerAlt className="step-icon" />
          <h3>Track Your Ride</h3>
          <p>Real-time tracking ensures peace of mind while waiting.</p>
        </div>

        <div className="step-card">
          <FaWallet className="step-icon" />
          <h3>Pay Seamlessly</h3>
          <p>Choose from secure payment options and get upfront pricing.</p>
        </div>

        <div className="step-card">
          <FaStar className="step-icon" />
          <h3>Rate Your Experience</h3>
          <p>Leave feedback to maintain quality and improve the service.</p>
        </div>
      </div>
      </div>


      {/* Promise to Drivers */}
    
    
      <div className="ride-container-1" >
      <div className="ride-promise">
        <h2>Our Promise to Drivers</h2>
        <p>We empower drivers by offering flexibility, control, and transparency.</p>
      </div>
    <div className="ride-features">
        <div className="feature-card">
          <FaClock className="feature-icon" />
          <h3>Flexible Scheduling</h3>
          <p>Drivers can accept rides based on availability.</p>
        </div>

        <div className="feature-card">
          <FaWallet className="feature-icon" />
          <h3>Transparent Earnings</h3>
          <p>See your earnings before accepting a ride.</p>
        </div>

        <div className="feature-card">
          <FaShieldAlt className="feature-icon" />
          <h3>Driver Safety</h3>
          <p>Real-time tracking and emergency support ensure security.</p>
        </div>
        </div>
      </div>

      {/* Key Features Section */}
      <div className="car-conatiner" >
       <img src="images/16352257487881.png" />
        <div className="ride-key-features">

        <h2>Key Features You’ll Love</h2>
        <ul>
          <li><FaClock /> 24/7 Availability</li>
          <li><FaCar /> Pre-booked or On-Demand Rides</li>
          <li><FaShieldAlt /> Insurance Coverage</li>
          <li><FaGlobe /> Multi-language Support</li>
          <li><FaUsers /> Customer-Driver Matchmaking</li>
        </ul>
        </div>

      </div>

      {/* Testimonials */}
      <div className="ride-testimonials">
        <h2>What Our Customers Say</h2>
        <p>"RideReady made my daily commute easier! The drivers are professional and reliable." - Emma R.</p>
        <p>"As a driver, I love the flexibility and transparency this platform offers." - John K.</p>
      </div>
    </div>
    </>
  );
};

export default Hero;
