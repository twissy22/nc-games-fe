import { useEffect, useState } from 'react'
import { postComment } from './api';
import { useContext } from 'react';
import { UserContext } from './user';

const CommentForm = ({review_id, setComments}) => {
    const [input, setInput] = useState('');
    const [sending,setsending] = useState(false)
    const user = useContext(UserContext)

   
    const handleChangeComment = (event) => {
    setInput(event.target.value)
  }
  const handleSubmitNewComment = (event) => {
    setsending(true);
    event.preventDefault();
    postComment(review_id, input, user).then((apicomment)=>{
        setsending(false)
        setInput('')
setComments((currComments)=>{
    const newComments = [...currComments];
    newComments.unshift(apicomment.comment[0])
    return newComments;
})
    })
    
}


    return(
    <form className='form' onSubmit={handleSubmitNewComment}>
    <textarea placeholder='add comment' className='textbox'
onChange={handleChangeComment}
value={input}>
</textarea>
    <button className='submitbutton'disabled={!input || sending===true}>submit</button>
  </form>
    )
}

export default CommentForm;