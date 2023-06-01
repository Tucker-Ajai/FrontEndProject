import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../Context/userContext";

export default function NavBar() {
  const {user,setUser} = useContext(UserContext)
  return (
    <nav>
      <Link to={`/reviews`}>Home Page</Link> <br />
      <Link to={`/reviews`}>Brief Reviews </Link><br/>
      user =
      <img src = {user.avatar_url} width="50"/>
    </nav>
  );
}
