export default function Comment({ review, comments }) {
  return (
    <>
      <br />
      {console.log(comments)}
      {comments.length === 0 ? (
        "There are no Comments"
      ) : (
        <ul>
          Comments: <br /> <br />
          {comments.map((obj) => {
            return (
              <li key={obj.comment_id}>
                {obj.body} <br />
                Posted by: {obj.author} at {obj.created_at} <br /> <br />
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
}
