import { useEffect, useState } from 'react'
import { getComments } from './api';
import moment from 'moment';

const Comments = ({review_id, setComments, comments}) => {
    const [loading, setLoading] = useState(true);
    const id = review_id
    useEffect(()=>{
        getComments(id).then((res)=>{
setComments(res.comments)


setLoading(false)
    })

    },[id])
 function getTimeAgo(e){
    var b = moment();
    var a = moment(e);
    return a.from(b)

    }


return  loading ? (
    <p>...Loading</p>
  ) : ( 
    
    comments.map((comment)=>{
return (
    <section key={comment.comment_id}>
        <ul>
    <li  className="comments__list">
<h4>by {comment.author} - {getTimeAgo(comment.created_at)} </h4>
<article className="comment_body">{comment.body}</article>
<h4>Vote Count: {comment.votes}</h4>
    </li> 
    </ul>
    </section>
)
  })

  
)
}

export default Comments;