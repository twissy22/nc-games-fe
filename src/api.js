import axios from 'axios'
const reviewsApi = axios.create({
    baseURL: "https://magnificent-hospital-gown-duck.cyclic.app/api"
})

export const getReviews = ()=> {
    let path = "/reviews"
    return reviewsApi.get(path).then((data)=>{
        return data.data;
    })
}
export const getReview = (e)=>{
    let path = `/reviews/${e}`
    return reviewsApi.get(path).then((data)=>{
        return data.data
    })
}