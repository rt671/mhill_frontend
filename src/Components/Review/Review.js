import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import "./review.css";
import { Rating } from "react-simple-star-rating";

const Review = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/reviews/all")
      .then((res) => {
        setReviews(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [body, setBody] = useState("");
  const [images, setImages] = useState([]);
  const [rating, setRating] = useState(0);
  const [fileLimit, setFileLimit] = useState(false);
  const MAX_CNT = 10;

  const handleImages = files => {
    const uploaded = [...images];
    let limitExceeded = false;
    files.some((file) => {
      if (uploaded.findIndex((f) => f.name === file.name) === -1) {
        uploaded.push(file);
        if (uploaded.length === MAX_CNT) setFileLimit(true);
        if (uploaded.length > MAX_CNT) {
            alert(`Maximum of ${MAX_CNT} files are allowed`);
            setFileLimit(false);
            limitExceeded = true;
            return true;
          }
            }
    })
    if(!limitExceeded) setImages(uploaded)
  }

  const handleImageUpload = (e)  => {
    const chosenImages = Array.prototype.slice.call(e.target.files)
    handleImages(chosenImages);
  }

  const deleteImage = (file) => {
    console.log("Deleting the file", file.name);
    const img = [...images];
    let idx = img.indexOf(file);
    img.splice(idx, 1);
    setImages(img);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const newReview = {
      title,
      author,
      body,
      rating,
    };
    {console.log(images.length)}
    const imgNameArr = [];
    if (images.length>0) {
      const data = new FormData();
      images.map(file => {
        console.log(file);
        console.log(file.name);
        console.log(file.name.split('.')[1]);
        const filename = file.name.split('.')[0] + '-' + Math.floor(Date.now()/1000) + '.' + file.name.split('.')[1] ;
        data.append("name", filename);
        // console.log(file.originalname);
        data.append("files", file);
       imgNameArr.push(filename);
      })
      newReview.image = imgNameArr;
      axios
        .post("http://localhost:5000/upload/", data)
        .then((res) => {
          console.log("UPLOAD SUCCESSFUL", res);
          axios
            .post("http://localhost:5000/reviews/", newReview)
            .then((res) => {
              console.log("Posted the review!");
              // window.location.replace("/");
            })
            .catch((err) => console.log("err"));
        })
        .catch((err) => console.log("THERE'S AN ERROR IN UPLOADING THE IMAGES", err));
    } else {
      axios
        .post("http://localhost:5000/reviews/", newReview)
        .then((res) => {
          console.log("Posted the review!");
          window.location.replace("/");
        })
        .catch((err) => console.log(err));
    }
  };

  const handleRating = (rate) => {
    setRating(rate);
    console.log(rate);
  };

  const PF = "http://localhost:5000/images/";
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
              {/* {review.image.length>0 && 
              <CarouselComponent photos={trip.photos}></CarouselComponent>
            }  */}

              {review.image.length>0 && review.image.map(image => {
                return (<img
                src={PF + image}
                className="reviewImage"
                alt={image}
              />);
              }) 
                }
              <div>{review.body}</div>
            </div>
          );
        })}

        {
          // Editing
        }
        <div className="singleReview">
          <div className="reviewTitle">Post you review</div>
          <form enctype='multipart/form-data' onSubmit={handleSubmit}>
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
              <input type="file" multiple='multiple' accept='image/*'onChange={handleImageUpload} /> 
            </div>
            {/* <div>The count of images is {images.length}</div> */}
            
            {
            images.map(file => {
              return (
              <div><img
                src={URL.createObjectURL(file)}
                className="reviewImage"
                alt=""
              />
              <button type="button"  onClick = {() => deleteImage(file)}>X</button>
              </div>)
              })
            }
            
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
