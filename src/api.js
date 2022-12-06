import axios from 'axios'
export const getReviews = ()=> {
    let path = "https://magnificent-hospital-gown-duck.cyclic.app/api/reviews"
    return axios.get(path).then((data)=>{
        return data.data;
    })
}