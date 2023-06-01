import axios from "axios";

const server = axios.create({
  baseURL: "https://ajai-back-end-project.onrender.com/api",
});

export function listOfReviews() {
  return server.get(`/reviews`).then((response) => {
    return response.data.review.rows;
  });
}

export function getReview(id) {
  return server.get(`/reviews/${id}`).then((response) => {
    return response.data;
  });
}

export function getReviewsComments(id) {
  return server
    .get(`/reviews/${id}/comments`)
    .then((response) => {
      return response.data.reviewComments;
    })
    .catch((err) => {
      if (err.response.status === 404) {
        return [];
      } else {
        console.log(err);
      }
    });
}

export function voteUpdate(id, num) {
  return server.patch(`/reviews/${id}`, { inc_votes: num }).then((response) => {
    console.log(response);
  }).catch((err)=>{
console.log(err)
  })
}

export function postComment(id,post){
  return server.post(`/reviews/${id}/comments`, post).then((response)=>{
    console.log(response)
  }).catch((err)=>{
console.log(err)
  })
}
