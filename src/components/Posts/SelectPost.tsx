import React from "react";
import { useSelector } from "react-redux";

export const SelectPost = () => {
  //@ts-ignore
  const listaDePosts = useSelector((state) => state.posts.postList);

  console.log("lista de post en componente Select Post: ", listaDePosts);
  return <div>Select Posts</div>;
};
