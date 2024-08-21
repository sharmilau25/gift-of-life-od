import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
      
      <div className="container-fluid position-relative p-0">
      <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0 sticky-top shadow-sm">
         <Link to="" className="navbar-brand p-0">
              <h1 className="text-primary"><i className="fas fa-heart-pulse me-3"></i>Gift Of Life</h1>
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
              <span className="fa fa-bars"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
              <div className="navbar-nav ms-auto py-0">
                 <Link to="/" className="nav-item nav-link active">Home</Link>
                  <div className="nav-item dropdown">
                     <Link to="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Be a Donor</Link>
                      <div className="dropdown-menu m-0">
                         <Link to="/donorregistration" className="dropdown-item">Sign Up</Link>
                         <Link to="/howsignup" className="dropdown-item">How To Sign Up</Link>
                         <Link to="/whysignup" className="dropdown-item">Why Sign Up</Link>
                         <Link to="/whataftersignup" className="dropdown-item">What happens after sign up</Link>
                      </div>
                  </div>
                   <div className="nav-item dropdown">
                     <Link to="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Learn about Organ Donation</Link>
                      <div className="dropdown-menu m-0">
                         <Link to="/howdonationworks" className="dropdown-item">How organ donation works</Link>
                         <Link to="product.html" className="dropdown-item">Who can donate</Link>
                         <Link to="/whatcanbedonated" className="dropdown-item">What can be donated</Link>
                         <Link to="/whocandonate" className="dropdown-item">Statistics</Link>
                         <Link to="/mythsandfacts" className="dropdown-item">Myths & Facts</Link>
                      </div>
                  </div>
                  <div className="nav-item dropdown">
                     <Link to="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Rules & Regulations</Link>
                      <div className="dropdown-menu m-0">
                         <Link to="/rulesandregulations" className="dropdown-item">Rules</Link>
                         <Link to="product.html" className="dropdown-item">Downloads</Link>
                      </div>
                  </div>
              </div>
             <Link to="/login" className="btn btn-primary rounded-pill d-inline-flex flex-shrink-0 py-2 px-4">Admin</Link>
          </div>
      </nav>
  </div>
  );
};

export default Header;
