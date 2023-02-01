import React from "react";
import "./Details.css";

function Details({ details }) {
  return (
    <div className="details">
      <div>
        <h4>Description</h4>
        <p>{details.company.catchPhrase}</p>
      </div>
      <div className="details_footer">
        <div>
          <h4>Contact Person</h4>
          <p>{details.name}</p>
          <h4>Username</h4>
          <p>{details.username}</p>
          <h4>Email</h4>
          <p>{details.email}</p>
          <h4>Phone No</h4>
          <p>{details.phone}</p>
        </div>
        <div>
          <h4>Address</h4>
          <p>{details.address.street + ", " + details.address.suite}</p>
          <h4>City</h4>
          <p>{details.address.city}</p>
          <h4>Zip Code</h4>
          <p>{details.address.zipcode}</p>
          <h4>Geo Location</h4>
          <p>
            Latitude: {details.address.geo.lat} Longitude:{" "}
            {details.address.geo.lng}{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Details;
