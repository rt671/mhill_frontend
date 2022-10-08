import { Link } from "react-router-dom";
import "./details.css";

import React, {useState, useEffect} from 'react'

const Details = () => {
    const [trips, setTrips] = useState([]);    

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
    <div className="post">
        <img className="postImg"></img>
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
