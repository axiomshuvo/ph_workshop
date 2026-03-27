export default function SinglePost({ singlepost }) {
  const { title, body } = singlepost;
  return (
    <div>
      <h4>{title}</h4>
      <p>{body}</p>
    </div>
  );
}
