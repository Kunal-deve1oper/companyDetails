import React, { useState } from "react";
import Details from "../Details/Details";
import "./Lessdetails.css";

function Lessdetails({ details }) {
  const [showDetails, setShowDetails] = useState(false);

  /**function to set showDetails true of false */
  const display = () => {
    if (showDetails) setShowDetails(false);
    else setShowDetails(true);
  };

  return (
    <>
      <div className="content">
        <p style={{ width: "200px" }}>{details.company.name}</p>
        <div style={{ width: "200px" }}>
          <h4>Contact</h4>
          <p>{details.name}</p>
        </div>
        <div style={{ width: "100px" }}>
          <h4>City</h4>
          <p>{details.address.city}</p>
        </div>
        <div style={{ width: "100px" }}>
          <h4>Website</h4>
          <p>{details.website}</p>
        </div>
        <button onClick={display} style={{ width: "100px" }}>
          {showDetails ? "Hide Details" : "View Details"}
        </button>
      </div>
      <div className="content-footer">
        {showDetails ? <Details details={details} /> : ""} 
      </div>
    </>
  );
}

export default Lessdetails;
