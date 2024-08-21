import React from 'react';
import { Link } from 'react-router-dom';

const Card = () => {
  return (
    <section className="container">
      <div className="card">
        <div className="card-image card-1"> </div>  {/* No image used */}
        <div className="card-text card_1">
          <h2>Request for Organ</h2>
          <div className="value"><Link to="/organrequestform" rel="noopener noreferrer">Request</Link></div>
        </div>
      </div>

      <div className="card">
        <div className="card-image card-2"></div>
        <div className="card-text card_2">
          <h2>Donate A Organ</h2>
          <div className="value"><Link to="/donorregistration" rel="noopener noreferrer">Donate</Link></div>
        </div>
      </div>

      <div className="card">
        <div className="card-image card-3"></div>
        <div className="card-text card_3">
          <h2>List of Hospitals</h2>
          <div className="value"><Link to="/login" rel="noopener noreferrer">Record</Link></div>
        </div>
      </div>
    </section>
  );
};

export default Card;
