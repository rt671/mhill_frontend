import React, { useEffect, useState } from "react";
import "./main.css";
import Aos from "aos";
import "aos/dist/aos.css";
import axios from "axios";
import Card from "../Card/Card";

const Main = () => {
  const [trips, setTrips] = useState([]);
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:5000/trips/")
      .then((res) => {
        console.log(res.data);
        setTrips(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <section className="main container section">
        <h3 data-aos="fade-right" className="title">
          Most Visited Destinations
        </h3>
      <Card trips={trips}/>
    </section>
  );
};

export default Main;
