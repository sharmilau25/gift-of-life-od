import React from 'react';
import Card from './Card';
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
    {/* <Header></Header>  */}
    <section className="home">
    <div className="content active">
  <div className="image-container">
    <img className="imgs" src="assets/images/odBanner.jpg" alt="Organ Donation" />
    <div className="text-overlay">
      <div className="center">
        <div className="btn-1">
          <Link to="/login"><span>Login</span></Link>
        </div>
        <div className="btn-2">
          <Link to="/register"><span>Sign Up</span></Link>
        </div>
      </div>
    </div>
  </div>
</div>
      <Card/>
    </section>
    </div>
  );
};

export default Home;
