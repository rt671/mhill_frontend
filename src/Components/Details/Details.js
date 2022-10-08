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
    }, [path])

  return (
    <div className="post">
        <img className="postImg" src="trip.photo"></img>
    </div>
  )
}

export default Details



//   return (
//     <div className="post">
//       {post.photo &&
//         <img
//           className="postImg"
//           src={PF + post.photo || `https://wallpaperaccess.com/full/2125015.jpg`}
//           alt=""
//         />
//       }
//       <div className="postInfo">
//         <div className="postCats">
//           {post.categories.map(c => (
//             <span className="postCat">{c.name}</span>
//           ))}
//         </div>
//         <span className="postTitle">
//           <Link to={`/post/${post._id}`} className="link">
//             {post.title}
//           </Link>
//         </span>
//         <hr />
//         <span className="postDate">{new Date(post.createdAt).toDateString()}</span>
//       </div>
//       <p className="postDesc">{post.desc}</p>
//     </div>
//   );
// }
