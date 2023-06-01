import { useContext, useState } from "react";
import { UserContext } from "../Context/userContext";
import { postComment } from "../utils/api";

export default function CommentForm({ review_id, setComments }) {
  const { user } = useContext(UserContext);
  const [addComment, setaddComment] = useState("");
  const [errored, setErrored] = useState("");
  const regex = /\w/g;

  function handleSumbit(event) {
    event.preventDefault();
    if (regex.test(addComment)) {
      setErrored(false);
      postComment(review_id, { username: user.username, body: addComment });

      setComments((currValue) => {
        return [
          {
            comment_id: currValue[0].comment_id + 1,
            author: user.username,
            body: addComment,
            created_at:new Date().toISOString(),
          },
          ...currValue,
        ];
      });

      setaddComment("");
    } else {
      setErrored(true);
    }
  }

  return (
    <>
      <form onSubmit={handleSumbit}>
        <textarea
          onChange={(event) => {
            setaddComment(event.target.value);
          }}
          value={addComment}
         id="commentbox"/>
        <br></br>
        <button>Submit Comment</button>
        <br></br>
        {errored ? <>Was unable to submit comment due to lack of content</> : <></>}
      </form>
      Comments section
    </>
  );
}
