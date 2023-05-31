import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
      <Link to={`/reviews`}>Home Page</Link> <br />
      <Link to={`/reviews`}>Brief Reviews </Link>
    </nav>
  );
}
