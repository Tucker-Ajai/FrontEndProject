import { useParams } from "react-router-dom";
import { getReview,  } from "../utils/api";
import { useEffect, useState } from "react";

export default function Review() {
  const [isLoading, setIsLoading] = useState(true);
  const { review_id } = useParams();
  const [review, setReview] = useState([]);

  useEffect(() => {
    getReview(review_id)
      .then((response) => {
        setReview(response);
      })
      .then(() => {
        setIsLoading(false);
      });
  }, []);

  if (isLoading === true) {
    return <p>Page is Loading</p>;
  } else {
    return (
      <main>
        <br />
        <br />
        <br />
        Page for: {review.title}
        <br />
        Designer: {review.designer}
        <br />
        Category: {review.category}
        <br />
        <br />
        <br />
        {review.review_body}
        <br />
        <br />
        Posted by: {review.owner} at {review.created_at}
        <br />
        <br />
      </main>
    );
  }
}

