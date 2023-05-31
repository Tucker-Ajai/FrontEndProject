import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useState } from "react";
import { voteUpdate } from "../utils/api";

export default function VoteButton({ review }) {
  const [liked, setLiked] = useState(0);
  const options = [<FavoriteBorderIcon />, <FavoriteIcon />];
  function handleClick() {
    if (liked === 0) {
      setLiked(1);
      review.votes++;
      voteUpdate(review.review_id, 1);
    }
    if (liked === 1) {
      setLiked(0);
      review.votes--;
      voteUpdate(review.review_id, -1);
    }
  }
  return (
    <>
      Likes: {review.votes}
      <button onClick={handleClick}> {options[liked]} </button>
    </>
  );
}
