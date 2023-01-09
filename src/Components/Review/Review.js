import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import "./review.css";
import { Rating } from "react-simple-star-rating";

const Review = () => {
  const [reviews, setReviews] = useState([]);

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
  const [file, setFile] = useState(null);
  const [rating, setRating] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newReview = {
      title,
      author,
      body,
      rating,
    };

    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      newReview.image = filename;
      axios
        .post("https://api.mhilladventure.com/upload/", data)
        .then((res) => console.log(res))
        .catch((err) => console.log("THERE'S AN ERROR", err));
    }
    axios
      .post("https://api.mhilladventure.com/reviews/", newReview)
      .then((res) => console.log("Posted the review!"))
      .catch((err) => console.log(err));
    // window.location.replace("/");
  };

  const handleRating = (rate) => {
    setRating(rate);
    console.log(rate);
  };

  const PF = "https://api.mhilladventure.com/images/";
  return (
    <div className="reviewPage">
      <h3 className="reviewHead">Reviews</h3>
      <div className="grid">
        {reviews.map((review) => {
          return (
            <div className="singleReview">
              <p className="reviewTitle">{review.title}</p>
              <p>{review.rating}</p>
              <Rating initialValue={review.rating} readonly={true}></Rating>
              <div className="reviewAuthor">{review.author}</div>
              {review.image && (
                <img src={PF + review.image} alt="The Uploaded Image" />
              )}
              <div>{review.body}</div>
            </div>
          );
        })}

        {
          // Editing
        }
        <div className="singleReview">
          <div className="reviewTitle">Post you review</div>
          <form onSubmit={handleSubmit} enctype="multipart/form-data">
            <div>
              <input
                className="writeInput"
                placeholder="What do you want to highlight?"
                type="text"
                onChange={(e) => setTitle(e.target.value)}
              ></input>
              <Rating onClick={handleRating}></Rating>
            </div>
            <div>
              <input
                className="authorip"
                placeholder="What's your name?"
                type="text"
                onChange={(e) => setAuthor(e.target.value)}
              ></input>
              <input type="file" onChange={(e) => setFile(e.target.files[0])} />
            </div>
            {file && <img src={URL.createObjectURL(file)} alt="" />}
            <div>
              <textarea
                className="writeInput writeText"
                placeholder=" How was it?"
                onChange={(e) => setBody(e.target.value)}
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
