import React from "react";
import Typical from "react-typical";
import "./Profile.css";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="cols-icon">
              <a href="https://github.com/Tosmel2">
                <i className="fa fa-github"></i>
              </a>
              <a href="https://linkedin.com/in/tosin-adewale-4b61041b0">
                <i className="fa fa-linkedin" />
              </a>
              <a href="https://instagram.com/adnegsdigital">
                <i className="fa fa-instagram" />
              </a>
              <a href="https://twitter.com/tosmel2">
                <i className="fa fa-twitter" />
              </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'm <span className="highlighted-text">Adewale Tosin</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                <Typical
                  loop={Infinity}
                  steps={[
                    "Enthusiastic Dev 😎",
                    2000,
                    "Web Developer 💻",
                    2000,
                    "Software Engineer 📱",
                    2000,
                    "Cross Platform Dev 🔴",
                    2000,
                  ]}
                />
              </h1>
            </span>
            <span className="profile-role-tagline">
              Creative in building applications with front and back end operations.
            </span>
          </div>

          <div className="profile-options">
            <a href="#ContactMe">
              <button className="btn primary-btn"> Hire Me </button>
            </a>
            <a href="samcv.pdf" download="sam samcv.pdf">
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
