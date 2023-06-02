import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../Context/userContext";

export default function NavBar() {
  const {user,setUser} = useContext(UserContext)
  return (
    <nav>
      <Link to={`/`}>Home Page</Link> <br />
      <Link to={`/reviews`}>All Reviews </Link><br/>
      <aside id="UserInfo">
        {user.username}
      <img src = {user.avatar_url} width="50" alt = {`${user.username}'s chosen icon`} />
      </aside> 
    </nav>
  );
}
