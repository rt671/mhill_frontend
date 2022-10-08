import React, {useEffect, useState} from "react";
import './package.css';
import Aos from 'aos'
// import 'aos/dist/aos.css'
import axios from 'axios'
import { HiOutlineClipboardCheck, HiOutlineLocationMarker } from "react-icons/hi";

const Package = () => {
    const [trips, setTrips] = useState([]);
    useEffect(() => {
        Aos.init({duration: 2000})
    }, [])

    useEffect(() => {
        axios.get("http://localhost:5000/trips/")
        .then(res => 
            {
                console.log(res.data);
                setTrips(res.data);
            })
        .catch(err => console.log(err)); 
    }, [])


    return (
        <section className="main container section">
            <div className="secTitle">
                <h3 className="title">
                    Packages Offered
                </h3>
            </div>

            <div className="secContent grid">
                {
                    trips.map((trip) => {
                        return (
                            <div key={trip._id}  data-aos="fade-up" className="singleDestination">
                                {trip.photo && 
                                <div className="imageDiv">
                                    <img src={trip.photo} alt={trip.destination}/>
                                </div>
                                }
                                <div className="cardInfo">
                                    <h4 className="destTitle">{trip.destination}</h4>
                                    <span className="continent flex">
                                        <HiOutlineLocationMarker className="icon"/>
                                        <span className="name">{trip.state}</span>
                                    </span>

                                    <div className="flex fees">
                                        <div className="price">
                                            <h5>{trip.price}</h5>
                                        </div>
                                    </div>

                                    <div className="desc">
                                        <p>{trip.desc}</p>
                                        <button className="btn flex">
                                            DETAILS <HiOutlineClipboardCheck className="icon"/>
                                        </button>
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

export default Package