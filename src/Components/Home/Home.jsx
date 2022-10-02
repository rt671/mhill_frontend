import React from "react/client";
import './home.css'
import video from '../../Assets/video.mp4'
import {GrLocation} from 'react-icons/gr'
import {HiFilter} from 'react-icons-hi'

const Home = () => {
    return (
        <section className="home">
            <div className="overlay"></div>
            <video src={video} mute autoPlay loop type="video/mp4"></video>

            <div className="homeContent container">
                <div className="textDiv">
                    
                    <span className="smallText">
                        Packages Offered
                    </span>

                    <h1 className="homeTitle">
                        Search Your Preferred Destination
                    </h1>
                </div>

                <div className="cardDiv grid">
                    
                        <div className="destinationInput">
                            <label htmlFor="city">
                                Search Your Destination
                            </label>
                            <div className="input flex">
                                <input type="text" placeHolder='Enter name here...'/>
                                <GrLocation className = "icon"/>
                            </div>
                        </div>

                        <div className="dateInput">
                            <label htmlFor="date">
                                Select trip start and end dates:
                            </label>
                            <div className="input flex">
                                <input type="date"/>
                            </div>
                        </div>

                        <div className="priceInput">
                            <div className="label_total flex">
                                <label htmlFor="price">Max price:</label>
                                <h3 className="total">$5000</h3>
                            </div>
                            <div className="input flex">
                                <input type="range" max = "5000" min = "1000" />
                            </div>
                        </div>

                        <div className="searchOptions">
                            <HiFilter className="icon"/>
                            <span>MORE FILTERS</span>
                        </div>
                </div>
                <div className="homrFooterIcons flex">
                    <div className="rightIcons">
                        <FiFacebook className="icon"/>
                        <AiOutlineInstagram className="icon"/>
                        <FiFacFaTripadvisorebook className="icon"/>
                    </div>
                    <div className="leftIcons">
                        
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home