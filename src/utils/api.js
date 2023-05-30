import axios from "axios";

const server = axios.create({
    baseURL: "https://ajai-back-end-project.onrender.com/api",
  });

  export function listOfReviews(){
return server.get(`/reviews`).then((response)=>{
return response.data.review.rows

})

  }