import axios from "axios";

const server = axios.create({
  baseURL: "https://ajai-back-end-project.onrender.com/api",
});

export function listOfReviews(params) {
  let outer = {}
  if(params){
    outer.params = {params}
  }
 
  return server.get(`/reviews`, { params }).then((response) => {
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
      }
    });
}

export function voteUpdate(id, num) {
  return server
    .patch(`/reviews/${id}`, { inc_votes: num })
    .then((response) => {})
    .catch((err) => {});
}

export function postComment(id, post) {
  return server
    .post(`/reviews/${id}/comments`, post)
    .then((response) => {})
    .catch((err) => {});
}

export function getCategories() {
  return server.get(`/categories`).then((response) => {
    return response.data.categories;
  });
}
