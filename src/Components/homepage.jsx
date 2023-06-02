import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getCategories } from "../utils/api";



export default function Homepage() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCategories()
      .then((response) => {
        setCategories(response);
      })
      .then(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Page is currently loading</p>;
  }

  return (
    <>
      <br />
      Select one of the categories below to get started
      <ul>
        {categories.map((category, index) => {
          return (<div key = {index}>

                <button >
            <Link to={`/reviews?category=${category.slug}`}>
              <li>
                {category.slug}
                  <br />
               
              </li>
            </Link>
                </button><br></br>
                <details>
<summary>Description</summary>
        {category.description}
                </details>
          </div>
          );
        })}
      </ul>
    </>
  );
}
