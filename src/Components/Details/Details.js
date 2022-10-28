import { Link, useLocation } from "react-router-dom";
import "./details.css";
import axios from "axios";
// import ScriptTag from 'react-script-tag';

import React, { useState, useEffect } from "react";

const Details = () => {
  const location = useLocation();
  const path = location.pathname.split("/")[2];

  const [trip, setTrip] = useState({
    destination: "",
    state: "",
    photo: "",
    price: "",
    duration: "",
    seasons: "",
    desc: [],
    days:[],
    mostVis: "",
  });

  useEffect(() => {
    axios
      .get("https://mhill-api.herokuapp.com/trips/" + path)
      .then((res) => {
        console.log(res.data);
        setTrip(res.data);
        console.log(trip.days);
      })
      .catch((err) => console.log(err));
  }, [path]);

  // useEffect(() => {
  //   <ScriptTag type="text/javascript" src="owl.js" />
  // }, []);
  let i=0;
  return (
    <div className="singleTrip">
      <div className="singleTripWrapper">
        <img className="singleTripImg" src={trip.photo}></img>
        {/* <div id="owl-example" className="owl-carousel">
          <div><img src="https://via.placeholder.com/300x300/936/c69/?text=1" alt=""/></div>
          <div><img src="https://via.placeholder.com/300x300/693/9c6/?text=2" alt=""/></div>
          <div><img src="https://via.placeholder.com/300x300/369/69c/?text=3" alt=""/></div>
          <div><img src="https://via.placeholder.com/300x300/c33/f66/?text=4" alt=""/></div>
          <div><img src="https://via.placeholder.com/300x300/099/3cc/?text=5" alt=""/></div>
          <div><img src="https://via.placeholder.com/300x300/f93/fc6/?text=6" alt=""/></div>
        </div> */}
        <h1 className="singleTripDest">{trip.destination}</h1>
        <h2 className="singleTripState">{trip.state}</h2>
      </div>
      <div className="singleTripInfo">
        <div className="singleTripInfoDiv">
          Duration: <b>{trip.duration}</b>
          <span>, </span>
          <span className="singleTripInfoSeason">{trip.seasons.toUpperCase()}</span>
        </div>
        <div className="singleTripInfoDiv">
          Price: ₹<b>{trip.price}</b>
        </div>
      </div>
      <div className="singleTripDesc">
        {trip.desc.map((para) => {
          return (<p className="intro">{para}</p>);
        })}
        {
          trip.days.map((day) => {
            i=i+1;
            return (
              <>
               <div className="dayX">{"Day " + i}</div>
               <p>{day}</p>
              </>
            )
          })
        }
      </div>
    </div>
  );
};

export default Details;
