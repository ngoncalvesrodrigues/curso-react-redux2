import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPostList, createPost } from "../store/posts/posts.actions";
import {
  selectorFetchingPostList,
  selectorCreatingPost,
} from "../store/posts/posts.selectors";
import { SelectPost, DetailPost } from "../components/Posts";
import { setTitle } from "../store/header/header.actions";
import { Post } from "../models/Post";

const Posts = () => {
  const dispatch = useDispatch();
  // @ts-ignore
  const fetchingPostList = useSelector(selectorFetchingPostList);
  const creatingPost = useSelector(selectorCreatingPost);

  // equivalente al componentDidMount, porque el dispatch no va a cambiar
  useEffect(() => {
    dispatch(setTitle("Posts"));
    dispatch(fetchPostList());
  }, [dispatch]);

  const postACrear: Post = {
    userId: 1,
    id: 900,
    title: "Mi nuevo post",
    body: "contenido de mi nuevo post",
  };

  const handleCreatePost = () => {
    dispatch(createPost(postACrear));
  };

  interface IStatusCreatePost {
    creating: string;
  }

  const StatusCreatePost = ({ creating }: IStatusCreatePost) => {
    return creating === "pending" ? (
      <div>Creando Post</div>
    ) : creating === "done" ? (
      <div>Post Creado exitosamente</div>
    ) : (
      <div>Error Creando Post</div>
    );
  };

  return (
    <div>
      {fetchingPostList ? (
        <div>Cargando Lista de Posts (Spinner)</div>
      ) : (
        <>
          <button
            onClick={handleCreatePost}
            disabled={creatingPost === "pending"}
          >
            Crear Un Post
          </button>
          {creatingPost && <StatusCreatePost creating={creatingPost} />}
          <SelectPost />
          <DetailPost />
        </>
      )}
    </div>
  );
};

export default Posts;
