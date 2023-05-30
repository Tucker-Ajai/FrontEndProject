import { useParams } from "react-router-dom";
import { getReview, getReviewsComments } from "../utils/api";
import { useEffect, useState } from "react";

export default function Review() {
  const { review_id } = useParams();
  const [review, setReview] = useState([]);
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getReview(review_id).then((response) => {
      setReview(response);
    });
    getReviewsComments(review_id).then((response) => {
      setComments(response);
    });
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return <p>Page is Loading</p>;
  }

  return (
    <main>
        <br/><br/><br/>
      Page for: {review.title}<br/>
      Designer: {review.designer}<br/>
      Category: {review.category}<br/><br/><br/>


{review.review_body}<br/><br/>
Posted by: {review.owner} at {review.created_at}<br/><br/>



    </main>
  );
}
// votes
// : 
// 1