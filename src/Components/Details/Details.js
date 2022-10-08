import { Link, useLocation } from "react-router-dom";
import "./details.css";
import axios from "axios";

import React, {useState, useEffect} from 'react'

const Details = () => {
    const location = useLocation();
    const path = (location.pathname.split("/")[2]);
    
    const [trip, setTrip] = useState([]);    
    useEffect(() => {
        axios.get("http://localhost:5000/trips/" + path)
        .then(res => 
            {
                console.log(res.data);
                setTrip(res.data);
            })
        .catch(err => console.log(err)); 
    }, [path]);

  return (
    <div className="singleTrip">
        <div className="singleTripWrapper">
        <img className="singleTripImg" src={trip.photo}></img>
        <h1 className="singleTripTitle">{trip.destination}</h1>
        <h2 className="singleTripTitle">{trip.state}</h2>
        </div>
        <div className="singleTripInfo">
          <span>
            Price: ₹
            <b className="singleTripPrice">
                {trip.price}
            </b>
          </span>
        </div>
        <p className="singlePostDesc">
            {trip.desc}
        </p>
    </div>
  )
}

export default Details