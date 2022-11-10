import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./carousel.css";
import React from "react";

const Carousel = () => {
  return (
    <div>
      <div class="container-fluid">
        <OwlCarousel items={1} margin={8} autoplay ={true} className="owl-theme" loop nav>
          <div>
            <img className="img" src={"https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg"} />
          </div>
          <div>
            <img className="img" src={"https://media.istockphoto.com/id/1354441996/photo/image-of-open-antique-book-on-wooden-table-with-glitter-overlay.jpg?b=1&s=170667a&w=0&k=20&c=O_VZbgONe4WTXPOEvwKYezhqFkzAXpr2g-lCdpdj5FU="} />
          </div>
          <div>
            <img className="img" src={"assets/img/img4.jpg"} />
          </div>
          <div>
            <img className="img" src={"assets/img/img3.jpg"} />
          </div>
          <div>
            <img className="img" src={"assets/img/img5.jpg"} />
          </div>
          <div>
            <img className="img" src={"assets/img/img6.jpg"} />
          </div>
          <div>
            <img className="img" src={"assets/img/img7.jpg"} />
          </div>
        </OwlCarousel>
      </div>
    </div>
  );
};

export default Carousel;
