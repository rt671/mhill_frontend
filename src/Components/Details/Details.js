import { useLocation } from "react-router-dom";
import "./details.css";
import axios from "axios";

import React, { useState, useEffect } from "react";
import CarouselComponent from "../CarouselComponent/CarouselComponent";

const Details = () => {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [days, setDays] = new useState(0);
  const [dayDetail, setDayDetail] = new useState(Array(days).fill(false));

  const toggleDayDetail = (idx) => {
    console.log("Hello, toggling", days, dayDetail);
    const newDayDetail = [...dayDetail];
    newDayDetail[idx] = !newDayDetail[idx];
    setDayDetail(newDayDetail);
  };

  const [trip, setTrip] = useState({
    destination: "",
    state: "",
    photos: [],
    price: 0,
    duration: "",
    seasons: "",
    desc: [],
    itinerary: [],
    mostVis: "",
  });

  useEffect(() => {
    axios
      .get("http://localhost:5000/trips/" + path)
      .then((res) => {
        console.log(res.data);
        setTrip(res.data);
        console.log(trip.itinerary);
        setDays(trip.itinerary.length);
      })
      .catch((err) => console.log(err));
  }, [path]);

  console.log(trip.itinerary);

  let i = 0;
  return (
    <div className="trip">
      <div className="tripMain">
        <CarouselComponent photos={trip.photos}></CarouselComponent>
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
          {trip.itinerary.map((it, idx) => {
            i = i + 1;
            return (
              <>
                <div className="dayTitle" onClick={() => toggleDayDetail(idx)}>
                  <div>
                  <span className="dayX">{"Day " + i}</span>
                  <span>:</span>
                  <span className="headX">{it.head}</span>
                  </div>
                  <div className="expand" >+</div>
                </div>
                {dayDetail[idx] && (
                  <div>
                    {it.detail.map((para) => {
                      return <p className="details">{para}</p>;
                    })}
                    <ul className="point-list">
                      {it.points.map((pt) => {
                        return <li className="points">{pt}</li>;
                      })}
                    </ul>
                  </div>
                )}
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Details;
