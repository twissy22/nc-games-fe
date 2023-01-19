import axios from "axios";
const reviewsApi = axios.create({
  baseURL: "https://magnificent-hospital-gown-duck.cyclic.app/api",
});

export const getReviews = (category,query,order) => {
  let path = "/reviews";
if(query){
  path += query
}
if(order){
  path += `&order=${order}`
}
  return reviewsApi.get(path,{params:{category}}).then((data) => {
    return data.data;
  });
};
export const getReview = (e) => {
  let path = `/reviews/${e}`;
  return reviewsApi.get(path).then((data) => {
    return data.data;
  });
};
export const getComments = (e) => {
  let path = `/reviews/${e}/comments`;
  return reviewsApi.get(path).then((data) => {
    return data.data;
  });
};
export const patchVote = (e) => {
  const patchbody = {
    inc_vote: 1,
  };
  let path = `/reviews/${e}`;
  return reviewsApi.patch(path, patchbody).then((data) => {
    return data.data;
  });
};
export const postComment = (review_id, input, user) => {
  const postbody = 
    {
      author: user.user.username,
      body: input,
    }
  ;

  let path = `/reviews/${review_id}/comments`;
  return reviewsApi.post(path, postbody).then((data) => {
    return data.data;
  });
};

export const getCategories = ()=>
{
let path = "/categories";
return reviewsApi.get(path).then((data) => {
  return data.data;
});
}
export const deleteComment = (comment_id)=>
{
  let path = `/comments/${comment_id}`
return reviewsApi.delete(path).then((data)=>{
  console.log(data.data)
})
}
