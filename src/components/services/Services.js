import React from "react";
import "./services.css";
import "../portfolio/portfolio.css";

const servicesCard = (image, title) => {
  return (
    <div className="services_card">
      <div className="img_container">
        <img src={image} alt="services" />
      </div>
      <h5>{title}</h5>
    </div>
  );
};

const Services = () => {
  return (
    <div className="services_container">
      <div className="services">
        <h3>Our Services</h3>
        <div className="services_banner_container">
          {/* services banner */}
          {servicesCard(
            "https://static1.shine.com/l/m/images/blog/Front--end-developer.png",
            "Frontend Development"
          )}
          {servicesCard(
            "https://qph.cf2.quoracdn.net/main-qimg-c02d737b627c8346adddd33fbcfb442e",
            "Backend Development"
          )}
          {servicesCard(
            "https://img.freepik.com/premium-vector/travel-booking-glassmorphic-design-neumorphic-elements-kit-mobile-app-ui-ux-gui-screens-set_9209-5175.jpg?w=2000",
            "User Interface Design"
          )}
          {servicesCard(
            "https://www.thebalancesmb.com/thmb/3tO0sKMbIm2FFg7Vc6dnuGwgVV4=/4952x2991/filters:fill(auto,1)/seo-search-engine-optimization-concept-644911062-5ae3efdd04d1cf003cf95b58.jpg",
            "Search Engine Optimization"
          )}
        </div>
      </div>
    </div>
  );
};

export default Services;
