import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import "./carousel_component.css";


const CarouselComponent = ({photos, classname}) => {

    console.log(photos);
    console.log("length is ", photos.length);
    let number;
    if(classname==="details") number=0;
    else number = 4;
  return (
    <div className="carousel-wrapper">
    <Carousel infiniteLoop useKeyboardArrows autoPlay showThumbs={false}> 
      { photos.map((photo) => {
        console.log(photo);
        return <div><img className= {classname} src={photo}></img></div>;
       }) 
    } 
    </Carousel>
  </div> 
  );
};

export default CarouselComponent;
