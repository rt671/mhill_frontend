import React, { useEffect, useState } from "react";
import "./package.css";
import axios from "axios";
import { useLocation } from "react-router-dom";
import Card from "../Cards/Cards";

const Package = () => {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    axios
      .get("http://mhill-api.herokuapp.com/trips/" + path)
      .then((res) => {
        console.log(res.data);
        setTrips(res.data);
      })
      .catch((err) => console.log(err));
  }, [path]);

  let seasonName = path[0].toUpperCase() + path.slice(1);
  console.log(seasonName);
  return (
    <section className="package container section">
        <h3 className="title">
            {seasonName + " Packages Offered..."}
            </h3>
      <Card trips={trips} />
    </section>
  );
};

export default Package;
