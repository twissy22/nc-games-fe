import { useEffect, useState } from "react";
import { getReviews, getReview } from "./api";
import {Link} from 'react-router-dom'
import { useParams } from "react-router-dom";
import Sortby from "./sortby"


const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { category } = useParams();
  const [loading, setLoading] = useState(true);
  const [order,setOrder] = useState("asc")
  const [query, setQuery] = useState("?sort_by=created_at");
  useEffect(() => {
    getReviews(category, query, order).then((reviews) => {
      setReviews(reviews.reviews);
      setLoading(false);
    });
  }, [category,query,order]);

  function formatDate(event) {
    const date1 = new Date(event);
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return date1.toLocaleDateString(undefined, options);
  }

  return loading ? (
    <p>...Loading</p>
  ) : (
    <ul>
      <article className="sortby">
      <h4>Sort by </h4><Sortby query={query} setQuery={setQuery}/>
      <p>Sorted {order}</p><button className="sortbutton" onClick={()=>setOrder("desc")}>Set Descending</button>
      <button className="sortbutton" onClick={()=>setOrder("asc")}>Set Ascending</button>
      </article>
      <h2 className="listing">Reviews</h2>
      {reviews.map((review) => {
        return (
          <li key={review.review_id} className="list">
            <section className="listing">
              <img src={review.review_img_url}alt={review.title} className="pic"></img>
              <article className="text">
                <h3 className="reviewstitle">Title : {review.title}</h3>
                <h3 className="reviewscreatedat">Date Review Posted: {formatDate(review.created_at)}</h3>
                <h3 className="reviewvotes">Review Votes: {review.votes}</h3>
                <h3 className="reviewcategory">Category: {review.category}</h3>
                <h3 className="reviewcommentcount">Number of Comments: {review.comment_count}</h3>
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
