import { useParams } from "react-router-dom";
import { getReview, getReviewsComments } from "../utils/api";
import { useEffect, useState } from "react";
import Comment from "./comments";
import VoteButton from "./voteButton";
import CommentForm from "./addComment";

export default function Review() {
  const { review_id } = useParams();
  const [review, setReview] = useState([]);
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getReview(review_id)
      .then((response) => {
        setReview(response);
      })
      .then(() => {
        getReviewsComments(review_id)
          .then((response) => {
            setComments(response);
          })
          .then(() => {
            setIsLoading(false);
          });
      });
  }, []);

  if (isLoading === true) {
    return <p>Page is Loading</p>;
  }
  if(review.msg){
    return(<>No matching review</>)
  }
  return (
    <main>
      Page for: {review.title}
      <br />
      Designer: {review.designer}
      <br />
      Category: {review.category}
      <br />
      <img src={review.review_img_url} alt={`box art of ${review.title}`} />
      <br />
      <br />
      {review.review_body}
      <br />
      <br />
      Posted by: {review.owner} at {review.created_at}
      <br />
      <br />
      <VoteButton review={review} />
<br></br>

<CommentForm review_id={review_id} setComments={setComments}/>

      <Comment review={review} comments={comments} />
    </main>
  );
}
