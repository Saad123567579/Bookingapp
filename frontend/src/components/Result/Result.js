import React from "react";
import "./Result.css";

const Result = () => {
  // Dummy data for the card
  const title = "Luxury Hotel";
  const rating = 9.5;
  const price = 250;
  const description = "Enjoy a luxurious stay at our 5-star hotel.";
  const amenities = ["Free Wi-Fi", "Swimming Pool", "Spa", "Gym"];
  const totalPrice = 750;

  return (
    <div className="result-card">
      <div className="image-container">
        <img
          src="https://cdn.pixabay.com/photo/2016/04/01/00/08/toronto-1298016_1280.jpg"
          alt="Hotel"
        />
      </div>
      <div className="details-container">
        <h2 className="title">{title}</h2>
        <div className="rating">
          <span>Rating: {rating}</span>
          <span>Superb</span>
        </div>
        <div className="price">From ${price}/night</div>
        <p className="description">{description}</p>
        <div className="amenities">
          <h4>Amenities:</h4>
          <ul>
            {amenities.map((amenity) => (
              <li key={amenity}>{amenity}</li>
            ))}
          </ul>
        </div>
        <div className="total-price">{totalPrice}</div>
        <button className="availability-btn">See Availability</button>
      </div>
    </div>
  );
};

export default Result;
