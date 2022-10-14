import React, {useEffect, useState} from "react";
import './package.css';
import axios from 'axios';
import { HiOutlineClipboardCheck, HiOutlineLocationMarker } from "react-icons/hi";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Package = () => {
    const location = useLocation();
    const path = location.pathname.split("/")[2];
    const [trips, setTrips] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/trips/seasons/" + path)
        .then(res => 
            {
                console.log(res.data);
                setTrips(res.data);
            })
        .catch(err => console.log(err)); 
    }, [path]);

    return (
        <section className="package container section">
            <div className="secTitle">
                <h3 className="title">
                  Packages Offered...
                </h3>
              </div>

            <div className="secContent grid">
                {
                    trips.map((trip) => {
                        return (
                            <div key={trip._id}  className="singleDestination">
                                {trip.photo && 
                                <div className="imageDiv">
                                    <img src={trip.photo} alt={trip.destination}/>
                                </div>
                                }
                                <div className="cardInfo">
                                <div className="titles">
                                    <h4 className="destTitle">{trip.destination}</h4>
                                    <span className="continent flex">
                                        <HiOutlineLocationMarker className="icon"/>
                                        <span className="name">{trip.state}</span>
                                    </span>
                                    </div>

                                    <div className="flex fees">
                                        <div className="price">
                                            <h5>{trip.duration}</h5>
                                        </div>
                                        <div className="price">
                                            <h5>₹{trip.price}</h5>
                                        </div>
                                    </div>

                                    <div className="desc">
                                        <p>{trip.desc}</p>
                                        <Link to={`/trips/${trip._id}`} className="link"><button className="btn flex">
                                            DETAILS <HiOutlineClipboardCheck className="icon"/>
                                        </button></Link>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Package;