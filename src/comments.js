import { useEffect, useState } from 'react'
import { getComments } from './api';
import moment from 'moment';
import {deleteComment} from './api'
import { UserContext } from './user';
import { useContext } from 'react';


const Comments = ({review_id, setComments, comments}) => {
    const [loading, setLoading] = useState(true);
    const id = review_id
    const [sending,setsending] = useState(false)
    const user = useContext(UserContext)
    useEffect(()=>{
        
        getComments(id).then((res)=>{
setComments(res.comments)
;

setLoading(false)

    })

    },[id, comments])
 function getTimeAgo(e){
    var b = moment();
    var a = moment(e);
    return a.from(b)

    }
function deleteCom(comment){
    setsending(true);
    deleteComment(comment)
    setsending(false)
}

return  loading ? (
    <p>...Loading</p>
  ) : ( 
    
    comments.map((comment)=>{
return (
    <section key={comment.comment_id}>
        <ul>
    <li  className="comments__list">
<h4>by {comment.author} - {getTimeAgo(comment.created_at)}</h4>
<article className="comment_body">{comment.body}</article>
<h4>Vote Count: {comment.votes}</h4>
{comment.author === user.user.username ? <button disabled={sending===true} onClick={()=> deleteCom(comment.comment_id)}>delete comment</button> : null}
    </li> 
    </ul>
    </section>
)
  })

  
)
}

export default Comments;