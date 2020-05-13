import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPostList } from "../store/posts/posts.actions";
import { selectorFetchingPostList } from "../store/posts/posts.selectors";
import { SelectPost, DetailPost } from "../components/Posts";
import { setTitle } from "../store/header/header.actions";

const Posts = () => {
  const dispatch = useDispatch();
  // @ts-ignore
  const fetchingPostList = useSelector(selectorFetchingPostList);

  // equivalente al componentDidMount, porque el dispatch no va a cambiar
  useEffect(() => {
    dispatch(setTitle("Posts"));
    dispatch(fetchPostList());
  }, [dispatch]);

  return (
    <div>
      {fetchingPostList ? (
        <div>Cargando Lista de Posts (Spinner)</div>
      ) : (
        <>
          <SelectPost />
          <DetailPost />
        </>
      )}
    </div>
  );
};

export default Posts;
