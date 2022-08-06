import React from "react";
import "./portfolio.css";
import { Typewriter } from "react-simple-typewriter";

const portfolioOverview = () => {
  return (
    <div className="portfolio_overview">
      <div className="image_box">
        <img src="./image/shubham.jpg" alt="shubham-sharma" />
        <h3>Shubham Sharma</h3>
        <code>
          I am
          <span>
            <Typewriter
              words={[
                " a Tech Enthusiast. ",
                " a Full Stack Web Developer. ",
                " a Freelancer. ",
                " a Proud Indian 🇮🇳 ",
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={60}
              deleteSpeed={70}
              delaySpeed={1500}
            />
          </span>
        </code>
      </div>
      <img className="cloud1 cloud" src="./image/cloud.png" alt="cloud" />
      <img className="cloud2 cloud" src="./image/cloud.png" alt="cloud" />
      <img className="cloud3 cloud" src="./image/cloud.png" alt="cloud" />
    </div>
  );
};

const skillsCard = (image, key) => {
  return (
    <div key={key} className="skills_logo_card">
      <img className="skills html" src={image} alt="logo" />
    </div>
  );
};

const skillsImages = [
  "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/640px-HTML5_logo_and_wordmark.svg.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png",
  "https://nodejs.org/static/images/logo.svg",
  "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/800px-Nextjs-logo.svg.png",
  "https://webimages.mongodb.com/_com_assets/cms/kuyjf3vea2hg34taa-horizontal_default_slate_blue.svg?auto=format%252Ccompress",
  "./image/express.png",
  "https://www.svgrepo.com/show/332084/github.svg",
  "https://git-scm.com/images/logos/downloads/Git-Logo-2Color.png",
  "https://cdn.worldvectorlogo.com/logos/typescript.svg",
];

const Myskills = () => {
  return (
    <div className="my_skills portfolio_overview">
      <h3>My Skills</h3>
      <div className="skills_logo_container">
        {skillsImages.map((link, index) => skillsCard(link, index))}
      </div>
    </div>
  );
};

const projectCard = (title, link, src) => {
  return (
    <div className="projects_card">
      <img src={src} alt="logo" />
      <a href={link} target="_blank" rel="noreferrer">
        {title}
      </a>
    </div>
  );
};

const myProjects = () => {
  return (
    <div className="projects portfolio_overview">
      <h3>My Projects</h3>
      <div className="projects_container">
        {/* projects card */}
        {projectCard(
          "Ecommerce Web App",
          "https://shubham-flipshop.herokuapp.com",
          "./image/ecommerce.jpeg"
        )}
      </div>
    </div>
  );
};

function Portfolio() {
  return (
    <>
      <div className="portfolio_container">
        {portfolioOverview()}
        {portfolioOverview()}
        {Myskills()}
        {myProjects()}
      </div>
    </>
  );
}

export default Portfolio;
