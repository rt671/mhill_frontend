import React from 'react'
import {
    HiOutlineClipboardCheck,
    HiOutlineLocationMarker,
  } from "react-icons/hi";
import { Link } from "react-router-dom";
import "./card.css";

const card = ({trips}) => {
  return (
    <div className="secContent grid">
    {trips.map((trip) => {
      return (
        <div
          key={trip._id}
          data-aos="fade-up"
          className="singleDestination"
        >
          {trip.photo && (
            <div className="imageDiv">
              <img src={trip.photo} alt={trip.destination} />
            </div>
          )}
          <div className="cardInfo">
            <div className="titles">
              <div className="tseason">
                <span className="destTitle">{trip.destination}</span>
                <span className="destSeason">{trip.seasons}</span>
              </div>
              <span className="continent flex">
                <HiOutlineLocationMarker className="icon" />
                <span className="name">{trip.state}</span>
              </span>
            </div>

            <div className="flex fees">
              <div className="duration">
                <h5>{trip.duration}</h5>
              </div>
              <div className="price">
                <h5>₹{trip.price}</h5>
              </div>
            </div>

            <div className="desc">
              <p>{trip.desc}</p>
              <Link to={`/trips/${trip._id}`} className="link">
                <button className="btn flex">
                  DETAILS <HiOutlineClipboardCheck className="icon" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      );
    })}
  </div>
  )
}

export default card