import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import "./carousel_component.css";

const CarouselComponent = ({photos}) => {
    console.log(photos);
    console.log("length is ", photos.length);
  return (
    <div className="carousel-wrapper">
    <Carousel infiniteLoop useKeyboardArrows autoPlay showThumbs={false}>  
      { photos.map((photo) => {
        console.log(photo);
        return <div><img className="img" src={photo}></img></div>;
       }) 
    } 
  </Carousel> 
  </div> 
  );
};

export default CarouselComponent;
