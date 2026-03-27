import { use } from "react";
import SinglePost from "./SinglePost";

export default function Posts({ allPostData }) {
  const postdata = use(allPostData);
  console.log(postdata);
  return postdata.map((singlepost) => (
    <SinglePost key={singlepost.id} singlepost={singlepost}></SinglePost>
  ));
}
