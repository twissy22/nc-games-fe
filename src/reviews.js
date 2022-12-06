import { useEffect, useState} from "react";
import {getReviews} from "./api"
const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getReviews().then((reviews)=>{
            setReviews(reviews.reviews)
            setLoading(false)
        })
    },[]);

   return loading ? (<p>...Loading</p>) 
   : ( <ul>
        {reviews.map((review)=>{
            console.log(review)
        return(
<li key={review.review_id}className="list">
<section className="listing">
<img src={review.review_img_url} className="pic"></img>
<article classname="text">
<h3 className="reviewstitle">Title : {review.title}</h3>
<button className="viewmoreinfo">View Review</button>
</article>
</section>
</li>


        )}
         
        )}
 </ul>
 )
        }
export default Reviews;