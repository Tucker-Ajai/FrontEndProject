import { useState, useEffect } from "react";
import { listOfReviews } from "../utils/api";
import { Link } from "react-router-dom";
import { useLocation} from "react-router-dom";




export default function ReviewContainer() {
  const [list, setList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const {search} = useLocation()
  const [searched,setSearched]=useState()
  const params = search.replace("?","")
  
  useEffect(() => {
    listOfReviews(params).then((response) => {
   setList(response)
   setIsLoading(false);
    });
  },[searched]);
  
 
  if (isLoading) {
    return <p>Page is Loading</p>;
  }
  
  if(list.length === 0 && search){
    return(<>
    There are Currently no games matching that category</>)
  }
  
  return (
    <>
   container
   
      <ul>
      {list.map((obj)=>{

        return <li key = {obj.review_id}>
            {obj.title}<br/>
            Reviewed by {obj.owner} on {obj.created_at}<br></br>
           Number of Comments {obj.comment_count}<br/>
            <img src = {obj.review_img_url} alt={`box art of ${obj.title}`}/><br/>
            <Link to={`/reviews/${obj.review_id}`}> Click here for more </Link><br/><br/>
        </li>
          
    })}
    </ul>
    </>
  );
}
