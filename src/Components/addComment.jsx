import { useContext, useState } from "react";
import { UserContext } from "../Context/userContext";
import { postComment } from "../utils/api";

export default function PostComment({ review_id, setComments }) {
  const { user } = useContext(UserContext);
  const [addComment, setaddComment] = useState("");

  function handleSumbit(event) {
    event.preventDefault();
    postComment(review_id, { username: user.username, body: addComment });
    const addedComment = 1;

    setComments((currValue) => {
      return [
        {
          comment_id: 0,
          author: user.username,
          body: addComment,
          created_at: Date.now(),
        },
        ...currValue,
      ];
    });

    setaddComment("");
  }

  return (
    <>
      <form onSubmit={handleSumbit}>
        <textarea
          onChange={(event) => {
            setaddComment(event.target.value);
          }}
          value={addComment}
        />
        <br></br>
        <button>Submit Comment</button>
      </form>
      Comments section
    </>
  );
}
