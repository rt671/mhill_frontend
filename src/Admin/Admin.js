import React from 'react'
import axios from 'axios';
import { useState, useEffect} from 'react';
import "./admin.css"

const Reviews = () => {
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

    const deleteReview = (id) => {
        console.log(id);
        axios
            .delete("https://api.mhilladventure.com/reviews/" + id)
            .then((res) => {
                console.log(id)
            // console.log("Deleted");
            window.location.replace("/admin");
            })
            .catch((err) => console.log(err));
    }
    return (
        <div className="admincover">
        <h2>Reviews</h2>
        {reviews.map((review) => {
            return (
              <section className="container section singleReview">
                <p className="reviewTitle">{review.title}</p>
                <div className="reviewAuthor">{review.author}</div>
                <div>{review.body}</div>
                <button className="writeSubmit" onClick={() => deleteReview(review._id)}>
                    Delete
                </button>
              </section>
            );
          })}
        </div>
    )
}

export default Reviews