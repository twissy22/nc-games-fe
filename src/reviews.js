import { useEffect, useState } from "react";
import { getReviews, getReview } from "./api";
import {Link} from 'react-router-dom'

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getReviews().then((reviews) => {
      setReviews(reviews.reviews);
      setLoading(false);
    });
  }, []);

  return loading ? (
    <p>...Loading</p>
  ) : (
    <ul>
      {reviews.map((review) => {
        return (
          <li key={review.review_id} className="list">
            <section className="listing">
              <img src={review.review_img_url} className="pic"></img>
              <article className="text">
                <h3 className="reviewstitle">Title : {review.title}</h3>
                <Link to={`/reviews/${review.review_id}`}>
                <button
                  className="viewmoreinfo"
                  value={review.review_id}
                >
                  View Review
                </button></Link>
              </article>
            </section>
          </li>
        );
      })}
    </ul>
  );
};
export default Reviews;
