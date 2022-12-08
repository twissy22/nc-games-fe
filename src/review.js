import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getReview, patchVote } from "./api";
import Comments from "./comments";
import CommentForm from "./commentform"

const Review = () => {
  const [review, setReview] = useState({});
  const [comments, setComments] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const { review_id } = useParams();
  useEffect(() => {
    getReview(review_id).then((res) => {
      setReview(res.reviews);
      setLoading(false);
    });
  }, []);

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
  function handleVote(e){
    setError("")
    setReview((currReview)=>{
        return currReview.map((review)=>{
            return {...review, votes: +review.votes +1}
            })
          
        })
        patchVote(e).catch((err)=>{
            setError(err.message);
            setReview((currReview)=>{
                return currReview.map((review)=>{
                    return {...review, votes: +review.votes -1}
                    })
                  
                }) 

            
                
        })
  }

  return loading ? (
    <p>...Loading</p>
  ) : (
    <section className="singlereview">
      <h1 className="title"> {review[0].title}</h1>
      <article className="review_body">{review[0].review_body}</article>
      <h4>Designer: {review[0].designer}</h4>
      <h4>Owner: {review[0].owner}</h4>

      <h4>
        Votes:{" "}
        <button className="voteButton" onClick={()=>handleVote(review[0].review_id)}>
        
          <span aria-label="Votes for this review">{review[0].votes} Vote</span>
    
        </button>
        {error && <div className="errorbox">{error}</div>}
      </h4>

      <h4>Category: {review[0].category}</h4>
      <h4>Date Created: {formatDate(review[0].created_at)}</h4>
      <img src={review[0].review_img_url} className="photoreview"></img>
      <h2>Comments</h2>
      <CommentForm review_id={review[0].review_id} comments={comments} setComments = {setComments}/>
      <Comments review_id={review[0].review_id} comments={comments} setComments = {setComments}/>
    </section>
  );
};
export default Review;
