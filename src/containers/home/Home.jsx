import React from "react";
import "./home.css";
import profile from '../../assets/profile-pic.png'
import {Link} from 'react-router-dom'

const Home = () => {
  return (
    <section className="portfolio__home-section align-items-center" >
      <div className="container">
        <div className="row align-items-center">
          <div className="home-text">
            <p>Hello , I'm</p>
            <h1>Bhavesh</h1>
            <p>Web Developer</p>
            <Link to="/about" className="btn">more about me</Link>
          </div>
          <div className="home-img">
            <div className="img-box">
              <img src={profile} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
