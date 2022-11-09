import { Link, useLocation } from "react-router-dom";
import "./details.css";
import axios from "axios";

import React, { useState, useEffect } from "react";

const Details = () => {
  const location = useLocation();
  const path = location.pathname.split("/")[2];

  const [trip, setTrip] = useState({
    destination: "",
    state: "",
    photo: "",
    price: 0,
    duration: "",
    seasons: "",
    desc: [],
    itinerary: [],
    mostVis: "",
  });

  useEffect(() => {
    axios
      .get("https://mhill-api.herokuapp.com/trips/" + path)
      .then((res) => {
        console.log(res.data);
        setTrip(res.data);
        console.log(trip.itinerary);
      })
      .catch((err) => console.log(err));
  }, [path]);

  console.log(trip.itinerary);

  let i = 0;
  return (
    <div className="trip">
      <div className="tripMain">
        <img className="tripImg" src={trip.photo}></img>
        {/* <div id="owl-example" className="owl-carousel">
          <div><img src="https://via.placeholder.com/300x300/936/c69/?text=1" alt=""/></div>
          <div><img src="https://via.placeholder.com/300x300/693/9c6/?text=2" alt=""/></div>
          <div><img src="https://via.placeholder.com/300x300/369/69c/?text=3" alt=""/></div>
          <div><img src="https://via.placeholder.com/300x300/c33/f66/?text=4" alt=""/></div>
          <div><img src="https://via.placeholder.com/300x300/099/3cc/?text=5" alt=""/></div>
          <div><img src="https://via.placeholder.com/300x300/f93/fc6/?text=6" alt=""/></div>
        </div> */}
        <h1 className="tripDest">{trip.destination}</h1>
        <h2 className="tripState">{trip.state}</h2>
      </div>

      <div className="tripInfo">
        <div className="tripMeta">
          <div className="tripMetaComp">
            Duration: <b>{trip.duration}</b>
            <span>, </span>
            {trip.seasons === "summer-and-winter" ? (
              <span className="tripSeason">SUMMER/WINTER</span>
            ) : (
              <span className="tripSeason">{trip.seasons.toUpperCase()}</span>
            )}
          </div>
          <div className="tripMetaComp">
            Price: ₹<b>{trip.price}</b>
          </div>
        </div>

        <div className="tripDesc">
          {trip.desc.map((para) => {
            return <p className="intro">{para}</p>;
          })}
          {console.log(trip.itinerary)}
          {trip.itinerary.map((it) => {
            i = i + 1;
            return (
              <>
                <div className="dayTitle">
                  <span className="dayX">{"Day " + i}</span>
                  <span>:</span>
                  <span className="headX">{it.head}</span>
                </div>
                {it.detail.map((para) => {
                  return <p className="details">{para}</p>;
                })}
                <ul className="point-list">
                  {it.points.map((pt) => {
                    return <li className="points">{pt}</li>;
                  })}
                </ul>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Details;