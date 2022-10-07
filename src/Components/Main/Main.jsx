import React, {useEffect} from "react";
import './main.css'

import img1 from '../../Assets/img1.jpg'
import img2 from '../../Assets/img2.JPG'
import img3 from '../../Assets/img3.JPG'
import img4 from '../../Assets/img4.JPG'

import Aos from 'aos'
import 'aos/dist/aos.css'

import { HiOutlineClipboardCheck, HiOutlineLocationMarker } from "react-icons/hi";

const Data = [
    {
      id:1,
      imgSrc: img1,
      planTitle: 'qwerty',
      destTitle: 'Satopanth/Swargarohini Trek',
      location: 'Uttarakhand',
      fees: '\u20A8 13999',
      description: 'Satopanth Tal is a lake located in Satopanth, India, located in the midst of snow-capped peaks at an altitude of 4600m (15,100 ft) above sea-level. The lake is considered to be of religious significance to the local people and residents of Mana village. Tourists can enjoy ecstatic views of the Himalyas while undergoing the Trek'
    },
    
    {
      id:2,
      imgSrc: img2,
      planTitle: 'qwerty',
      destTitle: 'Kausi Pass Trek',
      location: 'Nigeria',
      fees: '\u20A8 13999',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt illo inventore vitae iure libero eum accusantium cum exercitationem nulla quibusdam ex nemo impedit, pariatur nobis minima eligendi quod similique! Quisquam? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint in excepturi, distinctio ratione nisi iste tempore rem quia, sed nesciunt dolore, ea autem explicabo dicta voluptatum? Et molestiae est aperiam. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur iusto quae, autem vero suscipit, temporibus quas similique est alias impedit deleniti nemo aspernatur numquam et officiis voluptas molestiae provident illum.'
    },
  
    {
      id:3,
      imgSrc: img3,
      planTitle: 'qwerty',
      destTitle: 'Dronagiri / Bagani Trek',
      location: 'Nigeria',
      fees: '\u20A8 13999',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt illo inventore vitae iure libero eum accusantium cum exercitationem nulla quibusdam ex nemo impedit, pariatur nobis minima eligendi quod similique! Quisquam? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint in excepturi, distinctio ratione nisi iste tempore rem quia, sed nesciunt dolore, ea autem explicabo dicta voluptatum? Et molestiae est aperiam. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur iusto quae, autem vero suscipit, temporibus quas similique est alias impedit deleniti nemo aspernatur numquam et officiis voluptas molestiae provident illum.'
    },
  
    {
      id:4,
      imgSrc: img4,
      planTitle: 'qwerty',
      destTitle: 'Kakbhusandi Tal Trek',
      location: 'India',
      fees: '\u20A8 13999',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt illo inventore vitae iure libero eum accusantium cum exercitationem nulla quibusdam ex nemo impedit, pariatur nobis minima eligendi quod similique! Quisquam? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint in excepturi, distinctio ratione nisi iste tempore rem quia, sed nesciunt dolore, ea autem explicabo dicta voluptatum? Et molestiae est aperiam. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur iusto quae, autem vero suscipit, temporibus quas similique est alias impedit deleniti nemo aspernatur numquam et officiis voluptas molestiae provident illum.'
    },

    {
        id:5,
        imgSrc: img4,
        planTitle: 'qwerty',
        destTitle: 'Valley of Flowers / Bhunder Khai Trek',
        location: 'India',
        fees: '\u20A8 13999',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt illo inventore vitae iure libero eum accusantium cum exercitationem nulla quibusdam ex nemo impedit, pariatur nobis minima eligendi quod similique! Quisquam? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint in excepturi, distinctio ratione nisi iste tempore rem quia, sed nesciunt dolore, ea autem explicabo dicta voluptatum? Et molestiae est aperiam. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur iusto quae, autem vero suscipit, temporibus quas similique est alias impedit deleniti nemo aspernatur numquam et officiis voluptas molestiae provident illum.'
    },

    {
        id:6,
        imgSrc: img4,
        planTitle: 'qwerty',
        destTitle: 'Neelkanth Khal Trek',
        location: 'India',
        fees: '\u20A8 13999',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt illo inventore vitae iure libero eum accusantium cum exercitationem nulla quibusdam ex nemo impedit, pariatur nobis minima eligendi quod similique! Quisquam? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint in excepturi, distinctio ratione nisi iste tempore rem quia, sed nesciunt dolore, ea autem explicabo dicta voluptatum? Et molestiae est aperiam. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur iusto quae, autem vero suscipit, temporibus quas similique est alias impedit deleniti nemo aspernatur numquam et officiis voluptas molestiae provident illum.'
    },

    {
        id:7,
        imgSrc: img4,
        planTitle: 'qwerty',
        destTitle: 'Auli / Kuari Pass / Ghat Trek',
        location: 'India',
        fees: '\u20A8 13999',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt illo inventore vitae iure libero eum accusantium cum exercitationem nulla quibusdam ex nemo impedit, pariatur nobis minima eligendi quod similique! Quisquam? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint in excepturi, distinctio ratione nisi iste tempore rem quia, sed nesciunt dolore, ea autem explicabo dicta voluptatum? Et molestiae est aperiam. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur iusto quae, autem vero suscipit, temporibus quas similique est alias impedit deleniti nemo aspernatur numquam et officiis voluptas molestiae provident illum.'
    },

    {
        id:8,
        imgSrc: img4,
        planTitle: 'qwerty',
        destTitle: 'Sapthkund Trek',
        location: 'India',
        fees: '\u20A8 13999',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt illo inventore vitae iure libero eum accusantium cum exercitationem nulla quibusdam ex nemo impedit, pariatur nobis minima eligendi quod similique! Quisquam? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint in excepturi, distinctio ratione nisi iste tempore rem quia, sed nesciunt dolore, ea autem explicabo dicta voluptatum? Et molestiae est aperiam. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur iusto quae, autem vero suscipit, temporibus quas similique est alias impedit deleniti nemo aspernatur numquam et officiis voluptas molestiae provident illum.'
    },

    {
        id:9,
        imgSrc: img4,
        planTitle: 'qwerty',
        destTitle: 'Ghat to Hemkund / Routhi Trek',
        location: 'India',
        fees: '\u20A8 13999',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt illo inventore vitae iure libero eum accusantium cum exercitationem nulla quibusdam ex nemo impedit, pariatur nobis minima eligendi quod similique! Quisquam? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint in excepturi, distinctio ratione nisi iste tempore rem quia, sed nesciunt dolore, ea autem explicabo dicta voluptatum? Et molestiae est aperiam. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur iusto quae, autem vero suscipit, temporibus quas similique est alias impedit deleniti nemo aspernatur numquam et officiis voluptas molestiae provident illum.'
    },

    {
        id:10,
        imgSrc: img4,
        planTitle: 'qwerty',
        destTitle: 'Panpatia Col Trek',
        location: 'India',
        fees: '\u20A8 13999',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt illo inventore vitae iure libero eum accusantium cum exercitationem nulla quibusdam ex nemo impedit, pariatur nobis minima eligendi quod similique! Quisquam? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint in excepturi, distinctio ratione nisi iste tempore rem quia, sed nesciunt dolore, ea autem explicabo dicta voluptatum? Et molestiae est aperiam. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur iusto quae, autem vero suscipit, temporibus quas similique est alias impedit deleniti nemo aspernatur numquam et officiis voluptas molestiae provident illum.'
    },

    {
        id:11,
        imgSrc: img4,
        planTitle: 'qwerty',
        destTitle: 'Auli / Kuari Pass / RoopKund Trek',
        location: 'India',
        fees: '\u20A8 13999',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt illo inventore vitae iure libero eum accusantium cum exercitationem nulla quibusdam ex nemo impedit, pariatur nobis minima eligendi quod similique! Quisquam? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint in excepturi, distinctio ratione nisi iste tempore rem quia, sed nesciunt dolore, ea autem explicabo dicta voluptatum? Et molestiae est aperiam. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur iusto quae, autem vero suscipit, temporibus quas similique est alias impedit deleniti nemo aspernatur numquam et officiis voluptas molestiae provident illum.'
    },

    {
        id:12,
        imgSrc: img4,
        planTitle: 'qwerty',
        destTitle: 'Vasundhra Trek',
        location: 'India',
        fees: '\u20A8 13999',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt illo inventore vitae iure libero eum accusantium cum exercitationem nulla quibusdam ex nemo impedit, pariatur nobis minima eligendi quod similique! Quisquam? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint in excepturi, distinctio ratione nisi iste tempore rem quia, sed nesciunt dolore, ea autem explicabo dicta voluptatum? Et molestiae est aperiam. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur iusto quae, autem vero suscipit, temporibus quas similique est alias impedit deleniti nemo aspernatur numquam et officiis voluptas molestiae provident illum.'
    },

    {
        id:13,
        imgSrc: img4,
        planTitle: 'qwerty',
        destTitle: 'Neelkanth Base Camp Trek',
        location: 'India',
        fees: '\u20A8 13999',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt illo inventore vitae iure libero eum accusantium cum exercitationem nulla quibusdam ex nemo impedit, pariatur nobis minima eligendi quod similique! Quisquam? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint in excepturi, distinctio ratione nisi iste tempore rem quia, sed nesciunt dolore, ea autem explicabo dicta voluptatum? Et molestiae est aperiam. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur iusto quae, autem vero suscipit, temporibus quas similique est alias impedit deleniti nemo aspernatur numquam et officiis voluptas molestiae provident illum.'
    },
]

const Main = () => {

    // react hook for scroll animation
    useEffect(() => {
        Aos.init({duration: 2000})
    }, [])

    return (
        <section className="main container section">
            <div className="secTitle">
                <h3  data-aos="fade-right" className="title">
                    Most Visited Destinations
                </h3>
            </div>

            <div className="secContent grid">
                {
                    Data.map(({id, imgSrc, destTitle, location, grade, fees, 
                    description }) => {
                        return (
                            <div key={id}  data-aos="fade-up" className="singleDestination">
                                <div className="imageDiv">
                                    <img src={imgSrc} alt={destTitle}/>
                                </div>

                                <div className="cardInfo">
                                    <h4 className="destTitle">{destTitle}</h4>
                                    <span continent flex>
                                        <HiOutlineLocationMarker className="icon"/>
                                        <span className="name">{location}</span>
                                    </span>

                                    <div className="flex fees">
                                        <div className="price">
                                            <h5>{fees}</h5>
                                        </div>
                                    </div>

                                    <div className="desc">
                                        <p>{description}</p>
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

export default Main;