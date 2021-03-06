import React from "react";
// import 'font-awesome/css/font-awesome.min.css'; //import in react app
export default function Rating(props) {
  const { rating, numReviews } = props;
  return (
    <div className="rating">
      {/* <div> */}
        <span>
          <i
            className={
              rating >= 1
                ? "fas fa-star"
                : rating >= 0.5
                ? "fas fa-star-half-alt"
                : "far fa-star"
            }
          ></i>
        </span>
        <span>
          <i
            className={
              rating >= 2
                ? "fas fa-star"
                : rating >= 1.5
                ? "fas fa-star-half-alt"
                : "far fa-star"
            }
          ></i>
        </span>
        <span>
          <i
            className={
              rating >= 3
                ? "fas fa-star"
                : rating >= 2.5
                ? "fas fa-star-half-alt"
                : "far fa-star"
            }
          ></i>
        </span>
        <span>
          <i
            className={
              rating >= 4
                ? "fas fa-star"
                : rating >= 3.5
                ? "fas fa-star-half-alt"
                : "far fa-star"
            }
          ></i>
        </span>
        <span>
          <i
            className={
              rating >= 5
                ? "fas fa-star"
                : rating >= 4.5
                ? "fas fa-star-half-alt"
                : "far fa-star"
            }
          ></i>
        </span>
      {/* </div> */}
      <span className="numReviews">
        <h6>{numReviews}{" "} reviews</h6>
      </span>
    </div>
  );
}
