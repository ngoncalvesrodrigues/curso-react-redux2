import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Post } from "../../models/Post";
import { fetchPost } from "../../store/posts/posts.actions";

export const SelectPost = () => {
  //@ts-ignore
  const listaDePosts: Post[] = useSelector((state) => state.posts.postList);
  const dispatch = useDispatch();

  const listaOptiones = listaDePosts.map(({ id, title }) => (
    <option key={id} value={id}>
      {title}
    </option>
  ));

  const handleSelectChange = (ev: React.SyntheticEvent<HTMLSelectElement>) => {
    const selectedPostId = ev.currentTarget.value;
    // const postObject = listaDePosts.find(
    //   (post) => post.id.toString() === selectedPostId
    // );
    // postObject && dispatch(setSelectedPost(postObject));
    dispatch(fetchPost(selectedPostId));
  };

  return (
    <div style={{ padding: "1rem" }}>
      <select onChange={handleSelectChange}>{listaOptiones}</select>
    </div>
  );
};
