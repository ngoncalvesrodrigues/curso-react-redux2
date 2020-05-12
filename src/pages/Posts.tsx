import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPostList } from "../store/actions/posts";
import { SelectPost, DetailPost } from "../components/Posts";

export const Posts = () => {
  const dispatch = useDispatch();
  // @ts-ignore
  const fetchingPostList = useSelector((state) => state.posts.fetchingPostList);

  useEffect(() => {
    dispatch(fetchPostList());
  }, []);

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
