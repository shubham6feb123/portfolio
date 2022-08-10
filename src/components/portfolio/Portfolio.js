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
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFdklEQVRo3tWZa0wUVxTHF7WPNIw8RNCVykNErXxolMayD57KS1Motc8QmhCSNo0fmqZfmpg0sUhrW2pta1sRRR7LAossBVmeogKmtmhpoE2txKaNiV+MBfYxMzuzM7d37nKXZd2FLjvD7k5yEj5M2N//3HP/95w7MpmXD9u5+w1rS6yZ6djxliwYHwivoxoiAK2JecgPZYYHnQBaK5+iGyKBEIwusSqo4MFI4Vpr8yba2hgJUGhiLNyAUh40AvihjCS6cQNgmiJRCCIYXcJ3QSOA7XzmEIKG8CwWoYlmuN5924NCAKz59zG8TbMggtHFa929T/YVJ5P9L8cFjoDWrbXMPDzXvCDCqtnI2Qype5zfpQyFuzhttJVrkRvJvpLA2CdMy5ZR1kkAFoFWoS2+D4wULJSbbocOaNYDIdj2nacDwYFkjFb+QBAggPPzIfyNVqEpCtgu7clC2e/J38s3b+CxAF670UoZDiYu9xvcnbIE7m55mDQCruZFwVIB7gQ4VqE17gYUGsLqkvswPA5be3L9Uv/fNvXia7bxbNY2kT8hiQDbpWdVggPh8uGdAgsQLJbuev6kINJVAK+NslE9ubvdwxdD+CzW9nMGsN3M4bi/3w4V30IvJlXgDYzBgdZFADydLV+sB2QdBHYRgFZBl9ThBv5VB/x8cLdf3yv+Bm6L+9xZAIZ3FkCdCQfksVBg+ooAbMOjAuC7PN2d9dxS8CgmXyiVwIFiu13r37GJNfZTmfyEQAIsx2GcJwDf5GYV2hIHTJfLPcMLMVFQJYEA+bQ7AfgsoL+3Zx+H8RQBGJdVEASRF8IBPZZX7RFeiF/y9GJb6JNMcwzr0YGE7H9MLBJgqQwF5tqFVUDwcG+YLiZByEzgEV6IWwf+FFUA15+WIpQI6+RAzicx/e3i7DtW4SQBrPV2eArBb1se3u5ELHSiJ8RzIP3Ow4zLCew4wKDzkFWEWwHCKhjPEsBSR/x/eOxEd0pTRGziEo4yHloI+nSYW3gcc9Uw2r2DRzFV9IqITdzTjW6bOCH7x4klBdDnEr2HF+LXwg/FbOLGcROHA/n+12HSwNudqFUsBwphtJuNzgJQ9uth9iuXgK/1Ad7uRJPijJHDObEM7DTZ+UEGDzHUqTDp4JGA/TR0onW+N3FdKfsZF3jrhQhAfiQhPIpMwE2/mey7hbZvO4KHeDzIU1+GeYBPEAkeO1FxkQhN3NZvnAXQ591nX3R4uxN9IEYTN+i4BxKyL7TLqwGPmrq8Bh8dqEAYI+9hePpchHv4nySAR1aae9M3AdcKCKsmmkfwwqFVvTj79FkJ4e1OZIJOtGblTZwhNRXfg1K14asLL8Q4dKK75fE+jJHbSxF8Ayydzwgn+Hjp4XH8VlKw8qv0trhKBF8T7h945EQH3/PhKj1WR9ZDAScIJ/iM1YNHTpRfu2IBlEY+ZZkfFf0Cb3ei6ytt4taRTTGUMKj7Dd7e1P0LnSjEewcaUCeZ4ahI1/gRHjlRFuD+qtjsff237zpE1yX4Fx7H74ezva9/fWoZe8P/8OyP6Rw1ur/E+zngj3dkpl5lFj2ivuUXcJg86or6ylyXwrdrxtku9RrzgLLMOpZ+b7Xg6Wvq26YeRZGxN0e8u6GZDsVT5JDqKHM93SgVuHVU/cDcpzwyo1c+JtmHjlm9YhM1rDoDa9MmFjhMCmUZVJ2Y6UhbvQ/nc92KFOqquteXjQ6TwJPDKu1sZ1q8zB+PcfCAzGRQ5sKanfTGbln4LhQ/CpOwLyA+/s3+oFoLa7cC1vD9ZTfoiHraZFC8NGfIDpEF2gM3eiis5WOwps2PbNAx9UNzv/JduEEfD/gP4jP6tC3kZVUNLK37MP6Boj6FGzRSit/6D/cE0eIIj76GAAAAAElFTkSuQmCC",
  "data:image/png;base64,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",
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFGklEQVRo3u1aaWwVVRR+LZQiAhIQUBAqIgTUGCBKVFxqRNFXttSQYBCVEBeUQKS0VPnTaBVx+4HBoA0YJEQJtMgSVNoKhIhb4oorkoABGiMqiLWIUPyOnomft3fe3Jl58yDGSb62M/eec8+5c886TaX+v/65KtINFwLlQB3wCbAb+BSoBWYDfU5XwS8H3gBagZMZcAxYBpx7ugjeAXgWOBEguImfgAmnWvhuwDbLDq8H7gaGAWcDvYBRwEIV3JsrSt97qoTvBLxDwsjRqQH6BdD1BNYZStyaa+EFr5AQR4B0CPp8YCnR/wIMzKUCU2jx48CYCDzaA1uJz5uyMbkQ/kygiRaujsHrfOBX4jU6FwqU0YLfAIUx+VXzW0hY+Po8LPItLTg5CxsiXuo3Muj+Se7+FST8d3KOs8R3JfGdlaQCC2ihBVnkW0p81yWpwHu00Kgs8u1OKUhTUsIXAr/rIkfjGq+F/17anO5JKHAJLfCZz5wBep4lA30XmFpRUu/K/yZgCbAfGJ6EAiWkwCbLeG/ggCVpmwN00dSjnWOULkxCgTtJqBWW8UccMlCJ2j8AHwKvApXAdZLR5iKA3UeC1FjGV4dMp08audAqYHy2XLNNgXtowaWW8Sd8hBPD36Nx40eHumGvVm4ds63AbbTIKsv4ecBBi0DzLd5ssKTQwNNadvopMumhbCV4YFZMzLf5zBkKbNSi5StgZnm6Ic+B90C1oSaLIlJb94gqtFRRRfp3f2K6L8FYM8PizfaEdq0gmK7l4TS9z6NyUKJmzwQdhrjdZ9RrsaHf4MpgDoX2FfT8dWI4IQee72o1fm9NyVqLg4juMlojtTRWTs+X5Kj6Owf4gNY9JFmB3+QRmud4k18GCmh8CI19z2MxkrjFwC5tflXa4gCenWUoIfO7mpMKJMfhnTdDf1VVVUqjqDenNKbBfmzxOst85vc2jlONOeEBGvxCal8fRjzv7cqx9VEVmOLj/+X4DvKhuYYCofy+zBtop67KY3BlgIf4mRYcE1GB6gzReFwGuhfbFD+aynoP1zgs/ijN/xp4Une0IIQCt2dQ4KIMdH3ITv+uofFjERFf69hStKUNUgN0cVSgI/ClhUetA+1ymj+bS0VJdfMdBdjus3uPOdIXaLrBXk2C1xkOtDcS3dqUZolyszlEV+24jwLvR+gvHWzjFoPf3jGl3Z0iy17pyEDSisM+CmxxoJekr/lfxyC8E/D6Uy0p0qYuBIPnfRSYHkDXFdhJ8z+KUsQQjxNys09vPg/ZI60zysWnKkr802d99fVEI95kWFjhy8a+lVJ7FR6H5WYzxYCikDsxWI2qb8C8ztqB5rc1I2IMGcRvUB7MpwePJ5CQFRkpiOC5eenIUZzj0GJvF1vpY0W/rAhe0ii8J5GX87Dc1V37BDJ2IMXewAZ6uD1uUa27Xmcx8kUxhG9v2JB84spj19ZCg41Rqi79BraQWuYeWv7qbNzSEHVDOhhd7OY2dYHmJ9z2EEufG1RUK/PR+v232bLrEukvNmj6ApfOu7nBRfjhRmNZ3P7ETGmuuXt/aJ5Towb0sHYRXtDPrEcytEammUcG9yPJde/U78yTJT3W/uoFwFXS1dAj02pUZGmXSNkYo9O2A7jD1jJUQY9G5Cv/CTDA6cxp9SVtlZcoaPjhkBb8ZUGfS/W4SZNsk6Mi0tl7DbheZIpqQPn6Vkq1b/MgcL/eD43hVTprLVKphcoa9VyyaVXaK+2W+q9ffwIesBxJNaDv8gAAAABJRU5ErkJggg==",
  "https://download.logo.wine/logo/MySQL/MySQL-Logo.wine.png",
  "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
  "https://s.w.org/style/images/about/WordPress-logotype-alternative.png",
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

const About = () => {
  return (
    <div className="portfolio_overview about">
      <h3>About Me</h3>
      <div className="container">
        <div className="img_box">
          <img src="./image/shubham.jpg" alt="shubham" />
        </div>
        <div className="about_content_box">
          <p>
            Hi I am{" "}
            <span
              style={{
                textDecoration: "underline",
                textDecorationStyle: "solid",
                color: "white",
              }}
            >
              Shubham Sharma
            </span>{" "}
            full stack developer and freelancer living in Gwalior, 🇮🇳 India. I
            ❤️ love writing code and I am currently pursuing B.Tech from MITS
            Gwalior. I have been working in this field from last 1.5 years and
            have done couple of projects as samples for my portfolio. I am also
            🎯 open for all the internships that help me grow as well as learn
            something new for the future. I am also available for the remote
            work and will be glad if provided the opportunity to work.
          </p>
        </div>
      </div>
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
        {projectCard(
          "Disney+ Clone",
          "https://disneyplus-750b9.firebaseapp.com/",
          "./image/disneyplusclone.jpeg"
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
        {About()}
        {Myskills()}
        {myProjects()}
      </div>
    </>
  );
}

export default Portfolio;
