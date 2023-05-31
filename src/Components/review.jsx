import { useParams } from "react-router-dom";
import { getReview, getReviewsComments } from "../utils/api";
import { useEffect, useState } from "react";

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
        });
        setIsLoading(false);
      });
  }, []);

 

  if (isLoading === true) {
    return <p>Page is Loading</p>;
  }
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
        <img src = {review.review_img_url} alt={`box art of ${review.title}`}/>
        <br />
        <br />
        {review.review_body}
        <br />
        <br />
        Posted by: {review.owner} at {review.created_at}
        <br />
        <br />
        {comments.length === 0 ? (
          "There are no Comments"
        ) : (
          <ul>
            Comments: <br /> <br />
            {comments.map((obj) => {
              return (
                <li key={obj.comment_id}>
                  {obj.body} <br />
                  Posted by: {obj.author} at {obj.created_at} <br /> <br />
                </li>
              );
            })}
          </ul>
        )}
      </main>
    );
  }