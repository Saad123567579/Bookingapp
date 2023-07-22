import React from "react";
import "./Header.css";
import { useForm } from "react-hook-form";

const Header = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <div className="header">
      <div className="lis">
        <ul className="list">
          <li className="list-item">Stays</li>
          <li className="list-item">Flights</li>
          <li className="list-item">Car Rentals</li>
          <li className="list-item">Attractions</li>
          <li className="list-item">Airport Taxis</li>
        </ul>
      </div>
      <h1 className="heading"> A lifetime discount, its genious</h1>
      <div className="text">
        <p className="heading">
          {" "}
          Get rewarded for your travels - unlock instant savings of 10% or more
          with a free Lamabooking account
        </p>
        <button className="btn-reg">Sign in/Register</button>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} >
        <div className="search">
          <div className="search-div">
            <div className="location">
              <label htmlFor="locations">Where are you going?</label>
              <input
                type="text"
                id="locations"
                name="location"
                placeholder="Enter your destination"
                {...register("location", { required: true })}
              />
            </div>
            <div className="date">
              <label htmlFor="check-in">Check-in:</label>
              <input
                type="date"
                id="check-in"
                name="check-in"
                {...register("checkin", { required: true })}
              />
              <label htmlFor="check-out">Check-out:</label>
              <input
                type="date"
                id="check-out"
                name="check-out"
                {...register("checkout", { required: true })}
              />
            </div>
            <div className="people">
              <label htmlFor="rooms">Rooms:</label>
              <input
                type="number"
                id="rooms"
                name="rooms"
                min="1"
                max="10"
                {...register("rooms", { required: true })}
              />
              <label htmlFor="adults">Adults:</label>
              <input
                type="number"
                id="adults"
                name="adults"
                min="1"
                max="10"
                {...register("adults", { required: true })}
              />
              <label htmlFor="children">Children:</label>
              <input
                type="number"
                id="children"
                name="children"
                min="0"
                max="10"
                {...register("children", { required: true })}
              />
            </div>
          </div>
          <input type="submit" value="Search" />
        </div>
      </form>
    </div>
  );
};

export default Header;
