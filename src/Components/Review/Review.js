import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import "./review.css";

const Review = () => {
  const [reviews, setReviews] = useState([]);

  // console.log("REVIEWS TRYING TO BE FOUND")
  useEffect(() => {
    axios
      .get("https://api.mhilladventure.com/reviews/all")
      .then((res) => {
        setReviews(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newReview = {
      title, author, body
    }
    axios.post("https://api.mhilladventure.com/reviews/", newReview)
    .then(res => console.log("Posted the review!"))
    .catch(err => console.log(err));
    window.location.replace("/");
  }

  return (
    <div className="reviewPage">
      <h3 className="reviewHead">Reviews</h3>
      <div className="grid">
        {reviews.map((review) => {
          return (
            <div className="singleReview">
              <p className="reviewTitle">{review.title}</p>
              <div className="reviewAuthor">{review.author}</div>
              <div>{review.body}</div>
            </div>
          );
        })}
        <div className="singleReview">
          <div className="reviewTitle">Post you review</div>
          <form onSubmit={handleSubmit}>
            <div>
              <input className="writeInput"
                placeholder="What do you wanna highlight?"
                type="text"
                onChange={e => setTitle(e.target.value)}
              ></input>
            </div>
            <div >
              <input className="authorip" placeholder="What's your name?" type="text" onChange={e => setAuthor(e.target.value)}></input>
            </div>
            <div>
              <textarea
                className="writeInput writeText"
                placeholder=" How was it?"
                onChange={e => setBody(e.target.value)}
              ></textarea>
            </div>
            <button className="writeSubmit" type="submit">
          Post
        </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Review;
