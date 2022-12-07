import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getReview } from './api';
import Comments from './comments';


const Review = () => {
    const [review, setReview] = useState();
    const [loading, setLoading] = useState(true);
    const {review_id} = useParams();
    useEffect(()=>{
        getReview(review_id).then((res)=>{
        setReview(res.reviews)
        setLoading(false)
    })

    },[review_id])

 return loading ? (
    <p>...Loading</p>
  ) : (
    <section className='singlereview'>
     <h1 className='title'> {review[0].title}</h1>
    <article className="review_body">{review[0].review_body}</article> 
    <h4>Designer: {review[0].designer}</h4>
    <h4>Owner: {review[0].owner}</h4>
    <h4>Votes: {review[0].votes}</h4>
    <h4>Category: {review[0].category}</h4>
    <h4>Date Created: {review[0].created_at}</h4>
    <img src= { review[0].review_img_url} className="photoreview"></img>
    <Comments />
    </section>
 )

}
export default Review;