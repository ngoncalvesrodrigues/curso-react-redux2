import * as api from "../../api/api";
import * as POST_TYPES from "./posts.types";
import { Post } from "../../models/Post";

export const fetchPostList = () => ({
  type: POST_TYPES.FETCH_POST_LIST, // 'FETCH_POST_LIST'
  payload: api.getPostList(), //transformacion
});

export const fetchPost = (id: string) => ({
  type: POST_TYPES.FETCH_POST,
  payload: api.getPost(id),
});

export const createPost = (post: Post) => ({
  type: POST_TYPES.CREATE_POST,
  payload: api.createPost(post),
});

export const setSelectedPost = (postObject: Post) => ({
  type: POST_TYPES.SET_SELECTED_POST,
  payload: postObject,
});
