import { useLoaderData, useNavigate } from "react-router";

export default function SingleBlogPost() {
  const post = useLoaderData();
  const backToBlog = useNavigate();

  console.log(post);
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <button onClick={() => backToBlog(-1)}>Go Back</button>
    </div>
  );
}
