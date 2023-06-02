import { useState, useEffect } from "react";
import { listOfReviews } from "../utils/api";
import { Link } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

export default function ReviewList() {
  const [list, setList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams()
  
  let queryParams = {}
  for (const [key, value] of searchParams.entries()) {
    queryParams[key] = value;
  } 
  useEffect(() => {

    listOfReviews(queryParams).then((response) => {
      setList(response);
      
     setIsLoading(false);
    });
  }, [searchParams]);
  
  if (isLoading) {
    return <p>Page is Loading</p>;
  }
  if (list.length === 0) {
    return <>There are Currently no games matching that category</>;
  }
  return (
    <>
      <ul>
        {list.map((obj) => {
          return (
            <li key={obj.review_id}>
              {obj.title}
              <br />
              Reviewed by {obj.owner} on {obj.created_at}
              <br></br>
              Number of Comments {obj.comment_count}
              <br />
              <img src={obj.review_img_url} alt={`box art of ${obj.title}`} />
              <br />
              <Link to={`/reviews/${obj.review_id}`}>
                Click here for more
              </Link>
              <br />
              <br />
            </li>
          );
        })}
      </ul>
    </>
  );
}
