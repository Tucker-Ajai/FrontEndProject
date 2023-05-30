import { useState, useEffect } from "react";
import { listOfReviews } from "../utils/api";
import { Link } from "react-router-dom";

export default function ReviewContainer() {
  const [list, setList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    listOfReviews().then((response) => {
   setList(response)
      setIsLoading(false);
    });
    },[]);

  if (isLoading) {
    return <p>Page is Loading</p>;
  }

  return (
    <>
      Container
      <ul>
      {list.map((obj)=>{
        return <li key = {obj.review_id}>
            {obj.title}<br/>
            Reviewed by {obj.owner} on {obj.created_at}<br></br>
           Number of Comments {obj.comment_count}<br/>
            <img src = {obj.review_img_url}/><br/>
            <Link to={`/reviews/${obj.review_id}`}> Click here for more </Link><br/><br/>
        </li>
          
    })}
    </ul>
    </>
  );
}
